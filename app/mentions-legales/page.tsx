import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { generateMetadata as generatePageMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/config";
import HeroSection from "@/components/sections/hero/HeroSection";

export const metadata: Metadata = generatePageMetadata(
  "Mentions légales | DZ Maçonnerie",
  "Mentions légales et informations légales du site DZ Maçonnerie & Terrassement.",
  "/mentions-legales",
  `${siteConfig.siteUrl}/og-mentions.jpg`,
);

export default function MentionsLegales() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        badge="Informations légales • DZ Maçonnerie"
        title="Mentions"
        highlight="Légales"
        description="Consultez les informations légales et les conditions d’utilisation du site DZ Maçonnerie & Terrassement."
        image="/images/realisations/chantier_maçonnerie.avif"
        imageAlt="Mentions légales DZ Maçonnerie"
        primaryButtonText="Nous contacter"
        primaryButtonHref="/contact"
        secondaryButtonText="06 88 14 42 57"
        secondaryButtonHref="tel:+33688144257"
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
              INFORMATIONS LÉGALES
            </span>

            <h2 className="mb-6 text-4xl font-black text-gray-900">
              Mentions légales
            </h2>

            <p className="max-w-4xl text-lg leading-relaxed text-gray-600">
              Conformément aux dispositions de la loi pour la confiance dans
              l’économie numérique (LCEN), voici les informations relatives au
              site DZ Maçonnerie & Terrassement.
            </p>
          </div>

          {/* SECTIONS */}
          <div className="space-y-20">
            {/* SECTION */}
            <div>
              <h3 className="mb-6 text-3xl font-black text-gray-900">
                1. Éditeur du site
              </h3>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-3xl border border-gray-100 bg-gray-50 p-8">
                  <h4 className="mb-4 text-xl font-bold text-gray-900">
                    Entreprise
                  </h4>

                  <div className="space-y-3 text-gray-600">
                    <p>DZ Maçonnerie & Terrassement</p>
                    <p>Bourgoin-Jallieu – Isère</p>
                    <p>France</p>
                  </div>
                </div>

                <div className="rounded-3xl border border-gray-100 bg-gray-50 p-8">
                  <h4 className="mb-4 text-xl font-bold text-gray-900">
                    Contact
                  </h4>

                  <div className="space-y-3 text-gray-600">
                    <p>06 88 14 42 57</p>
                    <p>contact@dz-maconnerie.fr</p>
                    <p>www.dz-maconnerie.fr</p>
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION */}
            <div>
              <h3 className="mb-6 text-3xl font-black text-gray-900">
                2. Hébergement
              </h3>

              <div className="rounded-3xl border border-gray-100 bg-gray-50 p-8">
                <p className="text-lg leading-relaxed text-gray-600">
                  Le site est hébergé par OVHcloud, société spécialisée dans
                  l’hébergement de sites internet et d’infrastructures cloud.
                </p>
              </div>
            </div>

            {/* SECTION */}
            <div>
              <h3 className="mb-6 text-3xl font-black text-gray-900">
                3. Propriété intellectuelle
              </h3>

              <p className="text-lg leading-relaxed text-gray-600">
                L’ensemble des contenus présents sur ce site (textes, images,
                logos, éléments graphiques et réalisations) est protégé par les
                lois relatives à la propriété intellectuelle.
              </p>
            </div>

            {/* SECTION */}
            <div>
              <h3 className="mb-6 text-3xl font-black text-gray-900">
                4. Responsabilité
              </h3>

              <p className="text-lg leading-relaxed text-gray-600">
                DZ Maçonnerie & Terrassement s’efforce de fournir des
                informations fiables et régulièrement mises à jour, mais ne
                saurait garantir l’exactitude ou l’exhaustivité des contenus
                publiés.
              </p>
            </div>

            {/* CTA */}
            <div className="rounded-3xl bg-primary-500 p-10 text-white">
              <h3 className="mb-4 text-3xl font-black">
                Une question concernant le site ?
              </h3>

              <p className="max-w-3xl text-lg leading-relaxed text-primary-100">
                Contactez DZ Maçonnerie & Terrassement pour toute information
                complémentaire concernant les mentions légales du site.
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
            Des questions ?
          </h2>
          <p className="text-primary-50 mb-6">
            Contactez-nous pour toute information
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
