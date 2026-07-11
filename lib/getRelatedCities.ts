import { cities } from "@/data/cities";
import { City } from "@/types";

// distance haversine en km entre deux communes (Infinity si coordonnées absentes)
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

/**
 * Communes voisines d'une ville : d'abord le maillage officiel
 * (nearbyCities, bidirectionnel), complété par les communes les plus
 * PROCHES GÉOGRAPHIQUEMENT si on demande plus que le maillage n'en contient.
 */
export function getRelatedCities(
  currentCitySlug?: string,
  limit: number = 10,
): City[] {
  if (!currentCitySlug) {
    return cities.slice(0, limit);
  }

  const currentCity = cities.find((city) => city.slug === currentCitySlug);

  if (!currentCity) {
    return cities.slice(0, limit);
  }

  // maillage prioritaire, dans l'ordre du maillage (déjà trié par distance)
  const nearbySlugs = currentCity.nearbyCities ?? [];
  const bySlug = new Map(cities.map((c) => [c.slug, c]));
  const nearby = nearbySlugs
    .map((slug) => bySlug.get(slug))
    .filter((c): c is City => Boolean(c));

  if (nearby.length >= limit) return nearby.slice(0, limit);

  // complément : les communes restantes les plus proches à vol d'oiseau
  const taken = new Set([currentCity.slug, ...nearby.map((c) => c.slug)]);
  const filler = cities
    .filter((c) => !taken.has(c.slug))
    .sort((a, b) => distKm(currentCity, a) - distKm(currentCity, b));

  return [...nearby, ...filler].slice(0, limit);
}
