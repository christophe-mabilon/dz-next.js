import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, CheckCircle } from "lucide-react";
import { services, getServiceBySlug } from "@/data/services";
import { cities } from "@/data/cities";
import HeroSection from "@/components/sections/hero/HeroSection";
import {
  generateMetadata as generatePageMetadata,
  generateServiceSchema,
  generateBreadcrumbSchema,
} from "@/lib/seo";
import { siteConfig } from "@/data/config";

const { business } = siteConfig;

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata(
  props: ServicePageProps,
): Promise<Metadata> {
  const { slug } = await props.params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {};
  }

  return generatePageMetadata(
    service.name,
    service.description,
    `/services/${service.slug}`,
    service.image || `${siteConfig.siteUrl}/og-service.jpg`,
  );
}

export default async function ServicePage(props: ServicePageProps) {
  const { slug } = await props.params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const breadcrumbs = [
    { name: "Accueil", url: "/" },
    { name: "Services", url: "/services" },
    { name: service.name, url: `/services/${service.slug}` },
  ];

  return (
    <>
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateServiceSchema(
              service.name,
              service.longDescription,
              `${siteConfig.siteUrl}/services/${service.slug}`,
            ),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)),
        }}
      />

      {/* HERO */}
      <HeroSection
        badge={`Services • ${business.city} • Nord-Isère`}
        title={service.name}
        description={service.description}
        image="/images/realisations/artisan-macon-bourgoin-jallieu-terrasse-gres-cerame-dz-maconnerie-terrassement.webp"
        imageAlt={service.name}
        primaryButtonText="Demander un devis"
        primaryButtonHref="/contact"
        secondaryButtonText={business.phone.replace("+33", "0")}
        secondaryButtonHref="/contact"
        cards={[
          {
            icon: "hammer",
            title: "Expertise locale",
            description: "Plus de 10 ans d'expérience en maçonnerie.",
          },
          {
            icon: "shield",
            title: "Garantie décennale",
            description: "Tous nos travaux sont assurés.",
          },
          {
            icon: "star",
            title: "Devis gratuit",
            description: "Réponse rapide sous 24h.",
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
            <li>
              <Link
                href="/services"
                className="transition hover:text-primary-600 hover:underline"
              >
                Services
              </Link>
            </li>
            <li className="select-none px-1 text-gray-400">/</li>
            <li className="font-medium text-gray-800" aria-current="page">
              {service.name}
            </li>
          </ol>
        </div>
      </nav>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-8xl px-6 lg:px-8">
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {service.name}
            </h2>
            <p className="text-gray-700 leading-relaxed text-base">
              {service.longDescription}
            </p>
          </div>

          {/* Benefits */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Avantages de notre service
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
              {[
                "Expertise reconnue depuis 10 ans",
                "Équipe qualifiée et expérimentée",
                "Garantie décennale",
                "Respect des délais et du budget",
                "Nettoyage du chantier inclus",
                "Devis gratuit sans engagement",
              ].map((benefit, idx) => (
                <div
                  key={idx}
                  className="
  inline-flex
  items-center
  gap-3
  rounded-2xl
  border
  border-primary-600
  bg-primary-600
  px-6
  py-4
  font-semibold
  text-white
  shadow-lg
  transition-all
  duration-300
  hover:-translate-y-1
  hover:bg-primary-700
  hover:shadow-2xl
"
                >
                  <CheckCircle className="w-6 h-6 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-white-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cities Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Intervention dans votre région
            </h2>
            <p className="text-gray-600 mb-6">
              Nous intervenons dans plus de {cities.length} villes autour
              d'Artas et Bourgoin-Jallieu
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {cities.slice(0, 9).map((city) => (
                <Link
                  key={city.slug}
                  href={`/services/${service.slug}/${city.slug}`}
                  className="p-3 border border-gray-200 rounded-lg hover:border-primary-600 hover:bg-primary-50 transition-all font-medium text-gray-700 hover:text-primary-600 text-center"
                >
                  {city.name}
                </Link>
              ))}
              <Link
                href="/villes"
                className="p-3 border rounded-2xl border-primary-800  bg-primary-600 hover:bg-primary-700 transition-all font-medium text-white text-center col-span-2 md:col-span-3"
              >
                Voir tous les secteurs d'intervention
              </Link>
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Questions fréquentes
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-3">
                  Quel est le délai de réalisation ?
                </h3>
                <p className="text-gray-700">
                  Le délai dépend de l'importance et la complexité du chantier.
                  Lors de notre visite gratuite, nous vous proposerons un
                  planning détaillé et réaliste pour votre projet.
                </p>
              </div>
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-base font-semibold text-gray-900 mb-3">
                  Disposez-vous d'assurances ?
                </h3>
                <p className="text-gray-700">
                  Oui, nous bénéficions d'une garantie décennale et d'une
                  assurance responsabilité civile professionnelle. Ces
                  certifications garantissent la qualité et la fiabilité de nos
                  prestations.
                </p>
              </div>
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-base font-semibold text-gray-900 mb-3">
                  Puis-je obtenir un devis rapidement ?
                </h3>
                <p className="text-gray-700">
                  Absolument ! Nous répondons à toutes les demandes sous 24h.
                  Une visite gratuite sans engagement peut être organisée selon
                  vos disponibilités.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="section-padding bg-primary-50">
        <div className="mx-auto max-w-8xl px-6 lg:px-8">
          <div className="bg-white p-8 rounded-xl border-2 border-primary-200 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Vous avez un projet de {service.name.toLowerCase()} ?
            </h2>
            <p className="text-gray-700 mb-8">
              Contactez-nous pour un devis gratuit et personnalisé. Notre équipe
              vous répondra sous 24h.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary">
                Demander un devis <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <a
                href="/contact"
                className="btn-secondary border-primary-600 text-primary-600"
              >
                {business.phone.replace("+33", "0")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero-gradient py-16 md:py-24 text-white">
        <div className="mx-auto max-w-8xl px-6 lg:px-8 text-center">
          <h2 className="heading-md mb-4 text-white">
            Besoin d'un expert en {service.name.toLowerCase()} ?
          </h2>
          <p className="text-xl text-primary-50 mb-8 max-w-2xl mx-auto">
            ${business.name} réalise tous vos projets avec professionnalisme et
            garantie
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
