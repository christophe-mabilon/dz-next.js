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

      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="container-custom">
          <div className="breadcrumbs mb-6 text-sm">
            <Link href="/" className="text-primary-600 hover:text-primary-700">Accueil</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/services" className="text-primary-600 hover:text-primary-700">Services</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href={`/services/${service.slug}`} className="text-primary-600 hover:text-primary-700">
              {service.name}
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-700">{cityData.name}</span>
          </div>
          <h1 className="heading-lg mb-4">{service.name} à {cityData.name}</h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            {service.description} dans la région de {cityData.name} ({cityData.zipCode}). Devis gratuit et sans engagement.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {service.name} à {cityData.name} (code postal {cityData.zipCode})
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              DZ Maçonnerie & Terrassement vous propose ses services de {service.name.toLowerCase()} à {cityData.name}.
              Avec plus de 15 ans d'expérience, nous intervenons dans la région {cityData.region} pour tous vos projets de construction et rénovation.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              Pourquoi choisir DZ Maçonnerie pour votre {service.name.toLowerCase()} ?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Expertise reconnue depuis plus de 15 ans</li>
              <li>Équipe de professionnels qualifiés</li>
              <li>Garantie décennale sur tous nos travaux</li>
              <li>Respect strict des délais et du budget</li>
              <li>Devis gratuit sans engagement</li>
              <li>Intervention rapide sur {cityData.name}</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              Nos services dans la région de {cityData.name}
            </h3>
            <p className="text-gray-700">
              Nous proposons une gamme complète de services incluant {service.name.toLowerCase()} et l'ensemble de nos prestations maçonnerie.
              Chaque projet est unique et nous adaptons nos solutions à vos besoins spécifiques.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              Zone d'intervention
            </h3>
            <p className="text-gray-700">
              Basés à Artas, nous intervenons à {cityData.name} et dans toute la région {cityData.region}.
              Notre proximité nous permet une réactivité optimale et un suivi de chantier de qualité.
            </p>
          </div>

          {/* CTA Box */}
          <div className="bg-primary-50 p-8 rounded-xl border border-primary-200 mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Vous avez un projet de {service.name.toLowerCase()} à {cityData.name} ?
            </h3>
            <p className="text-gray-700 mb-6">
              Contactez-nous pour un devis gratuit. Réponse garantie sous 24h.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary">
                Demander un devis <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <a href="tel:0688144257" className="btn-secondary border-primary-600 text-primary-600">
                06 88 14 42 57
              </a>
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-gray-50 p-8 rounded-xl">
            <h2 className="heading-sm mb-6">Questions fréquentes sur {service.name.toLowerCase()} à {cityData.name}</h2>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Proposez-vous la {service.name.toLowerCase()} à {cityData.name} ?
                </h4>
                <p className="text-gray-600">
                  Oui, nous proposons tous nos services incluant la {service.name.toLowerCase()} à {cityData.name} et dans toute la région.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Quel est le délai d'intervention à {cityData.name} ?</h4>
                <p className="text-gray-600">
                  Nous pouvons intervenir rapidement à {cityData.name}. Les délais exacts vous seront communiqués lors de la visite.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Êtes-vous assurés pour cette prestation ?</h4>
                <p className="text-gray-600">
                  Oui, nous disposons d'une garantie décennale et d'une assurance responsabilité civile pour tous nos travaux.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero-gradient py-16 md:py-24 text-white">
        <div className="container-custom text-center">
          <h2 className="heading-md mb-4 text-white">
            Besoin d'un expert en {service.name.toLowerCase()} à {cityData.name} ?
          </h2>
          <p className="text-xl text-primary-50 mb-8">
            Contactez DZ Maçonnerie dès aujourd'hui pour votre devis gratuit
          </p>
          <Link href="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
            Demander un devis <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
