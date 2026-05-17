import { ArrowRight, Calendar } from "lucide-react";
import { generateMetadata as generatePageMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/config";

export const metadata: Metadata = generatePageMetadata(
  "Blog | Conseils maçonnerie et rénovation | DZ Maçonnerie",
  "Découvrez nos conseils et articles sur la maçonnerie, la rénovation et les travaux de construction.",
  "/blog",
  `${siteConfig.siteUrl}/og-blog.jpg`,
);

const articles = [
  {
    slug: "comment-choisir-maçon",
    title: "Comment choisir le bon maçon pour votre projet ?",
    excerpt:
      "Guide complet pour sélectionner un professionnel qualifié qui saura répondre à vos besoins et vos attentes.",
    author: "DZ Maçonnerie",
    date: "Avril 2024",
    category: "Conseils",
    readTime: "5 min",
  },
  {
    slug: "renovation-facade-guide",
    title: "Rénovation de façade : guide complet et étapes",
    excerpt:
      "Découvrez toutes les étapes pour rénover votre façade efficacement et obtenir un résultat durable.",
    author: "DZ Maçonnerie",
    date: "Mars 2024",
    category: "Rénovation",
    readTime: "7 min",
  },
  {
    slug: "extension-maison-budget",
    title: "Budget réaliste pour une extension maison",
    excerpt:
      "Les éléments clés à considérer pour estimer le budget de votre projet d'extension.",
    author: "DZ Maçonnerie",
    date: "Février 2024",
    category: "Extension",
    readTime: "6 min",
  },
  {
    slug: "garantie-decennale-explication",
    title: "La garantie décennale : ce que vous devez savoir",
    excerpt:
      "Comprendre la garantie décennale et comment elle vous protège dans vos travaux de maçonnerie.",
    author: "DZ Maçonnerie",
    date: "Janvier 2024",
    category: "Conseils",
    readTime: "5 min",
  },
  {
    slug: "fondations-solides-construction",
    title: "Fondations solides : la base de toute construction",
    excerpt:
      "L'importance des fondations et comment les réaliser correctement pour la durabilité de votre bâtiment.",
    author: "DZ Maçonnerie",
    date: "Décembre 2023",
    category: "Maçonnerie",
    readTime: "8 min",
  },
  {
    slug: "entretien-mur-brique",
    title: "Entretien et maintenance d'un mur en brique",
    excerpt:
      "Comment entretenir et préserver la durabilité de vos murs en brique dans le temps.",
    author: "DZ Maçonnerie",
    date: "Novembre 2023",
    category: "Entretien",
    readTime: "4 min",
  },
];

const categories = [
  "Tous les articles",
  "Conseils",
  "Rénovation",
  "Extension",
  "Maçonnerie",
  "Terrassement",
];

export default function BlogPage() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200">
        <div className="container-custom py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-primary-600 hover:text-primary-700">
              Accueil
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-700 font-medium">Blog</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden py-20 md:py-32 text-white">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Blog maçonnerie
          </h1>
          <p className="text-xl text-primary-50 max-w-3xl">
            Conseils, guides et astuces pour vos projets de maçonnerie,
            rénovation et terrassement
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-white border-b border-gray-200">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  idx === 0
                    ? "bg-primary-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-xl border border-primary-200 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              {/* Image Placeholder */}
              <div className="h-64 md:h-auto bg-gradient-to-br from-primary-200 to-primary-300 flex items-center justify-center text-7xl">
                📚
              </div>

              {/* Content */}
              <div className="md:col-span-2 p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full">
                    {articles[0].category}
                  </span>
                  <span className="text-sm text-gray-600">
                    {articles[0].date}
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {articles[0].title}
                </h2>
                <p className="text-gray-700 text-lg mb-6">
                  {articles[0].excerpt}
                </p>
                <div className="flex items-center gap-4">
                  <Link
                    href={`/blog/${articles[0].slug}`}
                    className="btn-primary"
                  >
                    Lire l'article <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                  <span className="text-sm text-gray-600">
                    {articles[0].readTime}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-md mb-12 text-center">Derniers articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.slice(1).map((article, idx) => (
              <article
                key={idx}
                className="bg-white rounded-xl border border-gray-200 hover:border-primary-600 hover:shadow-lg transition-all overflow-hidden group"
              >
                {/* Category Badge */}
                <div className="h-40 bg-gradient-to-br from-primary-100 to-primary-50 flex items-center justify-center text-4xl group-hover:from-primary-200 group-hover:to-primary-100 transition-all relative">
                  📄
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-6 line-clamp-2">
                    {article.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="border-t border-gray-100 pt-4 space-y-3">
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {article.date}
                      </div>
                      <span>{article.readTime}</span>
                    </div>
                    <Link
                      href={`/blog/${article.slug}`}
                      className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700 group/link"
                    >
                      Lire l'article{" "}
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="btn-primary">
              Voir plus d'articles <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom max-w-2xl">
          <div className="bg-white p-8 rounded-xl border border-primary-200 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Recevez nos conseils par email
            </h2>
            <p className="text-gray-700 mb-6">
              Abonnez-vous à notre newsletter pour recevoir régulièrement des
              conseils sur la maçonnerie et les travaux de rénovation.
            </p>
            <form className="flex gap-3 flex-col sm:flex-row">
              <input
                type="email"
                placeholder="votre@email.com"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-600 focus:ring-2 focus:ring-primary-100"
                required
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                S'abonner <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </form>
            <p className="text-xs text-gray-600 mt-4">
              Pas de spam, uniquement des conseils utiles. Vous pouvez vous
              désabonner à tout moment.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-16 md:py-24 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Prêt à concrétiser votre projet ?
          </h2>
          <p className="text-xl text-primary-50 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour discuter de vos idées et obtenir un devis
            gratuit
          </p>
          <Link
            href="/contact"
            className="btn-primary bg-white text-primary-600 hover:bg-gray-100"
          >
            Demander un devis <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
