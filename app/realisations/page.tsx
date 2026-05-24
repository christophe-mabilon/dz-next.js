import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { realisations } from "@/data/realisations";
import HeroSection from "@/components/sections/hero/HeroSection";
import { siteConfig } from "@/data/config";

const { business } = siteConfig;
const SITE_URL = siteConfig.siteUrl;

export const metadata: Metadata = {
  title: `Réalisations maçonnerie et terrassement en Nord-Isère | ${business.name}`,
  description: `Découvrez les réalisations de ${business.name} : dalle béton, terrassement, rénovation, extension maison et travaux de maçonnerie en Nord-Isère.`,
  alternates: {
    canonical: `${SITE_URL}/realisations`,
  },
  openGraph: {
    title: `Réalisations maçonnerie et terrassement en Nord-Isère | ${business.name}`,
    description: `Découvrez les réalisations de ${business.name} : dalle béton, terrassement, rénovation et extension maison.`,
    url: `${SITE_URL}/realisations`,
    siteName: business.name,
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/images/og/realisations-og.jpg`,
        width: 1200,
        height: 630,
        alt: `Réalisations ${business.name}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Réalisations maçonnerie et terrassement en Nord-Isère | ${business.name}`,
    description: `Découvrez plusieurs chantiers réalisés par ${business.name}.`,
    images: [`${SITE_URL}/images/og/realisations-og.jpg`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const FALLBACK_IMAGE = "/images/realisations/chantier_maçonnerie.avif";

export default function RealisationsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `Réalisations ${business.name}`,
    description: `Découvrez les chantiers réalisés par ${business.name} en Nord-Isère.`,
    url: `${SITE_URL}/realisations`,
    mainEntity: realisations.map((project) => ({
      "@type": "ConstructionProject",
      name: project.title,
      description: project.description,
      url: `${SITE_URL}/realisations/${project.slug}`,
      image: project.images?.[0]
        ? `${SITE_URL}${project.images[0].src}`
        : undefined,
      location: {
        "@type": "Place",
        name: project.city,
      },
    })),
  };

  return (
    <main className="bg-white">
      {/* SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* HERO */}
      <HeroSection
        badge={`Réalisations • ${business.city} • Nord-Isère`}
        title="Nos"
        highlight="Réalisations"
        description={`Découvrez plusieurs chantiers réalisés par ${business.name} : dalle béton, terrassement, rénovation, extension maison et maçonnerie générale dans toute l'Isère.`}
        image="/images/realisations/chantier_maçonnerie.avif"
        imageAlt={`Réalisations maçonnerie et terrassement en Nord-Isère — ${business.name}`}
        primaryButtonText="Demander un devis"
        primaryButtonHref="/contact"
        secondaryButtonText={business.phone.replace("+33", "0")}
        secondaryButtonHref="/contact"
        cards={[
          {
            icon: "hammer",
            title: "Chantiers réels",
            description: "Plusieurs projets réalisés en Nord-Isère.",
          },
          {
            icon: "shield",
            title: "Travail de qualité",
            description: "Réalisations durables dans les règles de l'art.",
          },
          {
            icon: "star",
            title: "Devis gratuit",
            description: "Réponse rapide pour votre projet de maçonnerie.",
          },
        ]}
      />

      {/* BREADCRUMBS */}
      <nav aria-label="Fil d'Ariane" className="border-b border-gray-100 bg-gray-50 py-3">
        <div className="mx-auto lg:px-8">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-500">
            <li>
              <Link href="/" className="transition hover:text-primary-600 hover:underline">
                Accueil
              </Link>
            </li>
            <li className="select-none px-1 text-gray-400">/</li>
            <li className="font-medium text-gray-800" aria-current="page">
              Réalisations
            </li>
          </ol>
        </div>
      </nav>

      {/* INTRO */}
      <section className="py-16">
        <div className="mx-auto max-w-8xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold text-zinc-900">
              Des chantiers réels réalisés en Nord-Isère
            </h2>
            <p className="mt-6 text-base leading-8 text-zinc-600">
              {business.name} accompagne les particuliers et professionnels
              pour leurs travaux de maçonnerie, terrassement, rénovation,
              création de dalle béton et extension de maison.
            </p>
            <p className="mt-4 text-base leading-8 text-zinc-600">
              Retrouvez ici plusieurs exemples de réalisations avec photos,
              détails techniques et informations locales.
            </p>
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="pb-24">
        <div className="mx-auto max-w-8xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {realisations.map((project) => (
              <article
                key={project.slug}
                className="group overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <Link href={`/realisations/${project.slug}`} className="block">
                  {/* IMAGE */}
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={project.images?.[0]?.src || FALLBACK_IMAGE}
                      alt={project.images?.[0]?.alt || project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <span className="inline-flex rounded-full bg-white/20 px-3 py-1 text-xs font-medium backdrop-blur">
                        {project.service}
                      </span>
                      <h2 className="mt-3 text-2xl font-bold">{project.title}</h2>
                      <p className="mt-2 text-sm text-zinc-200">{project.city}</p>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-6">
                    <p className="line-clamp-3 text-base leading-7 text-zinc-600">
                      {project.description}
                    </p>

                    {/* MATERIALS */}
                    {project.materials && project.materials.length > 0 && (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.materials.slice(0, 3).map((material) => (
                          <span
                            key={material}
                            className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700"
                          >
                            {material}
                          </span>
                        ))}
                        {project.materials.length > 3 && (
                          <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700">
                            +{project.materials.length - 3}
                          </span>
                        )}
                      </div>
                    )}

                    {/* FOOTER */}
                    <div className="mt-6 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-zinc-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8 7V3m8 4V3m-9 8h10m-11 9h12a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v11a2 2 0 002 2z"
                          />
                        </svg>
                        {project.date}
                      </div>
                      <span className="font-semibold text-zinc-900 transition-transform duration-300 group-hover:translate-x-1">
                        Voir le chantier →
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-zinc-100 py-20">
        <div className="mx-auto max-w-8xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-zinc-900">
            Vous avez un projet de maçonnerie ou terrassement ?
          </h2>
          <p className="mt-6 text-base leading-8 text-zinc-600">
            Contactez {business.name} pour obtenir un devis gratuit pour vos
            travaux en Nord-Isère.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-2xl bg-zinc-950 px-8 py-4 text-base font-semibold text-white transition hover:bg-zinc-800"
            >
              Demander un devis gratuit
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
