import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';
import { generateMetadata as generatePageMetadata } from '@/lib/seo';
import { siteConfig } from '@/data/config';
import { generateProjectSchema } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata(
  'Réalisations et projets | DZ Maçonnerie',
  'Découvrez nos réalisations en maçonnerie, rénovation et terrassement. Projets de qualité dans la région Rhône-Alpes.',
  '/realisations',
  `${siteConfig.siteUrl}/og-realisations.jpg`
);

const projects = [
  {
    title: 'Extension maison à Bourgoin-Jallieu',
    city: 'Bourgoin-Jallieu',
    service: 'Extension maison',
    date: 'Mars 2024',
    description: 'Extension moderne de 40m² avec ouvertures cintrées. Travaux réalisés en respectant les délais et le budget prévu.',
    image: '🏠',
  },
  {
    title: 'Rénovation façade à Vienne',
    city: 'Vienne',
    service: 'Rénovation',
    date: 'Février 2024',
    description: 'Rénovation complète de la façade d\'une maison ancienne. Nettoyage, rejointoiement et peinture haute performance.',
    image: '🏘️',
  },
  {
    title: 'Terrassement à Diémoz',
    city: 'Diémoz',
    service: 'Terrassement',
    date: 'Janvier 2024',
    description: 'Préparation du terrain pour construction d\'une maison. Nivellement et création de fondations sur 200m².',
    image: '⛏️',
  },
  {
    title: 'Maçonnerie générale à Artas',
    city: 'Artas',
    service: 'Maçonnerie générale',
    date: 'Décembre 2023',
    description: 'Construction d\'un mur de soutènement avec fondations renforcées. Travail précis et mise en place de chaînages.',
    image: '🧱',
  },
  {
    title: 'Extension maison à Saint-Genis-Laval',
    city: 'Saint-Genis-Laval',
    service: 'Extension maison',
    date: 'Novembre 2023',
    description: 'Extension d\'une maison existante avec création d\'une terrasse. Intégration harmonieuse au bâtiment principal.',
    image: '🏠',
  },
  {
    title: 'Rénovation maçonnerie à Pont-de-Chéruy',
    city: 'Pont-de-Chéruy',
    service: 'Rénovation',
    date: 'Octobre 2023',
    description: 'Rénovation de murs intérieurs et externes. Enduit de lissage et peinture pour un rendu impeccable.',
    image: '🏘️',
  },
  {
    title: 'Construction garage à Bourgoin-Jallieu',
    city: 'Bourgoin-Jallieu',
    service: 'Maçonnerie générale',
    date: 'Septembre 2023',
    description: 'Construction d\'un garage en parpaings avec dalle béton. Ouvrage conforme aux normes et aux attentes du client.',
    image: '🏠',
  },
  {
    title: 'Terrassement et fondations à Saint-Étienne',
    city: 'Saint-Étienne',
    service: 'Terrassement',
    date: 'Août 2023',
    description: 'Excavation et préparation de fondations pour construction. Mise en place d\'un système de drainage efficace.',
    image: '⛏️',
  },
];

const categories = [
  { name: 'Tous', slug: 'tous' },
  { name: 'Maçonnerie générale', slug: 'maconnerie' },
  { name: 'Extension maison', slug: 'extension' },
  { name: 'Rénovation', slug: 'renovation' },
  { name: 'Terrassement', slug: 'terrassement' },
];

export default function RealisationsPage() {
  return (
    <>
   <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(
      projects.map((project) =>
        generateProjectSchema(
          project.title,
          project.description,
          `${siteConfig.siteUrl}/og-realisations.jpg`,
          project.city,
          `${siteConfig.siteUrl}/realisations`
        )
      )
    ),
  }}
/>
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-autopy-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-primary-600 hover:text-primary-700">Accueil</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-700 font-medium">Réalisations</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden py-20 md:py-32 text-white">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Nos réalisations
          </h1>
          <p className="text-xl text-primary-50 max-w-3xl">
            Découvrez les projets que nous avons menés à bien. Des réalisations de qualité réalisées avec professionnalisme et respect des délais.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="section-padding bg-white border-b border-gray-200">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(cat => (
              <button
                key={cat.slug}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  cat.slug === 'tous'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-primary-50 hover:text-primary-600'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group border border-gray-200 rounded-xl overflow-hidden hover:border-primary-600 hover:shadow-lg transition-all"
              >
                {/* Image Placeholder */}
                <div className="h-40 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center text-5xl group-hover:from-primary-200 group-hover:to-primary-300 transition-all">
                  {project.image}
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-xs text-primary-600 font-semibold mb-2 uppercase">{project.service}</p>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">{project.description}</p>

                  {/* Meta */}
                  <div className="space-y-2 border-t border-gray-100 pt-4">
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <MapPin className="w-4 h-4" />
                      {project.city}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <Calendar className="w-4 h-4" />
                      {project.date}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center">
            <button className="btn-primary">
              Voir plus de réalisations <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <h2 className="heading-md mb-12 text-center">Notre expérience</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Projets réalisés', value: '200+' },
              { label: 'Clients satisfaits', value: '400+' },
              { label: 'Années d\'expérience', value: '15+' },
              { label: 'Note moyenne', value: '4.9/5' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center p-6 bg-white rounded-xl border border-gray-200 hover:border-primary-600 hover:shadow-lg transition-all">
                <p className="text-3xl font-bold text-primary-600 mb-2">{stat.value}</p>
                <p className="text-gray-700 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Work Stands Out */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <h2 className="heading-md mb-12 text-center">Qualité garantie</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Professionnalisme',
                desc: 'Chaque réalisation est menée par une équipe expérimentée qui maîtrise tous les aspects de la maçonnerie.',
              },
              {
                title: 'Précision',
                desc: 'Nous respectons scrupuleusement les plans et les normes de construction pour un résultat impeccable.',
              },
              {
                title: 'Fiabilité',
                desc: 'Garantie décennale sur tous nos travaux et respect strict des délais convenus.',
              },
            ].map((item, idx) => (
              <div key={idx} className="p-8 bg-primary-50 rounded-xl border border-primary-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="hero-gradient py-16 md:py-24 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Votre projet mérite notre expertise
          </h2>
          <p className="text-xl text-primary-50 mb-8 max-w-2xl mx-auto">
            Découvrez comment DZ Maçonnerie peut transformer votre vision en réalité
          </p>
          <Link href="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
            Demander un devis <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
