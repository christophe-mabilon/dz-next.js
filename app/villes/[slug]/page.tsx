import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { cities, getCityBySlug } from "@/data/cities";
import { services } from "@/data/services";
import {
  generateMetadata as generatePageMetadata,
  generateLocalBusinessSchema,
} from "@/lib/seo";
import { siteConfig } from "@/data/config";

interface CityPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return cities.map((city) => ({
    slug: city.slug,
  }));
}

export async function generateMetadata(
  props: CityPageProps,
): Promise<Metadata> {
  const { slug } = await props.params;
  const city = getCityBySlug(slug);

  if (!city) {
    return {};
  }

  return generatePageMetadata(
    `Maçonnerie & Terrassement à ${city.name} (${city.zipCode}) | DZ Maçonnerie`,
    `Expert en maçonnerie générale, rénovation et terrassement à ${city.name}. Devis gratuit, garantie décennale.`,
    `/villes/${city.slug}`,
    `${siteConfig.siteUrl}/og-city.jpg`,
  );
}

export default async function CityPage(props: CityPageProps) {
  const { slug } = await props.params;
  const city = getCityBySlug(slug);

  if (!city) {
    notFound();
  }

  return (
    <>
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocalBusinessSchema()),
        }}
      />

      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-primary-600 hover:text-primary-700">
              Accueil
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-700 font-medium">{city.name}</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden py-20 md:py-32 text-white">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <MapPin className="w-5 h-5" />
              <span className="text-primary-100">
                {city.zipCode} - {city.region}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Maçonnerie à {city.name}
            </h1>
            <p className="text-xl text-primary-50">
              Services professionnels de maçonnerie générale, rénovation,
              extension et terrassement à {city.name}. Plus de 15 ans
              d'expertise au service de vos projets.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-3xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Maçon expert à {city.name}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              DZ Maçonnerie & Terrassement est votre partenaire de confiance
              pour tous vos projets de maçonnerie à {city.name} ({city.zipCode}
              ). Basés à Artas, nous intervenons dans la région {
                city.region
              }{" "}
              avec une équipe de professionnels qualifiés et expérimentés.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Depuis plus de 10 ans, nous réalisons des projets de construction,
              rénovation et extension pour des particuliers et des
              professionnels. Chaque chantier est suivi avec rigueur pour
              garantir votre satisfaction.
            </p>
          </div>

          {/* Services in this city */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Services à {city.name}
            </h2>
            <p className="text-gray-600 mb-6">
              Nous proposons une gamme complète de services maçonnerie adaptés à
              vos besoins à {city.name}.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}/${city.slug}`}
                  className="group p-4 border border-gray-200 rounded-lg hover:border-primary-600 hover:bg-primary-50 transition-all"
                >
                  <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors mb-2">
                    {service.name}
                  </h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Pourquoi nous choisir à {city.name} ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Expertise locale",
                  desc: "Nous connaissons parfaitement la région et ses spécificités",
                },
                {
                  title: "Professionnalisme",
                  desc: "Équipe qualifiée avec garantie décennale",
                },
                {
                  title: "Réactivité",
                  desc: "Intervention rapide à {city.name} et ses environs",
                },
                {
                  title: "Transparence",
                  desc: "Devis gratuit et sans engagement",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-primary-600 hover:bg-primary-50 transition-all"
                >
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Service Area */}
          <div className="bg-primary-50 p-8 rounded-xl border border-primary-200 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Zone d'intervention
            </h2>
            <p className="text-gray-700 mb-4">
              Basés à Artas, nous intervenons à {city.name} et dans toute la
              région {city.region}.
            </p>
            <p className="text-gray-700">
              <strong>Code postal :</strong> {city.zipCode}
              <br />
              <strong>Région :</strong> {city.region}
            </p>
          </div>

          {/* FAQ */}
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Questions fréquentes
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Intervenez-vous à {city.name} ?
                </h3>
                <p className="text-gray-700">
                  Oui, {city.name} est dans notre zone d'intervention. Nous y
                  réalisons régulièrement des chantiers de maçonnerie générale,
                  rénovation et extension.
                </p>
              </div>
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Quel est le coût d'une intervention ?
                </h3>
                <p className="text-gray-700">
                  Le coût dépend de votre projet. Nous vous proposerons un devis
                  détaillé et personnalisé lors d'une visite gratuite.
                </p>
              </div>
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Comment prendre contact ?
                </h3>
                <p className="text-gray-700">
                  Vous pouvez nous appeler au 06 88 14 42 57 ou remplir notre
                  formulaire de contact. Nous vous répondons sous 24h.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="section-padding bg-gradient-to-r from-primary-50 to-primary-100">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-white p-8 rounded-xl border-2 border-primary-200 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Vous avez un projet à {city.name} ?
            </h2>
            <p className="text-gray-700 mb-8">
              Contactez DZ Maçonnerie pour un devis gratuit. Notre équipe vous
              répondra sous 24h.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary">
                Demander un devis <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <a
                href="tel:+33688144257"
                className="btn-secondary border-primary-600 text-primary-600"
              >
                <Phone className="w-4 h-4 mr-2" />
                06 88 14 42 57
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="hero-gradient py-16 md:py-24 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Maçon professionnel à {city.name}
          </h2>
          <p className="text-xl text-primary-50 mb-8 max-w-2xl mx-auto">
            DZ Maçonnerie réalise tous vos projets avec expertise et garantie
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
