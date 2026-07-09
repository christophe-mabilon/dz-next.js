// scripts/build-cities.mjs
// Fusionne data/cities.enriched.json + template métier -> data/cities.ts (généré).
// Ne PAS éditer data/cities.ts à la main : relancer `npm run cities:build`.
//
// Usage : node scripts/build-cities.mjs

import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import * as craft from "../data/craft/maconnerie.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const ENRICHED = path.join(ROOT, "data", "cities.enriched.json");
const OUT = path.join(ROOT, "data", "cities.ts");

function buildCity(c) {
  const { terrainTypes, commonIssues } = craft.terrainFromRisks(c.risks);
  // on injecte terrain/issues dans l'objet avant de générer les textes qui s'en servent
  const enriched = { ...c, terrainTypes, commonIssues };

  return {
    id: c.insee,
    insee: c.insee,
    slug: c.slug,
    name: c.name,
    zipCode: c.zipCode,
    region: c.region,
    department: c.department,
    featured: !!c.featured,
    population: c.population,
    surface: c.surface,
    coordinates: c.coordinates,
    description: craft.description(enriched),
    introduction: craft.introduction(enriched),
    keywords: craft.keywords(enriched),
    seoVariations: craft.seoVariations,
    nearbyCities: c.nearbyCities || [],
    neighborhoods: c.neighborhoods || [],
    landmarks: c.landmarks || [],
    terrainTypes,
    commonProjects: craft.commonProjects,
    commonIssues,
    architectureStyles: craft.architectureStyles,
    faq: craft.faq(enriched),
  };
}

async function main() {
  const communes = JSON.parse(await readFile(ENRICHED, "utf8"));
  const cities = communes.map(buildCity);

  const header = `// ⚠️ FICHIER GÉNÉRÉ — NE PAS ÉDITER À LA MAIN.
// Source : data/cities.enriched.json (via scripts/enrich-cities.mjs)
// Régénérer : npm run cities:build
import { City } from "@/types";

export const cities: City[] = ${JSON.stringify(cities, null, 2)};

export const getCityBySlug = (slug: string): City | undefined =>
  cities.find((c) => c.slug === slug);

export const getCityById = (id: string): City | undefined =>
  cities.find((c) => c.id === id);

export const getCitySlugs = (): string[] => cities.map((c) => c.slug);
`;

  await writeFile(OUT, header, "utf8");
  console.log(`✅ ${path.relative(ROOT, OUT)} généré — ${cities.length} villes.`);
  const withHood = cities.filter((c) => c.neighborhoods.length).length;
  console.log(`   avec quartiers: ${withHood}/${cities.length} | featured: ${cities.filter((c) => c.featured).length}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
