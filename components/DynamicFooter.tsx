import Link from "next/link";
import { getRelatedCities } from "@/lib/getRelatedCities";

interface DynamicFooterProps {
  currentCitySlug: string;
}

export function DynamicFooter({ currentCitySlug }: DynamicFooterProps) {
  const relatedCities = getRelatedCities(currentCitySlug, 10);

  if (!relatedCities.length) {
    return null;
  }

  return (
    <section className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto py-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Nos interventions autour de cette ville
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {relatedCities.map((city) => (
            <Link
              key={city.slug}
              href={`/villes/${city.slug}`}
              className="text-primary-600 hover:text-primary-700 hover:underline transition-colors"
            >
              Maçon {city.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
