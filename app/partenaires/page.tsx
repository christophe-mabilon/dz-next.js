import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Handshake, Globe, MapPin } from "lucide-react";
import HeroSection from "@/components/sections/hero/HeroSection";
import { siteConfig } from "@/data/config";
import { partners, PARTNER_CATEGORIES } from "@/data/partners";

// métiers ayant au moins une entreprise, dans l'ordre du menu
const activeCategories = PARTNER_CATEGORIES.map((category) => ({
  category,
  items: partners.filter((p) => p.category === category),
})).filter(({ items }) => items.length > 0);

const anchor = (category: string) =>
  category
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-");
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
            <>
              {/* Menu des métiers (seuls ceux ayant des entreprises) */}
              <nav
                aria-label="Métiers de l'annuaire"
                className="mb-10 flex flex-wrap gap-3"
              >
                {activeCategories.map(({ category, items }) => (
                  <a
                    key={category}
                    href={`#${anchor(category)}`}
                    className="relative inline-flex items-center rounded-xl bg-primary-600 px-5 py-2.5 font-semibold text-white shadow-md transition hover:bg-primary-700"
                  >
                    {category}
                    <span className="absolute -right-2 -top-2 flex h-6 min-w-6 items-center justify-center rounded-full border-2 border-white bg-primary-900 px-1.5 text-xs font-bold">
                      {items.length}
                    </span>
                  </a>
                ))}
              </nav>

              <div className="space-y-12">
                {activeCategories.map(({ category, items }) => (
                  <div
                    key={category}
                    id={anchor(category)}
                    className="scroll-mt-28"
                  >
                    <h3 className="mb-6 flex items-center gap-3 text-2xl font-bold text-gray-900">
                      {category}
                      <span className="rounded-full bg-primary-100 px-3 py-1 text-sm font-semibold text-primary-700">
                        {items.length} entreprise{items.length > 1 ? "s" : ""}
                      </span>
                    </h3>
                    <div className="space-y-8">
                      {items.map((partner) => (
                <article
                  key={partner.name}
                  className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:border-primary-300 hover:shadow-md"
                >
                  {/* En-tête : logo + nom */}
                  <div className="border-b border-gray-100 p-6 pb-5">
                    {partner.logo ? (
                      <Image
                        src={partner.logo}
                        alt={`Logo ${partner.name}`}
                        width={220}
                        height={90}
                        className="mb-4 h-auto max-h-24 w-auto object-contain"
                      />
                    ) : (
                      <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-600 shadow-lg shadow-primary-900/30">
                        <Handshake className="h-6 w-6 text-white" />
                      </span>
                    )}
                    <h3 className="text-xl font-bold text-gray-900">
                      {partner.name}
                    </h3>
                  </div>

                  {/* Corps : infos à gauche, description à droite */}
                  <div className="grid gap-8 p-6 lg:grid-cols-[280px_1fr]">
                    <dl className="space-y-4 text-sm">
                      <div className="border-b border-gray-100 pb-4">
                        <dt className="mb-1 font-bold text-gray-900">
                          Type de services
                        </dt>
                        <dd className="text-gray-600">{partner.trade}</dd>
                      </div>
                      {partner.siret && (
                        <div className="border-b border-gray-100 pb-4">
                          <dt className="mb-1 font-bold text-gray-900">
                            Numéro de SIRET
                          </dt>
                          <dd className="text-gray-600">{partner.siret}</dd>
                        </div>
                      )}
                      <div className="border-b border-gray-100 pb-4">
                        <dt className="mb-1 flex items-center gap-1 font-bold text-gray-900">
                          <MapPin className="h-3.5 w-3.5 text-primary-600" />
                          Localisation
                        </dt>
                        <dd className="text-gray-600">
                          {partner.address ?? partner.city}
                        </dd>
                      </div>
                      {partner.phone && (
                        <div className="border-b border-gray-100 pb-4">
                          <dt className="mb-1 font-bold text-gray-900">
                            Téléphone
                          </dt>
                          <dd className="text-gray-600">
                            {formatPhone(partner.phone)}
                          </dd>
                        </div>
                      )}
                    </dl>

                    <div>
                      <h4 className="mb-3 font-bold text-gray-900">
                        Description de l&apos;entreprise
                      </h4>
                      <div className="space-y-3 text-sm leading-relaxed text-gray-600">
                        {partner.description.split("\n\n").map((p, i) => (
                          <p key={i}>{p}</p>
                        ))}
                      </div>
                      {partner.website && (
                        <p className="mt-5">
                          <span className="mb-1 block font-bold text-gray-900">
                            Site web :
                          </span>
                          <a
                            href={partner.website}
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            className="inline-flex items-center gap-1 font-medium text-primary-600 hover:underline"
                          >
                            <Globe className="h-4 w-4" />
                            {partner.trade} {partner.name}
                          </a>
                        </p>
                      )}
                    </div>
                  </div>
                </article>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </>
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
