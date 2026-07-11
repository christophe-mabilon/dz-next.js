import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { cities, getCityBySlug } from "@/data/cities";
import { services } from "@/data/services";
import { getRelatedCities } from "@/lib/getRelatedCities";
import { getRealisationsNearCity } from "@/lib/realisationLinks";
import { formatPopulation, deVille, formatPhone } from "@/lib/format";
import Image from "next/image";
import HeroSection from "@/components/sections/hero/HeroSection";
import {
  generateMetadata as generatePageMetadata,
  generateFAQSchema,
  generateBreadcrumbSchema,
  generateCitySchema,
} from "@/lib/seo";
import { siteConfig } from "@/data/config";

const { business } = siteConfig;

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

export async function generateMetadata(
  props: CityPageProps,
): Promise<Metadata> {
  const { slug } = await props.params;
  const city = getCityBySlug(slug);

  if (!city) {
    return {};
  }

  return generatePageMetadata(
    `Maçonnerie & Terrassement à ${city.name} (${city.zipCode}) | DZ Maçonnerie`,
    city.description,
    `/villes/${city.slug}`,
    `${siteConfig.siteUrl}/images/og-image.jpg`,
  );
}

export default async function CityPage(props: CityPageProps) {
  const { slug } = await props.params;
  const city = getCityBySlug(slug);

  if (!city) {
    notFound();
  }

  const nearby = getRelatedCities(city.slug, 8);
  const population = formatPopulation(city.population);
  const phone = formatPhone(business.phone);
  const cityUrl = `${siteConfig.siteUrl}/villes/${city.slug}`;

  const breadcrumbs = [
    { name: "Accueil", url: "/" },
    { name: "Villes", url: "/villes" },
    { name: city.name, url: `/villes/${city.slug}` },
  ];

  return (
    <>
      {/* Schema.org (LocalBusiness global déjà injecté par le layout) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateCitySchema(city.name, cityUrl)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)),
        }}
      />
      {city.faq && city.faq.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateFAQSchema(city.faq)),
          }}
        />
      )}

      {/* HERO */}
      <HeroSection
        badge={`${city.zipCode} • ${city.region}`}
        title="Maçonnerie à"
        highlight={city.name}
        description={city.introduction || city.description}
        image="/images/realisations/artisan-macon-bourgoin-jallieu-terrasse-gres-cerame-dz-maconnerie-terrassement.webp"
        imageAlt={`Maçonnerie à ${city.name}`}
        primaryButtonText="Demander un devis"
        primaryButtonHref="/contact"
        secondaryButtonText={phone}
        secondaryButtonHref="/contact"
        cards={[
          {
            icon: "hammer",
            title: "Maçonnerie locale",
            description: `Votre artisan maçon à ${city.name}.`,
          },
          {
            icon: "shield",
            title: "Garantie décennale",
            description: "Travaux assurés et durables.",
          },
          {
            icon: "star",
            title: "Devis gratuit",
            description: "Réponse rapide sous 24h.",
          },
        ]}
      />

      {/* BREADCRUMBS */}
      <nav
        aria-label="Fil d'Ariane"
        className="border-b border-gray-100 bg-gray-50 py-3"
      >
        <div className="mx-auto lg:px-8">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-500">
            <li>
              <Link
                href="/"
                className="transition hover:text-primary-600 hover:underline"
              >
                Accueil
              </Link>
            </li>
            <li className="select-none px-1 text-gray-400">/</li>
            <li>
              <Link
                href="/villes"
                className="transition hover:text-primary-600 hover:underline"
              >
                Villes
              </Link>
            </li>
            <li className="select-none px-1 text-gray-400">/</li>
            <li className="font-medium text-gray-800" aria-current="page">
              {city.name}
            </li>
          </ol>
        </div>
      </nav>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-8xl px-6 lg:px-8">
          {/* Intro */}
          <div className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">
              Maçon expert à {city.name}
            </h2>
            <p className="mb-6 text-base leading-relaxed text-gray-700">
              {city.introduction}
            </p>
            <p className="text-base leading-relaxed text-gray-700">
              {business.name} est votre partenaire de confiance pour tous vos
              projets de maçonnerie à {city.name} ({city.zipCode}). Basés à{" "}
              {business.city}, nous intervenons dans la région {city.region} avec
              une équipe de professionnels qualifiés et expérimentés.
            </p>
          </div>

          {/* Données locales */}
          <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {population && (
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                <div className="text-2xl font-bold text-primary-600">
                  {city.population?.toLocaleString("fr-FR")}
                </div>
                <div className="text-sm text-gray-600">habitants</div>
              </div>
            )}
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
              <div className="text-2xl font-bold text-primary-600">
                {city.zipCode}
              </div>
              <div className="text-sm text-gray-600">code postal</div>
            </div>
            {city.surface && (
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                <div className="text-2xl font-bold text-primary-600">
                  {city.surface.toLocaleString("fr-FR")}
                </div>
                <div className="text-sm text-gray-600">hectares</div>
              </div>
            )}
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
              <div className="text-2xl font-bold text-primary-600">10+</div>
              <div className="text-sm text-gray-600">ans d'expérience</div>
            </div>
          </div>

          {/* Quartiers desservis */}
          {city.neighborhoods && city.neighborhoods.length > 0 && (
            <div className="mb-12">
              <h2 className="mb-6 text-2xl font-bold text-gray-900">
                Quartiers desservis à {city.name}
              </h2>
              <div className="flex flex-wrap gap-2">
                {city.neighborhoods.map((n) => (
                  <span
                    key={n}
                    className="inline-flex items-center gap-1 rounded-full border border-primary-200 bg-primary-50 px-3 py-1 text-sm text-primary-700"
                  >
                    <MapPin className="h-3.5 w-3.5" />
                    {n}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Spécificités du terrain */}
          {((city.terrainTypes && city.terrainTypes.length > 0) ||
            (city.commonIssues && city.commonIssues.length > 0)) && (
            <div className="mb-12 rounded-xl border border-amber-200 bg-amber-50 p-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Spécificités du terrain à {city.name}
              </h2>
              {city.terrainTypes && city.terrainTypes.length > 0 && (
                <p className="mb-3 text-gray-700">
                  <strong>Terrain :</strong> {city.terrainTypes.join(", ")}.
                </p>
              )}
              {city.commonIssues && city.commonIssues.length > 0 && (
                <p className="text-gray-700">
                  <strong>Points de vigilance :</strong>{" "}
                  {city.commonIssues.join(", ")}. Nous adaptons fondations,
                  drainage et mise en œuvre du béton en conséquence.
                </p>
              )}
            </div>
          )}

          {/* Services */}
          <div className="mb-12">
            <h2 className="mb-8 text-2xl font-bold text-gray-900">
              Services à {city.name}
            </h2>
            <p className="mb-6 text-gray-600">
              Nous proposons une gamme complète de services de maçonnerie
              adaptés à vos besoins à {city.name}.
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}/${city.slug}`}
                  className="group rounded-lg border border-gray-200 p-4 transition-all hover:border-primary-600 hover:bg-primary-50"
                >
                  <h3 className="mb-2 font-semibold text-gray-900 transition-colors group-hover:text-primary-600">
                    {service.name}
                  </h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Points de repère */}
          {city.landmarks && city.landmarks.length > 0 && (
            <div className="mb-12">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Points de repère à {city.name}
              </h2>
              <p className="text-gray-700">
                Nous intervenons à proximité de {city.landmarks.join(", ")}.
              </p>
            </div>
          )}

          {/* Réalisations dans le secteur (preuve locale) */}
          {(() => {
            const nearbyWorks = getRealisationsNearCity(city.slug, 3);
            if (nearbyWorks.length === 0) return null;
            return (
              <div className="mb-12">
                <h2 className="mb-2 text-2xl font-bold text-gray-900">
                  Nos chantiers près {deVille(city.name)}
                </h2>
                <p className="mb-6 text-gray-600">
                  Quelques réalisations récentes de DZ Maçonnerie dans le
                  secteur :
                </p>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {nearbyWorks.map(({ realisation, distanceKm }) => (
                    <Link
                      key={realisation.slug}
                      href={`/realisations/${realisation.slug}`}
                      className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
                    >
                      {realisation.images?.[0] && (
                        <div className="relative h-44 w-full overflow-hidden">
                          <Image
                            src={realisation.images[0].src}
                            alt={realisation.images[0].alt}
                            fill
                            className="object-cover transition duration-300 group-hover:scale-105"
                          />
                        </div>
                      )}
                      <div className="flex flex-1 flex-col p-5">
                        <h3 className="mb-1 font-bold leading-snug text-gray-900 group-hover:text-primary-600">
                          {realisation.title}
                        </h3>
                        <p className="mb-2 flex-1 text-sm text-gray-500">
                          {realisation.city}
                          {distanceKm > 0 && ` — à ${distanceKm} km`} •{" "}
                          {realisation.date}
                        </p>
                        <span className="mt-3 text-sm font-semibold text-primary-600">
                          Voir le chantier →
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })()}

          {/* Zone d'intervention / villes voisines (maillage) */}
          {nearby.length > 0 && (
            <div className="mb-12 rounded-xl border border-primary-200 bg-primary-50 p-8">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                Zone d'intervention autour {deVille(city.name)}
              </h2>
              <p className="mb-6 text-gray-700">
                Basés à {business.city}, nous intervenons à {city.name} et dans
                les communes voisines :
              </p>
              <div className="flex flex-wrap gap-2">
                {nearby.map((n) => (
                  <Link
                    key={n.slug}
                    href={`/villes/${n.slug}`}
                    className="inline-flex items-center gap-1 rounded-full border border-primary-300 bg-white px-3 py-1 text-sm text-primary-700 transition hover:bg-primary-100"
                  >
                    Maçon à {n.name}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* FAQ */}
          {city.faq && city.faq.length > 0 && (
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-8">
              <h2 className="mb-8 text-2xl font-bold text-gray-900">
                Questions fréquentes — {city.name}
              </h2>
              <div className="space-y-8">
                {city.faq.map((item, idx) => (
                  <div
                    key={idx}
                    className={idx > 0 ? "border-t border-gray-200 pt-6" : ""}
                  >
                    <h3 className="mb-3 text-base font-semibold text-gray-900">
                      {item.question}
                    </h3>
                    <p className="text-gray-700">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Final CTA */}
      <section className="hero-gradient py-16 text-white md:py-24">
        <div className="mx-auto max-w-8xl px-6 text-center lg:px-8">
          <h2 className="mb-4 text-4xl font-bold leading-tight md:text-5xl">
            Un projet de maçonnerie à {city.name} ?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-primary-50">
            DZ Maçonnerie réalise tous vos travaux avec expertise et garantie
            décennale. Devis gratuit sous 24h.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="btn-primary bg-white text-primary-600 hover:bg-gray-100"
            >
              Demander un devis <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <a
              href="/contact"
              className="btn-secondary border-white text-white"
            >
              <Phone className="mr-2 h-4 w-4" />
              {phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
