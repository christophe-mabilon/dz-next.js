import type { Metadata } from "next";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Hammer,
  MapPin,
  Phone,
  ShieldCheck,
  Star,
} from "lucide-react";
import { realisations } from "@/data/realisations";
import HeroSection from "@/components/sections/hero/HeroSection";

const SITE_URL = "https://www.dz-maconnerie.fr";

export const metadata: Metadata = {
  title:
    "Réalisations maçonnerie et terrassement en Nord-Isère | DZ Maçonnerie",

  description:
    "Découvrez les réalisations DZ Maçonnerie & Terrassement : dalle béton, terrassement, rénovation, extension maison et travaux de maçonnerie en Nord-Isère.",

  alternates: {
    canonical: `${SITE_URL}/realisations`,
  },

  openGraph: {
    title:
      "Réalisations maçonnerie et terrassement en Nord-Isère | DZ Maçonnerie",

    description:
      "Découvrez les réalisations DZ Maçonnerie & Terrassement : dalle béton, terrassement, rénovation et extension maison.",

    url: `${SITE_URL}/realisations`,

    siteName: "DZ Maçonnerie",

    locale: "fr_FR",

    type: "website",

    images: [
      {
        url: `${SITE_URL}/images/og/realisations-og.jpg`,
        width: 1200,
        height: 630,
        alt: "Réalisations DZ Maçonnerie",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Réalisations maçonnerie et terrassement en Nord-Isère | DZ Maçonnerie",

    description:
      "Découvrez plusieurs chantiers réalisés par DZ Maçonnerie & Terrassement.",

    images: [`${SITE_URL}/images/og/realisations-og.jpg`],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RealisationsPage() {
  const schema = {
    "@context": "https://schema.org",

    "@type": "CollectionPage",

    name: "Réalisations DZ Maçonnerie",

    description:
      "Découvrez les chantiers réalisés par DZ Maçonnerie & Terrassement en Nord-Isère.",

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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      {/* HERO */}
      <HeroSection
        badge="Réalisations • Bourgoin-Jallieu • Nord-Isère"
        title="Nos"
        highlight="Réalisations"
        description="Découvrez plusieurs chantiers réalisés par DZ Maçonnerie & Terrassement : dalle béton, terrassement, rénovation, extension maison et maçonnerie générale dans toute l’Isère."
        image="/images/realisations/chantier_maçonnerie.avif"
        imageAlt="Réalisations maçonnerie et terrassement en Nord-Isère"
        primaryButtonText="Demander un devis"
        primaryButtonHref="/contact"
        secondaryButtonText="06 88 14 42 57"
        secondaryButtonHref="tel:+33688144257"
        cards={[
          {
            icon: "hammer",
            title: "Chantiers réels",
            description: "Découvrez plusieurs projets réalisés en Nord-Isère.",
          },

          {
            icon: "shield",
            title: "Travail de qualité",
            description: "Réalisations durables dans les règles de l’art.",
          },

          {
            icon: "star",
            title: "Devis gratuit",
            description: "Réponse rapide pour votre projet de maçonnerie.",
          },
        ]}
      />
      {/* INTRO */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold text-zinc-900">
              Des chantiers réels réalisés en Nord-Isère
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-600">
              DZ Maçonnerie & Terrassement accompagne les particuliers et
              professionnels pour leurs travaux de maçonnerie, terrassement,
              rénovation, création de dalle béton et extension de maison.
            </p>

            <p className="mt-4 text-lg leading-8 text-zinc-600">
              Retrouvez ici plusieurs exemples de réalisations avec photos,
              détails techniques et informations locales.
            </p>
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
                      src={project.images?.[0]?.src}
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

                      <h2 className="mt-3 text-2xl font-bold">
                        {project.title}
                      </h2>

                      <p className="mt-2 text-sm text-zinc-200">
                        {project.city}
                      </p>
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
                        {project.materials.map((material) => (
                          <span
                            key={material}
                            className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700"
                          >
                            {material}
                          </span>
                        ))}
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
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-zinc-900">
            Vous avez un projet de maçonnerie ou terrassement ?
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-600">
            Contactez DZ Maçonnerie & Terrassement pour obtenir un devis gratuit
            pour vos travaux en Nord-Isère.
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
