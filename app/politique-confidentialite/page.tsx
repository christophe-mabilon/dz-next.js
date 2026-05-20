import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { generateMetadata as generatePageMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/config";

export const metadata: Metadata = generatePageMetadata(
  "Politique de confidentialité | DZ Maçonnerie",
  "Politique de confidentialité et protection des données personnelles de DZ Maçonnerie & Terrassement.",
  "/politique-confidentialite",
  `${siteConfig.siteUrl}/og-privacy.jpg`,
);

export default function PolitiqueConfidentialite() {
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
              Politique de confidentialité
            </span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden py-12 md:py-16 text-white">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            Politique de confidentialité
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
            Politique de confidentialité et protection des données
          </h2>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            1. Introduction
          </h3>
          <p className="text-gray-700 mb-4">
            DZ Maçonnerie & Terrassement ("nous", "notre", "nos") est engagée à
            protéger votre vie privée et à respecter les dispositions du
            Règlement Général sur la Protection des Données (RGPD) et de la loi
            française Informatique et Libertés.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            2. Données personnelles collectées
          </h3>
          <p className="text-gray-700 mb-4">
            Nous collectons les données personnelles suivantes :
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>
              <strong>Informations de contact :</strong> nom, prénom, email,
              téléphone, adresse
            </li>
            <li>
              <strong>Informations de projet :</strong> description du projet,
              localisation, dates
            </li>
            <li>
              <strong>Données de navigation :</strong> adresse IP, type de
              navigateur, pages visitées, durée de visite
            </li>
            <li>
              <strong>Cookies :</strong> identifiants pour améliorer votre
              expérience
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            3. Utilisation des données
          </h3>
          <p className="text-gray-700 mb-4">
            Vos données sont utilisées pour :
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>Traiter votre demande de devis ou de contact</li>
            <li>
              Envoyer des confirmations et des mise à jour concernant votre
              demande
            </li>
            <li>Améliorer et optimiser notre site web</li>
            <li>
              Vous envoyer des informations marketing (avec votre consentement)
            </li>
            <li>Respecter nos obligations légales</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            4. Base légale du traitement
          </h3>
          <p className="text-gray-700 mb-4">
            Le traitement de vos données personnelles est basé sur :
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>Votre consentement explicite (pour les emails marketing)</li>
            <li>L'exécution d'un contrat (traitement de votre demande)</li>
            <li>Nos obligations légales</li>
            <li>Nos intérêts légitimes (amélioration du site, sécurité)</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            5. Durée de conservation
          </h3>
          <p className="text-gray-700 mb-4">
            Vos données personnelles sont conservées pendant la durée nécessaire
            au traitement de votre demande, puis supprimées ou archivées selon
            nos obligations légales (généralement 3 années).
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            6. Partage des données
          </h3>
          <p className="text-gray-700 mb-4">
            Vos données ne sont pas partagées avec des tiers, sauf :
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>Si la loi l'exige</li>
            <li>Avec nos prestataires techniques (hébergement, email, etc.)</li>
            <li>Avec votre consentement explicite</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            7. Cookies et suivi
          </h3>
          <p className="text-gray-700 mb-4">
            Nous utilisons des cookies pour améliorer votre expérience du site.
            Vous pouvez contrôler les cookies via les paramètres de votre
            navigateur. Certains cookies sont essentiels au fonctionnement du
            site.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            8. Vos droits
          </h3>
          <p className="text-gray-700 mb-4">
            Conformément au RGPD, vous disposez des droits suivants :
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>
              <strong>Droit d'accès :</strong> accéder à vos données
              personnelles
            </li>
            <li>
              <strong>Droit de rectification :</strong> corriger vos données
              inexactes
            </li>
            <li>
              <strong>Droit à l'effacement :</strong> demander la suppression de
              vos données
            </li>
            <li>
              <strong>Droit à la limitation :</strong> limiter le traitement de
              vos données
            </li>
            <li>
              <strong>Droit à la portabilité :</strong> recevoir vos données
              dans un format lisible
            </li>
            <li>
              <strong>Droit d'opposition :</strong> vous opposer au traitement
              de vos données
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            9. Sécurité des données
          </h3>
          <p className="text-gray-700 mb-4">
            Nous mettons en place des mesures techniques et organisationnelles
            pour protéger vos données contre tout accès, modification ou
            divulgation non autorisée. Cependant, aucun système n'est 100%
            sécurisé.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            10. Contact et exercice de vos droits
          </h3>
          <p className="text-gray-700 mb-4">
            Pour exercer vos droits ou si vous avez des questions concernant
            cette politique, contactez-nous :
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Email :</strong> contact@dzmaconnerie38.fr
            <br />
            <strong>Adresse :</strong> Artas, 38170 Isère
            <br />
            <strong>Téléphone :</strong> 06 88 14 42 57
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
            11. Modifications de cette politique
          </h3>
          <p className="text-gray-700">
            Nous nous réservons le droit de modifier cette politique de
            confidentialité à tout moment. Les modifications seront mises à jour
            sur cette page avec la date de dernière modification.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient py-12 md:py-16 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Avez-vous des questions ?
          </h2>
          <p className="text-primary-50 mb-6">Nous sommes là pour vous aider</p>
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
