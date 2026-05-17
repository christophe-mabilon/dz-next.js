import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import { services, getServiceBySlug } from '@/data/services';
import { cities } from '@/data/cities';
import { generateMetadata as generatePageMetadata, generateServiceSchema, generateBreadcrumbSchema } from '@/lib/seo';
import { siteConfig } from '@/data/config';

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return services.map(service => ({
    slug: service.slug,
  }));
}

export async function generateMetadata(props: ServicePageProps): Promise<Metadata> {
  const { slug } = await props.params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {};
  }

  return generatePageMetadata(
    service.name,
    service.description,
    `/services/${service.slug}`,
    service.image || `${siteConfig.siteUrl}/og-service.jpg`
  );
}

export default async function ServicePage(props: ServicePageProps) {
  const { slug } = await props.params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const breadcrumbs = [
    { name: 'Accueil', url: '/' },
    { name: 'Services', url: '/services' },
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
              `${siteConfig.siteUrl}/services/${service.slug}`
            )
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)),
        }}
      />

      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container-custom py-4">
          <div className="flex items-center gap-2 text-sm">
            {breadcrumbs.map((crumb, idx) => (
              <div key={crumb.url} className="flex items-center gap-2">
                {idx > 0 && <span className="text-gray-400">/</span>}
                <Link href={crumb.url} className="text-primary-600 hover:text-primary-700">
                  {crumb.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="container-custom">
          <Link href="/services" className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 mb-6">
            <ArrowLeft className="w-4 h-4" />
            Retour aux services
          </Link>
          <h1 className="heading-lg mb-4">{service.name}</h1>
          <p className="text-xl text-gray-700 max-w-3xl">{service.description}</p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <div className="prose prose-lg max-w-none mb-12">
            <p>{service.longDescription}</p>
          </div>

          {/* Services Benefits */}
          <div className="mb-12">
            <h2 className="heading-sm mb-6">Avantages de notre service</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Expertise reconnue depuis 15 ans',
                'Équipe qualifiée et expérimentée',
                'Garantie décennale',
                'Respect des délais et du budget',
                'Nettoyage du chantier inclus',
                'Devis gratuit sans engagement',
              ].map((benefit, idx) => (
                <div key={idx} className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cities */}
          <div className="mb-12">
            <h2 className="heading-sm mb-6">Intervention dans votre région</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {cities.map(city => (
                <Link
                  key={city.slug}
                  href={`/services/${service.slug}/${city.slug}`}
                  className="p-3 border border-gray-200 rounded-lg hover:border-primary-600 hover:bg-primary-50 transition-all text-sm font-medium text-gray-700 hover:text-primary-600"
                >
                  {service.name} à {city.name}
                </Link>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-gray-50 p-8 rounded-xl">
            <h2 className="heading-sm mb-6">Questions fréquentes</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Quel est le délai de réalisation ?</h3>
                <p className="text-gray-600">Le délai dépend de l'importance du chantier. Nous vous proposerons un planning détaillé lors de la visite.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Disposez-vous d'assurances ?</h3>
                <p className="text-gray-600">Oui, nous sommes garantis décennale et responsabilité civile. Nos certifications vous assurent qualité et sérieux.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Puis-je obtenir un devis rapidement ?</h3>
                <p className="text-gray-600">Oui, contactez-nous. Nous répondons sous 24h et proposons des visites sans engagement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-16 md:py-24 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-4 text-white">Vous avez besoin de {service.name.toLowerCase()} ?</h2>
          <p className="text-xl text-primary-50 mb-8">Contactez-nous pour un devis gratuit</p>
          <Link href="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
            Demander un devis <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
