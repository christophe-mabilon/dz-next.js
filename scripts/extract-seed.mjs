// scripts/extract-seed.mjs
// One-shot : extrait un seed minimal depuis le data/cities.ts actuel.
// Le seed devient la seule source maintenue à la main.
// Usage : node scripts/extract-seed.mjs

import { readFile, writeFile, mkdir } from "node:fs/promises";
import { pathToFileURL, fileURLToPath } from "node:url";
import path from "node:path";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const CITIES_TS = path.join(ROOT, "data", "cities.ts");
const CACHE_DIR = path.join(ROOT, "data", ".cache");
const SEED_JSON = path.join(ROOT, "data", "cities.seed.json");

/** Slugifie un nom de commune selon la convention du projet (accents retirés, non-alphanum -> "-"). */
function slugify(input) {
  return String(input)
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "") // retire les diacritiques
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Transforme cities.ts en module ESM évaluable (les objets sont des littéraux purs). */
async function loadCurrentCities() {
  let src = await readFile(CITIES_TS, "utf8");
  // retire l'import de type
  src = src.replace(/^import\s+\{[^}]*\}\s+from\s+["']@\/types["'];?\s*/m, "");
  // coupe les helpers exportés en fin de fichier
  const cut = src.indexOf("export const getCityBySlug");
  if (cut !== -1) src = src.slice(0, cut);
  // retire l'annotation de type
  src = src.replace(/export const cities\s*:\s*City\[\]\s*=/, "export const cities =");

  await mkdir(CACHE_DIR, { recursive: true });
  const tmp = path.join(CACHE_DIR, "_cities_raw.mjs");
  await writeFile(tmp, src, "utf8");
  const mod = await import(pathToFileURL(tmp).href + `?t=${Date.now()}`);
  return mod.cities;
}

function run() {
  return (async () => {
    const cities = await loadCurrentCities();
    const slugs = new Set(cities.map((c) => c.slug));

    const seed = [];
    const brokenLinks = [];

    for (const c of cities) {
      // normalise nearbyCities en slugs (certaines entrées étaient des noms d'affichage)
      // puis ne garde que ceux qui existent réellement dans le dataset
      const seenNearby = new Set();
      const nearby = [];
      for (const raw of c.nearbyCities || []) {
        const s = slugify(raw);
        if (seenNearby.has(s)) continue;
        seenNearby.add(s);
        if (slugs.has(s)) {
          nearby.push(s);
        } else {
          brokenLinks.push({ city: c.slug, raw, slug: s });
        }
      }

      seed.push({
        slug: c.slug,
        name: c.name,
        zipCode: c.zipCode,
        ...(c.featured ? { featured: true } : {}),
        nearbyCities: nearby,
        // fallbacks curatés utilisés seulement si l'API ne renvoie rien
        fallback: {
          ...(c.neighborhoods?.length ? { neighborhoods: c.neighborhoods } : {}),
          ...(c.landmarks?.length ? { landmarks: c.landmarks } : {}),
        },
      });
    }

    await writeFile(SEED_JSON, JSON.stringify(seed, null, 2) + "\n", "utf8");

    console.log(`✅ Seed écrit : ${path.relative(ROOT, SEED_JSON)} (${seed.length} villes)`);
    if (brokenLinks.length) {
      console.log(`\n⚠️  nearbyCities vers des communes absentes du dataset (${brokenLinks.length}) :`);
      for (const b of brokenLinks) console.log(`   ${b.city} → "${b.raw}" (slug: ${b.slug})`);
    } else {
      console.log("✅ Tous les liens nearbyCities pointent vers des villes existantes.");
    }
  })();
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
