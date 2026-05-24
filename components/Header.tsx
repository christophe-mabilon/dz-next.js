"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

import {
  Menu,
  X,
  Phone,
  MapPin,
  ArrowRight,
  Facebook,
  Star,
} from "lucide-react";

import { siteConfig } from "@/data/config";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  const { business } = siteConfig;

  const isActive = (href: string) => pathname === href;

  const navItems = [
    { href: "/", label: "Accueil" },
    { href: "/services", label: "Services" },
    { href: "/realisations", label: "Réalisations" },
    { href: "/avis", label: "Avis clients" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* TOP BAR */}
      <div className="hidden bg-primary-600 text-white md:block">
        <div className="px-3 mx-auto flex items-center justify-between py-2 text-sm">
          {/* LEFT */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />

              <span>
                Maçon à {business.city} • {business.region}
              </span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-6">
            <span>Devis gratuit sous 24h</span>

            {/* FACEBOOK */}
            {business.socialProfiles.facebook && (
              <Link
                href={business.socialProfiles.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook DZ Maçonnerie"
                className="transition hover:text-primary-100"
              >
                <Facebook className="h-4 w-4" />
              </Link>
            )}

            {/* GOOGLE */}
            {business.socialProfiles.google && (
              <Link
                href={business.socialProfiles.google}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Avis Google DZ Maçonnerie"
                className="transition hover:text-primary-100"
              >
                <Star className="h-4 w-4" />
              </Link>
            )}

            {/* PHONE */}
            <a
              href="/contact"
              className="font-semibold transition hover:text-primary-100"
            >
              {business.phone.replace("+33", "0")}
            </a>
          </div>
        </div>
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-gray-950/95 backdrop-blur">
        <div className="mx-auto px-3">
          <div className="flex h-20 items-center justify-between">
            {/* LOGO */}
            <Link href="/" className="flex items-center gap-4">
              <Image
                src="/images/chantiers/DZ-maconnerie_logo1.webp"
                alt={`${business.name} ${business.city}`}
                width={55}
                height={55}
                className="object-contain"
                loading="lazy"
              />

              <div className="hidden sm:block">
                <p className="text-base font-black uppercase tracking-wide text-white">
                  {business.name.split("&")[0]}
                </p>

                <p className="text-sm font-medium text-primary-400">
                  & Terrassement
                </p>
              </div>
            </Link>

            {/* NAVIGATION */}
            <nav className="hidden items-center gap-8 lg:flex">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-sm font-semibold transition ${
                    isActive(item.href)
                      ? "text-white"
                      : "text-gray-300 hover:text-primary-400"
                  }`}
                >
                  {item.label}

                  {isActive(item.href) && (
                    <span className="absolute -bottom-2 left-0 h-[2px] w-full bg-primary-500" />
                  )}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="flex items-center gap-4">
              <a
                href="/contact"
                aria-label={`Téléphoner à ${business.name}`}
                className="hidden items-center gap-3 rounded-xl bg-primary-500 px-5 py-3 font-semibold text-white transition hover:bg-primary-600 md:flex"
              >
                <Phone className="h-4 w-4" />

                <div className="flex flex-col leading-none">
                  <span className="text-xs text-primary-100">
                    Devis gratuit
                  </span>

                  <span>{business.phone.replace("+33", "0")}</span>
                </div>
              </a>

              {/* MOBILE BUTTON */}
              <button
                aria-label="Ouvrir le menu"
                onClick={() => setIsOpen(!isOpen)}
                className="rounded-lg p-2 text-white transition hover:bg-white/10 lg:hidden"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="border-t border-white/10 bg-gray-950 lg:hidden">
            <nav className="mx-3 mx-auto flex flex-col py-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-xl px-4 py-4 text-sm font-medium transition ${
                    isActive(item.href)
                      ? "bg-primary-500/10 text-primary-400"
                      : "text-gray-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              {/* MOBILE SOCIALS */}
              <div className="mt-4 flex items-center justify-center gap-4">
                {business.socialProfiles.facebook && (
                  <Link
                    href={business.socialProfiles.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      rounded-full
                      border border-white/10
                      bg-white/5
                      p-3
                      text-gray-300
                      transition
                      hover:border-primary-400
                      hover:bg-primary-500/10
                      hover:text-white
                    "
                  >
                    <Facebook className="h-5 w-5" />
                  </Link>
                )}

                {business.socialProfiles.google && (
                  <Link
                    href={business.socialProfiles.google}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      rounded-full
                      border border-white/10
                      bg-white/5
                      p-3
                      text-gray-300
                      transition
                      hover:border-primary-400
                      hover:bg-primary-500/10
                      hover:text-white
                    "
                  >
                    <Star className="h-5 w-5" />
                  </Link>
                )}
              </div>

              {/* MOBILE CTA */}
              <a
                href="/contact"
                className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-primary-500 px-6 py-4 font-semibold text-white transition hover:bg-primary-600"
              >
                Appeler maintenant
                <ArrowRight className="h-4 w-4" />
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
