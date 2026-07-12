import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Handshake, Globe, MapPin } from "lucide-react";
import HeroSection from "@/components/sections/hero/HeroSection";
import { siteConfig } from "@/data/config";
import { partners } from "@/data/partners";
import {
  generateMetadata as generatePageMetadata,
  generateBreadcrumbSchema,
  generateCollectionSchema,
} from "@/lib/seo";
import { formatPhone } from "@/lib/format";
import { PartnerForm } from "@/components/PartnerForm";

const { business } = siteConfig;

export const metadata: Metadata = generatePageMetadata(
  "Entreprises partenaires du bâtiment en Nord-Isère | DZ Maçonnerie",
  "Notre réseau d'artisans partenaires en Nord-Isère : des professionnels qualifiés du bâtiment que nous recommandons pour compléter vos travaux de maçonnerie.",
  "/partenaires",
);

export default function PartenairesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateCollectionSchema(
              "Entreprises partenaires — artisans du bâtiment en Nord-Isère",
              "Le réseau de professionnels qualifiés avec lesquels DZ Maçonnerie collabore sur ses chantiers.",
              "/partenaires",
              partners.map((p) => ({ name: p.name, url: "/partenaires" })),
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
              { name: "Partenaires", url: "/partenaires" },
            ]),
          ),
        }}
      />

      {/* HERO */}
      <HeroSection
        badge={`Partenaires • ${business.city} • Nord-Isère`}
        title="Nos entreprises"
        highlight="partenaires"
        description="Un chantier complet demande plusieurs corps de métier. Au fil des années, nous avons construit un réseau d'artisans de confiance que nous recommandons les yeux fermés."
        image="/images/realisations/artisan-macon-bourgoin-jallieu-terrasse-gres-cerame-dz-maconnerie-terrassement.webp"
        imageAlt="Réseau d'artisans partenaires DZ Maçonnerie en Nord-Isère"
        primaryButtonText="Demander un devis"
        primaryButtonHref="/contact"
        secondaryButtonText={formatPhone(business.phone)}
        secondaryButtonHref="/contact"
        cards={[
          {
            icon: "shield",
            title: "Artisans vérifiés",
            description: "Des professionnels vus à l'œuvre sur nos chantiers.",
          },
          {
            icon: "hammer",
            title: "Tous corps d'état",
            description: "Du gros œuvre aux finitions.",
          },
          {
            icon: "star",
            title: "Coordination",
            description: "Un chantier fluide entre les intervenants.",
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
              Partenaires
            </li>
          </ol>
        </div>
      </nav>

      {/* CONTENU */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-8xl px-6 lg:px-8">
          <h2 className="mb-6 text-3xl font-bold text-gray-900">
            Un réseau local de professionnels qualifiés
          </h2>
          <div className="mb-12 max-w-4xl space-y-4 text-base leading-relaxed text-gray-700">
            <p>
              Une extension, c&apos;est de la maçonnerie — mais aussi de la
              charpente, de l&apos;électricité, de la plomberie. Plutôt que de
              vous laisser chercher seul, nous vous mettons en relation avec
              des artisans que nous connaissons personnellement et avec qui
              nous avons l&apos;habitude de coordonner nos interventions.
            </p>
            <p>
              Chaque entreprise référencée ici a fait ses preuves à nos côtés
              sur de vrais chantiers : nous ne recommandons que des
              professionnels dont nous avons constaté le sérieux.
            </p>
          </div>

          {partners.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="flex flex-col rounded-2xl border border-gray-200 bg-gray-50 p-6 transition hover:border-primary-300 hover:shadow-md"
                >
                  <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-primary-600 shadow-lg shadow-primary-900/30">
                    <Handshake className="h-5 w-5 text-white" />
                  </span>
                  <h3 className="mb-1 text-lg font-bold text-gray-900">
                    {partner.name}
                  </h3>
                  <p className="mb-1 text-sm font-semibold text-primary-600">
                    {partner.trade}
                  </p>
                  <p className="mb-3 flex items-center gap-1 text-sm text-gray-500">
                    <MapPin className="h-3.5 w-3.5" /> {partner.city}
                  </p>
                  <p className="flex-1 text-sm leading-relaxed text-gray-600">
                    {partner.description}
                  </p>
                  {partner.website && (
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary-600 hover:underline"
                    >
                      <Globe className="h-4 w-4" /> Site web
                    </a>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-10 text-center">
              <Handshake className="mx-auto mb-4 h-10 w-10 text-primary-600" />
              <h3 className="mb-2 text-xl font-bold text-gray-900">
                L&apos;annuaire se construit
              </h3>
              <p className="mx-auto mb-6 max-w-xl text-gray-600">
                Nous référençons progressivement les artisans avec qui nous
                collaborons. Vous êtes un professionnel du bâtiment en
                Nord-Isère et nous avons déjà travaillé ensemble ?
                Contactez-nous pour figurer ici.
              </p>
              <a href="#devenir-partenaire" className="btn-primary inline-flex">
                Devenir partenaire
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          )}
        </div>
      </section>

      {/* FORMULAIRE DEVENIR PARTENAIRE */}
      <section
        id="devenir-partenaire"
        className="section-padding scroll-mt-24 bg-white"
      >
        <div className="mx-auto max-w-8xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-3 text-3xl font-bold text-gray-900">
              Devenir entreprise partenaire
            </h2>
            <p className="mb-8 text-gray-600">
              Vous êtes un artisan ou une entreprise du bâtiment en Nord-Isère
              et vous souhaitez rejoindre notre réseau ? Présentez-vous via ce
              formulaire — nous privilégions les professionnels avec qui nous
              avons déjà collaboré sur chantier.
            </p>
            <PartnerForm />
          </div>
        </div>
      </section>
    </>
  );
}
