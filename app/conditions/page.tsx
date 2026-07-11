import Link from "next/link";
import { formatPhone } from "@/lib/format";
import { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { generateMetadata as generatePageMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/config";
import HeroSection from "@/components/sections/hero/HeroSection";

const { business } = siteConfig;

export const metadata: Metadata = generatePageMetadata(
  `Conditions d'utilisation | ${business.name}`,
  `Conditions d'utilisation du site ${business.name}.`,
  "/conditions",
);

export default function ConditionsUtilisation() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        badge={`Conditions d'utilisation • ${business.name}`}
        title="Conditions"
        highlight="D'utilisation"
        description={`Consultez les conditions générales d'utilisation du site ${business.name} ainsi que les règles applicables à la navigation et à l'utilisation des contenus.`}
        image="/images/realisations/artisan-macon-bourgoin-jallieu-terrasse-gres-cerame-dz-maconnerie-terrassement.webp"
        imageAlt={`Conditions d'utilisation ${business.name}`}
        primaryButtonText="Nous contacter"
        primaryButtonHref="/contact"
        secondaryButtonText={formatPhone(business.phone)}
        secondaryButtonHref="/contact"
        cards={[
          {
            icon: "shield",
            title: "Utilisation sécurisée",
            description: "Navigation et accès au site encadrés.",
          },
          {
            icon: "star",
            title: "Transparence",
            description: "Conditions claires et accessibles.",
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
              Conditions d&apos;utilisation
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
              CONDITIONS D&apos;UTILISATION
            </span>

            <h2 className="mb-6 text-4xl font-black text-gray-900">
              Conditions générales d&apos;utilisation
            </h2>

            <p className="max-w-4xl text-base leading-relaxed text-gray-600">
              L&apos;utilisation du site {business.name} implique
              l&apos;acceptation pleine et entière des présentes conditions
              générales d&apos;utilisation.
            </p>
          </div>

          {/* SECTIONS */}
          <div className="space-y-20">
            <div>
              <h3 className="mb-6 text-3xl font-black text-gray-900">
                1. Objet du site
              </h3>

              <p className="text-base leading-relaxed text-gray-600">
                Le site présente les activités, services et réalisations de DZ
                Maçonnerie &amp; Terrassement dans le domaine de la maçonnerie
                générale, du terrassement, de la rénovation et des extensions de
                maison.
              </p>
            </div>

            <div>
              <h3 className="mb-6 text-3xl font-black text-gray-900">
                2. Accès au site
              </h3>

              <div className="rounded-3xl border border-gray-100 bg-gray-50 p-8">
                <p className="text-base leading-relaxed text-gray-600">
                  Le site est accessible 24h/24 et 7j/7 sauf interruption liée à
                  une maintenance technique ou à un cas de force majeure.
                </p>
              </div>
            </div>

            <div>
              <h3 className="mb-6 text-3xl font-black text-gray-900">
                3. Utilisation des contenus
              </h3>

              <p className="mb-10 text-base leading-relaxed text-gray-600">
                Les contenus du site sont protégés par les lois relatives à la
                propriété intellectuelle.
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                {[
                  {
                    title: "Textes et contenus",
                    description:
                      "Toute reproduction sans autorisation est interdite.",
                  },
                  {
                    title: "Images et réalisations",
                    description:
                      "Les photos de chantiers restent la propriété de DZ Maçonnerie.",
                  },
                  {
                    title: "Utilisation du site",
                    description:
                      "Le site doit être utilisé dans un cadre légal et respectueux.",
                  },
                  {
                    title: "Protection des données",
                    description:
                      "Les données personnelles sont traitées conformément au RGPD.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-gray-100 bg-gray-50 p-8 transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <h4 className="mb-4 text-xl font-bold text-gray-900">
                      {item.title}
                    </h4>
                    <p className="leading-relaxed text-gray-600">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-6 text-3xl font-black text-gray-900">
                4. Responsabilité
              </h3>

              <p className="text-base leading-relaxed text-gray-600">
                {business.name} ne saurait être tenu responsable
                d&apos;éventuels dommages liés à l&apos;utilisation du site ou à
                une interruption temporaire des services.
              </p>
            </div>

            {/* CTA */}
            <div className="rounded-3xl bg-primary-500 p-10 text-white">
              <h3 className="mb-4 text-3xl font-black">
                Une question concernant les conditions d&apos;utilisation ?
              </h3>

              <p className="max-w-3xl text-base leading-relaxed text-primary-100">
                Contactez {business.name} pour toute information complémentaire
                concernant l&apos;utilisation du site.
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
      <section className="hero-gradient py-12 md:py-16 text-white">
        <div className="mx-auto max-w-8xl px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Besoin de clarifications ?
          </h2>
          <p className="text-primary-50 mb-6">
            Contactez-nous pour toute question
          </p>
          <Link
            href="/contact"
            className="btn-primary bg-white text-primary-600 hover:bg-gray-100"
          >
            Nous contacter <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
