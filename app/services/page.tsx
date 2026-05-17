import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { generateMetadata as generatePageMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/config";

export const metadata: Metadata = generatePageMetadata(
  "Services maçonnerie et terrassement | DZ Maçonnerie",
  "Découvrez tous nos services : maçonnerie générale, rénovation, extension maison, terrassement et plus.",
  "/services",
  `${siteConfig.siteUrl}/og-services.jpg`,
);

export default function ServicesPage() {
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
            <span className="text-gray-700 font-medium">Services</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden py-20 md:py-32 text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-black leading-tight mb-6">
              Nos services de maçonnerie à Bourgoin-Jallieu
            </h1>

            <p className="text-xl text-primary-50 max-w-3xl leading-relaxed">
              DZ Maçonnerie & Terrassement accompagne particuliers et
              professionnels pour tous leurs travaux de maçonnerie générale,
              terrassement, rénovation, dalle béton et extension maison en
              Isère.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-md mb-4">Notre gamme complète</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Chaque service est réalisé avec le même professionnalisme et la
              même attention aux détails
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex flex-col p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-primary-600 hover:bg-primary-50 hover:shadow-lg transition-all"
              >
                <h3 className="font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {service.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4 flex-1">
                  {service.description}
                </p>
                <span className="inline-flex items-center text-primary-600 font-medium text-sm group-hover:gap-2 transition-all">
                  En savoir plus <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-md mb-16 text-center">
            Détail de nos prestations
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, idx) => (
              <div
                key={service.slug}
                className="bg-white p-8 rounded-xl shadow-sm"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.name}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {service.longDescription}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700 hover:gap-3 transition-all"
                >
                  Voir les détails <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-md mb-6">
                Pourquoi faire appel à nos services ?
              </h2>
              <div className="space-y-4">
                {[
                  "Expertise reconnue depuis 15 ans dans le secteur",
                  "Équipe de maçons professionnels qualifiés",
                  "Garantie décennale sur tous les travaux",
                  "Respect rigoureux des délais et budgets",
                  "Devis gratuit et sans engagement",
                  "Suivi du chantier de A à Z",
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary-600"></div>
                    </div>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-100 to-primary-50 rounded-2xl h-96 flex items-center justify-center border border-primary-200">
              <p className="text-center text-primary-700 font-semibold">
                Image services
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero-gradient py-16 md:py-24 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-4 text-white">
            Besoin d'un service spécifique ?
          </h2>
          <p className="text-xl text-primary-50 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour discuter de votre projet et recevoir un devis
            personnalisé
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
