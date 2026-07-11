import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  FileCheck,
  MapPin,
  Award,
  Users,
  Clock,
} from "lucide-react";
import HeroSection from "@/components/sections/hero/HeroSection";
import { siteConfig } from "@/data/config";
import { reviews } from "@/data/reviews";
import { cities } from "@/data/cities";
import {
  generateMetadata as generatePageMetadata,
  generateBreadcrumbSchema,
  BUSINESS_ID,
} from "@/lib/seo";
import { formatPhone } from "@/lib/format";

const { business } = siteConfig;

export const metadata: Metadata = generatePageMetadata(
  "À propos — David Zambon, artisan maçon à Artas | DZ Maçonnerie",
  "Découvrez DZ Maçonnerie & Terrassement : David Zambon, artisan maçon en Nord-Isère. SARL immatriculée au RCS de Vienne, garantie décennale, plus de 10 ans d'expérience.",
  "/a-propos",
);

// AboutPage rattachée au nœud LocalBusiness du graphe
const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${siteConfig.siteUrl}/a-propos#page`,
  name: "À propos de DZ Maçonnerie & Terrassement",
  url: `${siteConfig.siteUrl}/a-propos`,
  inLanguage: "fr-FR",
  isPartOf: { "@id": `${siteConfig.siteUrl}/#website` },
  about: { "@id": BUSINESS_ID },
};

const legalInfo = [
  { label: "Raison sociale", value: "DZ Maçonnerie & Terrassement (SARL)" },
  { label: "SIRET", value: "912 544 715 00010" },
  { label: "TVA intracommunautaire", value: "FR53912544715" },
  {
    label: "Code APE",
    value: "4399C — Travaux de maçonnerie générale et gros œuvre de bâtiment",
  },
  { label: "Immatriculation", value: "RCS Vienne" },
  {
    label: "Siège",
    value: `${business.address}, ${business.zipCode} ${business.city}`,
  },
];

export default function AProposPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Accueil", url: "/" },
              { name: "À propos", url: "/a-propos" },
            ]),
          ),
        }}
      />

      {/* HERO */}
      <HeroSection
        badge={`À propos • ${business.city} • Nord-Isère`}
        title="L'artisan derrière"
        highlight="DZ Maçonnerie"
        description="Une entreprise locale, un artisan qui s'engage personnellement sur chaque chantier : découvrez qui nous sommes, nos garanties et notre façon de travailler."
        image="/images/realisations/artisan-macon-bourgoin-jallieu-terrasse-gres-cerame-dz-maconnerie-terrassement.webp"
        imageAlt="David Zambon, artisan maçon DZ Maçonnerie à Artas"
        primaryButtonText="Demander un devis"
        primaryButtonHref="/contact"
        secondaryButtonText={formatPhone(business.phone)}
        secondaryButtonHref="/contact"
        cards={[
          {
            icon: "hammer",
            title: "10+ ans de métier",
            description: "Expérience en maçonnerie et gros œuvre.",
          },
          {
            icon: "shield",
            title: "Garantie décennale",
            description: "Tous les travaux structurels assurés.",
          },
          {
            icon: "star",
            title: "5/5 sur Google",
            description: `${reviews.length}+ avis clients vérifiés.`,
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
              À propos
            </li>
          </ol>
        </div>
      </nav>

      {/* HISTOIRE */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-8xl px-6 lg:px-8">
          <h2 className="mb-6 text-3xl font-bold text-gray-900">
            David Zambon, artisan maçon en Nord-Isère
          </h2>
          <div className="space-y-5 text-base leading-relaxed text-gray-700">
            <p>
              DZ Maçonnerie & Terrassement, c&apos;est d&apos;abord un artisan :{" "}
              <strong>David Zambon</strong>, maçon de métier, installé à{" "}
              <strong>Artas, au cœur du Nord-Isère</strong>. Après plus de dix
              ans passés sur les chantiers de la région, David a créé sa propre
              structure pour travailler comme il l&apos;entend :{" "}
              <strong>
                en direct avec ses clients, sans intermédiaire, avec un niveau
                d&apos;exigence qu&apos;il contrôle de bout en bout
              </strong>
              .
            </p>
            <p>
              Ici, pas de commercial ni de sous-traitance en cascade : celui qui
              établit votre devis est celui qui coule vos fondations. Cette
              proximité, nos clients la retrouvent dans chaque avis qu&apos;ils
              nous laissent — sérieux, minutie, conseils honnêtes et chantiers
              propres.
            </p>
            <p>
              L&apos;entreprise intervient dans un rayon de 35 km autour
              d&apos;Artas : Bourgoin-Jallieu, Vienne, Villefontaine,
              L&apos;Isle-d&apos;Abeau, Saint-Jean-de-Bournay… soit plus de{" "}
              {cities.length} communes du Nord-Isère et des environs, pour tous
              les travaux de <strong>maçonnerie générale</strong>,{" "}
              <strong>terrassement</strong>, <strong>dalle béton</strong>,{" "}
              <strong>extension</strong> et <strong>rénovation</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* GARANTIES */}
      <section className="bg-gray-900 py-20 text-white">
        <div className="mx-auto max-w-8xl px-6 lg:px-8">
          <div className="mb-14 text-center">
            <h2 className="mb-6 text-4xl font-black">
              Nos garanties, noir sur blanc
            </h2>
            <p className="mx-auto max-w-3xl text-base text-gray-300">
              Confier son chantier à un artisan, c&apos;est une question de
              confiance. Voici ce qui vous protège quand vous travaillez avec
              nous.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                icon: ShieldCheck,
                title: "Garantie décennale",
                text: "Tous nos travaux de structure sont couverts pendant 10 ans, comme l'exige la loi — et une responsabilité civile professionnelle complète la protection.",
              },
              {
                icon: FileCheck,
                title: "Entreprise immatriculée",
                text: "SARL enregistrée au RCS de Vienne, SIRET vérifiable. Devis et factures en bonne et due forme, TVA transparente.",
              },
              {
                icon: MapPin,
                title: "Artisan local",
                text: "Basés à Artas, nous sommes à moins de 35 km de chaque chantier. Un problème, une question ? Nous ne sommes jamais loin.",
              },
              {
                icon: Award,
                title: "Devis détaillé gratuit",
                text: "Visite technique sur place et chiffrage poste par poste, sans engagement. Vous savez ce que vous payez, et pourquoi.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-primary-600 shadow-lg shadow-primary-900/40">
                  <Icon className="h-5 w-5 text-white" />
                </span>
                <h3 className="mb-2 font-bold text-white">{title}</h3>
                <p className="text-sm leading-relaxed text-gray-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INFOS LÉGALES */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-8xl px-6 lg:px-8">
          <h2 className="mb-3 text-2xl font-bold text-gray-900">
            Une entreprise en règle, des informations vérifiables
          </h2>
          <p className="mb-8 text-gray-600">
            Avant de confier vos travaux à une entreprise, vérifiez toujours son
            existence légale. Voici la nôtre — chacune de ces informations est
            contrôlable publiquement.
          </p>
          <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {legalInfo.map(({ label, value }) => (
              <div
                key={label}
                className="rounded-xl border border-gray-200 bg-gray-50 p-4"
              >
                <dt className="mb-1 text-sm font-semibold uppercase tracking-wide text-gray-500">
                  {label}
                </dt>
                <dd className="font-medium text-gray-900">{value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-sm text-gray-500">
            Détails complets dans nos{" "}
            <Link
              href="/mentions-legales"
              className="text-primary-600 hover:underline"
            >
              mentions légales
            </Link>
            .
          </p>
        </div>
      </section>

      {/* COMMENT ON TRAVAILLE */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-8xl px-6 lg:px-8">
          <h2 className="mb-10 text-2xl font-bold text-gray-900">
            Notre façon de travailler
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Users,
                title: "1. On vous écoute",
                text: "Visite sur place gratuite : nous regardons votre terrain, votre bâti, vos contraintes — et nous vous disons franchement ce qui est faisable, et ce qui ne l'est pas.",
              },
              {
                icon: FileCheck,
                title: "2. On chiffre précisément",
                text: "Devis détaillé poste par poste sous 48h. Pas de forfait opaque : vous comparez, vous questionnez, vous décidez sans pression.",
              },
              {
                icon: Clock,
                title: "3. On tient nos engagements",
                text: "Planning annoncé, chantier propre, et un interlocuteur unique du premier coup de pelle à la réception des travaux.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title}>
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-primary-600 shadow-lg shadow-primary-900/30">
                  <Icon className="h-5 w-5 text-white" />
                </span>
                <h3 className="mb-2 font-bold text-gray-900">{title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/realisations" className="btn-primary">
              Voir nos réalisations
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/avis"
              className="btn-secondary border-primary-600 text-primary-600"
            >
              Lire les avis clients
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
