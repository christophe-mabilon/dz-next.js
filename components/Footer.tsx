import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Hammer,
  ShieldCheck,
} from "lucide-react";
import { getRelatedCities } from "@/lib/getRelatedCities";

interface FooterProps {
  currentCitySlug?: string;
}

export function Footer({ currentCitySlug }: FooterProps) {
  return (
    <footer className="bg-gray-950 text-gray-300 border-t border-gray-800">
      {/* MAIN FOOTER */}
      <div className="container mx-auto py-20">
        <div className="grid gap-14 lg:grid-cols-4">
          {/* ENTREPRISE */}
          <div className="lg:col-span-1">
            <h3 className="mb-6 text-2xl font-black text-white">
              DZ MAÇONNERIE &
              <span className="block text-primary-400">TERRASSEMENT</span>
            </h3>

            <p className="mb-6 leading-relaxed text-gray-400">
              Entreprise de maçonnerie générale, terrassement et rénovation à
              Bourgoin-Jallieu et dans toute l'Isère.
            </p>

            <p className="leading-relaxed text-gray-500">
              Plus de 15 ans d'expérience dans les travaux de maçonnerie, dalle
              béton, extension maison, ouverture mur porteur et aménagement
              extérieur.
            </p>

            <div className="mt-8 inline-flex items-center rounded-full bg-primary-500/10 px-4 py-2 text-sm font-semibold text-primary-300 border border-primary-500/20">
              <ShieldCheck className="mr-2 h-4 w-4" />
              Garantie décennale • Devis gratuit
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="mb-6 text-lg font-bold text-white">Nos services</h4>

            <ul className="space-y-4 text-sm">
              <li>
                <Link
                  href="/services/maconnerie-neuf"
                  className="flex items-center gap-2 text-gray-400 transition hover:text-primary-400"
                >
                  <Hammer className="h-4 w-4" />
                  Maçonnerie générale
                </Link>
              </li>

              <li>
                <Link
                  href="/services/terrassement"
                  className="flex items-center gap-2 text-gray-400 transition hover:text-primary-400"
                >
                  <Hammer className="h-4 w-4" />
                  Terrassement
                </Link>
              </li>

              <li>
                <Link
                  href="/services/extension-maison"
                  className="flex items-center gap-2 text-gray-400 transition hover:text-primary-400"
                >
                  <Hammer className="h-4 w-4" />
                  Extension maison
                </Link>
              </li>

              <li>
                <Link
                  href="/services/renovation-maconnerie"
                  className="flex items-center gap-2 text-gray-400 transition hover:text-primary-400"
                >
                  <Hammer className="h-4 w-4" />
                  Rénovation
                </Link>
              </li>

              <li>
                <Link
                  href="/services/dalle-beton"
                  className="flex items-center gap-2 text-gray-400 transition hover:text-primary-400"
                >
                  <Hammer className="h-4 w-4" />
                  Dalle béton
                </Link>
              </li>
            </ul>
          </div>

          {/* ZONES */}
          <div>
            <h4 className="mb-6 text-lg font-bold text-white">
              Nos interventions en Isère
            </h4>

            <ul className="flex flex-wrap gap-3">
              {getRelatedCities()
                .slice(0, 8)
                .map((city) => (
                  <Link
                    key={city.slug}
                    href={`/villes/${city.slug}`}
                    className="
        px-4 py-2
        rounded-full
        bg-white/5
        border border-white/10
        hover:border-primary-400
        hover:bg-primary-500/10
        transition-all
        text-sm
        text-gray-300
        hover:text-white
      "
                  >
                    {city.name}
                  </Link>
                ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="mb-6 text-lg font-bold text-white">Contact</h4>

            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-primary-400" />

                <div>
                  <p className="mb-1 text-sm text-gray-500">Adresse</p>

                  <p className="font-medium text-white">
                    130 sentier du taillis
                  </p>

                  <p className="text-gray-400">38440 Artas</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="mt-1 h-5 w-5 flex-shrink-0 text-primary-400" />

                <div>
                  <p className="mb-1 text-sm text-gray-500">Téléphone</p>

                  <a
                    href="tel:+33688144257"
                    className="font-semibold text-white transition hover:text-primary-400"
                  >
                    06.88.14.42.57
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="mt-1 h-5 w-5 flex-shrink-0 text-primary-400" />

                <div>
                  <p className="mb-1 text-sm text-gray-500">Email</p>

                  <a
                    href="mailto:contact@dzmaconnerie38.fr"
                    className="text-sm font-medium text-white transition hover:text-primary-400 break-all"
                  >
                    contact@dzmaconnerie38.fr
                  </a>
                </div>
              </div>

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
          <p className="mx-auto max-w-5xl text-center text-sm leading-relaxed text-gray-500">
            DZ Maçonnerie & Terrassement intervient pour tous vos travaux de
            maçonnerie générale, terrassement, rénovation, dalle béton,
            ouverture mur porteur et extension maison à Bourgoin-Jallieu, Artas,
            Villefontaine, Vienne, L'Isle-d'Abeau et dans toute l'Isère.
          </p>
        </div>

        {/* BOTTOM */}
        <div className="mt-10 flex flex-col items-center justify-between gap-6 border-t border-gray-800 pt-8 text-sm text-gray-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} DZ Maçonnerie & Terrassement - Tous
            droits réservés.
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

            <Link href="/contact" className="transition hover:text-primary-400">
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* CTA BAR */}
      <div className="border-t border-primary-500 bg-primary-600">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-8 md:flex-row">
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
