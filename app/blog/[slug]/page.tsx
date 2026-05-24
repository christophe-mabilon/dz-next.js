import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/data/blog";
import { siteConfig } from "@/data/config";
import {
  generateArticleSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from "@/lib/seo";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

function formatDateFr(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const article = articles?.find((item) => item.slug === slug);

  if (!article) {
    return {};
  }

  const title = article.seo?.metaTitle || article.title;
  const description = article.seo?.metaDescription || article.excerpt;
  const imageUrl = `${siteConfig.siteUrl}${article.image}`;
  const articleUrl = `${siteConfig.siteUrl}/blog/${slug}`;

  return {
    title,
    description,
    keywords: article.seo?.keywords,
    alternates: {
      canonical: articleUrl,
    },
    openGraph: {
      title,
      description,
      url: articleUrl,
      type: "article",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: [article.author],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;

  const article = articles?.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  const articleUrl = `${siteConfig.siteUrl}/blog/${slug}`;

  const articleSchema = generateArticleSchema(
    article.title,
    article.seo?.metaDescription || article.excerpt,
    `${siteConfig.siteUrl}${article.image}`,
    article.publishedAt,
    article.updatedAt,
    article.author,
    articleUrl,
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Accueil", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: article.title, url: `/blog/${slug}` },
  ]);

  const faqSchema =
    article.faq && article.faq.length > 0
      ? generateFAQSchema(article.faq)
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <main className="bg-white">
        {/* HERO */}
        <section
          className="
          relative
          overflow-hidden
          h-[520px]
        "
        >
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/60" />

          <div
            className="
            absolute inset-0
            flex items-center
          "
          >
            <div className="container mx-auto">
              <div className="max-w-8xl text-white">
                <span
                  className="
                  mb-5
                  inline-flex
                  rounded-full
                  bg-primary-600
                  px-4 py-2
                  text-sm
                  font-semibold
                "
                >
                  {article?.hero?.badge}
                </span>

                <h1
                  className="
                  mb-6
                  text-5xl
                  font-black
                  leading-tight
                "
                >
                  {article?.hero?.title}
                </h1>

                <p
                  className="
                  max-w-6xl
                  text-xl
                  leading-relaxed
                  text-gray-200
                "
                >
                  {article?.hero?.subtitle}
                </p>

                <div
                  className="
                  mt-8
                  flex flex-wrap
                  items-center
                  gap-6
                  text-sm
                  text-gray-300
                "
                >
                  <span>Par {article.author}</span>

                  <span>{article.readTime} de lecture</span>

                  <span>Publié le {formatDateFr(article.publishedAt)}</span>

                  {article.updatedAt &&
                    article.updatedAt !== article.publishedAt && (
                      <span>
                        Mis à jour le {formatDateFr(article.updatedAt)}
                      </span>
                    )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BREADCRUMBS */}
        <nav aria-label="Fil d'Ariane" className="border-b border-gray-100 bg-gray-50 py-3">
          <div className="mx-auto px-3">
            <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-500">
              <li><Link href="/" className="transition hover:text-primary-600 hover:underline">Accueil</Link></li>
              <li className="select-none px-1 text-gray-400">/</li>
              <li><Link href="/blog" className="transition hover:text-primary-600 hover:underline">Blog</Link></li>
              <li className="select-none px-1 text-gray-400">/</li>
              <li className="max-w-xs truncate font-medium text-gray-800 sm:max-w-md lg:max-w-none" aria-current="page">{article.title}</li>
            </ol>
          </div>
        </nav>

        {/* ARTICLE */}
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="mx-auto max-w-7xl">
              {/* HERO ARTICLE */}
              <h2
                className="
              mb-6
              text-3xl
              font-black
              text-primary-600
              md:text-4xl
            "
              >
                À savoir avant vos travaux
              </h2>
              <hr className="mb-6 border-gray-200" />
              <div
                className="
          mb-16
          grid
          grid-cols-1
          items-center
          gap-10
          lg:grid-cols-2
        "
              >
                {/* IMAGE */}
                <div>
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={900}
                    height={700}
                    priority
                    className="
              h-[300px]
              w-full
              rounded-3xl
              object-cover
              shadow-2xl
              md:h-[450px]
            "
                  />
                </div>

                {/* INTRO */}

                <div>
                  <p
                    className="max-w-4xl
    whitespace-pre-line
    text-base
    leading-8
    text-gray-700
            "
                  >
                    {article?.content?.introduction}
                  </p>
                </div>
              </div>

              {/* SECTIONS */}
              <div className="space-y-14">
                {article?.content?.sections.map((section, index) => (
                  <div key={index}>
                    <h2
                      className="
                mb-6
                text-3xl
                font-black
                text-primary-600
              "
                    >
                      {section.title}
                    </h2>

                    <hr className="mb-6 border-gray-200" />

                    <div
                      className="
    whitespace-pre-line
    text-base
    leading-relaxed
    text-gray-700
  "
                    >
                      {section.content}
                    </div>
                  </div>
                ))}
              </div>

              {/* CONCLUSION */}
              <div
                className="
          mt-16
          rounded-3xl
          bg-gray-50
          p-10
        "
              >
                <h2
                  className="
            mb-5
            text-3xl
            font-black
            text-gray-900
          "
                >
                  Conclusion
                </h2>

                <p
                  className="
            text-base
            leading-relaxed
            text-gray-700
          "
                >
                  {article?.content?.conclusion}
                </p>
              </div>

              {/* FAQ */}
              {article && article.faq && article.faq?.length > 0 && (
                <div className="mt-20">
                  <h2
                    className="
              mb-10
              text-4xl
              font-black
              text-gray-900
            "
                  >
                    Questions fréquentes
                  </h2>

                  <div className="space-y-6">
                    {article?.faq?.map((faq, index) => (
                      <div
                        key={index}
                        className="
                  rounded-2xl
                  border border-gray-200
                  bg-white
                  p-8
                "
                      >
                        <h3
                          className="
                    mb-4
                    text-xl
                    font-bold
                    text-gray-900
                  "
                        >
                          {faq.question}
                        </h3>

                        <p
                          className="
                    leading-relaxed
                    text-gray-700
                  "
                        >
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div
                className="
          mt-20
          rounded-3xl
          bg-primary-600
          p-10
          text-white
        "
              >
                <h2
                  className="
            mb-4
            text-3xl
            font-black
          "
                >
                  {article?.footer?.ctaTitle}
                </h2>

                <p
                  className="
            mb-8
            max-w-2xl
            text-base
            text-white/90
          "
                >
                  {article?.footer?.ctaText}
                </p>

                <a
                  href="/contact"
                  className="
            inline-flex
            rounded-xl
            bg-white
            px-6 py-4
            font-semibold
            text-primary-700
            transition
            hover:bg-gray-100
          "
                >
                  Demander un devis
                </a>
              </div>

              {/* ARTICLES SIMILAIRES */}
              {(() => {
                const related = articles
                  .filter(
                    (a) => a.slug !== slug && a.category === article.category,
                  )
                  .slice(0, 3);
                if (related.length === 0) return null;
                return (
                  <div className="mt-20">
                    <h2 className="mb-8 text-3xl font-black text-gray-900">
                      Articles similaires
                    </h2>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {related.map((rel) => (
                        <a
                          key={rel.slug}
                          href={`/blog/${rel.slug}`}
                          className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
                        >
                          <div className="relative h-48 w-full overflow-hidden">
                            <Image
                              src={rel.image}
                              alt={rel.title}
                              fill
                              className="object-cover transition duration-300 group-hover:scale-105"
                            />
                          </div>
                          <div className="flex flex-1 flex-col p-5">
                            <h3 className="mb-2 text-base font-bold leading-snug text-gray-900 group-hover:text-primary-600">
                              {rel.title}
                            </h3>
                            <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-gray-600">
                              {rel.excerpt}
                            </p>
                            <span className="mt-4 text-sm font-semibold text-primary-600">
                              Lire l&apos;article →
                            </span>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
