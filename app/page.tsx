// app/page.tsx
import { cities } from "@/data/cities";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  MapPin,
  ShieldCheck,
  Hammer,
  Star,
} from "lucide-react";

export const metadata = {
  title: "Maçon à Bourgoin-Jallieu | Terrassement & Rénovation en Nord-Isère",
  description:
    "Entreprise de maçonnerie à Bourgoin-Jallieu et en Isère. Terrassement, dalle béton, ouverture mur porteur, rénovation et extension maison. Devis gratuit sous 24h.",
  alternates: {
    canonical: "https://www.dzmaconnerie38.fr",
  },
  openGraph: {
    title: "DZ Maçonnerie & Terrassement - Maçon à Bourgoin-Jallieu",
    description:
      "Travaux de maçonnerie, terrassement, rénovation et extension en Isère.",
    url: "https://www.dzmaconnerie38.fr",
    siteName: "DZ Maçonnerie",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "DZ Maçonnerie & Terrassement",
      },
    ],
  },
};

const services = [
  {
    title: "Maçonnerie générale",
    description: "Construction et rénovation en maçonnerie.",
    href: "/services/maconnerie-generale",
  },
  {
    title: "Terrassement",
    description:
      "Préparation de terrain, fondations et nivellement pour tous vos projets.",
    href: "/services/terrassement",
  },
  {
    title: "Dalle béton",
    description:
      "Création de dalles béton solides pour terrasse, maison, garage et piscine.",
    href: "/services/dalle-beton",
  },
  {
    title: "Ouverture mur porteur",
    description:
      "Ouverture de mur porteur avec pose IPN et sécurisation du chantier.",
    href: "/services/ouverture-mur-porteur",
  },
  {
    title: "Extension maison",
    description: "Agrandissement et extension de maison sur mesure en Isère.",
    href: "/services/extension-maison",
  },
  {
    title: "Rénovation",
    description:
      "Rénovation intérieure et extérieure pour particuliers et professionnels.",
    href: "/services/renovation",
  },
];

export default function HomePage() {
  return (
    <>
      {/* SEO LOCAL BUSINESS */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "DZ Maçonnerie & Terrassement",
            image: "https://www.dzmaconnerie38.fr/images/og-home.jpg",
            url: "https://www.dzmaconnerie38.fr",
            telephone: "+33688144257",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Artas",
              postalCode: "38440",
              addressCountry: "FR",
            },
            areaServed: [
              "Bourgoin-Jallieu",
              "Villefontaine",
              "Vienne",
              "L’Isle-d’Abeau",
            ],
          }),
        }}
      />
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/img/header.avif"
            alt="Entreprise de maçonnerie à Bourgoin-Jallieu"
            fill
            priority
            className="object-cover 100vw"
            sizes="(max-width: 768px) 100vw, 50vw"
          />

          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 container mx-auto px-6 py-28 md:py-40">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur">
              <MapPin className="mr-2 h-4 w-4" />
              Bourgoin-Jallieu • Artas • Isère
            </div>

            <h1 className="mb-6 text-5xl font-black leading-tight text-white md:text-7xl">
              DZ Maçonnerie &
              <span className="block text-primary-400">Terrassement</span>
            </h1>

            <p className="mb-8 max-w-2xl text-xl leading-relaxed text-gray-200">
              Entreprise de maçonnerie à Bourgoin-Jallieu spécialisée en
              terrassement, dalle béton, rénovation, extension maison et
              ouverture mur porteur dans toute l’Isère.
            </p>

            <div className="mb-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-primary-500 px-8 py-5 text-lg font-bold text-white transition hover:bg-primary-600"
              >
                Demander un devis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>

              <a
                href="tel:+33688144257"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-8 py-5 text-lg font-bold text-white backdrop-blur transition hover:bg-white/20"
              >
                <Phone className="mr-2 h-5 w-5" />
                06 88 14 42 57
              </a>
            </div>

            <div className="grid max-w-3xl grid-cols-1 gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                <ShieldCheck className="mb-3 h-6 w-6 text-primary-300" />

                <h2 className="mb-2 font-bold text-white">
                  Garantie décennale
                </h2>

                <p className="text-sm text-gray-300">
                  Travaux réalisés dans les règles de l’art.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                <Hammer className="mb-3 h-6 w-6 text-primary-300" />

                <h2 className="mb-2 font-bold text-white">
                  15 ans d’expérience
                </h2>

                <p className="text-sm text-gray-300">
                  Entreprise spécialisée en maçonnerie générale.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                <Star className="mb-3 h-6 w-6 text-primary-300" />

                <h2 className="mb-2 font-bold text-white">Devis gratuit</h2>

                <p className="text-sm text-gray-300">
                  Réponse rapide sous 24h pour votre projet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* INTRO */}
      <section className="bg-white py-20">
        <div className="container mx-auto grid gap-16 px-6 lg:grid-cols-2 lg:items-center">
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
              src="/assets/img/maconnerie-isere.webp"
              alt="Travaux de maçonnerie en Isère"
              fill
              className="object-cover object-[65%_center] md:object-center transition duration-500 hover:scale-105"
            />
          </div>
        </div>
      </section>
      {/* WHY US */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="mb-14 text-center">
            <span className="mb-4 inline-block rounded-full bg-primary-100 px-4 py-2 text-sm font-bold text-primary-700">
              POURQUOI NOUS CHOISIR
            </span>

            <h2 className="mb-6 text-4xl font-black text-gray-900">
              Une entreprise de maçonnerie de confiance en Isère
            </h2>

            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600">
              DZ Maçonnerie & Terrassement accompagne ses clients avec sérieux
              et professionnalisme pour tous leurs travaux de maçonnerie à
              Bourgoin-Jallieu et dans toute l’Isère.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: "15 ans d’expérience",
                desc: "Une solide expérience dans les travaux de maçonnerie générale et terrassement.",
              },
              {
                title: "Garantie décennale",
                desc: "Tous nos travaux sont couverts par une assurance décennale.",
              },
              {
                title: "Devis gratuit",
                desc: "Étude personnalisée de votre projet avec réponse rapide.",
              },
              {
                title: "Intervention locale",
                desc: "Entreprise basée à Artas proche de Bourgoin-Jallieu et Vienne.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-gray-200 bg-gray-50 p-8"
              >
                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="leading-relaxed text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* SERVICES */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="mb-14 text-center">
            <span className="mb-4 inline-block rounded-full bg-primary-100 px-4 py-2 text-sm font-bold text-primary-700">
              NOS SERVICES
            </span>

            <h2 className="mb-6 text-4xl font-black text-gray-900">
              Nos travaux de maçonnerie
            </h2>

            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600">
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
                className="group rounded-3xl border border-gray-200 bg-white p-8 transition hover:-translate-y-1 hover:border-primary-500 hover:shadow-xl"
              >
                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                  {service.title}
                </h3>

                <p className="mb-6 leading-relaxed text-gray-600">
                  {service.description}
                </p>

                <div className="flex items-center font-bold text-primary-600">
                  En savoir plus
                  <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* PHOTO SECTION */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-4xl font-black text-gray-900">
              Des réalisations de qualité en Nord-Isère
            </h2>

            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600">
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
        <div className="container mx-auto max-w-5xl px-6">
          <div className="mb-14 text-center">
            <span className="mb-4 inline-block rounded-full bg-primary-100 px-4 py-2 text-sm font-bold text-primary-700">
              QUESTIONS FRÉQUENTES
            </span>

            <h2 className="mb-6 text-4xl font-black text-gray-900">
              FAQ Maçonnerie & Terrassement
            </h2>

            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600">
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
        <div className="container mx-auto max-w-5xl px-6">
          <h2 className="mb-8 text-4xl font-black text-gray-900">
            Entreprise de maçonnerie à Bourgoin-Jallieu
          </h2>

          <div className="space-y-6 leading-relaxed text-gray-600">
            <p>
              DZ Maçonnerie & Terrassement accompagne les particuliers et
              professionnels pour tous leurs travaux de maçonnerie générale à
              Bourgoin-Jallieu, Artas, Villefontaine, Vienne et dans toute
              l’Isère.
            </p>

            <p>
              Notre entreprise intervient pour la réalisation de terrassement,
              dalle béton, extension maison, ouverture mur porteur avec IPN,
              rénovation intérieure et extérieure ainsi que les travaux de gros
              œuvre et fondations.
            </p>

            <p>
              Grâce à plus de 15 ans d’expérience dans le bâtiment, nous
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
        <div className="container mx-auto px-6">
          <div className="mb-14 text-center">
            <h2 className="mb-6 text-4xl font-black">Zones d’intervention</h2>

            <p className="mx-auto max-w-3xl text-lg text-gray-300">
              Nous intervenons rapidement dans toute l’Isère pour vos travaux de
              maçonnerie et terrassement.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {cities.map((city) => (
              <Link
                key={city.id}
                href={`/villes/${city.slug}`}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-primary-500 hover:bg-white/10"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="block text-lg font-semibold text-white">
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
        <div className="container mx-auto px-6 text-center">
          <h2 className="mx-auto mb-6 max-w-4xl text-4xl font-black leading-tight text-white">
            Besoin d’un devis pour vos travaux ?
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-primary-50">
            Contactez DZ Maçonnerie & Terrassement pour discuter de votre projet
            de maçonnerie, rénovation ou terrassement en Isère.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl bg-white px-8 py-5 text-lg font-bold text-primary-600 transition hover:bg-gray-100"
            >
              Demander un devis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <a
              href="tel:+33688144257"
              className="inline-flex items-center rounded-xl border border-white/20 bg-white/10 px-8 py-5 text-lg font-bold text-white backdrop-blur transition hover:bg-white/20"
            >
              <Phone className="mr-2 h-5 w-5" />
              06 88 14 42 57
            </a>
          </div>
        </div>
      </section>{" "}
      <section className="bg-white py-20">
        <div className="container mx-auto max-w-5xl px-6">
          <h2 className="mb-8 text-4xl font-black text-gray-900">
            Entreprise de maçonnerie à Bourgoin-Jallieu
          </h2>

          <div className="space-y-6 leading-relaxed text-gray-600">
            <p>
              DZ Maçonnerie & Terrassement intervient pour tous vos travaux de
              maçonnerie générale à Bourgoin-Jallieu, Artas, Villefontaine,
              Vienne et dans toute l’Isère.
            </p>

            <p>
              Notre entreprise réalise des travaux de terrassement, dalle béton,
              rénovation maison, ouverture mur porteur, extension et aménagement
              extérieur pour particuliers et professionnels.
            </p>

            <p>
              Grâce à plus de 15 ans d’expérience dans le bâtiment, nous
              accompagnons nos clients avec sérieux, professionnalisme et
              garantie décennale.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
