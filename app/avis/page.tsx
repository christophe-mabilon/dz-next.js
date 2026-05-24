import Link from "next/link";
import { Metadata } from "next";

import { Star, ArrowRight, Shield, BadgeCheck, Clock } from "lucide-react";

import { generateMetadata as generatePageMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/config";

import HeroSection from "@/components/sections/hero/HeroSection";

import { reviews } from "@/data/reviews";

const { business } = siteConfig;

export const metadata: Metadata = generatePageMetadata(
  `${business.name} | Avis clients et témoignages`,
  `Découvrez les avis et témoignages des clients de ${business.name} pour leurs travaux de maçonnerie, rénovation, terrassement et extension maison en Isère.`,
  "/avis",
  `${siteConfig.siteUrl}/og-avis.jpg`,
);

const stats = [
  {
    label: "Avis clients",
    value: `${reviews.length}+`,
  },

  {
    label: "Note moyenne",
    value: "5/5",
  },

  {
    label: "Clients satisfaits",
    value: "100%",
  },

  {
    label: "Années d'expérience",
    value: "10+",
  },
];

export default function AvisPage() {
  return (
    <>
      {/* HERO */}
      <HeroSection
        badge={`Avis clients • ${business.city} • ${business.region}`}
        title="Avis"
        highlight="de nos clients"
        description={`Découvrez les témoignages de clients ayant fait confiance à ${business.name} pour leurs travaux de maçonnerie, rénovation, terrassement et extension maison en Isère et dans le Nord-Isère.`}
        image="/images/realisations/chantier_maçonnerie.avif"
        imageAlt={`Avis clients ${business.name}`}
        primaryButtonText="Demander un devis"
        primaryButtonHref="/contact"
        secondaryButtonText={business.phone.replace("+33", "0")}
        secondaryButtonHref="/contact"
        cards={[
          {
            icon: "star",
            title: "Clients satisfaits",
            description: "Des avis positifs sur nos réalisations en Isère.",
          },

          {
            icon: "shield",
            title: "Travail reconnu",
            description: "Qualité, sérieux et respect des délais.",
          },

          {
            icon: "hammer",
            title: "Chantiers réels",
            description: "Avis liés à de véritables travaux réalisés.",
          },
        ]}
      />

      {/* BREADCRUMBS */}
      <nav aria-label="Fil d'Ariane" className="border-b border-gray-100 bg-gray-50 py-3">
        <div className="mx-auto px-3">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-500">
            <li><Link href="/" className="transition hover:text-primary-600 hover:underline">Accueil</Link></li>
            <li className="select-none px-1 text-gray-400">/</li>
            <li className="font-medium text-gray-800" aria-current="page">Avis clients</li>
          </ol>
        </div>
      </nav>

      {/* STATS */}
      <section className="section-padding bg-white">
        <div className="mx-auto">
          <div className="mb-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="
                  rounded-2xl
                  border border-gray-200
                  bg-gray-50
                  p-6
                  text-center
                  transition-all
                  hover:border-primary-600
                  hover:bg-primary-50
                "
              >
                <p className="mb-2 text-4xl font-black text-primary-600">
                  {stat.value}
                </p>

                <p className="font-medium text-gray-700">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* GOOGLE REVIEWS */}

          {/* RATING OVERVIEW */}
          <div
            className="
              border border-white/10
              bg-gray-950
              p-8
              text-white
              shadow-2xl
            "
          >
            <div className="mb-4 text-center">
              <p
                className="
                inline-flex items-center
                rounded-full
                border border-primary-500/40
                bg-primary-500
                px-4 py-2
                text-sm font-medium text-white
                mb-3
              "
              >
                Témoignages issus de nos avis Google
              </p>
            </div>
            <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
              {/* LEFT */}
              <div
                className="
                  flex flex-col items-center
                  rounded-2xl
                  border border-white/10
                  bg-white/5
                  px-8 py-10
                  text-center
                  backdrop-blur-sm
                "
              >
                {/* ICON */}
                <div
                  className="
                    mb-5
                    flex h-16 w-16 items-center justify-center
                    rounded-2xl
                    bg-primary-500/10
                  "
                >
                  <Star className="h-8 w-8 fill-yellow-400 text-yellow-400" />
                </div>

                {/* STARS */}
                <div className="mb-4 flex items-center gap-2">
                  {[...Array()].map((_, i) => (
                    <Star
                      key={i}
                      className="
                        h-7 w-7
                        fill-yellow-400
                        text-yellow-400
                      "
                    />
                  ))}
                </div>

                {/* NOTE */}
                <p className="mb-2 text-6xl font-black text-white">5/5</p>

                {/* SUBTEXT */}
                <p className="mb-1 text-base font-semibold text-white">
                  Plus de {reviews.length}+ avis clients
                </p>

                <p className="text-sm text-gray-400">
                  Basé sur nos avis Google vérifiés
                </p>
              </div>

              {/* CONTENT */}
              <div className="flex-1">
                <h3
                  className="
                    mb-5
                    text-3xl
                    font-black
                    leading-tight
                    text-white
                  "
                >
                  Une entreprise locale reconnue pour la qualité de ses
                  réalisations
                </h3>

                <p
                  className="
                    mb-6
                    text-base
                    leading-relaxed
                    text-gray-300
                  "
                >
                  Nos clients à Artas, Bourgoin-Jallieu, Vienne et dans tout le
                  Nord-Isère soulignent régulièrement notre sérieux, notre
                  réactivité, la qualité des finitions ainsi que le respect des
                  délais sur chaque chantier de maçonnerie, rénovation et
                  terrassement.
                </p>

                {/* HIGHLIGHTS */}
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    "Travail soigné et durable",
                    "Respect des délais",
                    "Excellent relationnel client",
                    "Conseils et accompagnement",
                  ].map((item) => (
                    <div
                      key={item}
                      className="
                        flex items-center gap-3
                        rounded-xl
                        border border-white/10
                        bg-white/5
                        px-4 py-3
                      "
                    >
                      <div className="h-2.5 w-2.5 rounded-full bg-primary-500" />

                      <span
                        className="
                          text-sm
                          font-medium
                          text-gray-200
                        "
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  {business.socialProfiles.google && (
                    <Link
                      href={business.socialProfiles.google}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex items-center justify-center
                        rounded-xl
                        bg-primary-600
                        px-6 py-4
                        font-semibold text-white
                        transition
                        hover:bg-primary-700
                      "
                    >
                      Voir tous nos avis Google
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  )}

                  <Link
                    href="/contact"
                    className="
                      inline-flex items-center justify-center
                      rounded-xl
                      border border-white/10
                      bg-white/5
                      px-6 py-4
                      font-semibold text-white
                      transition
                      hover:border-primary-500
                      hover:bg-primary-500/10
                    "
                  >
                    Demander un devis
                  </Link>
                </div>

                {/* CLIENT REVIEWS */}
                <div className="mt-10 grid gap-4 md:grid-cols-3">
                  {reviews.slice(0, 3).map((review, idx) => (
                    <div
                      key={idx}
                      className="
                        rounded-2xl
                        border border-white/10
                        bg-white/5
                        p-5
                        backdrop-blur-sm
                      "
                    >
                      {/* STARS */}
                      <div className="mb-3 flex gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="
                              h-4 w-4
                              fill-yellow-400
                              text-yellow-400
                            "
                          />
                        ))}
                      </div>

                      {/* TEXT */}
                      <p
                        className="
                          mb-5
                          line-clamp-4
                          text-sm
                          leading-relaxed
                          text-gray-300
                        "
                      >
                        "{review.text}"
                      </p>

                      {/* AUTHOR */}
                      <div className="border-t border-white/10 pt-4">
                        <p className="font-semibold text-white">
                          {review.author}
                        </p>

                        <p className="text-sm text-gray-400">{review.city}</p>

                        <p
                          className="
                            mt-1
                            text-xs
                            font-medium
                            text-primary-400
                          "
                        >
                          {review.service}
                        </p>

                        <div
                          className="
                            mt-2
                            flex items-center gap-2
                            text-xs text-gray-500
                          "
                        >
                          <span>{review.relativeDate}</span>

                          <span>•</span>

                          <span>{review.source}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS GRID */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto">
          <h2 className="heading-md mb-12 text-center">
            Témoignages de nos clients
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review, idx) => (
              <div
                key={idx}
                className="
                  group
                  rounded-3xl
                  border border-primary-500/
                 
                  p-7
                  shadow-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-2xl
                "
              >
                {/* STARS */}
                <div className="mb-5 flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="
                        h-5 w-5
                        fill-yellow-400
                        text-yellow-400
                      "
                    />
                  ))}
                </div>

                {/* REVIEW */}
                <p className="mb-6 leading-relaxed text-white-300">
                  "{review.text}"
                </p>

                {/* AUTHOR */}
                <div className="border-t border-white/10 pt-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-white">
                        {review.author}
                      </p>

                      <p className="text-sm text-gray-800">{review.city}</p>
                    </div>

                    <div
                      className="
                        rounded-full
                        bg-primary-600
                        border border-primary-500
                        px-3 py-2
                        text-xs
                        font-medium
                        text-white
                      "
                    >
                      {review.service}
                    </div>
                  </div>

                  <div
                    className="
                      mt-3
                      flex items-center gap-2
                      text-xs text-gray-700
                    "
                  >
                    <span>{review.relativeDate}</span>

                    <span>•</span>

                    <span>{review.source}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <h2 className="heading-md mb-12 text-center">
            Pourquoi nos clients nous choisissent
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: "Professionnalisme",
                desc: "Une équipe qualifiée et expérimentée pour vos travaux de maçonnerie en Isère.",
                icon: <Shield className="h-7 w-7" />,
              },

              {
                title: "Qualité",
                desc: "Un travail soigné et une garantie décennale pour votre tranquillité.",
                icon: <BadgeCheck className="h-7 w-7" />,
              },

              {
                title: "Fiabilité",
                desc: "Respect des délais, du budget et accompagnement du début à la fin.",
                icon: <Clock className="h-7 w-7" />,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="
                  rounded-2xl
                  border border-white/10
                  bg-gray-950
                  p-8
                  text-white
                  transition-all
                  hover:border-primary-500/40
                  hover:shadow-xl
                "
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="text-primary-400">{item.icon}</div>

                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                </div>

                <p className="leading-relaxed text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gray-950 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <div
            className="
              rounded-3xl
              border border-white/10
              bg-white/5
              p-10
              backdrop-blur-sm
            "
          >
            <div className="mb-6 flex justify-center">
              <div
                className="
                  flex h-20 w-20 items-center justify-center
                  rounded-2xl
                  bg-primary-500/10
                  text-primary-400
                "
              >
                <Star className="h-10 w-10 fill-primary-400" />
              </div>
            </div>

            <h2
              className="
                mb-6
                text-4xl
                font-black
                leading-tight
                text-white
              "
            >
              Confiez votre projet à une entreprise reconnue en Isère
            </h2>

            <p
              className="
                mx-auto
                mb-10
                max-w-2xl
                text-base
                leading-relaxed
                text-gray-300
              "
            >
              Rejoignez les nombreux clients satisfaits ayant confié leurs
              travaux de maçonnerie, rénovation et terrassement à{" "}
              {business.name}.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="
                  inline-flex items-center justify-center
                  rounded-xl
                  bg-primary-600
                  px-8 py-5
                  text-base font-bold text-white
                  transition
                  hover:bg-primary-700
                "
              >
                Demander un devis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>

              <a
                href="/contact"
                className="
                  inline-flex items-center justify-center
                  rounded-xl
                  border border-white/10
                  bg-white/5
                  px-8 py-5
                  text-base font-bold text-white
                  transition
                  hover:border-primary-500
                  hover:bg-primary-500/10
                "
              >
                {business.phone.replace("+33", "0")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="hero-gradient py-16 text-white md:py-24">
        <div className="container mx-auto text-center">
          <h2
            className="
              mb-4
              text-4xl
              font-bold
              leading-tight
              md:text-5xl
            "
          >
            Prêt à démarrer votre projet ?
          </h2>

          <p
            className="
              mx-auto
              mb-8
              max-w-2xl
              text-xl
              text-primary-50
            "
          >
            Contactez {business.name} pour obtenir un devis gratuit pour vos
            travaux de maçonnerie et terrassement.
          </p>

          <Link
            href="/contact"
            className="
              btn-primary
              bg-white
              text-primary-600
              hover:bg-gray-100
            "
          >
            Nous contacter
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
