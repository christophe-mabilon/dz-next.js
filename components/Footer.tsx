import Link from "next/link";
import { formatPhone } from "@/lib/format";
import { SafeEmail } from "@/components/SafeEmail";
import {
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Hammer,
  ShieldCheck,
} from "lucide-react";

import { cities } from "@/data/cities";
import { services } from "@/data/services";
import { siteConfig } from "@/data/config";

// grandes villes stratégiques du secteur (mêmes liens sur tout le site) :
// l'Isère (marché cœur) d'abord, puis les grandes villes du Rhône
const footerCities = cities
  .filter((c) => c.featured)
  .sort(
    (a, b) =>
      Number(b.department === "38") - Number(a.department === "38") ||
      (b.population ?? 0) - (a.population ?? 0),
  )
  .slice(0, 8);

export function Footer() {
  const { business } = siteConfig;

  return (
    <footer className="border-t border-gray-800 bg-gray-950 text-gray-300">
      {/* MAIN FOOTER */}
      <div className="px-3 mx-auto py-20">
        <div className="grid gap-14 lg:grid-cols-4">
          {/* ENTREPRISE */}
          <div className="lg:col-span-1">
            <h3 className="mb-6 text-2xl font-black text-white">
              DZ MAÇONNERIE &
              <span className="block text-primary-400">TERRASSEMENT</span>
            </h3>

            <p className="mb-6 leading-relaxed text-white-400">
              Entreprise de maçonnerie générale, terrassement et rénovation à{" "}
              {business.city} et dans toute l&apos;Isère.
            </p>

            <p className="leading-relaxed text-white-500">
              Plus de 10 ans d&apos;expérience dans les travaux de maçonnerie,
              dalle béton, extension maison, ouverture mur porteur et
              aménagement extérieur.
            </p>

            <div className="mt-8 inline-flex items-center rounded-full border border-primary-500/20 bg-primary-500/10 px-4 py-2 text-sm font-semibold text-primary-300">
              <ShieldCheck className="mr-2 h-4 w-4" />
              Garantie décennale • Devis gratuit
            </div>

            <ul className="mt-6 space-y-3 text-sm">
              <li>
                <Link
                  href="/a-propos"
                  className="inline-flex items-center gap-2 text-white-400 transition hover:text-primary-400"
                >
                  <ArrowRight className="h-4 w-4" />
                  À propos de l&apos;entreprise
                </Link>
              </li>
              <li>
                <Link
                  href="/realisations"
                  className="inline-flex items-center gap-2 text-white-400 transition hover:text-primary-400"
                >
                  <ArrowRight className="h-4 w-4" />
                  Nos réalisations
                </Link>
              </li>
              <li>
                <Link
                  href="/avis"
                  className="inline-flex items-center gap-2 text-white-400 transition hover:text-primary-400"
                >
                  <ArrowRight className="h-4 w-4" />
                  Avis de nos clients
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-white-400 transition hover:text-primary-400"
                >
                  <ArrowRight className="h-4 w-4" />
                  Guides et conseils
                </Link>
              </li>
              <li>
                <Link
                  href="/partenaires"
                  className="inline-flex items-center gap-2 text-white-400 transition hover:text-primary-400"
                >
                  <ArrowRight className="h-4 w-4" />
                  Nos entreprises partenaires
                </Link>
              </li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="mb-6 text-base font-bold text-white">
              Nos services
            </h4>

            <ul className="space-y-4 text-sm">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="flex items-center gap-2 text-white-400 transition hover:text-primary-400"
                  >
                    <Hammer className="h-4 w-4 flex-shrink-0" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>

            <p className="mt-5">
              <Link
                href="/services"
                className="inline-flex items-center gap-1 text-sm text-primary-400 transition hover:text-primary-300"
              >
                Tous nos services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </p>
          </div>

          {/* ZONES */}
          <div>
            <h4 className="mb-6 text-base font-bold text-white">
              Nos principales zones d&apos;intervention
            </h4>

            <ul className="flex flex-wrap gap-3">
              {footerCities.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/villes/${city.slug}`}
                    className="
                      rounded-full
                      border border-white/10
                      bg-white/5
                      px-4 py-2
                      text-sm
                      text-gray-300
                      transition-all
                      hover:border-primary-400
                      hover:bg-primary-500/10
                      hover:text-white
                    "
                  >
                    {city.name}
                  </Link>
                ))}
            </ul>

            <p className="mt-5">
              <Link
                href="/villes"
                className="inline-flex items-center gap-1 text-sm text-primary-400 transition hover:text-primary-300"
              >
                Voir les {cities.length} communes couvertes
                <ArrowRight className="h-4 w-4" />
              </Link>
            </p>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="mb-6 text-base font-bold text-white">Contact</h4>

            <div className="space-y-6">
              {/* Adresse */}
              <div className="flex gap-4">
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-primary-400" />

                <div>
                  <p className="mb-1 text-sm text-white-500">Adresse</p>

                  <p className="font-medium text-white">{business.address}</p>

                  <p className="text-white-400">
                    {business.zipCode} {business.city}
                  </p>
                </div>
              </div>

              {/* Téléphone */}
              <div className="flex gap-4">
                <Phone className="mt-1 h-5 w-5 flex-shrink-0 text-primary-400" />

                <div>
                  <p className="mb-1 text-sm text-white-500">Téléphone</p>

                  <a
                    href="/contact"
                    className="font-semibold text-white transition hover:text-primary-400"
                  >
                    {formatPhone(business.phone)}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <Mail className="mt-1 h-5 w-5 flex-shrink-0 text-primary-400" />

                <div>
                  <p className="mb-1 text-sm text-white-500">Email</p>

                  <a
                    href="/contact"
                    className="break-all text-sm font-medium text-white transition hover:text-primary-400"
                  >
                    <SafeEmail />
                  </a>
                </div>
              </div>

              {/* Réseaux sociaux */}
              <div className="flex flex-wrap gap-3 pt-2">
                {business.socialProfiles.facebook && (
                  <Link
                    href={business.socialProfiles.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center
                      rounded-full
                      border border-white/10
                      bg-white/5
                      px-4 py-2
                      text-sm font-medium text-gray-300
                      transition
                      hover:border-primary-400
                      hover:bg-primary-500/10
                      hover:text-white
                    "
                  >
                    Facebook
                  </Link>
                )}

                {business.socialProfiles.google && (
                  <Link
                    href={business.socialProfiles.google}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center
                      rounded-full
                      border border-white/10
                      bg-white/5
                      px-4 py-2
                      text-sm font-medium text-gray-300
                      transition
                      hover:border-primary-400
                      hover:bg-primary-500/10
                      hover:text-white
                    "
                  >
                    Avis Google
                  </Link>
                )}
              </div>

              {/* CTA */}
              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl bg-primary-500 px-6 py-4 font-bold text-white transition hover:bg-primary-600"
              >
                Demander un devis
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* SEO TEXT */}
        <div className="mt-16 border-t border-gray-800 pt-10">
          <p className="mx-auto max-w-12xl text-center text-sm leading-relaxed text-white-500">
            {business.name} intervient pour tous vos travaux de maçonnerie
            générale, terrassement, rénovation, dalle béton, ouverture mur
            porteur et extension maison à Bourgoin-Jallieu, Artas,
            Villefontaine, Vienne, L&apos;Isle-d&apos;Abeau et dans toute
            l&apos;Isère.
          </p>
        </div>

        {/* BOTTOM */}
        <div className="mt-10 flex flex-col items-center justify-between gap-6 border-t border-gray-800 pt-8 text-sm text-white-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} {business.name} - Tous droits réservés.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="/mentions-legales"
              className="transition hover:text-primary-400"
            >
              Mentions légales
            </Link>

            <Link
              href="/politique-confidentialite"
              className="transition hover:text-primary-400"
            >
              Politique de confidentialité
            </Link>

            <Link
              href="/conditions"
              className="transition hover:text-primary-400"
            >
              Conditions
            </Link>

            <Link
              href="/partenaires"
              className="transition hover:text-primary-400"
            >
              Partenaires
            </Link>

            <Link href="/contact" className="transition hover:text-primary-400">
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* CTA BAR */}
      <div className="border-t border-primary-500 bg-primary-600">
        <div className="px-3 mx-auto flex flex-col items-center justify-between gap-4 py-8 md:flex-row">
          <div>
            <h3 className="mb-1 text-xl font-bold text-white">
              Besoin d'un devis pour vos travaux ?
            </h3>

            <p className="text-primary-100">
              Réponse rapide sous 24h pour votre projet de maçonnerie.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center rounded-xl bg-white px-6 py-4 font-bold text-primary-600 transition hover:bg-gray-100"
          >
            Devis gratuit
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
