import { notFound } from "next/navigation";
import Link from "next/link";
import HeroSection from "@/components/sections/hero/HeroSection";
import { realisations } from "@/data/realisations";
import { siteConfig } from "@/data/config";

const { business } = siteConfig;

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return realisations.map((r) => ({ slug: r.slug }));
}

export default async function RealisationDetailPage({ params }: Props) {
  const { slug } = await params;
  const realisation = realisations.find((r) => r.slug === slug);

  if (!realisation) notFound();

  return (
    <main className="bg-white">
      {/* HERO */}
      <HeroSection
        badge={`${realisation.service} • ${realisation.city} • ${realisation.date}`}
        title={realisation.title}
        description={realisation.description}
        image={realisation.images[0]?.src || "/images/realisations/chantier_maçonnerie.avif"}
        imageAlt={realisation.images[0]?.alt || realisation.title}
        primaryButtonText="Demander un devis"
        primaryButtonHref="/contact"
        secondaryButtonText={business.phone.replace("+33", "0")}
        secondaryButtonHref="/contact"
        cards={[
          { icon: "hammer", title: realisation.service, description: `Chantier réalisé à ${realisation.city}.` },
          { icon: "shield", title: "Garantie décennale", description: "Travaux assurés et durables." },
          { icon: "star", title: "Devis gratuit", description: "Réponse rapide sous 24h." },
        ]}
      />

      {/* BREADCRUMBS */}
      <nav aria-label="Fil d'Ariane" className="border-b border-gray-100 bg-gray-50 py-3">
        <div className="mx-auto px-3">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-500">
            <li><Link href="/" className="transition hover:text-primary-600 hover:underline">Accueil</Link></li>
            <li className="select-none px-1 text-gray-400">/</li>
            <li><Link href="/realisations" className="transition hover:text-primary-600 hover:underline">Réalisations</Link></li>
            <li className="select-none px-1 text-gray-400">/</li>
            <li className="font-medium text-gray-800" aria-current="page">{realisation.title}</li>
          </ol>
        </div>
      </nav>

      {/* CONTENT */}
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-4xl">
          <p className="text-base leading-relaxed text-gray-700">{realisation.content}</p>

          {realisation.materials && realisation.materials.length > 0 && (
            <div className="mt-10">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">Matériaux utilisés</h2>
              <div className="flex flex-wrap gap-2">
                {realisation.materials.map((m) => (
                  <span key={m} className="rounded-full bg-gray-100 px-4 py-1.5 text-sm font-medium text-gray-700">{m}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
