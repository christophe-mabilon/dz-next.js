/**
 * Récupère la note Google et les avis récents via l'API officielle
 * Google Places (Place Details) et écrit data/reviews-live.json.
 * Les JSON-LD (aggregateRating, Review) lisent ce fichier : ils sont donc
 * à jour à chaque exécution + build.
 *
 * Prérequis (variables d'environnement, ex. dans .env.local) :
 *   GOOGLE_MAPS_API_KEY  clé API Google Cloud avec "Places API" activée
 *   GOOGLE_PLACE_ID      Place ID de l'établissement
 *                        (trouvable sur https://developers.google.com/maps/documentation/places/web-service/place-id)
 *
 * Usage :
 *   npm run reviews:fetch          # met à jour data/reviews-live.json
 *
 * En production (VPS), planifier par exemple chaque nuit :
 *   0 3 * * * cd /var/www/site && npm run reviews:fetch && npm run build && pm2 reload site
 *
 * Limite connue de l'API officielle : Google ne renvoie que les
 * 5 avis « les plus pertinents » — mais la note moyenne et le NOMBRE TOTAL
 * d'avis sont exacts et complets, ce qui est l'essentiel pour le SEO.
 */
import { writeFile, readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const OUT = path.join(ROOT, "data", "reviews-live.json");

// charge .env.local si présent (sans dépendance)
const envFile = path.join(ROOT, ".env.local");
if (existsSync(envFile)) {
  const raw = await readFile(envFile, "utf8");
  for (const line of raw.split("\n")) {
    const m = line.match(/^\s*([A-Z_][A-Z0-9_]*)\s*=\s*"?([^"\r\n]*)"?\s*$/);
    if (m && !(m[1] in process.env)) process.env[m[1]] = m[2];
  }
}

const KEY = process.env.GOOGLE_MAPS_API_KEY;
const PLACE_ID = process.env.GOOGLE_PLACE_ID;

if (!KEY || !PLACE_ID) {
  console.log(
    "⚠️  GOOGLE_MAPS_API_KEY ou GOOGLE_PLACE_ID absents — reviews-live.json inchangé.\n" +
      "   Le site utilise alors les avis manuels de data/reviews.ts (aucune erreur).",
  );
  process.exit(0);
}

// ---- 1. Places API (New) — celle que Google active par défaut aujourd'hui
async function fetchNew() {
  const res = await fetch(
    `https://places.googleapis.com/v1/places/${encodeURIComponent(PLACE_ID)}?languageCode=fr`,
    {
      headers: {
        "X-Goog-Api-Key": KEY,
        "X-Goog-FieldMask": "rating,userRatingCount,reviews",
      },
    },
  );
  const data = await res.json();
  if (!res.ok) throw new Error(data.error?.message ?? `HTTP ${res.status}`);
  return {
    ratingValue: data.rating ?? null,
    reviewCount: data.userRatingCount ?? null,
    reviews: (data.reviews ?? []).map((rev) => ({
      author: rev.authorAttribution?.displayName ?? "Client Google",
      rating: rev.rating,
      text: rev.text?.text ?? "",
      relativeDate: rev.relativePublishTimeDescription,
      source: "Google",
    })),
  };
}

// ---- 2. Places API historique (repli)
async function fetchLegacy() {
  const url =
    `https://maps.googleapis.com/maps/api/place/details/json` +
    `?place_id=${encodeURIComponent(PLACE_ID)}` +
    `&fields=rating,user_ratings_total,reviews` +
    `&reviews_no_translations=true&language=fr&key=${KEY}`;
  const res = await fetch(url);
  const data = await res.json();
  if (data.status !== "OK")
    throw new Error(`${data.status} ${data.error_message ?? ""}`);
  const r = data.result;
  return {
    ratingValue: r.rating ?? null,
    reviewCount: r.user_ratings_total ?? null,
    reviews: (r.reviews ?? []).map((rev) => ({
      author: rev.author_name,
      rating: rev.rating,
      text: rev.text,
      relativeDate: rev.relative_time_description,
      source: "Google",
    })),
  };
}

let result;
try {
  result = await fetchNew();
  console.log("→ Places API (New)");
} catch (eNew) {
  console.log(`→ Places API (New) indisponible (${eNew.message}), essai API historique…`);
  try {
    result = await fetchLegacy();
    console.log("→ Places API (historique)");
  } catch (eLegacy) {
    console.error(`❌ Les deux API ont échoué : ${eLegacy.message}`);
    process.exit(1);
  }
}

const out = {
  fetchedAt: new Date().toISOString(),
  ...result,
};

await writeFile(OUT, JSON.stringify(out, null, 2) + "\n");
console.log(
  `✅ data/reviews-live.json — note ${out.ratingValue}/5, ${out.reviewCount} avis, ${out.reviews.length} avis détaillés.`,
);
