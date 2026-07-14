import Link from "next/link";
import { formatPhone } from "@/lib/format";
import { Metadata } from "next";

import { Star, ArrowRight, Shield, BadgeCheck, Clock } from "lucide-react";

import {
  generateMetadata as generatePageMetadata,
  getRatingSummary,
  generateReviewsSchema,
  generateBreadcrumbSchema,
} from "@/lib/seo";
import { siteConfig } from "@/data/config";
import { StoneTexture } from "@/components/StoneTexture";

import HeroSection from "@/components/sections/hero/HeroSection";

import { reviews, allReviews } from "@/data/reviews";

const { business } = siteConfig;

export const metadata: Metadata = generatePageMetadata(
  `${business.name} | Avis clients et témoignages`,
  `Découvrez les avis et témoignages des clients de ${business.name} pour leurs travaux de maçonnerie, rénovation, terrassement et extension maison en Isère.`,
  "/avis",
);

const rating = getRatingSummary();
const noteMoyenne = rating?.ratingValue ?? "5";
const nbAvis = rating?.reviewCount ?? String(reviews.length);

const stats = [
  {
    label: "Avis clients",
    value: `${nbAvis}+`,
  },

  {
    label: "Note moyenne",
    value: `${noteMoyenne}/5`,
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
      {/* Schema : avis clients + note agrégée (rich snippets étoiles) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateReviewsSchema(allReviews)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Accueil", url: "/" },
              { name: "Avis clients", url: "/avis" },
            ]),
          ),
        }}
      />

      {/* HERO */}
      <HeroSection
        badge={`Avis clients • ${business.city} • ${business.region}`}
        title="Avis"
        highlight="de nos clients"
        description={`Découvrez les témoignages de clients ayant fait confiance à ${business.name} pour leurs travaux de maçonnerie, rénovation, terrassement et extension maison en Isère et dans le Nord-Isère.`}
        image="/images/realisations/artisan-macon-bourgoin-jallieu-terrasse-gres-cerame-dz-maconnerie-terrassement.webp"
        imageAlt={`Avis clients ${business.name}`}
        primaryButtonText="Demander un devis"
        primaryButtonHref="/contact"
        secondaryButtonText={formatPhone(business.phone)}
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
              Avis clients
            </li>
          </ol>
        </div>
      </nav>

      {/* STATS */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-8xl px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-black text-gray-900">
              La confiance de nos clients en quelques chiffres
            </h2>
            <p className="mx-auto max-w-8xl text-gray-600">
              Des chiffres qui ne mentent pas : ils sont le reflet direct des
              avis laissés par nos clients en Nord-Isère.
            </p>
          </div>
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
        </div>
      </section>

      {/* GOOGLE REVIEWS — RATING OVERVIEW pleine largeur */}
      <section className="relative overflow-hidden bg-gray-950 py-16 text-white md:py-20">
        <StoneTexture />
        <div className="relative z-10 mx-auto max-w-8xl px-6 lg:px-8">
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
                [text-shadow:0_1px_2px_rgba(0,0,0,0.25)]
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
                  bg-gray-900
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
                {[...Array(5)].map((_, i) => (
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
              <p className="mb-2 text-6xl font-black text-white">{noteMoyenne}/5</p>

              {/* SUBTEXT */}
              <p className="mb-1 text-base font-semibold text-white">
                Plus de {nbAvis}+ avis clients
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
                        bg-gray-900
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
                      bg-gray-900
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
                {allReviews.slice(0, 3).map((review, idx) => (
                  <div
                    key={idx}
                    className="
                        rounded-2xl
                        border border-white/10
                        bg-gray-900
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

                      {review.city && (
                          <p className="text-sm text-gray-400">{review.city}</p>
                        )}

                      {review.service && (
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
                        )}

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
      </section>

      {/* NOTRE ENGAGEMENT QUALITÉ */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-8xl px-6 lg:px-8">
          <div className="mx-auto max-w-8xl text-center">
            <p className="mb-3 text-2xl font-black uppercase tracking-wide text-primary-600 [text-shadow:0_1px_2px_rgba(0,0,0,0.15)] md:text-3xl">
              La qualité est notre fondation !
            </p>
            <h2 className="mb-6 text-3xl font-black text-gray-900">
              La satisfaction de nos clients, notre meilleure publicité
            </h2>
          </div>
          <div className="mx-auto max-w-8xl space-y-5 text-base leading-relaxed text-gray-700">
            <p>
              Notre slogan n&apos;est pas un simple jeu de mots de maçon : en
              maçonnerie comme en relation client,{" "}
              <strong>tout repose sur des fondations solides</strong>.{" "}
            </p>
            <p>
              Un chantier réussi commence par une écoute attentive de votre
              projet, un{" "}
              <strong>devis transparent où chaque poste est expliqué</strong>,
              et des <strong>engagements que nous tenons</strong> — sur la
              qualité comme sur les délais.
            </p>
            <p>
              Chaque avis publié sur cette page est celui d&apos;un{" "}
              <strong>vrai client, pour un vrai chantier</strong> réalisé à
              Artas, Bourgoin-Jallieu, Vienne ou ailleurs en Nord-Isère.
            </p>
            <p>
              {" "}
              Nous n&apos;avons rien à maquiller : notre travail est{" "}
              <strong>visible, vérifiable</strong>, et il parle pour nous.
            </p>
            <p>
              C&apos;est aussi pour cela que nous vous invitons à consulter nos
              avis <strong>directement sur Google</strong>.
            </p>
            <p>
              La satisfaction client n&apos;est pas un objectif marketing,
              <strong>c&apos;est notre modèle économique</strong> : un artisan
              local vit de sa réputation et des recommandations de ses clients.
            </p>
            <p>
              {" "}
              Chaque chantier que nous livrons doit pouvoir devenir notre{" "}
              <strong>meilleure carte de visite</strong> — celle que vous
              montrerez à vos voisins, votre famille, vos collègues.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="mx-auto mb-2 max-w-8xl text-2xl font-black text-primary-600 [text-shadow:0_1px_2px_rgba(0,0,0,0.15)]">
              Un projet bien préparé, c&apos;est un chantier réussi.
            </p>
            <p className="mx-auto mb-8 max-w-8xl text-lg text-gray-600">
              Nous prenons le temps d&apos;étudier votre demande sur place afin
              de vous proposer un{" "}
              <strong>devis précis, gratuit et sans engagement</strong>,
              accompagné de conseils adaptés à votre projet.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl bg-primary-600 px-8 py-4 text-base font-bold text-white transition hover:bg-primary-700"
              >
                Demander mon devis gratuit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="/contact"
                className="inline-flex items-center rounded-xl border border-primary-600 px-8 py-4 text-base font-bold text-primary-600 transition hover:bg-primary-50"
              >
                {formatPhone(business.phone)}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS GRID */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-8xl px-6 lg:px-8">
          <h2 className="heading-md mb-12 text-center">
            Témoignages de nos clients
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {allReviews.map((review, idx) => (
              <div
                key={idx}
                className="
                  group
                  rounded-3xl
                  border border-gray-200
                  bg-white
                  p-7
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                  hover:border-primary-300
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
                <p className="mb-6 leading-relaxed text-gray-700">
                  &ldquo;{review.text}&rdquo;
                </p>

                {/* AUTHOR */}
                <div className="border-t border-gray-200 pt-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-gray-900">
                        {review.author}
                      </p>

                      {review.city && (
                        <p className="text-sm text-gray-600">{review.city}</p>
                      )}
                    </div>

                    {review.service && (
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
                    )}
                  </div>

                  <div
                    className="
                      mt-3
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
      </section>

      {/* WHY CHOOSE US */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-8xl px-6 lg:px-8">
          <h2 className="heading-md mb-12 text-center">
            Pourquoi nos clients nous font confiance
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
      <section className="section-padding relative overflow-hidden bg-gray-950 text-white">
        <StoneTexture />
        <div className="relative z-10 mx-auto max-w-8xl px-6 lg:px-8 text-center">
          <div
            className="
              rounded-3xl
              border border-white/10
              bg-gray-900
              p-10
              shadow-lg
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
                {formatPhone(business.phone)}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="hero-gradient relative overflow-hidden py-16 text-white md:py-24">
        <StoneTexture />
        <div className="relative z-10 mx-auto max-w-8xl px-6 lg:px-8 text-center">
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
