import { realisations, Realisation } from "@/data/realisations";
import { cities } from "@/data/cities";
import { City } from "@/types";

// normalise un nom de commune pour la correspondance (accents, apostrophes…)
function norm(name: string): string {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const cityByNorm = new Map(cities.map((c) => [norm(c.name), c]));

function distKm(a: City, b: City): number {
  if (!a.coordinates || !b.coordinates) return Infinity;
  const R = 6371;
  const dLat = ((b.coordinates.latitude - a.coordinates.latitude) * Math.PI) / 180;
  const dLon = ((b.coordinates.longitude - a.coordinates.longitude) * Math.PI) / 180;
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((a.coordinates.latitude * Math.PI) / 180) *
      Math.cos((b.coordinates.latitude * Math.PI) / 180) *
      Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

export type RealisationNearby = {
  realisation: Realisation;
  /** commune du chantier (si reconnue dans le référentiel) */
  city?: City;
  /** distance en km depuis la ville de la page (0 = même commune) */
  distanceKm: number;
};

/**
 * Réalisations dans la commune ou à proximité, triées par distance.
 * `maxKm` évite d'afficher un chantier trop lointain pour être crédible.
 */
export function getRealisationsNearCity(
  citySlug: string,
  limit = 3,
  maxKm = 25,
): RealisationNearby[] {
  const target = cities.find((c) => c.slug === citySlug);
  if (!target) return [];

  return realisations
    .map((realisation) => {
      const city = cityByNorm.get(norm(realisation.city));
      const distanceKm = city ? Math.round(distKm(target, city)) : Infinity;
      return { realisation, city, distanceKm };
    })
    .filter((r) => r.distanceKm <= maxKm)
    .sort((a, b) => a.distanceKm - b.distanceKm)
    .slice(0, limit);
}
