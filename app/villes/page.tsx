import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, MapPin } from "lucide-react";

import { cities } from "@/data/cities";
import {
  generateMetadata as generatePageMetadata,
  generateCollectionSchema,
  generateBreadcrumbSchema,
} from "@/lib/seo";
import { siteConfig } from "@/data/config";
import HeroSection from "@/components/sections/hero/HeroSection";

const { business } = siteConfig;

export const metadata: Metadata = generatePageMetadata(
  "Secteurs d'intervention | DZ Maçonnerie – Isère",
  `DZ Maçonnerie intervient dans plus de ${cities.length} villes autour d'Artas et Bourgoin-Jallieu. Maçonnerie, terrassement et rénovation en Nord-Isère.`,
  "/villes",
);

const featuredCities = cities.filter((c) => c.featured);
const otherCities = cities.filter((c) => !c.featured);

export default function VillesPage() {
  return (
    <>
      {/* Schema : liste des communes desservies */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateCollectionSchema(
              `Zones d'intervention — ${cities.length} communes en Nord-Isère`,
              `Toutes les communes où DZ Maçonnerie intervient pour vos travaux de maçonnerie et terrassement.`,
              "/villes",
              cities.map((c) => ({ name: c.name, url: `/villes/${c.slug}` })),
            ),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Accueil", url: "/" },
              { name: "Villes", url: "/villes" },
            ]),
          ),
        }}
      />

      {/* HERO */}
      <HeroSection
        badge={`Secteurs d'intervention • ${cities.length} communes • Nord-Isère`}
        title="Nos"
        highlight="Secteurs d'intervention"
        description={`${business.name} intervient dans plus de ${cities.length} communes autour d'Artas et Bourgoin-Jallieu pour tous vos travaux de maçonnerie, terrassement et rénovation.`}
        image="/images/realisations/artisan-macon-bourgoin-jallieu-terrasse-gres-cerame-dz-maconnerie-terrassement.webp"
        imageAlt="Secteurs d'intervention DZ Maçonnerie en Isère"
        primaryButtonText="Demander un devis"
        primaryButtonHref="/contact"
        secondaryButtonText={business.phone.replace("+33", "0")}
        secondaryButtonHref="/contact"
        cards={[
          {
            icon: "hammer",
            title: `${cities.length}+ communes`,
            description: "Intervention dans toute la région Nord-Isère.",
          },
          {
            icon: "shield",
            title: "Devis gratuit",
            description: "Étude personnalisée pour votre projet.",
          },
          {
            icon: "star",
            title: "Garantie décennale",
            description: "Tous nos travaux sont assurés.",
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
            <li className="font-medium text-gray-800" aria-current="page">
              Secteurs d'intervention
            </li>
          </ol>
        </div>
      </nav>

      {/* INTRO */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-8xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-primary-100 px-4 py-2 text-sm font-bold text-primary-700">
              ZONE D'INTERVENTION
            </span>
            <h2 className="mb-6 text-4xl font-black text-gray-900">
              Maçonnerie dans tout le Nord-Isère
            </h2>
            <p className="leading-relaxed text-gray-600">
              Basée à Artas, notre entreprise de maçonnerie se déplace dans plus
              de {cities.length} communes autour de Bourgoin-Jallieu. Que vous
              soyez à Vienne, L'Isle-d'Abeau, Villefontaine ou dans les communes
              rurales voisines, nous intervenons rapidement pour votre projet.
            </p>
          </div>
        </div>
      </section>

      {/* VILLES PRINCIPALES */}
      {featuredCities.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="mx-auto max-w-8xl px-6 lg:px-8">
            <div className="mb-14 text-center">
              <h2 className="mb-4 text-4xl font-black text-gray-900">
                Villes principales
              </h2>
              <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-600">
                Nous intervenons régulièrement dans ces communes phares du
                Nord-Isère.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featuredCities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/villes/${city.slug}`}
                  className="group flex flex-col rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-primary-300 hover:shadow-xl"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-100">
                      <MapPin className="h-5 w-5 text-primary-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-500">
                      {city.zipCode}
                    </span>
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-gray-900 group-hover:text-primary-600 transition">
                    {city.name}
                  </h3>
                  <p className="mb-6 flex-1 text-sm leading-relaxed text-gray-600">
                    {city.description}
                  </p>
                  <span className="inline-flex items-center text-sm font-bold text-primary-600">
                    Voir les services
                    <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* TOUTES LES VILLES */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-8xl px-6 lg:px-8">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-4xl font-black text-gray-900">
              Toutes nos communes d'intervention
            </h2>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-600">
              Retrouvez ci-dessous l'ensemble des {cities.length} communes où DZ
              Maçonnerie intervient en Isère.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {otherCities.map((city) => (
              <Link
                key={city.slug}
                href={`/villes/${city.slug}`}
                className="group flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium text-gray-700 transition hover:border-primary-300 hover:bg-primary-50 hover:text-primary-600"
              >
                <MapPin className="h-4 w-4 shrink-0 text-gray-400 group-hover:text-primary-500" />
                <span className="truncate">{city.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-20 text-white">
        <div className="absolute inset-0 bg-primary-600" />

        <div className="relative z-10 mx-auto max-w-8xl px-6 text-center lg:px-8">
          <h2 className="mb-6 text-4xl font-black">
            Vous êtes dans notre secteur ?
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-xl text-primary-50">
            Contactez {business.name} pour un devis gratuit dans votre commune
            en Isère.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl bg-white px-8 py-5 text-base font-bold text-primary-600 transition hover:bg-gray-100"
            >
              Demander un devis gratuit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <a
              href={`tel:${business.phone}`}
              className="inline-flex items-center rounded-xl border border-white/20 bg-white/10 px-8 py-5 text-base font-bold text-white backdrop-blur transition hover:bg-white/20"
            >
              {business.phone.replace("+33", "0")}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
