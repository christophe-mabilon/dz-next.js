import Link from "next/link";
import { formatPhone } from "@/lib/format";
import { Metadata } from "next";
import { ArrowRight } from "lucide-react";

import { generateMetadata as generatePageMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/config";

import HeroSection from "@/components/sections/hero/HeroSection";

const { business } = siteConfig;

export const metadata: Metadata = generatePageMetadata(
  `Mentions légales | ${business.name}`,
  `Mentions légales et informations légales du site ${business.name}.`,
  "/mentions-legales",
);

export default function MentionsLegales() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        badge={`Informations légales • ${business.name}`}
        title="Mentions"
        highlight="Légales"
        description={`Consultez les informations légales et les conditions d’utilisation du site ${business.name}.`}
        image="/images/realisations/artisan-macon-bourgoin-jallieu-terrasse-gres-cerame-dz-maconnerie-terrassement.webp"
        imageAlt={`Mentions légales ${business.name}`}
        primaryButtonText="Nous contacter"
        primaryButtonHref="/contact"
        secondaryButtonText={formatPhone(business.phone)}
        secondaryButtonHref="/contact"
        cards={[
          {
            icon: "shield",
            title: "Informations légales",
            description: "Mentions et obligations légales du site.",
          },

          {
            icon: "star",
            title: "Transparence",
            description: "Informations claires et accessibles.",
          },

          {
            icon: "hammer",
            title: "Entreprise locale",
            description: `${business.name} en Isère.`,
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
              Mentions légales
            </li>
          </ol>
        </div>
      </nav>

      {/* Content */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-8xl px-6 lg:px-8">
          {/* INTRO */}
          <div className="mb-20">
            <span className="mb-4 inline-block rounded-full bg-primary-100 px-4 py-2 text-sm font-bold text-primary-700">
              INFORMATIONS LÉGALES
            </span>

            <h2 className="mb-6 text-4xl font-black text-gray-900">
              Mentions légales
            </h2>

            <p className="max-w-4xl text-base leading-relaxed text-gray-600">
              Conformément aux dispositions de la loi pour la confiance dans
              l’économie numérique (LCEN), voici les informations relatives au
              site {business.name}.
            </p>
          </div>

          {/* SECTIONS */}
          <div className="space-y-20">
            {/* ÉDITEUR */}
            <div>
              <h3 className="mb-6 text-3xl font-black text-gray-900">
                1. Éditeur du site
              </h3>

              <div className="grid gap-6 md:grid-cols-2">
                {/* ENTREPRISE */}
                <div className="rounded-3xl border border-gray-100 bg-gray-50 p-8">
                  <h4 className="mb-4 text-xl font-bold text-gray-900">
                    Entreprise
                  </h4>

                  <div className="space-y-3 text-gray-600">
                    <p>{business.name}</p>

                    <p>{business.address}</p>

                    <p>
                      {business.zipCode} {business.city}
                    </p>

                    <p>{business.region} - France</p>
                  </div>
                </div>

                {/* CONTACT */}
                <div className="rounded-3xl border border-gray-100 bg-gray-50 p-8">
                  <h4 className="mb-4 text-xl font-bold text-gray-900">
                    Contact
                  </h4>

                  <div className="space-y-3 text-gray-600">
                    <p>{formatPhone(business.phone)}</p>

                    <p>{business.email}</p>

                    <p>{siteConfig.siteUrl}</p>

                    {business.socialProfiles.facebook && (
                      <Link
                        href={business.socialProfiles.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block transition hover:text-primary-600"
                      >
                        Facebook officiel
                      </Link>
                    )}

                    {business.socialProfiles.google && (
                      <Link
                        href={business.socialProfiles.google}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block transition hover:text-primary-600"
                      >
                        Google Business
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* HÉBERGEMENT */}
            <div>
              <h3 className="mb-6 text-3xl font-black text-gray-900">
                2. Hébergement
              </h3>

              <div className="rounded-3xl border border-gray-100 bg-gray-50 p-8">
                <p className="text-base leading-relaxed text-gray-600">
                  Le site est hébergé par OVHcloud, société spécialisée dans
                  l’hébergement de sites internet et d’infrastructures cloud.
                </p>
              </div>
            </div>

            {/* PROPRIÉTÉ INTELLECTUELLE */}
            <div>
              <h3 className="mb-6 text-3xl font-black text-gray-900">
                3. Propriété intellectuelle
              </h3>

              <p className="text-base leading-relaxed text-gray-600">
                L’ensemble des contenus présents sur ce site (textes, images,
                logos, éléments graphiques et réalisations) est protégé par les
                lois relatives à la propriété intellectuelle.
              </p>
            </div>

            {/* RESPONSABILITÉ */}
            <div>
              <h3 className="mb-6 text-3xl font-black text-gray-900">
                4. Responsabilité
              </h3>

              <p className="text-base leading-relaxed text-gray-600">
                {business.name} s’efforce de fournir des informations fiables et
                régulièrement mises à jour, mais ne saurait garantir
                l’exactitude ou l’exhaustivité des contenus publiés.
              </p>
            </div>

            {/* CTA */}
            <div className="rounded-3xl bg-primary-500 p-10 text-white">
              <h3 className="mb-4 text-3xl font-black">
                Une question concernant le site ?
              </h3>

              <p className="max-w-3xl text-base leading-relaxed text-primary-100">
                Contactez {business.name} pour toute information complémentaire
                concernant les mentions légales du site.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-5 text-base font-bold text-primary-700 transition hover:bg-gray-100"
                >
                  Nous contacter
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>

                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-8 py-5 text-base font-bold text-white backdrop-blur transition hover:bg-white/20"
                >
                  {formatPhone(business.phone)}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="hero-gradient py-12 text-white md:py-16">
        <div className="mx-auto max-w-8xl px-6 lg:px-8 text-center">
          <h2 className="mb-3 text-2xl font-bold md:text-3xl">
            Des questions ?
          </h2>

          <p className="mb-6 text-primary-50">
            Contactez-nous pour toute information
          </p>

          <Link
            href="/contact"
            className="btn-primary bg-white text-primary-600 hover:bg-gray-100"
          >
            Nous contacter
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
