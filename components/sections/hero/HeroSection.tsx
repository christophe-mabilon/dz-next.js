"use client";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  Hammer,
  MapPin,
  Phone,
  ShieldCheck,
  Star,
} from "lucide-react";

type HeroSectionProps = {
  badge?: string;
  title: string;
  heightClass?: string;
  highlight?: string;
  description: string;
  image: string;
  imageAlt: string;
  phone?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;

  cards?: {
    icon: "hammer" | "shield" | "star";
    title: string;
    description: string;
  }[];

  overlayOpacity?: string;

  className?: string;
};

function getIcon(icon: string) {
  switch (icon) {
    case "hammer":
      return <Hammer className="mb-3 h-6 w-6 text-primary-300" />;

    case "shield":
      return <ShieldCheck className="mb-3 h-6 w-6 text-primary-300" />;

    case "star":
      return <Star className="mb-3 h-6 w-6 text-primary-300" />;

    default:
      return <Hammer className="mb-3 h-6 w-6 text-primary-300" />;
  }
}

export default function HeroSection({
  badge,
  title,
  highlight,
  description,
  image,
  imageAlt,
  phone = "06 88 14 42 57",
  primaryButtonText = "Demander un devis",
  primaryButtonHref = "/contact",
  secondaryButtonText = "06 88 14 42 57",
  secondaryButtonHref = "tel:+33688144257",

  cards = [
    {
      icon: "shield",
      title: "Garantie décennale",
      description: "Travaux réalisés dans les règles de l’art.",
    },

    {
      icon: "hammer",
      title: "10 ans d’expérience",
      description: "Entreprise spécialisée en maçonnerie générale.",
    },

    {
      icon: "star",
      title: "Devis gratuit",
      description: "Réponse rapide sous 24h pour votre projet.",
    },
  ],
  overlayOpacity = "bg-black/60",
  className = "",
  heightClass = "min-h-[700px] flex items-center",
}: HeroSectionProps) {
  return (
    <section className={`relative overflow-hidden ${className}`}>
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />

        <div className={`absolute inset-0 ${overlayOpacity}`} />
      </div>

      {/* CONTENT */}
      <div className={`relative z-10 container mx-auto px-6 ${heightClass}`}>
        <div className="max-w-4xl">
          {/* BADGE */}
          {badge && (
            <div className="mb-6 inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur">
              <MapPin className="mr-2 h-4 w-4" />

              {badge}
            </div>
          )}

          {/* TITLE */}
          <h1 className="mb-6 text-5xl font-black leading-tight text-white md:text-7xl">
            {title}

            {highlight && (
              <span className="block text-primary-400">{highlight}</span>
            )}
          </h1>

          {/* DESCRIPTION */}
          <p className="mb-8 max-w-2xl text-xl leading-relaxed text-gray-200">
            {description}
          </p>

          {/* BUTTONS */}
          <div className="mb-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href={primaryButtonHref}
              className="inline-flex items-center justify-center rounded-xl bg-primary-500 px-8 py-5 text-lg font-bold text-white transition hover:bg-primary-600"
            >
              {primaryButtonText}

              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <a
              href={secondaryButtonHref}
              className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-8 py-5 text-lg font-bold text-white backdrop-blur transition hover:bg-white/20"
            >
              <Phone className="mr-2 h-5 w-5" />

              {secondaryButtonText || phone}
            </a>
          </div>

          {/* CARDS */}
          {cards.length > 0 && (
            <div className="grid max-w-3xl grid-cols-1 gap-4 md:grid-cols-3">
              {cards.map((card, index) => (
                <div
                  key={`${card.title}-${index}`}
                  className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur"
                >
                  {getIcon(card.icon)}

                  <h2 className="mb-2 font-bold text-white">{card.title}</h2>

                  <p className="text-sm text-gray-300">{card.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
