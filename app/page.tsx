import { cities } from "@/data/cities";
import { formatPhone } from "@/lib/format";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  BrickWall,
  Hammer,
  Expand,
  HousePlus,
  Waves,
  Fence,
  Shovel,
  Warehouse,
  Square,
  LayoutGrid,
  Award,
  ShieldCheck,
  FileCheck,
  MapPin,
} from "lucide-react";
import HeroSection from "@/components/sections/hero/HeroSection";
import { siteConfig } from "@/data/config";

const { business } = siteConfig;

export const metadata: Metadata = {
  title:
    "Entreprise de maçonnerie à Bourgoin-Jallieu | Construction, Rénovation & Terrassement | DZ Maçonnerie & Terrassement",
  description:
    "Entreprise de maçonnerie à Bourgoin-Jallieu et en Isère. Terrassement, dalle béton, ouverture mur porteur, rénovation et extension maison. Devis gratuit sous 24h.",
  alternates: {
    canonical: "https://www.dzmaconnerie38.fr",
  },
  openGraph: {
    title: `Entreprise de maçonnerie à Bourgoin-Jallieu | Construction, rénovation & terrassement | ${business.name}`,
    description:
      "Travaux de maçonnerie, terrassement, rénovation et extension en Isère.",
    url: "https://www.dzmaconnerie38.fr",
    siteName: "DZ Maçonnerie",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DZ Maçonnerie & Terrassement",
      },
    ],
  },
};

// formulations propres à l'accueil (volontairement différentes des pages
// services pour éviter le contenu dupliqué)
const services = [
  {
    title: "Maçonnerie générale neuf",
    description:
      "Fondations, murs porteurs, planchers : le gros œuvre complet de votre maison, garage ou bâtiment, construit pour durer.",
    icon: BrickWall,
    href: "/services/maconnerie-neuf",
  },
  {
    title: "Rénovation maçonnerie",
    description:
      "Murs porteurs à ouvrir, façades fatiguées, reprises structurelles : nous redonnons solidité et cachet au bâti ancien comme au récent.",
    icon: Hammer,
    href: "/services/renovation-maconnerie",
  },
  {
    title: "Agrandissement maison",
    description:
      "Une chambre en plus, un garage, une surélévation : gagnez de l'espace sans déménager, avec une étude de faisabilité avant tout engagement.",
    icon: HousePlus,
    href: "/services/agrandissement-maison",
  },
  {
    title: "Extension maison",
    description:
      "Nous agrandissons votre surface habitable avec une extension parfaitement raccordée à l'existant, du terrassement à la mise hors d'eau.",
    icon: Expand,
    href: "/services/extension-maison",
  },
  {
    title: "Piscine et terrasse",
    description:
      "Bassins en béton armé, plages antidérapantes et terrasses extérieures : des aménagements pensés pour les étés du Nord-Isère.",
    icon: Waves,
    href: "/services/piscine-terrasse",
  },
  {
    title: "Clôtures et murs",
    description:
      "Murs de clôture enduits, murets, piliers de portail et soutènements calculés : des limites nettes qui tiennent dans le temps.",
    icon: Fence,
    href: "/services/clotures-murs",
  },
  {
    title: "Terrassement",
    description:
      "Décaissement, nivellement, fouilles et évacuation des terres : votre terrain parfaitement préparé avant de construire.",
    icon: Shovel,
    href: "/services/terrassement",
  },
  {
    title: "Abri de jardin",
    description:
      "Dalles d'assise et abris maçonnés en dur : des dépendances saines et durables, du local technique à l'atelier.",
    icon: Warehouse,
    href: "/services/abri-de-jardin",
  },
  {
    title: "Dalle béton",
    description:
      "Dalles armées planes et pérennes pour garage, terrasse, maison ou extension — préparées dans les règles de l'art.",
    icon: Square,
    href: "/services/dalle-beton",
  },
  {
    title: "Dalles sur plots",
    description:
      "La terrasse contemporaine : pose sans colle ni mortier, drainage parfait sous les dalles, finition grès cérame.",
    icon: LayoutGrid,
    href: "/services/dalles-sur-plot",
  },
];

export default function HomePage() {
  return (
    <>
      {/* LocalBusiness complet déjà injecté par le layout (graphe @id) */}
      {/* HERO */}
      <HeroSection
        badge="Entreprise de maçonnerie • Bourgoin-Jallieu • Nord-Isère"
        title="Entreprise de maçonnerie"
        highlight="Bourgoin-Jallieu"
        description="Entreprise de maçonnerie générale située à Artas, près de Bourgoin-Jallieu, spécialisée dans la construction, la rénovation, les extensions de maison, les terrasses, le terrassement, les fondations, les dalles béton et l'ouverture de murs porteurs. Déplacement dans tout le Nord-Isère."
        image="/images/realisations/artisan-macon-bourgoin-jallieu-terrasse-gres-cerame-dz-maconnerie-terrassement.webp"
        imageAlt={`Réalisation de maçonnerie à Bourgoin-Jallieu par ${business.name}`}
        primaryButtonText="Demander un devis"
        primaryButtonHref="/contact"
        secondaryButtonText={formatPhone(business.phone)}
        secondaryButtonHref="/contact"
        cards={[
          {
            icon: "shield",
            title: "Garantie décennale",
            description: "Travaux réalisés dans les règles de l’art.",
          },

          {
            icon: "hammer",
            title: "10 ans d’expérience",
            description: "Entreprise spécialisée en maçonnerie générale.",
          },

          {
            icon: "star",
            title: "Devis gratuit",
            description: "Réponse rapide sous 24h pour votre projet.",
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
            <li className="font-medium text-gray-800" aria-current="page">
              Accueil
            </li>
          </ol>
        </div>
      </nav>
      {/* INTRO */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-8xl px-6 lg:px-8 grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="mb-4 inline-block rounded-full bg-primary-100 px-4 py-2 text-sm font-bold text-primary-700">
              ENTREPRISE DE MAÇONNERIE
            </span>

            <h2 className="mb-6 text-4xl font-black leading-tight text-gray-900">
              Votre maçon à Bourgoin-Jallieu et en Isère
            </h2>

            <p className="mb-6 leading-relaxed text-gray-600">
              Basée à Artas près de Bourgoin-Jallieu, DZ Maçonnerie &
              Terrassement accompagne les particuliers et professionnels pour
              tous leurs travaux de maçonnerie générale, terrassement, dalle
              béton, rénovation maison, extension et aménagement extérieur en
              Isère.
            </p>

            <p className="mb-8 leading-relaxed text-gray-600">
              Notre entreprise de maçonnerie intervient à Bourgoin-Jallieu,
              Villefontaine, L’Isle-d’Abeau, Vienne et dans toute l’Isère pour
              vos projets de gros œuvre, fondations, terrasse béton, ouverture
              de mur porteur avec IPN, rénovation maison et extension.
            </p>
            <div className="space-y-4">
              {[
                "Travaux de qualité",
                "Garantie décennale",
                "Accompagnement personnalisé",
                "Devis gratuit et rapide",
              ].map((item) => (
                <div key={item} className="flex items-center">
                  <CheckCircle2 className="mr-3 h-5 w-5 text-primary-500" />

                  <span className="font-medium text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[500px] overflow-hidden rounded-3xl">
            <Image
              src="/images/chantiers/artisan-macon.webp"
              alt="Artisan maçon réalisant des travaux de maçonnerie générale près de Bourgoin-Jallieu en Isère"
              fill
              className="object-cover object-[65%_center] md:object-center transition duration-500 hover:scale-105"
            />
          </div>
        </div>
      </section>
      {/* WHY US — bande sombre, style du bloc avis Google */}
      <section className="bg-gray-900 py-16 text-white md:py-20">
        <div className="mx-auto max-w-8xl px-6 lg:px-8">
          <div className="mb-14 text-center">
            <span className="mb-4 inline-block rounded-full border border-primary-500/40 bg-primary-500 px-4 py-2 text-sm font-bold text-white">
              POURQUOI NOUS CHOISIR
            </span>

            <h2 className="mb-6 text-4xl font-black text-white">
              Une entreprise de maçonnerie de confiance en Isère
            </h2>

            <p className="mx-auto max-w-3xl text-base leading-relaxed text-gray-300">
              {business.name} accompagne ses clients avec sérieux et
              professionnalisme pour tous leurs travaux de maçonnerie à
              Bourgoin-Jallieu et dans toute l’Isère.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                icon: Award,
                title: "10 ans d’expérience",
                desc: "Une solide expérience dans les travaux de maçonnerie générale et terrassement.",
              },
              {
                icon: ShieldCheck,
                title: "Garantie décennale",
                desc: "Tous nos travaux sont couverts par une assurance décennale.",
              },
              {
                icon: FileCheck,
                title: "Devis gratuit",
                desc: "Étude personnalisée de votre projet avec réponse rapide.",
              },
              {
                icon: MapPin,
                title: "Intervention locale",
                desc: "Entreprise basée à Artas proche de Bourgoin-Jallieu et Vienne.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary-500 hover:bg-white/10 hover:shadow-2xl"
              >
                <span className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-500/10">
                  <item.icon className="h-7 w-7 text-orange-400" />
                </span>

                <h3 className="mb-4 text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="leading-relaxed text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* SERVICES */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-8xl px-6 lg:px-8">
          <div className="mb-14 text-center">
            <span className="mb-4 inline-block rounded-full bg-primary-100 px-4 py-2 text-sm font-bold text-primary-700">
              NOS SERVICES
            </span>

            <h2 className="mb-6 text-4xl font-black text-gray-900">
              Nos travaux de maçonnerie
            </h2>

            <p className="mx-auto max-w-3xl text-base leading-relaxed text-gray-600">
              Une entreprise spécialisée dans les travaux de maçonnerie,
              terrassement et rénovation à Bourgoin-Jallieu et dans toute
              l’Isère.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group rounded-3xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary-500 hover:bg-primary-50/40 hover:shadow-2xl"
              >
                <span className="mb-8 flex h-14 w-14 items-center justify-center rounded-full bg-primary-600 shadow-lg shadow-primary-900/25 transition-transform duration-300 group-hover:scale-110">
                  <service.icon className="h-7 w-7 text-white" />
                </span>

                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                  {service.title}
                </h3>

                <p className="mb-6 leading-relaxed text-gray-600">
                  {service.description}
                </p>

                <div className="flex items-center font-bold text-primary-600">
                  En savoir plus
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* PHOTO SECTION */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-8xl px-6 lg:px-8">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-4xl font-black text-gray-900">
              Des réalisations de qualité en Nord-Isère
            </h2>

            <p className="mx-auto max-w-3xl text-base leading-relaxed text-gray-600">
              Découvrez quelques réalisations de travaux de maçonnerie,
              terrassement, dalle béton et rénovation effectuées à
              Bourgoin-Jallieu, Artas, Villefontaine, Vienne et dans tout le
              Nord-Isère.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                image: "/assets/img/extention_maison.webp",
                alt: "Travaux de maçonnerie en parpaing à Bourgoin-Jallieu",
                title: "Maçonnerie générale",
                desc: "Construction en parpaing et travaux de gros œuvre à Bourgoin-Jallieu.",
              },
              {
                image: "/assets/img/piscine-beton.webp",
                alt: "Construction de piscine béton en Isère",
                title: "Piscine béton",
                desc: "Construction et maçonnerie de piscine béton pour aménagement extérieur.",
              },
              {
                image: "/assets/img/realisation-muret.webp",
                alt: "Construction de muret et clôture en Isère",
                title: "Muret & clôture",
                desc: "Création de murets et aménagement extérieur en Isère.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center transition duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <h3 className="mb-3 text-2xl font-bold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="leading-relaxed text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* FAQ */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-8xl px-6 lg:px-8">
          <div className="mb-14 text-center">
            <span className="mb-4 inline-block rounded-full bg-primary-100 px-4 py-2 text-sm font-bold text-primary-700">
              QUESTIONS FRÉQUENTES
            </span>

            <h2 className="mb-6 text-4xl font-black text-gray-900">
              FAQ Maçonnerie & Terrassement
            </h2>

            <p className="mx-auto max-w-3xl text-base leading-relaxed text-gray-600">
              Retrouvez les réponses aux questions les plus fréquentes
              concernant nos travaux de maçonnerie à Bourgoin-Jallieu et dans
              toute l’Isère.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "Intervenez-vous uniquement à Bourgoin-Jallieu ?",
                a: "Nous intervenons à Bourgoin-Jallieu, Artas, Villefontaine, Vienne, L’Isle-d’Abeau et dans toute l’Isère.",
              },
              {
                q: "Proposez-vous un devis gratuit ?",
                a: "Oui, nous réalisons des devis gratuits et personnalisés pour tous vos projets de maçonnerie et terrassement.",
              },
              {
                q: "Vos travaux sont-ils couverts par une garantie décennale ?",
                a: "Oui, tous nos travaux sont couverts par une assurance garantie décennale.",
              },
              {
                q: "Quels types de travaux réalisez-vous ?",
                a: "Nous réalisons des travaux de maçonnerie générale, terrassement, dalle béton, rénovation, extension maison et ouverture mur porteur.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="rounded-3xl border border-gray-200 bg-white p-8"
              >
                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                  {faq.q}
                </h3>

                <p className="leading-relaxed text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* SEO CONTENT */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-8xl px-6 lg:px-8">
          <h2 className="mb-8 text-4xl font-black text-gray-900">
            Entreprise de maçonnerie à Bourgoin-Jallieu
          </h2>

          <div className="space-y-6 leading-relaxed text-gray-600">
            <p>
              {business.name} accompagne les particuliers et professionnels pour
              tous leurs travaux de maçonnerie générale à Bourgoin-Jallieu,
              Artas, Villefontaine, Vienne et dans toute l’Isère.
            </p>

            <p>
              Notre entreprise intervient pour la réalisation de terrassement,
              dalle béton, extension maison, ouverture mur porteur avec IPN,
              rénovation intérieure et extérieure ainsi que les travaux de gros
              œuvre et fondations.
            </p>

            <p>
              Grâce à plus de 10 ans d’expérience dans le bâtiment, nous
              proposons des prestations de qualité avec garantie décennale et
              accompagnement personnalisé pour tous vos projets de construction
              et rénovation.
            </p>

            <p>
              Nous intervenons rapidement à Bourgoin-Jallieu, L’Isle-d’Abeau, La
              Verpillière, Saint-Quentin-Fallavier, Vienne et dans l’ensemble du
              secteur Nord-Isère.
            </p>
          </div>
        </div>
      </section>
      {/* FAQ SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Intervenez-vous uniquement à Bourgoin-Jallieu ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nous intervenons à Bourgoin-Jallieu, Artas, Villefontaine, Vienne, L’Isle-d’Abeau et dans toute l’Isère.",
                },
              },
              {
                "@type": "Question",
                name: "Proposez-vous un devis gratuit ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Oui, nous réalisons des devis gratuits et personnalisés pour tous vos projets de maçonnerie et terrassement.",
                },
              },
              {
                "@type": "Question",
                name: "Vos travaux sont-ils couverts par une garantie décennale ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Oui, tous nos travaux sont couverts par une assurance garantie décennale.",
                },
              },
              {
                "@type": "Question",
                name: "Quels types de travaux réalisez-vous ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nous réalisons des travaux de maçonnerie générale, terrassement, dalle béton, rénovation, extension maison et ouverture mur porteur.",
                },
              },
            ],
          }),
        }}
      />
      {/* ZONES */}
      <section className="bg-gray-900 py-20 text-white">
        <div className="mx-auto max-w-8xl px-6 lg:px-8">
          <div className="mb-14 text-center">
            <h2 className="mb-6 text-4xl font-black">Zones d’intervention</h2>

            <p className="mx-auto max-w-3xl text-base text-gray-300">
              Nous intervenons rapidement dans toute l’Isère pour vos travaux de
              maçonnerie et terrassement.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {cities
              .filter((city) => city.featured)
              .slice(0, 10)
              .map((city) => (
                <Link
                  key={city.id}
                  href={`/villes/${city.slug}`}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-primary-500 hover:bg-white/10"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="block text-base font-semibold text-white">
                        {city.name}
                      </span>

                      <span className="mt-1 block text-sm text-gray-400">
                        {city.zipCode} • {city.region}
                      </span>
                    </div>

                    <ArrowRight className="h-4 w-4 text-primary-400" />
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="bg-primary-500 py-16">
        <div className="mx-auto max-w-8xl px-6 lg:px-8 text-center">
          <h2 className="mx-auto mb-6 max-w-4xl text-4xl font-black leading-tight text-white">
            Besoin d’un devis pour vos travaux ?
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-base text-primary-50">
            Contactez {business.name} pour discuter de votre projet de
            maçonnerie, rénovation ou terrassement en Isère.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl bg-white px-8 py-5 text-base font-bold text-primary-600 transition hover:bg-gray-100"
            >
              Demander un devis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <a
              href="/contact"
              className="inline-flex items-center rounded-xl border border-white/20 bg-white/10 px-8 py-5 text-base font-bold text-white backdrop-blur transition hover:bg-white/20"
            >
              <Phone className="mr-2 h-5 w-5" />
              {formatPhone(business.phone)}
            </a>
          </div>
        </div>
      </section>{" "}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-8xl px-6 lg:px-8">
          <h2 className="mb-8 text-4xl font-black text-gray-900">
            Entreprise de maçonnerie à Bourgoin-Jallieu
          </h2>

          <div className="space-y-6 leading-relaxed text-gray-600">
            <p>
              ${business.name} intervient pour tous vos travaux de maçonnerie
              générale à Bourgoin-Jallieu, Artas, Villefontaine, Vienne et dans
              toute l’Isère.
            </p>

            <p>
              Notre entreprise réalise des travaux de terrassement, dalle béton,
              rénovation maison, ouverture mur porteur, extension et aménagement
              extérieur pour particuliers et professionnels.
            </p>

            <p>
              Grâce à plus de 10 ans d’expérience dans le bâtiment, nous
              accompagnons nos clients avec sérieux, professionnalisme et
              garantie décennale.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
