"use client";

import Link from "next/link";
import { useEffect } from "react";
import { Home, RotateCcw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // trace côté client pour diagnostic (visible en console navigateur)
    console.error("Erreur applicative :", error);
  }, [error]);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center lg:px-8">
        <p className="mb-4 text-7xl font-black text-primary-600">500</p>
        <h1 className="mb-4 text-3xl font-bold text-gray-900">
          Une erreur est survenue
        </h1>
        <p className="mx-auto mb-10 max-w-xl text-gray-600">
          Quelque chose s&apos;est mal passé de notre côté. Vous pouvez
          réessayer, ou revenir à l&apos;accueil. Si le problème persiste,
          contactez-nous par téléphone.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-xl bg-primary-600 px-6 py-3 font-semibold text-white transition hover:bg-primary-700"
          >
            <RotateCcw className="h-4 w-4" /> Réessayer
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl border border-primary-600 px-6 py-3 font-semibold text-primary-600 transition hover:bg-primary-50"
          >
            <Home className="h-4 w-4" /> Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </section>
  );
}
