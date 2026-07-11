import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import HeroSection from "@/components/sections/hero/HeroSection";
import { realisations } from "@/data/realisations";
import { siteConfig } from "@/data/config";
import {
  generateMetadata as generatePageMetadata,
  generateRealisationSchema,
  generateBreadcrumbSchema,
} from "@/lib/seo";

const { business } = siteConfig;

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return realisations.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const realisation = realisations.find((r) => r.slug === slug);
  if (!realisation) return {};
  return generatePageMetadata(
    `${realisation.title} | DZ Maçonnerie`,
    realisation.description,
    `/realisations/${slug}`,
  );
}

export default async function RealisationDetailPage({ params }: Props) {
  const { slug } = await params;
  const realisation = realisations.find((r) => r.slug === slug);

  if (!realisation) notFound();

  const galleryImages = realisation.images.slice(1);

  return (
    <main className="bg-white">
      {/* Schema : réalisation (Article + lieu du chantier + galerie) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateRealisationSchema(realisation)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Accueil", url: "/" },
              { name: "Réalisations", url: "/realisations" },
              { name: realisation.title, url: `/realisations/${slug}` },
            ]),
          ),
        }}
      />

      {/* HERO */}
      <HeroSection
        badge={`${realisation.service} • ${realisation.city} • ${realisation.date}`}
        title={realisation.title}
        description={realisation.description}
        image="/images/realisations/artisan-macon-bourgoin-jallieu-terrasse-gres-cerame-dz-maconnerie-terrassement.webp"
        imageAlt={realisation.images[0]?.alt || realisation.title}
        primaryButtonText="Demander un devis"
        primaryButtonHref="/contact"
        secondaryButtonText={business.phone.replace("+33", "0")}
        secondaryButtonHref="/contact"
        cards={[
          {
            icon: "hammer",
            title: realisation.service,
            description: `Chantier réalisé à ${realisation.city}.`,
          },
          {
            icon: "shield",
            title: "Garantie décennale",
            description: "Travaux assurés et durables.",
          },
          {
            icon: "star",
            title: "Devis gratuit",
            description: "Réponse rapide sous 24h.",
          },
        ]}
      />

      {/* BREADCRUMBS */}
      <nav
        aria-label="Fil d'Ariane"
        className="border-b border-gray-100 bg-gray-50 py-3"
      >
        <div className="mx-auto lg:px-8">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-500">
            <li>
              <Link
                href="/"
                className="transition hover:text-primary-600 hover:underline"
              >
                Accueil
              </Link>
            </li>
            <li className="select-none px-1 text-gray-400">/</li>
            <li>
              <Link
                href="/realisations"
                className="transition hover:text-primary-600 hover:underline"
              >
                Réalisations
              </Link>
            </li>
            <li className="select-none px-1 text-gray-400">/</li>
            <li className="font-medium text-gray-800" aria-current="page">
              {realisation.title}
            </li>
          </ol>
        </div>
      </nav>

      {/* GALERIE */}
      {galleryImages.length > 0 && (
        <section className="border-b border-gray-100 bg-gray-50 py-10">
          <div className="mx-auto max-w-8xl px-6 lg:px-8">
            <h2 className="mb-6 text-xl font-bold text-gray-900">
              Photos du chantier
            </h2>
            <div
              className={`grid gap-4 ${galleryImages.length === 1 ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"}`}
            >
              {galleryImages.map((img, i) => (
                <div
                  key={i}
                  className="relative overflow-hidden rounded-2xl aspect-video bg-gray-200"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CONTENT */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-8xl px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            Détails du chantier
          </h2>
          <p className="whitespace-pre-line text-base leading-relaxed text-gray-700">
            {realisation.content}
          </p>

          {realisation.materials && realisation.materials.length > 0 && (
            <div className="mt-10">
              <h2 className="mb-4 text-xl font-bold text-gray-900">
                Matériaux utilisés
              </h2>
              <div className="flex flex-wrap gap-2">
                {realisation.materials.map((m) => (
                  <span
                    key={m}
                    className="rounded-full bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700 border border-primary-200"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="mt-12 rounded-2xl bg-primary-600 p-8 text-white">
            <h2 className="mb-3 text-2xl font-bold">
              Un projet similaire à {realisation.city} ?
            </h2>
            <p className="mb-6 text-primary-100">
              Contactez {business.name} pour un devis gratuit. Réponse sous 24h.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl bg-white px-6 py-3 font-semibold text-primary-700 transition hover:bg-gray-100"
            >
              Demander un devis gratuit →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
