import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { generateMetadata as generatePageMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/config";

export const metadata: Metadata = generatePageMetadata(
  "Conditions d'utilisation | DZ Maçonnerie",
  "Conditions d'utilisation du site DZ Maçonnerie & Terrassement.",
  "/conditions",
  `${siteConfig.siteUrl}/og-conditions.jpg`,
);

export default function ConditionsUtilisation() {
  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-primary-600 hover:text-primary-700">
              Accueil
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-700 font-medium">
              Conditions d'utilisation
            </span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden py-12 md:py-16 text-white">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            Conditions d'utilisation
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-3xl prose prose-lg max-w-none">
          <p className="text-gray-700 mb-6">
            <strong>Dernière mise à jour :</strong> Mai 2024
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Conditions d'utilisation du site
          </h2>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            1. Acceptation des conditions
          </h3>
          <p className="text-gray-700 mb-4">
            En accédant et en utilisant ce site web, vous acceptez sans réserve
            les présentes conditions d'utilisation. Si vous n'acceptez pas ces
            conditions, veuillez ne pas utiliser ce site.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            2. Description du service
          </h3>
          <p className="text-gray-700 mb-4">
            DZ Maçonnerie & Terrassement met à disposition un site web pour :
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>
              Présenter ses services de maçonnerie, rénovation et terrassement
            </li>
            <li>Permettre aux clients de demander des devis</li>
            <li>Partager des informations et des conseils</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            3. Restrictions d'utilisation
          </h3>
          <p className="text-gray-700 mb-4">Vous ne pouvez pas :</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>
              Reproduire, copier ou distribuer le contenu sans autorisation
            </li>
            <li>Utiliser des scripts ou robots pour extraire des données</li>
            <li>Tenter de contourner les mesures de sécurité</li>
            <li>
              Transmettre des virus, codes malveillants ou contenus nuisibles
            </li>
            <li>Harceler, menacer ou abuser d'autres utilisateurs</li>
            <li>Utiliser le site à des fins illégales</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            4. Propriété intellectuelle
          </h3>
          <p className="text-gray-700 mb-4">
            Tout le contenu du site (textes, images, logos, vidéos, etc.) est la
            propriété de DZ Maçonnerie & Terrassement ou de ses fournisseurs de
            contenu et est protégé par les lois sur les droits d'auteur.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            5. Responsabilité utilisateur
          </h3>
          <p className="text-gray-700 mb-4">Vous êtes responsable de :</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>L'exactitude des informations que vous fournissez</li>
            <li>L'utilisation autorisée du site</li>
            <li>
              Les dommages directs ou indirects résultant de votre utilisation
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            6. Limitation de responsabilité
          </h3>
          <p className="text-gray-700 mb-4">
            DZ Maçonnerie & Terrassement décline toute responsabilité pour :
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>Les erreurs ou omissions du contenu</li>
            <li>Les interruptions d'accès au site</li>
            <li>Les pertes de données</li>
            <li>Les dommages indirects ou accessoires</li>
            <li>Les actions de tiers</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            7. Disponibilité du site
          </h3>
          <p className="text-gray-700 mb-4">
            DZ Maçonnerie & Terrassement s'efforce de maintenir le site
            accessible 24h/24. Cependant, nous ne garantissons pas une
            disponibilité continue et déclinons toute responsabilité concernant
            les interruptions dues à maintenance, mises à jour ou causes
            techniques.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            8. Modifications des conditions
          </h3>
          <p className="text-gray-700 mb-4">
            DZ Maçonnerie & Terrassement se réserve le droit de modifier ces
            conditions à tout moment. Votre utilisation continue du site
            signifie votre acceptation des modifications.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            9. Demandes de devis
          </h3>
          <p className="text-gray-700 mb-4">
            Les devis fournis via le site sont des estimations basées sur les
            informations fournies. Ils ne constituent pas une offre
            contractuelle. Un devis détaillé sera établi suite à une visite sur
            site.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            10. Loi applicable
          </h3>
          <p className="text-gray-700">
            Ces conditions sont soumises à la loi française. Tout litige sera
            soumis aux juridictions compétentes d'Isère.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-12 md:py-16 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Besoin de clarifications ?
          </h2>
          <p className="text-primary-50 mb-6">
            Contactez-nous pour toute question
          </p>
          <Link
            href="/contact"
            className="btn-primary bg-white text-primary-600 hover:bg-gray-100"
          >
            Nous contacter <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
