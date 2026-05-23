import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { articles } from "@/data/blog";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};
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

  return {
    title: article.seo?.metaTitle || article.title,

    description: article.seo?.metaDescription || article.excerpt,

    keywords: article.seo?.keywords,

    openGraph: {
      title: article.seo?.metaTitle || article.title,

      description: article.seo?.metaDescription || article.excerpt,

      images: [
        {
          url: article.image,
        },
      ],
    },
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;

  const article = articles?.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  return (
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

                <span>{article.publishedAt}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLE */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="mx-auto max-w-8xl">
            {/* INTRO */}
            <div
              className="
                mb-12
                text-xl
                leading-relaxed
                text-gray-700
              "
            >
              {article?.content?.introduction}
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
                        text-gray-900
                      "
                  >
                    {section.title}
                  </h2>

                  <p
                    className="
                        text-lg
                        leading-relaxed
                        text-gray-700
                      "
                  >
                    {section.content}
                  </p>
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
                  text-lg
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
                  text-lg
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
          </div>
        </div>
      </section>
    </main>
  );
}
