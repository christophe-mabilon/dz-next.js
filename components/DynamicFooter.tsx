import Link from "next/link";
import { getRelatedCities } from "@/lib/getRelatedCities";

interface DynamicFooterProps {
  currentCitySlug: string;
  /** si fourni, les liens pointent vers la même page service des villes voisines */
  serviceSlug?: string;
  serviceName?: string;
}

// anchors variés pour éviter 10 fois le même texte de lien (sur-optimisation)
const CITY_ANCHORS = [
  (n: string) => `Maçon ${n}`,
  (n: string) => `Maçonnerie ${n}`,
  (n: string) => `Travaux de maçonnerie à ${n}`,
  (n: string) => `Artisan maçon ${n}`,
  (n: string) => `Entreprise de maçonnerie ${n}`,
];

export function DynamicFooter({
  currentCitySlug,
  serviceSlug,
  serviceName,
}: DynamicFooterProps) {
  const relatedCities = getRelatedCities(currentCitySlug, 10);

  if (!relatedCities.length) {
    return null;
  }

  const href = (slug: string) =>
    serviceSlug ? `/services/${serviceSlug}/${slug}` : `/villes/${slug}`;
  const anchor = (name: string, i: number) =>
    serviceSlug && serviceName
      ? `${serviceName} ${name}`
      : CITY_ANCHORS[i % CITY_ANCHORS.length](name);

  return (
    <section className="bg-gray-50 border-t border-gray-200">
      <div className="px-3 mx-auto py-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          {serviceName
            ? `${serviceName} dans les communes voisines`
            : "Nos interventions dans les communes voisines"}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {relatedCities.map((city, i) => (
            <Link
              key={city.slug}
              href={href(city.slug)}
              className="text-primary-600 hover:text-primary-700 hover:underline transition-colors"
            >
              {anchor(city.name, i)}
            </Link>
          ))}
        </div>

        {serviceSlug && (
          <p className="mt-6 text-sm text-gray-600">
            <Link
              href={`/villes/${currentCitySlug}`}
              className="text-primary-600 hover:text-primary-700 hover:underline"
            >
              Voir tous nos services dans cette commune →
            </Link>
          </p>
        )}
      </div>
    </section>
  );
}
