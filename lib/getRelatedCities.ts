import { cities } from "@/data/cities";
import { City } from "@/types";

export function getRelatedCities(
  currentCitySlug?: string,
  limit: number = 10
): City[] {

  if (!currentCitySlug) {
    return cities.slice(0, limit);
  }

  const currentCity = cities.find(
    (city) => city.slug === currentCitySlug
  );

  if (!currentCity) {
    return cities.slice(0, limit);
  }

  // nearbyCities prioritaires
  const nearby = cities.filter((city) =>
    currentCity.nearbyCities?.includes(city.name)
  );

  // villes même département
  const sameDepartment = cities.filter(
    (city) =>
      city.department === currentCity.department &&
      city.slug !== currentCity.slug &&
      !nearby.some((n) => n.slug === city.slug)
  );

  const combined = [...nearby, ...sameDepartment];
  const seen = new Set<string>();
  const unique = combined.filter((city) => {
    if (seen.has(city.slug)) return false;
    seen.add(city.slug);
    return true;
  });
  return unique.slice(0, limit);
}