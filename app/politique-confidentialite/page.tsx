import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { generateMetadata as generatePageMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/config";
import HeroSection from "@/components/sections/hero/HeroSection";

const { business } = siteConfig;

export const metadata: Metadata = generatePageMetadata(
  `Politique de confidentialité | ${business.name}`,
  `Politique de confidentialité et protection des données personnelles de ${business.name}.`,
  "/politique-confidentialite",
  `${siteConfig.siteUrl}/og-privacy.jpg`,
);

export default function PolitiqueConfidentialite() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        badge={`Informations légales • ${business.name}`}
        title="Politique de"
        highlight="Confidentialité"
        description={`Consultez la politique de confidentialité de ${business.name} concernant la collecte, l'utilisation et la protection des données personnelles.`}
        image="/images/realisations/chantier_maçonnerie.avif"
        imageAlt={`Politique de confidentialité ${business.name}`}
        primaryButtonText="Nous contacter"
        primaryButtonHref="/contact"
        secondaryButtonText={business.phone.replace("+33", "0")}
        secondaryButtonHref="/contact"
        cards={[
          {
            icon: "shield",
            title: "Protection des données",
            description: "Respect de votre vie privée et de vos informations.",
          },
          {
            icon: "star",
            title: "Transparence",
            description: "Informations claires sur l'utilisation des données.",
          },
          {
            icon: "hammer",
            title: "Entreprise locale",
            description: `${business.name} en Nord-Isère.`,
          },
        ]}
      />

      {/* BREADCRUMBS */}
      <nav
        aria-label="Fil d'Ariane"
        className="border-b border-gray-100 bg-gray-50 py-3"
      >
        <div className="mx-auto px-3">
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
              Politique de confidentialité
            </li>
          </ol>
        </div>
      </nav>

      {/* Content */}
      <section className="bg-white py-20">
        <div className="mx-auto px-6">
          {/* INTRO */}
          <div className="mb-16">
            <span className="mb-4 inline-block rounded-full bg-primary-100 px-4 py-2 text-sm font-bold text-primary-700">
              RGPD &amp; CONFIDENTIALITÉ
            </span>

            <h2 className="mb-6 text-4xl font-black text-gray-900">
              Protection des données personnelles
            </h2>

            <p className="max-w-4xl text-base leading-relaxed text-gray-600">
              {business.name} accorde une importance particulière à la
              protection des données personnelles et au respect de votre vie
              privée conformément au Règlement Général sur la Protection des
              Données (RGPD).
            </p>
          </div>

          {/* SECTIONS */}
          <div className="space-y-20">
            <div>
              <h3 className="mb-6 text-3xl font-black text-gray-900">
                1. Introduction
              </h3>

              <p className="text-base leading-relaxed text-gray-600">
                {business.name} s&apos;engage à assurer la confidentialité des
                informations collectées sur le site et à protéger les données
                personnelles des utilisateurs.
              </p>
            </div>

            <div>
              <h3 className="mb-6 text-3xl font-black text-gray-900">
                2. Données collectées
              </h3>

              <p className="mb-10 text-base leading-relaxed text-gray-600">
                Certaines informations peuvent être collectées afin de répondre
                à vos demandes et améliorer nos services.
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                {[
                  {
                    title: "Informations de contact",
                    description: "Nom, prénom, email, téléphone et adresse.",
                  },
                  {
                    title: "Informations projet",
                    description:
                      "Description des travaux et informations liées au chantier.",
                  },
                  {
                    title: "Données de navigation",
                    description: "Adresse IP, navigateur et pages consultées.",
                  },
                  {
                    title: "Cookies",
                    description:
                      "Amélioration de l'expérience utilisateur et statistiques.",
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
                3. Utilisation des données
              </h3>

              <p className="mb-10 text-base leading-relaxed text-gray-600">
                Les données collectées permettent notamment :
              </p>

              <div className="grid gap-4">
                {[
                  "Traiter les demandes de devis",
                  "Assurer le suivi des projets",
                  "Répondre aux demandes de contact",
                  "Améliorer les performances du site internet",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center rounded-2xl border border-gray-100 bg-gray-50 px-6 py-5"
                  >
                    <div className="mr-4 h-3 w-3 rounded-full bg-primary-500" />
                    <p className="font-medium text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-6 text-3xl font-black text-gray-900">
                4. Sécurité des données
              </h3>

              <p className="text-base leading-relaxed text-gray-600">
                {business.name} met en œuvre les mesures nécessaires afin de
                garantir la sécurité et la confidentialité des données
                personnelles.
              </p>
            </div>

            {/* CTA */}
            <div className="rounded-3xl bg-primary-500 p-10 text-white">
              <h3 className="mb-4 text-3xl font-black">
                Une question concernant vos données ?
              </h3>

              <p className="max-w-3xl text-base leading-relaxed text-primary-100">
                Contactez {business.name} pour toute demande relative à vos
                données personnelles ou à l&apos;exercice de vos droits RGPD.
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
                  {business.phone.replace("+33", "0")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="hero-gradient py-12 md:py-16 text-white">
        <div className="px-3 mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Avez-vous des questions ?
          </h2>
          <p className="text-primary-50 mb-6">Nous sommes là pour vous aider</p>
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
