// scripts/enrich-cities.mjs
// Génère la liste des communes dans un rayon autour d'Artas puis les enrichit :
//   - geo.api.gouv.fr : population, cp, département, région, centre GPS, surface, INSEE
//   - Overpass (OSM)   : quartiers + monuments
//   - Géorisques (BRGM): risques naturels -> terrains / problèmes courants
// nearbyCities sont CALCULÉS par distance. Cache incrémental (résumable).
//
// Usage :
//   node scripts/enrich-cities.mjs                 # rayon/pop par défaut
//   node scripts/enrich-cities.mjs --radius=40 --minpop=500
//   node scripts/enrich-cities.mjs --force-osm     # ignore le cache OSM/risques

import { readFile, writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const CACHE_DIR = path.join(ROOT, "data", ".cache");
const OUT = path.join(ROOT, "data", "cities.enriched.json");
const SEED = path.join(ROOT, "data", "cities.seed.json");

// ---- config ---------------------------------------------------------------
const args = Object.fromEntries(
  process.argv.slice(2).map((a) => {
    const [k, v] = a.replace(/^--/, "").split("=");
    return [k, v ?? true];
  }),
);
const RADIUS_KM = Number(args.radius ?? 40);
const MIN_POP = Number(args.minpop ?? 500);
const FORCE_OSM = Boolean(args["force-osm"]);
const ARTAS = { lat: 45.5385, lon: 5.1676 }; // Artas (INSEE 38015)
const DEPTS = ["38", "69", "01", "73", "42", "26"];
const NEARBY_MAX = 6; // nb max de voisines
const NEARBY_KM = 12; // rayon voisines
const NEARBY_MIN = 4; // minimum garanti (relâche la distance)

const GEO = "https://geo.api.gouv.fr";
const OVERPASS = "https://overpass-api.de/api/interpreter";
const GEORISQUES = "https://www.georisques.gouv.fr/api/v1/gaspar/risques";

// ---- utils ----------------------------------------------------------------
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function slugify(input) {
  return String(input)
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function haversineKm(a, b) {
  const R = 6371;
  const dLat = ((b.lat - a.lat) * Math.PI) / 180;
  const dLon = ((b.lon - a.lon) * Math.PI) / 180;
  const s =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((a.lat * Math.PI) / 180) *
      Math.cos((b.lat * Math.PI) / 180) *
      Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(s), Math.sqrt(1 - s));
}

async function fetchJson(url, opts, { retries = 3, backoff = 1500 } = {}) {
  for (let i = 0; i <= retries; i++) {
    try {
      const res = await fetch(url, opts);
      const text = await res.text();
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      // Overpass renvoie parfois du HTML "server too busy" avec un 200
      if (text.trimStart().startsWith("<")) throw new Error("non-JSON (busy)");
      return JSON.parse(text);
    } catch (e) {
      if (i === retries) throw e;
      await sleep(backoff * (i + 1));
    }
  }
}

async function loadCache(name) {
  const p = path.join(CACHE_DIR, name);
  if (existsSync(p)) {
    try {
      return JSON.parse(await readFile(p, "utf8"));
    } catch {
      return {};
    }
  }
  return {};
}
const saveCache = (name, obj) =>
  writeFile(path.join(CACHE_DIR, name), JSON.stringify(obj), "utf8");

// ---- 1. liste des communes dans le rayon ----------------------------------
async function selectCommunes() {
  const all = [];
  for (const dep of DEPTS) {
    const url =
      `${GEO}/departements/${dep}/communes` +
      `?fields=nom,code,centre,population,surface,codesPostaux,departement,region&format=json&geometry=centre`;
    const list = await fetchJson(url);
    for (const c of list) {
      if (!c.centre || !c.population) continue;
      const [lon, lat] = c.centre.coordinates;
      const km = haversineKm(ARTAS, { lat, lon });
      if (km > RADIUS_KM || c.population < MIN_POP) continue;
      all.push({
        insee: c.code,
        name: c.nom,
        slug: slugify(c.nom),
        zipCode: (c.codesPostaux && c.codesPostaux[0]) || "",
        department: c.departement?.code || dep,
        departmentName: c.departement?.nom || "",
        region: c.region?.nom || "Auvergne-Rhône-Alpes",
        population: c.population,
        surface: c.surface ? Math.round(c.surface) : undefined,
        coordinates: { latitude: +lat.toFixed(5), longitude: +lon.toFixed(5) },
        distanceKm: +km.toFixed(1),
      });
    }
  }
  // désambiguïse les slugs en collision (rare) : suffixe -{dep}
  const bySlug = {};
  for (const c of all) (bySlug[c.slug] ??= []).push(c);
  for (const [slug, arr] of Object.entries(bySlug)) {
    if (arr.length > 1) for (const c of arr) c.slug = `${slug}-${c.department}`;
  }
  all.sort((a, b) => a.distanceKm - b.distanceKm);
  return all;
}

// ---- 2. voisines calculées (maillage bidirectionnel) -----------------------
const NEARBY_CAP = 8; // plafond après symétrisation

function computeNearby(communes) {
  // 2a. plus proches voisines par distance
  for (const c of communes) {
    const others = communes
      .filter((o) => o.slug !== c.slug)
      .map((o) => ({
        slug: o.slug,
        km: haversineKm(
          { lat: c.coordinates.latitude, lon: c.coordinates.longitude },
          { lat: o.coordinates.latitude, lon: o.coordinates.longitude },
        ),
      }))
      .sort((a, b) => a.km - b.km);
    let near = others.filter((o) => o.km <= NEARBY_KM).slice(0, NEARBY_MAX);
    if (near.length < NEARBY_MIN) near = others.slice(0, NEARBY_MIN);
    c._near = near; // [{slug, km}]
  }

  // 2b. symétrisation : si A -> B alors B -> A (liens bidirectionnels)
  const bySlug = Object.fromEntries(communes.map((c) => [c.slug, c]));
  const distTo = (c, slug) => {
    const o = bySlug[slug];
    return haversineKm(
      { lat: c.coordinates.latitude, lon: c.coordinates.longitude },
      { lat: o.coordinates.latitude, lon: o.coordinates.longitude },
    );
  };
  for (const c of communes) {
    for (const n of c._near) {
      const target = bySlug[n.slug];
      if (!target._near.some((x) => x.slug === c.slug)) {
        target._near.push({ slug: c.slug, km: n.km });
      }
    }
  }

  // 2c. dédoublonnage + tri par distance (sans plafond pour l'instant)
  for (const c of communes) {
    const seen = new Set();
    c.nearbyCities = c._near
      .filter((n) => n.slug !== c.slug && !seen.has(n.slug) && seen.add(n.slug))
      .sort((a, b) => distTo(c, a.slug) - distTo(c, b.slug))
      .map((n) => n.slug);
    delete c._near;
  }

  // 2d. plafond réciproque : si un lien saute d'un côté, il saute des deux
  //     (on retire d'abord les liens les plus lointains des villes sur-connectées)
  const stuck = new Set();
  const over = () =>
    communes.filter((c) => !stuck.has(c.slug) && c.nearbyCities.length > NEARBY_CAP);
  let guard = communes.length * NEARBY_CAP;
  while (over().length && guard-- > 0) {
    // ville la plus sur-connectée
    const c = over().sort((a, b) => b.nearbyCities.length - a.nearbyCities.length)[0];
    // candidat à retirer : le plus lointain dont le retrait ne fait pas
    // descendre le voisin sous le minimum
    const candidates = [...c.nearbyCities].sort((a, b) => distTo(c, b) - distTo(c, a));
    let removed = false;
    for (const slug of candidates) {
      const o = bySlug[slug];
      if (o.nearbyCities.length > NEARBY_MIN) {
        c.nearbyCities = c.nearbyCities.filter((s) => s !== slug);
        o.nearbyCities = o.nearbyCities.filter((s) => s !== c.slug);
        removed = true;
        break;
      }
    }
    if (!removed) stuck.add(c.slug); // irréductible sans casser un minimum : on tolère
  }
}

// ---- validation du maillage ------------------------------------------------
function validateMaillage(communes) {
  const slugs = new Set(communes.map((c) => c.slug));
  const problems = [];
  const dupes = {};
  for (const c of communes) {
    dupes[c.slug] = (dupes[c.slug] || 0) + 1;
    if (!c.nearbyCities?.length) problems.push(`${c.slug}: aucune voisine`);
    for (const n of c.nearbyCities || []) {
      if (n === c.slug) problems.push(`${c.slug}: self-link`);
      if (!slugs.has(n)) problems.push(`${c.slug}: voisine inexistante -> ${n}`);
      const back = communes.find((x) => x.slug === n);
      if (back && !back.nearbyCities.includes(c.slug))
        problems.push(`${c.slug} -> ${n} non réciproque`);
    }
  }
  for (const [s, n] of Object.entries(dupes)) if (n > 1) problems.push(`slug dupliqué: ${s} (${n})`);
  const avg = (
    communes.reduce((a, c) => a + (c.nearbyCities?.length || 0), 0) / communes.length
  ).toFixed(1);
  return { problems, avg };
}

// ---- 3. Overpass : quartiers + monuments (1 requête bbox globale) ----------
// Une requête par commune est trop lente (~5-15s x 352). À la place :
//   a. UNE requête bbox couvrant tout le rayon (nodes place/historic/tourism)
//   b. contours officiels des communes (geo.api.gouv.fr, 1 requête/département)
//   c. affectation exacte par point-dans-polygone
const PLACE_RE = /^(suburb|neighbourhood|quarter)$/;
const TOURISM_RE = /^(attraction|museum|artwork|viewpoint)$/;

function zoneBbox() {
  // bbox du cercle RADIUS_KM autour d'Artas (1° lat ≈ 111 km)
  const dLat = RADIUS_KM / 111;
  const dLon = RADIUS_KM / (111 * Math.cos((ARTAS.lat * Math.PI) / 180));
  return `${(ARTAS.lat - dLat).toFixed(4)},${(ARTAS.lon - dLon).toFixed(4)},${(ARTAS.lat + dLat).toFixed(4)},${(ARTAS.lon + dLon).toFixed(4)}`;
}

async function fetchOsmZone() {
  const bbox = zoneBbox();
  const q =
    `[out:json][timeout:90][bbox:${bbox}];` +
    `(node[place~"^(suburb|neighbourhood|quarter)$"];node[historic][name];node[tourism~"^(attraction|museum|artwork|viewpoint)$"][name];);` +
    `out body 60000;`;
  const data = await fetchJson(
    OVERPASS,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        // Overpass renvoie 406 sans User-Agent + Accept explicites
        "User-Agent": "dzmaconnerie-build/1.0 (contact: christophe.mabilon@gmail.com)",
        Accept: "application/json",
      },
      body: "data=" + encodeURIComponent(q),
    },
    { retries: 4, backoff: 5000 },
  );
  return (data.elements || []).filter((el) => el.tags?.name && el.lat && el.lon);
}

// contours GeoJSON de toutes les communes des départements couverts
async function fetchContours() {
  const contours = {}; // insee -> geometry (Polygon | MultiPolygon)
  for (const dep of DEPTS) {
    const url = `${GEO}/departements/${dep}/communes?format=geojson&geometry=contour`;
    const gj = await fetchJson(url, undefined, { retries: 3, backoff: 1500 });
    for (const f of gj.features || []) {
      contours[f.properties.code] = f.geometry;
    }
  }
  return contours;
}

// point-dans-polygone (even-odd, gère les trous), geometry GeoJSON
function pointInGeometry(lon, lat, geometry) {
  const inRing = (ring) => {
    let inside = false;
    for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
      const [xi, yi] = ring[i];
      const [xj, yj] = ring[j];
      if (yi > lat !== yj > lat && lon < ((xj - xi) * (lat - yi)) / (yj - yi) + xi)
        inside = !inside;
    }
    return inside;
  };
  const inPolygon = (rings) => {
    let count = 0;
    for (const ring of rings) if (inRing(ring)) count++;
    return count % 2 === 1; // outer - trous
  };
  if (geometry.type === "Polygon") return inPolygon(geometry.coordinates);
  if (geometry.type === "MultiPolygon")
    return geometry.coordinates.some((p) => inPolygon(p));
  return false;
}

// bbox rapide par géométrie pour pré-filtrer
function geometryBbox(geometry) {
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  const scan = (rings) => {
    for (const ring of rings)
      for (const [x, y] of ring) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
  };
  if (geometry.type === "Polygon") scan(geometry.coordinates);
  else if (geometry.type === "MultiPolygon") for (const p of geometry.coordinates) scan(p);
  return { minX, minY, maxX, maxY };
}

// affecte chaque élément OSM à sa commune (exact), retourne insee -> {neighborhoods, landmarks}
function assignOsmElements(elements, communes, contours) {
  const geoms = communes
    .filter((c) => contours[c.insee])
    .map((c) => ({
      insee: c.insee,
      geometry: contours[c.insee],
      bbox: geometryBbox(contours[c.insee]),
    }));

  // priorité d'affichage des monuments : patrimoine bâti > mémoriaux > œuvres/attractions
  const landmarkPriority = (t) => {
    if (/^(castle|church|chapel|monastery|manor|fort|ruins|tower|city_gate|citywalls|aqueduct)$/.test(t.historic || "")) return 0;
    if (t.historic === "monument" || t.tourism === "museum") return 1;
    if (t.historic) return 2;
    return 3; // tourism attraction/artwork/viewpoint
  };

  const byInsee = {};
  for (const el of elements) {
    const { lon, lat } = el;
    for (const g of geoms) {
      if (lon < g.bbox.minX || lon > g.bbox.maxX || lat < g.bbox.minY || lat > g.bbox.maxY)
        continue;
      if (!pointInGeometry(lon, lat, g.geometry)) continue;
      const t = el.tags;
      const bucket = (byInsee[g.insee] ??= { neighborhoods: [], landmarks: [] });
      if (t.place && PLACE_RE.test(t.place)) bucket.neighborhoods.push(t.name);
      else if (t.historic || (t.tourism && TOURISM_RE.test(t.tourism)))
        bucket.landmarks.push({ name: t.name, prio: landmarkPriority(t) });
      break; // une commune par point
    }
  }
  for (const v of Object.values(byInsee)) {
    v.neighborhoods = [...new Set(v.neighborhoods)].slice(0, 6);
    v.landmarks = [
      ...new Set(v.landmarks.sort((a, b) => a.prio - b.prio).map((l) => l.name)),
    ].slice(0, 6);
  }
  return byInsee;
}

// ---- 4. Géorisques ---------------------------------------------------------
async function fetchRisks(insee) {
  const data = await fetchJson(`${GEORISQUES}?code_insee=${insee}`, undefined, {
    retries: 3,
    backoff: 1200,
  });
  const row = data?.data?.[0];
  if (!row?.risques_detail) return [];
  return [...new Set(row.risques_detail.map((r) => r.libelle_risque_long))];
}

// ---- main ------------------------------------------------------------------
async function main() {
  await mkdir(CACHE_DIR, { recursive: true });

  // overrides curatés (neighborhoods/landmarks écrits à la main pour ~106 villes)
  let overrides = {};
  if (existsSync(SEED)) {
    const seed = JSON.parse(await readFile(SEED, "utf8"));
    for (const s of seed) if (s.fallback) overrides[s.slug] = s.fallback;
  }

  console.log(`▶ Sélection communes ≤ ${RADIUS_KM} km, pop ≥ ${MIN_POP}…`);
  const communes = await selectCommunes();
  console.log(`  ${communes.length} communes retenues.`);
  computeNearby(communes);

  // --- OSM : une passe globale (bbox) + affectation par contours ------------
  // Le cache conserve les éléments bruts ; l'affectation est recalculée à
  // chaque run (gratuit, et bénéficie des évolutions de tri/priorité).
  let zoneCache = FORCE_OSM ? null : await loadCache("osm-zone.json");
  if (!zoneCache?.elements || zoneCache.radius !== RADIUS_KM) {
    console.log(`▶ Overpass : requête bbox globale (rayon ${RADIUS_KM} km)…`);
    const elements = await fetchOsmZone();
    console.log(`  ${elements.length} éléments OSM récupérés.`);
    zoneCache = { radius: RADIUS_KM, elements };
    await saveCache("osm-zone.json", zoneCache);
  } else {
    console.log(`▶ OSM : cache zone réutilisé (${zoneCache.elements.length} éléments).`);
  }
  console.log(`▶ Contours communes (geo.api.gouv.fr, ${DEPTS.length} départements)…`);
  const contours = await fetchContours();
  const osmZone = { byInsee: assignOsmElements(zoneCache.elements, communes, contours) };

  // --- Géorisques : par commune, avec cache ----------------------------------
  const riskCache = await loadCache("risks.json");
  let fetched = 0;
  for (const c of communes) {
    if (!(c.insee in riskCache)) {
      try {
        riskCache[c.insee] = await fetchRisks(c.insee);
      } catch {
        riskCache[c.insee] = [];
      }
      fetched++;
      if (fetched % 20 === 0) {
        await saveCache("risks.json", riskCache);
        console.log(`  … risques ${fetched}`);
      }
      await sleep(150);
    }
  }
  await saveCache("risks.json", riskCache);

  // --- fusion ----------------------------------------------------------------
  for (const c of communes) {
    const osm = osmZone.byInsee[c.insee] || {};
    const ov = overrides[c.slug] || {};
    c.neighborhoods = osm.neighborhoods?.length ? osm.neighborhoods : ov.neighborhoods || [];
    c.landmarks = osm.landmarks?.length ? osm.landmarks : ov.landmarks || [];
    c.risks = riskCache[c.insee] || [];
    c.featured = c.population >= 10000;
  }

  await writeFile(OUT, JSON.stringify(communes, null, 2) + "\n", "utf8");

  const noHood = communes.filter((c) => !c.neighborhoods.length).length;
  const noLm = communes.filter((c) => !c.landmarks.length).length;
  const osmOk = communes.filter((c) => osmZone.byInsee[c.insee]?.neighborhoods?.length).length;
  console.log(`\n✅ ${path.relative(ROOT, OUT)} — ${communes.length} communes`);
  console.log(`   quartiers réels OSM: ${osmOk} | sans quartier: ${noHood} | sans monument: ${noLm}`);
  console.log(`   featured (pop≥10000): ${communes.filter((c) => c.featured).length}`);

  const { problems, avg } = validateMaillage(communes);
  console.log(`\n🔗 Maillage : ${avg} voisines/ville en moyenne`);
  if (problems.length) {
    console.log(`   ⚠️  ${problems.length} problème(s) :`);
    for (const p of problems.slice(0, 30)) console.log(`      ${p}`);
    if (problems.length > 30) console.log(`      … +${problems.length - 30}`);
  } else {
    console.log(`   ✅ Maillage parfait : liens bidirectionnels, aucun lien mort, aucun self-link.`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
