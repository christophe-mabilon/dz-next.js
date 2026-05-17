import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { services, getServiceBySlug } from '@/data/services';
import { cities, getCityBySlug } from '@/data/cities';
import { generateMetadata as generatePageMetadata, generateServiceSchema } from '@/lib/seo';
import { siteConfig } from '@/data/config';

interface CombinedPageProps {
  params: Promise<{
    slug: string;
    city: string;
  }>;
}

export async function generateStaticParams() {
  const params = [];
  for (const service of services) {
    for (const city of cities) {
      params.push({
        slug: service.slug,
        city: city.slug,
      });
    }
  }
  return params;
}

export async function generateMetadata(props: CombinedPageProps): Promise<Metadata> {
  const { slug, city } = await props.params;
  const service = getServiceBySlug(slug);
  const cityData = getCityBySlug(city);

  if (!service || !cityData) {
    return {};
  }

  const title = `${service.name} à ${cityData.name} (${cityData.zipCode})`;
  const description = `${service.name} à ${cityData.name}. Expert maçon du bâtiment. Devis gratuit.`;

  return generatePageMetadata(
    title,
    description,
    `/services/${service.slug}/${cityData.slug}`,
    service.image || `${siteConfig.siteUrl}/og-service.jpg`
  );
}

export default async function CombinedServiceCityPage(props: CombinedPageProps) {
  const { slug, city } = await props.params;
  const service = getServiceBySlug(slug);
  const cityData = getCityBySlug(city);

  if (!service || !cityData) {
    notFound();
  }

  return (
    <>
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateServiceSchema(
              `${service.name} à ${cityData.name}`,
              `Expert en ${service.name.toLowerCase()} à ${cityData.name}`,
              `${siteConfig.siteUrl}/services/${service.slug}/${cityData.slug}`
            )
          ),
        }}
      />

      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200">
        <div className="container-custom py-4">
          <div className="flex items-center gap-2 text-sm flex-wrap">
            <Link href="/" className="text-primary-600 hover:text-primary-700">Accueil</Link>
            <span className="text-gray-400">/</span>
            <Link href="/services" className="text-primary-600 hover:text-primary-700">Services</Link>
            <span className="text-gray-400">/</span>
            <Link href={`/services/${service.slug}`} className="text-primary-600 hover:text-primary-700">
              {service.name}
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-700 font-medium">{cityData.name}</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden py-20 md:py-32 text-white">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            {service.name} à {cityData.name}
          </h1>
          <p className="text-xl text-primary-50 max-w-3xl">
            {service.description} à {cityData.name} ({cityData.zipCode}). Service professionnel avec devis gratuit et garantie décennale.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {service.name} à {cityData.name}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              DZ Maçonnerie & Terrassement vous propose ses services professionnels de {service.name.toLowerCase()} à {cityData.name} ({cityData.zipCode}).
              Avec plus de 15 ans d'expérience dans le bâtiment, nous intervenons dans la région {cityData.region} pour tous vos projets de construction, rénovation et extension.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Pourquoi nous choisir à {cityData.name} ?
              </h3>
              <div className="space-y-4">
                {[
                  'Expertise reconnue depuis 15 ans',
                  'Équipe de maçons professionnels',
                  'Garantie décennale certifiée',
                  'Respect strict des délais',
                  'Devis gratuit sans engagement',
                  'Intervention rapide dans la région',
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary-600"></div>
                    </div>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-primary-50 rounded-xl p-8 border border-primary-200 flex flex-col justify-center">
              <h3 className="text-xl font-semibold text-primary-900 mb-4">
                Nos interventions à {cityData.name}
              </h3>
              <p className="text-gray-700 mb-6">
                Nous réalisons l'ensemble de nos prestations maçonnerie à {cityData.name} et ses environs. Chaque projet est unique et nous adaptons nos solutions à vos besoins spécifiques et votre budget.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Zone d'intervention :</strong> {cityData.name}, {cityData.region}
              </p>
            </div>
          </div>

          {/* CTA Box */}
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 p-8 rounded-xl border border-primary-200 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Vous avez un projet de {service.name.toLowerCase()} à {cityData.name} ?
            </h2>
            <p className="text-gray-700 mb-8">
              Contactez DZ Maçonnerie pour un devis gratuit et personnalisé. Notre équipe vous répond sous 24h.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary">
                Demander un devis <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <a href="tel:+33688144257" className="btn-secondary border-primary-600 text-primary-600 hover:bg-primary-50">
                06 88 14 42 57
              </a>
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Questions fréquentes</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Proposez-vous le service de {service.name.toLowerCase()} à {cityData.name} ?
                </h3>
                <p className="text-gray-700">
                  Oui, nous proposons tous nos services incluant le {service.name.toLowerCase()} à {cityData.name} et dans toute la région {cityData.region}. Notre équipe maîtrise l'ensemble des techniques maçonnerie.
                </p>
              </div>
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Quel est le délai d'intervention à {cityData.name} ?</h3>
                <p className="text-gray-700">
                  Nous pouvons intervenir rapidement à {cityData.name}. Les délais exacts en fonction de votre projet vous seront communiqués lors de notre visite gratuite et sans engagement.
                </p>
              </div>
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Êtes-vous assurés pour cette prestation ?</h3>
                <p className="text-gray-700">
                  Oui, nous disposons d'une garantie décennale et d'une assurance responsabilité civile professionnelle pour tous nos travaux à {cityData.name} et ses environs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="hero-gradient py-16 md:py-24 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Besoin d'un expert en {service.name.toLowerCase()} à {cityData.name} ?
          </h2>
          <p className="text-xl text-primary-50 mb-8 max-w-2xl mx-auto">
            Contactez DZ Maçonnerie dès aujourd'hui. Notre équipe vous reçoit pour un devis gratuit et sans engagement.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
            Demander un devis <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
