import { notFound } from "next/navigation";
import Link from "next/link";
import { cities, getCityBySlug } from "@/data/cities";
import { services } from "@/data/services";

interface CityPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return cities.map((city) => ({
    slug: city.slug,
  }));
}

export default async function CityPage(props: CityPageProps) {
  const { slug } = await props.params;
  const city = getCityBySlug(slug);

  if (!city) {
    notFound();
  }
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `DZ Maçonnerie - ${city.name}`,
    description: `Expert maçon à ${city.name}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "130 sentier du taillis",
      addressLocality: city.name,
      postalCode: city.zipCode,
      addressCountry: "FR",
    },
    areaServed: city.name,
  };
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Header */}
      <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-2">Maçon à {city.name}</h1>
          <p className="text-teal-100">
            {city.zipCode} - {city.region}
          </p>
        </div>
      </div>

      {/* Services */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-8">Services à {city.name}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}/${city.slug}`}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-semibold mb-2">{service.name}</h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-teal-600 text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Besoin d'un devis ?</h2>
        <a
          href="tel:0688144257"
          className="inline-block bg-white text-teal-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
        >
          Appeler maintenant
        </a>
      </div>
    </div>
  );
}
