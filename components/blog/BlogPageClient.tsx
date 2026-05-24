"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { articles } from "@/data/blog";

import {
  ArrowRight,
  Calendar,
  Clock3,
  Hammer,
  ShieldCheck,
  Building2,
} from "lucide-react";

import HeroSection from "@/components/sections/hero/HeroSection";

import { siteConfig } from "@/data/config";

const { business } = siteConfig;

const categories = [
  "Tous les articles",
  "Conseils",
  "Rénovation",
  "Extension",
  "Maçonnerie",
  "Terrassement",
];

export default function BlogPageClient() {
  const [selectedCategory, setSelectedCategory] = useState("Tous les articles");

  const filteredArticles =
    selectedCategory === "Tous les articles"
      ? articles
      : articles.filter((article) => article.category === selectedCategory);

  const featuredArticle = filteredArticles[0];

  const remainingArticles = filteredArticles.slice(1);

  return (
    <>
      {/* HERO */}
      <HeroSection
        badge={`Conseils maçonnerie • ${business.city} • Nord-Isère`}
        title="Blog"
        highlight="Maçonnerie"
        description={`Découvrez nos conseils en maçonnerie, rénovation, terrassement, dalle béton et extension maison pour réussir vos travaux en Isère et dans le Nord-Isère.`}
        image="/images/realisations/chantier_maçonnerie.avif"
        imageAlt={`Blog maçonnerie ${business.name}`}
        primaryButtonText="Demander un devis"
        primaryButtonHref="/contact"
        secondaryButtonText={business.phone.replace("+33", "0")}
        secondaryButtonHref="/contact"
        cards={[
          {
            icon: "hammer",
            title: "Conseils travaux",
            description:
              "Des conseils utiles pour réussir vos projets de maçonnerie.",
          },

          {
            icon: "shield",
            title: "Expertise terrain",
            description:
              "Des articles basés sur de vrais chantiers réalisés en Isère.",
          },

          {
            icon: "star",
            title: "Actualités locales",
            description:
              "Suivez les tendances et bonnes pratiques dans le Nord-Isère.",
          },
        ]}
      />

      {/* CATEGORIES */}
      <section className="border-b border-gray-200 bg-white py-10">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`
                  rounded-xl
                  border
                  px-5 py-2.5
                  text-sm
                  font-medium
                  transition-all

                  ${
                    selectedCategory === cat
                      ? "border-primary-600 bg-primary-600 text-white"
                      : "border-gray-200 bg-white text-gray-700 hover:border-primary-600 hover:text-primary-600"
                  }
                `}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED ARTICLE */}
      {featuredArticle && (
        <section className="section-padding bg-white">
          <div className="container mx-auto">
            <div className="rounded-3xl bg-white shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr]">
                {/* IMAGE */}
                <div className="relative h-[280px] lg:h-full">
                  <Image
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    fill
                    className="rounded-l-3xl object-cover object-center"
                  />
                </div>

                {/* CONTENT */}
                <div className="flex flex-col justify-center p-10">
                  <div className="mb-5 flex flex-wrap items-center gap-3">
                    <span
                      className="
                        rounded-full
                        bg-primary-600
                        px-4 py-1.5
                        text-xs
                        font-semibold
                        text-white
                      "
                    >
                      {featuredArticle.category}
                    </span>

                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Calendar className="h-4 w-4" />
                      {featuredArticle.publishedAt}
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Clock3 className="h-4 w-4" />
                      {featuredArticle.readTime}
                    </div>
                  </div>

                  <h2 className="mb-5 text-4xl font-black leading-tight">
                    {featuredArticle.title}
                  </h2>

                  <p
                    className="
                      mb-8
                      text-base
                      leading-relaxed
                      text-primary-600
                    "
                  >
                    {featuredArticle.excerpt}
                  </p>

                  <div className="flex flex-wrap items-center gap-5">
                    <Link
                      href={`/blog/${featuredArticle.slug}`}
                      className="
                        inline-flex items-center
                        rounded-xl
                        bg-primary-600
                        px-6 py-4
                        font-semibold
                        text-white
                        transition
                        hover:bg-primary-700
                      "
                    >
                      Lire l’article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>

                    <p className="text-sm text-gray-400">
                      Par {featuredArticle.author}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ARTICLES */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <div className="mb-14 text-center">
            <h2 className="heading-md mb-4">Derniers articles</h2>

            <p className="mx-auto max-w-2xl text-gray-600">
              Retrouvez nos conseils en maçonnerie, rénovation, terrassement et
              extension maison pour réussir vos projets en Isère.
            </p>
          </div>

          {remainingArticles.length === 0 ? (
            <div className="text-center text-gray-500">
              Aucun article dans cette catégorie.
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
              {remainingArticles.map((article, idx) => (
                <article
                  key={idx}
                  className="
                    group
                    overflow-hidden
                    rounded-3xl
                    border border-gray-200
                    bg-white
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-primary-500
                    hover:shadow-2xl
                  "
                >
                  {/* IMAGE */}
                  <div className="relative h-60 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="
                        object-cover
                        transition-transform
                        duration-500
                        group-hover:scale-105
                      "
                    />

                    <div className="absolute right-4 top-4">
                      <span
                        className="
                          rounded-full
                          bg-primary-600
                          px-3 py-1
                          text-xs
                          font-semibold
                          text-white
                        "
                      >
                        {article.category}
                      </span>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-7">
                    <div className="mb-4 flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {article.publishedAt}
                      </div>

                      <div className="flex items-center gap-1">
                        <Clock3 className="h-4 w-4" />
                        {article.readTime}
                      </div>
                    </div>

                    <h3
                      className="
                        mb-4
                        text-2xl
                        font-bold
                        leading-tight
                        text-primary-600
                        transition-colors
                        group-hover:text-primary-700
                      "
                    >
                      {article.title}
                    </h3>

                    <p
                      className="
                        mb-6
                        leading-relaxed
                        text-gray-600
                      "
                    >
                      {article.excerpt}
                    </p>

                    <div
                      className="
                        flex items-center
                        justify-between
                        border-t border-gray-100
                        pt-5
                      "
                    >
                      <span className="text-sm text-gray-500">
                        {article.author}
                      </span>

                      <Link
                        href={`/blog/${article.slug}`}
                        className="
                          inline-flex items-center
                          font-semibold
                          text-primary-600
                          transition
                          hover:text-primary-700
                        "
                      >
                        Lire plus
                        <ArrowRight
                          className="
                            ml-2 h-4 w-4
                            transition-transform
                            group-hover:translate-x-1
                          "
                        />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div
            className="
              rounded-3xl
              border border-gray-200
              bg-gray-50
              p-10
            "
          >
            <div className="grid gap-10 md:grid-cols-3">
              {[
                {
                  icon: <ShieldCheck className="h-8 w-8" />,
                  title: "Garantie décennale",
                  desc: "Tous nos travaux sont réalisés avec assurance décennale.",
                },

                {
                  icon: <Hammer className="h-8 w-8" />,
                  title: "Expertise terrain",
                  desc: "Des conseils issus de véritables chantiers réalisés en Isère.",
                },

                {
                  icon: <Building2 className="h-8 w-8" />,
                  title: "Entreprise locale",
                  desc: "Intervention rapide à Artas, Bourgoin-Jallieu et dans tout le Nord-Isère.",
                },
              ].map((item, idx) => (
                <div key={idx}>
                  <div className="mb-5 text-primary-600">{item.icon}</div>

                  <h3 className="mb-3 text-2xl font-bold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="leading-relaxed text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-16 text-white md:py-24">
        <div className="container mx-auto text-center">
          <h2
            className="
              mb-4
              text-4xl
              font-black
              leading-tight
              md:text-5xl
            "
          >
            Prêt à démarrer vos travaux de maçonnerie ?
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
            travaux de maçonnerie, rénovation et terrassement.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="
                inline-flex items-center justify-center
                rounded-xl
                bg-white
                px-8 py-5
                text-base
                font-bold
                text-primary-600
                transition
                hover:bg-gray-100
              "
            >
              Demander un devis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <a
              href={`tel:${business.phone}`}
              className="
                inline-flex items-center justify-center
                rounded-xl
                border border-white/20
                bg-white/10
                px-8 py-5
                text-base
                font-bold
                text-white
                transition
                hover:bg-white/20
              "
            >
              {business.phone.replace("+33", "0")}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
