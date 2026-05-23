import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { generateMetadata as generatePageMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/config";
import HeroSection from "@/components/sections/hero/HeroSection";

export const metadata: Metadata = generatePageMetadata(
  "Conditions d'utilisation | DZ Maçonnerie",
  "Conditions d'utilisation du site DZ Maçonnerie & Terrassement.",
  "/conditions",
  `${siteConfig.siteUrl}/og-conditions.jpg`,
);

export default function ConditionsUtilisation() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        badge="Conditions d’utilisation • DZ Maçonnerie"
        title="Conditions"
        highlight="D’utilisation"
        description="Consultez les conditions générales d’utilisation du site DZ Maçonnerie & Terrassement ainsi que les règles applicables à la navigation et à l’utilisation des contenus."
        image="/images/realisations/chantier_maçonnerie.avif"
        imageAlt="Conditions d’utilisation DZ Maçonnerie"
        primaryButtonText="Nous contacter"
        primaryButtonHref="/contact"
        secondaryButtonText="06 88 14 42 57"
        secondaryButtonHref="tel:+33688144257"
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
            description: "DZ Maçonnerie & Terrassement en Isère.",
          },
        ]}
      />

      {/* Content */}
      <section className="bg-white py-20">
  <div className="container mx-auto px-6">
    {/* INTRO */}
    <div className="mb-20">
      <span className="mb-4 inline-block rounded-full bg-primary-100 px-4 py-2 text-sm font-bold text-primary-700">
        CONDITIONS D’UTILISATION
      </span>

      <h2 className="mb-6 text-4xl font-black text-gray-900">
        Conditions générales d’utilisation
      </h2>

      <p className="max-w-4xl text-lg leading-relaxed text-gray-600">
        L’utilisation du site DZ Maçonnerie & Terrassement
        implique l’acceptation pleine et entière des présentes
        conditions générales d’utilisation.
      </p>
    </div>

    {/* SECTIONS */}
    <div className="space-y-20">
      {/* SECTION */}
      <div>
        <h3 className="mb-6 text-3xl font-black text-gray-900">
          1. Objet du site
        </h3>

        <p className="text-lg leading-relaxed text-gray-600">
          Le site présente les activités, services et réalisations
          de DZ Maçonnerie & Terrassement dans le domaine de la
          maçonnerie générale, du terrassement, de la rénovation
          et des extensions de maison.
        </p>
      </div>

      {/* SECTION */}
      <div>
        <h3 className="mb-6 text-3xl font-black text-gray-900">
          2. Accès au site
        </h3>

        <div className="rounded-3xl border border-gray-100 bg-gray-50 p-8">
          <p className="text-lg leading-relaxed text-gray-600">
            Le site est accessible 24h/24 et 7j/7 sauf interruption
            liée à une maintenance technique ou à un cas de force
            majeure.
          </p>
        </div>
      </div>

      {/* SECTION */}
      <div>
        <h3 className="mb-6 text-3xl font-black text-gray-900">
          3. Utilisation des contenus
        </h3>

        <p className="mb-10 text-lg leading-relaxed text-gray-600">
          Les contenus du site sont protégés par les lois relatives
          à la propriété intellectuelle.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: 'Textes et contenus',
              description:
                'Toute reproduction sans autorisation est interdite.',
            },

            {
              title: 'Images et réalisations',
              description:
                'Les photos de chantiers restent la propriété de DZ Maçonnerie.',
            },

            {
              title: 'Utilisation du site',
              description:
                'Le site doit être utilisé dans un cadre légal et respectueux.',
            },

            {
              title: 'Protection des données',
              description:
                'Les données personnelles sont traitées conformément au RGPD.',
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

      {/* SECTION */}
      <div>
        <h3 className="mb-6 text-3xl font-black text-gray-900">
          4. Responsabilité
        </h3>

        <p className="text-lg leading-relaxed text-gray-600">
          DZ Maçonnerie & Terrassement ne saurait être tenu
          responsable d’éventuels dommages liés à l’utilisation
          du site ou à une interruption temporaire des services.
        </p>
      </div>

      {/* CTA */}
      <div className="rounded-3xl bg-primary-500 p-10 text-white">
        <h3 className="mb-4 text-3xl font-black">
          Une question concernant les conditions d’utilisation ?
        </h3>

        <p className="max-w-3xl text-lg leading-relaxed text-primary-100">
          Contactez DZ Maçonnerie & Terrassement pour toute
          information complémentaire concernant l’utilisation
          du site.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-5 text-lg font-bold text-primary-700 transition hover:bg-gray-100"
          >
            Nous contacter

            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>

          <a
            href="tel:+33688144257"
            className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-8 py-5 text-lg font-bold text-white backdrop-blur transition hover:bg-white/20"
          >
            06 88 14 42 57
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* CTA */}
      <section className="hero-gradient py-12 md:py-16 text-white">
        <div className="container mx-auto text-center">
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
