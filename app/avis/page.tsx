import Link from "next/link";
import { Metadata } from "next";
import { Star, ArrowRight } from "lucide-react";
import { generateMetadata as generatePageMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/config";
import HeroSection from "@/components/sections/hero/HeroSection";

export const metadata: Metadata = generatePageMetadata(
  "Avis clients DZ Maçonnerie | 4.9/5 (42 avis)",
  "Découvrez les avis de nos clients satisfaits. DZ Maçonnerie & Terrassement : expertise, fiabilité et qualité reconnues.",
  "/avis",
  `${siteConfig.siteUrl}/og-avis.jpg`,
);

const reviews = [
  {
    name: "Jean Dupont",
    city: "Bourgoin-Jallieu",
    rating: 5,
    text: "Excellent travail, équipe professionnelle et respectueuse. Je recommande vivement ! Les délais ont été respectés et la qualité est impeccable.",
    service: "Maçonnerie générale",
  },
  {
    name: "Marie Martin",
    city: "Vienne",
    rating: 5,
    text: "Maçon fiable, qui respecte les délais. Extension maison terminée dans les temps. Le nettoyage de chantier était parfait. Merci DZ Maçonnerie !",
    service: "Extension maison",
  },
  {
    name: "Pierre Blanc",
    city: "Artas",
    rating: 5,
    text: "Devis gratuit clair, pas de surprise. Très satisfait de la rénovation de ma façade. Travail soigné et professionnel.",
    service: "Rénovation façade",
  },
  {
    name: "Sophie Laurent",
    city: "Saint-Étienne",
    rating: 5,
    text: "Super équipe ! Ils ont compris exactement ce que je voulais. Ils ont apporté de très bons conseils et ont fait un travail impeccable.",
    service: "Maçonnerie générale",
  },
  {
    name: "Luc Bernard",
    city: "Bourgoin-Jallieu",
    rating: 5,
    text: "DZ Maçonnerie est très professionnel. Réactivité excellente, respect des délais et du budget. Je recommande sans hésiter.",
    service: "Terrassement",
  },
  {
    name: "Isabelle Renaud",
    city: "Vienne",
    rating: 5,
    text: "Magnifique travail ! L'équipe était très attentive à nos besoins. La communication était claire tout du long du projet.",
    service: "Extension maison",
  },
  {
    name: "Thomas Moreau",
    city: "Diémoz",
    rating: 5,
    text: "Très content du résultat. Les gars sont sérieux, consciencieux et sympathiques. Chantier bien tenu du début à la fin.",
    service: "Rénovation",
  },
  {
    name: "Nathalie Chevalier",
    city: "Bourgoin-Jallieu",
    rating: 5,
    text: "Une excellente adresse ! Qualité du travail exceptionnelle. L'équipe est courtoise et professionnelle. Je vais les recommander à mes amis.",
    service: "Maçonnerie générale",
  },
  {
    name: "Robert Durand",
    city: "Saint-Genis-Laval",
    rating: 5,
    text: "Parfait ! Travail soigné, prix honnête et sérieux. Je suis très satisfait. Merci à toute l'équipe !",
    service: "Maçonnerie générale",
  },
];

const stats = [
  { label: "Avis clients", value: "42+" },
  { label: "Note moyenne", value: "4.9/5" },
  { label: "Clients satisfaits", value: "100%" },
  { label: "Années d'expérience", value: "15+" },
];

export default function AvisPage() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        badge="Avis clients • Bourgoin-Jallieu • Nord-Isère"
        title="Avis"
        highlight="Clients"
        description="Découvrez les témoignages et avis de clients ayant fait confiance à DZ Maçonnerie & Terrassement pour leurs travaux de maçonnerie, terrassement, rénovation et extension maison en Isère."
        image="/images/realisations/chantier_maçonnerie.avif"
        imageAlt="Avis clients DZ Maçonnerie & Terrassement"
        primaryButtonText="Demander un devis"
        primaryButtonHref="/contact"
        secondaryButtonText="06 88 14 42 57"
        secondaryButtonHref="tel:+33688144257"
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
      {/* Stats */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="text-center p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-primary-600 hover:bg-primary-50 transition-all"
              >
                <p className="text-4xl font-bold text-primary-600 mb-2">
                  {stat.value}
                </p>
                <p className="text-gray-700 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Rating Overview */}
          <div className="bg-primary-50 p-8 rounded-xl border border-primary-200">
            <div className="flex items-center gap-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-3xl font-bold text-gray-900">4.9/5</p>
                <p className="text-gray-600 mt-1">basé sur 42 avis</p>
              </div>
              <div className="flex-1">
                <p className="text-gray-700 leading-relaxed">
                  Nos clients nous font confiance pour la qualité de notre
                  travail, notre professionnalisme et notre écoute. Chaque avis
                  positif nous encourage à continuer à fournir un service
                  d'excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <h2 className="heading-md mb-12 text-center">
            Témoignages de nos clients
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-200"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{review.text}"
                </p>

                {/* Author Info */}
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-gray-900">{review.name}</p>
                  <p className="text-sm text-gray-600">{review.city}</p>
                  <p className="text-xs text-primary-600 font-medium mt-2">
                    {review.service}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <h2 className="heading-md mb-12 text-center">
            Pourquoi nos clients nous choisissent
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Professionnalisme",
                desc: "Une équipe qualifiée, expérimentée et courtoise qui traite chaque projet avec sérieux.",
              },
              {
                title: "Qualité",
                desc: "Un travail soigné et une garantie décennale qui vous assurent la tranquillité d'esprit.",
              },
              {
                title: "Fiabilité",
                desc: "Respect des délais, du budget et une communication claire du début à la fin.",
              },
              {
                title: "Expertise",
                desc: "Plus de 10 ans d'expérience dans le bâtiment et les travaux de maçonnerie.",
              },
              {
                title: "Écoute",
                desc: "Nous écoutons vos besoins et adaptons nos solutions à votre vision et votre budget.",
              },
              {
                title: "Transparence",
                desc: "Devis gratuits sans engagement et pas de frais cachés. Vous savez à quoi vous attendre.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-primary-600 hover:bg-primary-50 transition-all"
              >
                <h3 className="font-semibold text-gray-900 mb-3 text-lg">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-50">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="heading-md mb-6">Vous aussi, testez nos services</h2>
          <p className="text-lg text-gray-700 mb-8">
            Rejoignez les centaines de clients satisfaits qui ont fait confiance
            à DZ Maçonnerie & Terrassement. Contactez-nous pour un devis gratuit
            et sans engagement.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Demander un devis <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <a
              href="tel:+33688144257"
              className="btn-secondary border-primary-600 text-primary-600"
            >
              Appeler : 06 88 14 42 57
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="hero-gradient py-16 md:py-24 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Prêt à faire confiance à nos services ?
          </h2>
          <p className="text-xl text-primary-50 mb-8 max-w-2xl mx-auto">
            Rejoignez les clients satisfaits de DZ Maçonnerie & Terrassement
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
