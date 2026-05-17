import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowRight, CheckCircle, MapPin, Phone, Star } from 'lucide-react';
import { siteConfig } from '@/data/config';
import { services } from '@/data/services';
import { cities } from '@/data/cities';
import { generateMetadata as generatePageMetadata, generateLocalBusinessSchema } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata(
  'Maçon à Artas & Bourgoin-Jallieu | DZ Maçonnerie',
  'Expert en maçonnerie générale, rénovation, extension maison et terrassement. Devis gratuit, garantie décennale.',
  '/',
  `${siteConfig.siteUrl}/og-home.jpg`
);

export default function Home() {
  return (
    <>
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocalBusinessSchema()),
        }}
      />

      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden py-20 md:py-32 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Maçon expert à Artas & Bourgoin-Jallieu
              </h1>
              <p className="text-xl text-primary-50">
                Maçonnerie générale, rénovation, extension et terrassement. Plus de 15 ans d'expertise au service de vos projets.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                  Devis gratuit <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <a href="tel:0688144257" className="btn-secondary border-white text-white hover:bg-white hover:bg-opacity-10">
                  <Phone className="w-4 h-4 mr-2" />
                  06 88 14 42 57
                </a>
              </div>
            </div>
            <div className="relative h-96 md:h-[500px] bg-primary-500 rounded-2xl overflow-hidden">
              {/* Image placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-700 flex items-center justify-center">
                <div className="text-white text-center">
                  <p className="text-lg font-semibold">Image de chantier</p>
                  <p className="text-sm mt-2 text-primary-100">Remplacer par vos photos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-md mb-4">Nos services de maçonnerie</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Une gamme complète de services pour tous vos projets de construction et rénovation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(service => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="p-6 bg-gray-50 rounded-xl card-shadow hover:bg-primary-50 transition-colors group"
              >
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {service.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                <span className="inline-flex items-center text-primary-600 font-medium text-sm group-hover:gap-2 transition-all">
                  En savoir plus <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-md mb-6">Pourquoi nous choisir ?</h2>
              <div className="space-y-4">
                {[
                  'Plus de 15 ans d\'expérience en maçonnerie',
                  'Garantie décennale sur tous les travaux',
                  'Devis gratuit et sans engagement',
                  'Équipe qualifiée et respectueuse',
                  'Respecte des délais et budgets',
                  'Nettoyage du chantier inclus',
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3">
                    <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-primary-100 rounded-2xl h-96 flex items-center justify-center">
              <p className="text-center text-primary-600 font-semibold">Image/vidéo de chantier</p>
            </div>
          </div>
        </div>
      </section>

      {/* Zones d'intervention */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-md mb-4">Zones d'intervention</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nous intervenons dans toute la région Rhône-Alpes
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map(city => (
              <Link
                key={city.slug}
                href={`/villes/${city.slug}`}
                className="p-6 border border-gray-200 rounded-xl hover:border-primary-600 hover:bg-primary-50 transition-all group"
              >
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {city.name}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">{city.zipCode}</p>
                    <p className="text-xs text-gray-500 mt-2">{city.region}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-md mb-4">Avis clients</h2>
            <div className="flex items-center justify-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-lg font-semibold text-gray-900">4.9/5 (42 avis)</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Jean Dupont',
                text: 'Excellent travail, équipe professionnelle et respectueuse. Je recommande vivement !',
              },
              {
                name: 'Marie Martin',
                text: 'Maçon fiable, qui respecte les délais. Extension maison terminée dans les temps.',
              },
              {
                name: 'Pierre Blanc',
                text: 'Devis gratuit clair, pas de surprise. Très satisfait de la rénovation de ma façade.',
              },
            ].map((review, idx) => (
              <div key={idx} className="p-6 bg-white rounded-xl shadow-sm">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{review.text}"</p>
                <p className="font-semibold text-gray-900">{review.name}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/avis" className="btn-primary">
              Voir tous les avis <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero-gradient py-16 md:py-24 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-4 text-white">Vous avez un projet en vue ?</h2>
          <p className="text-xl text-primary-50 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour un devis gratuit et sans engagement. Réponse garantie sous 24h.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
            Demander un devis <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
