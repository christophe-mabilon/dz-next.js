"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Phone, MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

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
      <div className="hidden md:block bg-primary-600 text-white">
        <div className="container mx-auto flex items-center justify-between py-2 text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Maçon à Bourgoin-Jallieu • Isère</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <span>Devis gratuit sous 24h</span>

            <a
              href="tel:0688144257"
              className="font-semibold hover:text-primary-100"
            >
              06 88 14 42 57
            </a>
          </div>
        </div>
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-gray-950/95 backdrop-blur">
        <div className="container mx-auto">
          <div className="flex h-20 items-center justify-between">
            {/* LOGO */}
            <Link href="/" className="flex items-center gap-4">
              <Image
                src="/images/chantiers/DZ-maconnerie_logo1.webp"
                alt="DZ Maçonnerie && terassement Artas 38440"
                width={55}
                height={55}
                className="object-contain"
                loading="lazy"
              />
              <div className="hidden sm:block">
                <p className="text-lg font-black uppercase tracking-wide text-white">
                  DZ Maçonnerie
                </p>

                <p className="text-sm font-medium text-primary-400">
                  & Terrassement
                </p>
              </div>
            </Link>

            {/* NAVIGATION */}
            <nav className="hidden lg:flex items-center gap-8">
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
                href="tel:0688144257"
                aria-label="Téléphoner à DZ Maçonnerie"
                className="hidden md:flex items-center gap-3 rounded-xl bg-primary-500 px-5 py-3 font-semibold text-white transition hover:bg-primary-600"
              >
                <Phone className="h-4 w-4" />

                <div className="flex flex-col leading-none">
                  <span className="text-xs text-primary-100">
                    Devis gratuit
                  </span>

                  <span>06 88 14 42 57</span>
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
            <nav className="container mx-auto flex flex-col py-6">
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

              <a
                href="tel:0688144257"
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
