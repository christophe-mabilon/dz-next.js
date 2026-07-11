import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, Home, MapPin, Hammer, BookOpen } from "lucide-react";
import { cities } from "@/data/cities";
import { services } from "@/data/services";
import { siteConfig } from "@/data/config";

export const metadata: Metadata = {
  title: `Page introuvable | ${siteConfig.siteName}`,
  description:
    "Cette page n'existe pas ou a été déplacée. Retrouvez nos services de maçonnerie et nos zones d'intervention en Nord-Isère.",
  robots: { index: false, follow: true },
};

const topCities = cities
  .filter((c) => c.featured && c.department === "38")
  .slice(0, 5);

export default function NotFound() {
  return (
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center lg:px-8">
        <p className="mb-4 text-7xl font-black text-primary-600">404</p>
        <h1 className="mb-4 text-3xl font-bold text-gray-900">
          Cette page n&apos;existe pas
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-gray-600">
          La page que vous cherchez a peut-être été déplacée ou n&apos;existe
          plus. Pas de panique : voici les accès directs vers l&apos;essentiel.
        </p>

        <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-primary-600 px-6 py-3 font-semibold text-white transition hover:bg-primary-700"
          >
            <Home className="h-4 w-4" /> Retour à l&apos;accueil
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl border border-primary-600 px-6 py-3 font-semibold text-primary-600 transition hover:bg-primary-50"
          >
            Demander un devis <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-8 text-left sm:grid-cols-3">
          <div>
            <h2 className="mb-3 flex items-center gap-2 font-bold text-gray-900">
              <Hammer className="h-4 w-4 text-primary-600" /> Nos services
            </h2>
            <ul className="space-y-2 text-sm">
              {services.slice(0, 5).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-gray-600 transition hover:text-primary-600 hover:underline"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-3 flex items-center gap-2 font-bold text-gray-900">
              <MapPin className="h-4 w-4 text-primary-600" /> Zones
              d&apos;intervention
            </h2>
            <ul className="space-y-2 text-sm">
              {topCities.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/villes/${c.slug}`}
                    className="text-gray-600 transition hover:text-primary-600 hover:underline"
                  >
                    Maçon {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-3 flex items-center gap-2 font-bold text-gray-900">
              <BookOpen className="h-4 w-4 text-primary-600" /> Ressources
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/villes"
                  className="text-gray-600 transition hover:text-primary-600 hover:underline"
                >
                  Toutes les communes ({cities.length})
                </Link>
              </li>
              <li>
                <Link
                  href="/realisations"
                  className="text-gray-600 transition hover:text-primary-600 hover:underline"
                >
                  Nos réalisations
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-600 transition hover:text-primary-600 hover:underline"
                >
                  Guides et prix
                </Link>
              </li>
              <li>
                <Link
                  href="/avis"
                  className="text-gray-600 transition hover:text-primary-600 hover:underline"
                >
                  Avis clients
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
