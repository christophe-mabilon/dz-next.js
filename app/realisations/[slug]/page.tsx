import Link from "next/link";
import { realisations } from "@/data/realisations";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return realisations.map((r) => ({ slug: r.slug }));
}

export default async function RealisationDetailPage({ params }: Props) {
  const { slug } = await params;

  return (
    <main className="bg-white">
      {/* BREADCRUMBS */}
      <nav aria-label="Fil d'Ariane" className="border-b border-gray-100 bg-gray-50 py-3">
        <div className="mx-auto px-3">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-500">
            <li><Link href="/" className="transition hover:text-primary-600 hover:underline">Accueil</Link></li>
            <li className="select-none px-1 text-gray-400">/</li>
            <li><Link href="/realisations" className="transition hover:text-primary-600 hover:underline">Réalisations</Link></li>
            <li className="select-none px-1 text-gray-400">/</li>
            <li className="font-medium text-gray-800" aria-current="page">{slug}</li>
          </ol>
        </div>
      </nav>

      <div className="container mx-auto py-20">
        <h1 className="text-4xl font-bold">Réalisation : {slug}</h1>
      </div>
    </main>
  );
}
