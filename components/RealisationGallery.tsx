"use client";

import { useState } from "react";
import Image from "next/image";
import type { PhotoPhase } from "@/data/realisations";

const PHASE_LABELS: Record<PhotoPhase, string> = {
  avant: "Avant",
  pendant: "Pendant",
  apres: "Après",
};

type Photo = { src: string; alt: string; phase?: PhotoPhase };

export function RealisationGallery({ images }: { images: Photo[] }) {
  const [filter, setFilter] = useState<PhotoPhase | "toutes">("toutes");

  const phases = (["avant", "pendant", "apres"] as PhotoPhase[]).filter((p) =>
    images.some((img) => img.phase === p),
  );
  const visible =
    filter === "toutes" ? images : images.filter((i) => i.phase === filter);

  return (
    <div>
      {/* filtres — seulement si les photos sont phasées */}
      {phases.length > 1 && (
        <div className="mb-6 flex flex-wrap gap-2">
          {(["toutes", ...phases] as const).map((p) => (
            <button
              key={p}
              onClick={() => setFilter(p)}
              className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${
                filter === p
                  ? "bg-primary-600 text-white shadow"
                  : "border border-gray-300 bg-white text-gray-600 hover:border-primary-400 hover:text-primary-600"
              }`}
            >
              {p === "toutes" ? "Toutes" : PHASE_LABELS[p]}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {visible.map((img) => (
          <div
            key={img.src}
            className="group relative aspect-[4/3] overflow-hidden rounded-xl"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            {img.phase && (
              <span className="absolute left-2 top-2 rounded-md bg-gray-900/80 px-2 py-0.5 text-xs font-bold uppercase tracking-wide text-white">
                {PHASE_LABELS[img.phase]}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
