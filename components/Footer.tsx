import Link from "next/link";
import { siteConfig } from "@/data/config";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-dark-800 text-gray-200 border-t border-gray-700">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-white mb-4 text-lg">DZ Maçonnerie</h3>
            <p className="text-sm text-gray-400">
              Expert en maçonnerie générale, rénovation et terrassement depuis
              plus de 15 ans.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services/maconnerie-neuf"
                  className="hover:text-primary-400 transition"
                >
                  Maçonnerie neuf
                </Link>
              </li>
              <li>
                <Link
                  href="/services/renovation-maconnerie"
                  className="hover:text-primary-400 transition"
                >
                  Rénovation
                </Link>
              </li>
              <li>
                <Link
                  href="/services/extension-maison"
                  className="hover:text-primary-400 transition"
                >
                  Extension
                </Link>
              </li>
              <li>
                <Link
                  href="/services/terrassement"
                  className="hover:text-primary-400 transition"
                >
                  Terrassement
                </Link>
              </li>
            </ul>
          </div>

          {/* Zones */}
          <div>
            <h4 className="font-bold text-white mb-4">Zones d'intervention</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/villes/bourgoin-jallieu"
                  className="hover:text-primary-400 transition"
                >
                  Bourgoin-Jallieu
                </Link>
              </li>
              <li>
                <Link
                  href="/villes/vienne"
                  className="hover:text-primary-400 transition"
                >
                  Vienne
                </Link>
              </li>
              <li>
                <Link
                  href="/villes/villefontaine"
                  className="hover:text-primary-400 transition"
                >
                  Villefontaine
                </Link>
              </li>
              <li>
                <Link
                  href="/villes/meyzieu"
                  className="hover:text-primary-400 transition"
                >
                  Meyzieu
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0 text-primary-400" />
                <div>
                  <a
                    href={`tel:${siteConfig.business.phone}`}
                    className="hover:text-primary-400 transition"
                  >
                    {siteConfig.business.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0 text-primary-400" />
                <div>
                  <a
                    href={`mailto:${siteConfig.business.email}`}
                    className="hover:text-primary-400 transition"
                  >
                    {siteConfig.business.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-primary-400" />
                <div className="text-gray-400">
                  {siteConfig.business.address}
                  <br />
                  {siteConfig.business.zipCode} {siteConfig.business.city}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; 2024 {siteConfig.business.name}. Tous droits réservés.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link
              href="/mentions-legales"
              className="hover:text-primary-400 transition"
            >
              Mentions légales
            </Link>
            <Link
              href="/politique-confidentialite"
              className="hover:text-primary-400 transition"
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
