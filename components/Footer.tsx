import Link from 'next/link';
import { siteConfig } from '@/data/config';
import { Mail, MapPin, Phone, ArrowRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300 border-t border-gray-800">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-white mb-4 text-lg">DZ Maçonnerie</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Expert en maçonnerie générale, rénovation, extension et terrassement depuis plus de 15 ans.
            </p>
            <p className="text-xs text-gray-500 mt-4">Garantie décennale • Devis gratuit</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-gray-400 hover:text-primary-400 transition">Accueil</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-primary-400 transition">Services</Link></li>
              <li><Link href="/realisations" className="text-gray-400 hover:text-primary-400 transition">Réalisations</Link></li>
              <li><Link href="/avis" className="text-gray-400 hover:text-primary-400 transition">Avis clients</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-primary-400 transition">Blog</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/maconnerie-neuf" className="text-gray-400 hover:text-primary-400 transition">Maçonnerie générale</Link></li>
              <li><Link href="/services/renovation-maconnerie" className="text-gray-400 hover:text-primary-400 transition">Rénovation</Link></li>
              <li><Link href="/services/extension-maison" className="text-gray-400 hover:text-primary-400 transition">Extension maison</Link></li>
              <li><Link href="/services/terrassement" className="text-gray-400 hover:text-primary-400 transition">Terrassement</Link></li>
            </ul>
          </div>

          {/* Zones */}
          <div>
            <h4 className="font-semibold text-white mb-4">Zones d'intervention</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/villes/bourgoin-jallieu" className="text-gray-400 hover:text-primary-400 transition">Bourgoin-Jallieu</Link></li>
              <li><Link href="/villes/vienne" className="text-gray-400 hover:text-primary-400 transition">Vienne</Link></li>
              <li><Link href="/villes/artas" className="text-gray-400 hover:text-primary-400 transition">Artas</Link></li>
              <li><Link href="/villes/saint-genis-laval" className="text-gray-400 hover:text-primary-400 transition">Saint-Genis-Laval</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-4 text-sm">
              <div className="flex gap-2">
                <Phone className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Téléphone</p>
                  <a href={`tel:${siteConfig.business.phone}`} className="text-white hover:text-primary-400 transition font-medium">
                    {siteConfig.business.phone}
                  </a>
                </div>
              </div>
              <div className="flex gap-2">
                <Mail className="w-5 h-5 text-primary-500 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Email</p>
                  <a href={`mailto:${siteConfig.business.email}`} className="text-white hover:text-primary-400 transition font-medium text-xs break-all">
                    contact@dzmaconnerie38.fr
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-6">
          <p>&copy; 2024 {siteConfig.business.name}. Tous droits réservés.</p>
          <div className="flex gap-6 flex-wrap justify-center md:justify-end">
            <Link href="/contact" className="text-gray-400 hover:text-primary-400 transition">Contact</Link>
            <Link href="/mentions-legales" className="text-gray-400 hover:text-primary-400 transition">Mentions légales</Link>
            <Link href="/politique-confidentialite" className="text-gray-400 hover:text-primary-400 transition">Confidentialité</Link>
            <Link href="/conditions" className="text-gray-400 hover:text-primary-400 transition">Conditions</Link>
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="bg-primary-600 border-t border-primary-500">
        <div className="container-custom py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-white font-semibold text-lg mb-1">Besoin d'un devis ?</h3>
              <p className="text-primary-100">Contactez-nous, réponse garantie sous 24h</p>
            </div>
            <Link href="/contact" className="flex items-center gap-2 bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition whitespace-nowrap">
              Devis gratuit <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
