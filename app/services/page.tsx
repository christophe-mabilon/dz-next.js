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
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container-custom py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-primary-600 hover:text-primary-700">
              Accueil
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-700">Services</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="container-custom">
          <h1 className="heading-lg mb-4">Nos services maçonnerie</h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            Découvrez la gamme complète de services de DZ Maçonnerie &
            Terrassement. De la maçonnerie générale à la rénovation, nous
            réalisons tous vos projets.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.slug}
                className="flex flex-col p-8 border border-gray-200 rounded-xl hover:border-primary-600 hover:shadow-lg transition-all group"
              >
                <div className="flex-1">
                  <h2 className="heading-sm mb-3 group-hover:text-primary-600 transition-colors">
                    {service.name}
                  </h2>
                  <p className="text-gray-600 mb-6 flex-1">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-3">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700 transition-colors"
                  >
                    En savoir plus <ArrowRight className="w-4 h-4" />
                  </Link>

                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-xs text-gray-500 mb-3">
                      Intervention dans :
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Link
                        href={`/services/${service.slug}/bourgoin-jallieu`}
                        className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded hover:bg-primary-100 hover:text-primary-700 transition"
                      >
                        Bourgoin-Jallieu
                      </Link>
                      <Link
                        href={`/services/${service.slug}/vienne`}
                        className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded hover:bg-primary-100 hover:text-primary-700 transition"
                      >
                        Vienne
                      </Link>
                      <span className="text-xs px-2 py-1 text-gray-500">
                        +4 villes
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-md mb-12 text-center">Services détaillés</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, idx) => (
              <div key={service.slug} className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {service.name}
                </h3>
                <p className="text-gray-700">{service.longDescription}</p>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700"
                >
                  Voir les détails <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-16 md:py-24 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-4 text-white">
            Vous avez un projet en vue ?
          </h2>
          <p className="text-xl text-primary-50 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour un devis gratuit adapté à vos besoins.
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
