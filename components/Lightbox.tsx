"use client";

import { useCallback, useEffect, useState, type ReactNode } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";

export type LightboxPhoto = { src: string; alt: string; label?: string };

/** Visionneuse plein écran : navigation clavier/flèches, clic fond ou Échap pour fermer. */
export function Lightbox({
  photos,
  index,
  onClose,
  onIndexChange,
}: {
  photos: LightboxPhoto[];
  index: number;
  onClose: () => void;
  onIndexChange: (i: number) => void;
}) {
  const prev = useCallback(
    () => onIndexChange((index - 1 + photos.length) % photos.length),
    [index, photos.length, onIndexChange],
  );
  const next = useCallback(
    () => onIndexChange((index + 1) % photos.length),
    [index, photos.length, onIndexChange],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (photos.length > 1 && e.key === "ArrowLeft") prev();
      if (photos.length > 1 && e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next, photos.length]);

  const photo = photos[index];
  if (!photo) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={photo.alt}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-950/95 p-4"
      onClick={onClose}
    >
      <button
        type="button"
        aria-label="Fermer"
        onClick={onClose}
        className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
      >
        <X className="h-6 w-6" />
      </button>

      {photos.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Photo précédente"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 md:left-6"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>
          <button
            type="button"
            aria-label="Photo suivante"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 md:right-6"
          >
            <ChevronRight className="h-7 w-7" />
          </button>
        </>
      )}

      <figure
        className="flex max-h-full w-full max-w-6xl flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-[78vh] w-full">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="95vw"
            className="object-contain"
            priority
          />
          {photo.label && (
            <span className="absolute left-3 top-3 rounded-md bg-gray-900/80 px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-white">
              {photo.label}
            </span>
          )}
        </div>
        <figcaption className="mt-4 max-w-3xl text-center text-sm text-gray-300">
          {photo.alt}
          {photos.length > 1 && (
            <span className="ml-2 text-gray-500">
              {index + 1} / {photos.length}
            </span>
          )}
        </figcaption>
      </figure>
    </div>
  );
}

/**
 * Image cliquable qui s'ouvre en plein écran.
 * `containerClassName` reprend les classes du conteneur (relative + aspect + rounded…).
 */
export function ZoomableImage({
  src,
  alt,
  sizes,
  containerClassName = "relative aspect-[4/3] overflow-hidden rounded-xl",
  imgClassName = "object-cover",
  children,
}: {
  src: string;
  alt: string;
  sizes?: string;
  containerClassName?: string;
  imgClassName?: string;
  children?: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Agrandir : ${alt}`}
        className={`group block w-full cursor-zoom-in ${containerClassName}`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className={`${imgClassName} transition duration-500 group-hover:scale-105`}
        />
        <span className="absolute bottom-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-gray-900/60 text-white opacity-0 transition group-hover:opacity-100">
          <ZoomIn className="h-4 w-4" />
        </span>
        {children}
      </button>
      {open && (
        <Lightbox
          photos={[{ src, alt }]}
          index={0}
          onClose={() => setOpen(false)}
          onIndexChange={() => {}}
        />
      )}
    </>
  );
}
