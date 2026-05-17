import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { generateMetadata as generatePageMetadata } from '@/lib/seo';
import { siteConfig } from '@/data/config';

export const metadata: Metadata = generatePageMetadata(
  'Mentions légales | DZ Maçonnerie',
  'Mentions légales et informations légales du site DZ Maçonnerie & Terrassement.',
  '/mentions-legales',
  `${siteConfig.siteUrl}/og-mentions.jpg`
);

export default function MentionsLegales() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200">
        <div className="container-custom py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-primary-600 hover:text-primary-700">Accueil</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-700 font-medium">Mentions légales</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden py-12 md:py-16 text-white">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            Mentions légales
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Informations légales du site</h2>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. Identification du responsable du site</h3>
          <p className="text-gray-700 mb-4">
            <strong>Nom du site :</strong> DZ Maçonnerie & Terrassement<br />
            <strong>Propriétaire :</strong> DZ Maçonnerie & Terrassement<br />
            <strong>Statut :</strong> SARL<br />
            <strong>Adresse :</strong> Artas, 38170 Isère<br />
            <strong>Téléphone :</strong> 06 88 14 42 57<br />
            <strong>Email :</strong> contact@dzmaconnerie38.fr
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. Hébergement du site</h3>
          <p className="text-gray-700 mb-4">
            Ce site est hébergé sur la plateforme Vercel Inc.<br />
            Vercel Inc. - 340 S Lemon Ave, Walnut, CA 91789, USA
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. Responsabilité du contenu</h3>
          <p className="text-gray-700 mb-4">
            DZ Maçonnerie & Terrassement s'efforce d'assurer l'exactitude et la mise à jour des informations présentes sur ce site.
            Cependant, DZ Maçonnerie & Terrassement ne peut être tenu responsable des erreurs ou omissions, ainsi que de l'utilisation
            qui pourrait être faite des informations contenues sur ce site.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">4. Propriété intellectuelle</h3>
          <p className="text-gray-700 mb-4">
            L'ensemble du contenu du site DZ Maçonnerie & Terrassement (textes, images, logos, etc.) est protégé par les droits
            d'auteur et les droits de propriété intellectuelle. Toute reproduction, distribution ou transmission du contenu sans
            autorisation écrite préalable est interdite.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">5. Limitation de responsabilité</h3>
          <p className="text-gray-700 mb-4">
            DZ Maçonnerie & Terrassement décline toute responsabilité concernant :
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>Les dommages directs ou indirects résultant de l'accès au site</li>
            <li>Les erreurs ou omissions du contenu</li>
            <li>Les virus ou codes malveillants qui pourraient être transmis</li>
            <li>Les interruptions d'accès au site</li>
            <li>Les pertes de données</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">6. Liens externes</h3>
          <p className="text-gray-700 mb-4">
            Le site peut contenir des liens vers d'autres sites web. DZ Maçonnerie & Terrassement ne contrôle pas le contenu
            de ces sites externes et décline toute responsabilité concernant leur contenu, leur disponibilité ou leur sécurité.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">7. Données personnelles</h3>
          <p className="text-gray-700 mb-4">
            Conformément à la loi Informatique et Libertés du 6 janvier 1978 et au RGPD, vous disposez d'un droit d'accès,
            de rectification et de suppression des données personnelles vous concernant. Pour exercer ces droits, veuillez nous
            contacter à : contact@dzmaconnerie38.fr
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">8. Modifications des mentions légales</h3>
          <p className="text-gray-700 mb-4">
            DZ Maçonnerie & Terrassement se réserve le droit de modifier ces mentions légales à tout moment. Les modifications
            seront effectées en temps réel sur cette page.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">9. Loi applicable</h3>
          <p className="text-gray-700">
            Ces mentions légales sont soumises à la loi française. Tout litige sera soumis aux juridictions compétentes de Isère.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-12 md:py-16 text-white">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Des questions ?</h2>
          <p className="text-primary-50 mb-6">Contactez-nous pour toute information</p>
          <Link href="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
            Nous contacter <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
