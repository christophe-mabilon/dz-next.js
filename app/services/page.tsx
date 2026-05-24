import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";

import { services } from "@/data/services";
import { generateMetadata as generatePageMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/config";
import HeroSection from "@/components/sections/hero/HeroSection";

const { business } = siteConfig;

export const metadata: Metadata = generatePageMetadata(
  "Services de maçonnerie à Bourgoin-Jallieu | DZ Maçonnerie",
  "Entreprise de maçonnerie à Bourgoin-Jallieu spécialisée en maçonnerie générale, rénovation, terrassement, dalle béton, piscine béton et extension maison en Isère.",
  "/services",
  `${siteConfig.siteUrl}/og-services.jpg`,
);

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <HeroSection
        badge="Services • Bourgoin-Jallieu • Nord-Isère"
        title="Nos"
        highlight="Services"
        description="${business.name} vous accompagne pour vos travaux de maçonnerie générale, terrassement, dalle béton, rénovation, extension maison et ouverture mur porteur dans toute l’Isère."
        image="/images/realisations/chantier_maçonnerie.avif"
        imageAlt="Services de maçonnerie et terrassement en Nord-Isère"
        primaryButtonText="Demander un devis"
        primaryButtonHref="/contact"
        secondaryButtonText={business.phone.replace("+33", "0")}
        secondaryButtonHref="/contact"
        cards={[
          {
            icon: "hammer",
            title: "Maçonnerie générale",
            description:
              "Travaux de construction, rénovation et extension maison.",
          },

          {
            icon: "shield",
            title: "Travail soigné",
            description: "Prestations réalisées dans les règles de l’art.",
          },

          {
            icon: "star",
            title: "Accompagnement",
            description: "Conseils et devis gratuit pour votre projet.",
          },
        ]}
      />

      {/* INTRO */}
      <section className="bg-white py-16">
        <div className="container mx-auto">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="mb-4 inline-block rounded-full bg-primary-100 px-4 py-2 text-sm font-bold text-primary-700">
                ENTREPRISE DE MAÇONNERIE
              </span>

              <h2 className="mb-6 text-4xl font-black text-gray-900">
                Un artisan maçon à votre écoute
              </h2>

              <div className="space-y-6 leading-relaxed text-gray-600">
                <p>
                  Située à Artas près de Bourgoin-Jallieu, notre entreprise de
                  maçonnerie accompagne ses clients Depuis plus de 10 ans dans
                  leurs projets de construction, rénovation et aménagement
                  extérieur.
                </p>

                <p>
                  Nous réalisons des travaux de maçonnerie générale,
                  terrassement, dalle béton, ouverture mur porteur, piscine
                  béton, extension maison et rénovation dans tout le Nord-Isère.
                </p>

                <p>
                  Chaque chantier est réalisé avec sérieux, professionnalisme et
                  souci du détail afin de garantir des réalisations durables et
                  des finitions soignées.
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Garantie décennale",
                  "Devis gratuit",
                  "Travail soigné",
                  "10 ans d’expérience",
                ].map((item) => (
                  <div key={item} className="flex items-center">
                    <CheckCircle2 className="mr-3 h-5 w-5 text-primary-500" />

                    <span className="font-medium text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src="/images/services/maconnerie-maison.webp"
                alt="Travaux de maçonnerie en Isère"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-4xl font-black text-gray-900">
              Nos prestations de maçonnerie
            </h2>

            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600">
              Découvrez l’ensemble de nos services de maçonnerie, rénovation et
              terrassement à Bourgoin-Jallieu et dans toute l’Isère.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const serviceImages = [
                "/images/services/maconnerie-generale.webp",
                "/images/services/renovations-maison.webp",
                "/images/services/agrandissement-maison.webp",
                "/images/services/extension-maison.webp",
                "/images/services/piscine.webp",
                "/images/services/realisation-cloture-muret.webp",
                "/images/services/terrassement.webp",
                "/images/services/abri-de-jardin.webp",
                "/images/services/dalles.webp",
                "/images/services/dalles-sur-plot.webp",
              ];

              return (
                <div
                  key={service.slug}
                  className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={serviceImages[index % serviceImages.length]}
                      alt={service.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-center transition duration-700 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-8">
                    <h3 className="mb-4 text-2xl font-bold text-gray-900">
                      {service.name}
                    </h3>

                    <p className="mb-6 leading-relaxed text-gray-600">
                      {service.description}
                    </p>

                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center font-bold text-primary-600 transition hover:text-primary-700"
                    >
                      Découvrir le service
                      <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* REALISATIONS */}
      <section className="bg-white py-16">
        <div className="container mx-auto">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-4xl font-black text-gray-900">
              Des réalisations concrètes
            </h2>

            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600">
              Découvrez quelques exemples de travaux réalisés par notre
              entreprise de maçonnerie en Isère.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                image: "/assets/img/maconnerie-generale.webp",
                title: "Maçonnerie générale",
                desc: "Travaux de gros œuvre et construction en parpaing.",
              },
              {
                image: "/assets/img/realisation-piscine.webp",
                title: "Piscine béton",
                desc: "Construction de piscine béton et aménagement extérieur.",
              },
              {
                image: "/assets/img/realisation-muret.webp",
                title: "Muret & clôture",
                desc: "Création de murets et travaux d’aménagement extérieur.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center transition duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <h3 className="mb-3 text-2xl font-bold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="leading-relaxed text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-4xl font-black text-gray-900">
              Pourquoi choisir DZ Maçonnerie ?
            </h2>

            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              Une entreprise locale reconnue pour son sérieux, son
              accompagnement et la qualité de ses travaux.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: "10 ans d’expérience",
                desc: "Une solide expertise dans les travaux de maçonnerie générale.",
              },
              {
                title: "Garantie décennale",
                desc: "Tous nos travaux sont couverts par une assurance décennale.",
              },
              {
                title: "Devis gratuit",
                desc: "Étude personnalisée et accompagnement de votre projet.",
              },
              {
                title: "Entreprise locale",
                desc: "Basée à Artas près de Bourgoin-Jallieu en Isère.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-gray-200 bg-white p-8"
              >
                <ShieldCheck className="mb-5 h-10 w-10 text-primary-500" />

                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="leading-relaxed text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16">
        <div className="container mx-auto max-w-5xl">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-4xl font-black text-gray-900">
              Questions fréquentes
            </h2>

            <p className="text-lg text-gray-600">
              Retrouvez les réponses aux questions les plus fréquentes.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "Quels types de travaux réalisez-vous ?",
                a: "Nous réalisons des travaux de maçonnerie générale, terrassement, rénovation, dalle béton, extension maison et piscine béton.",
              },
              {
                q: "Intervenez-vous uniquement à Bourgoin-Jallieu ?",
                a: "Non, nous intervenons dans tout le Nord-Isère : Artas, Vienne, Villefontaine, L’Isle-d’Abeau et les communes voisines.",
              },
              {
                q: "Le devis est-il gratuit ?",
                a: "Oui, nous proposons un devis gratuit et personnalisé pour tous vos projets de maçonnerie.",
              },
              {
                q: "Disposez-vous d’une garantie décennale ?",
                a: "Oui, tous nos travaux sont couverts par une garantie décennale.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="rounded-3xl border border-gray-200 bg-gray-50 p-8"
              >
                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                  {faq.q}
                </h3>

                <p className="leading-relaxed text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO CONTENT */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto max-w-5xl">
          <h2 className="mb-8 text-4xl font-black text-gray-900">
            Entreprise de maçonnerie à Bourgoin-Jallieu
          </h2>

          <div className="space-y-6 leading-relaxed text-gray-600">
            <p>
              ${business.name} accompagne les particuliers et professionnels
              pour tous leurs travaux de maçonnerie générale à Bourgoin-Jallieu,
              Artas, Villefontaine, Vienne et dans toute l’Isère.
            </p>

            <p>
              Notre entreprise réalise des travaux de terrassement, dalle béton,
              rénovation, extension maison, piscine béton et ouverture mur
              porteur avec un accompagnement personnalisé et des prestations de
              qualité.
            </p>

            <p>
              Grâce à notre expérience dans le bâtiment, nous proposons des
              solutions adaptées à chaque projet avec un travail soigné et une
              garantie décennale sur l’ensemble des réalisations.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-20 text-white">
        <div className="absolute inset-0 bg-primary-600" />

        <div className="container mx-auto relative z-10 text-center">
          <h2 className="mb-6 text-4xl font-black">
            Besoin d’un devis pour vos travaux ?
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-xl text-primary-50">
            Contactez ${business.name} pour discuter de votre projet en Isère.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl bg-white px-8 py-5 text-lg font-bold text-primary-600 transition hover:bg-gray-100"
            >
              Demander un devis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <a
              href="/contact"
              className="inline-flex items-center rounded-xl border border-white/20 bg-white/10 px-8 py-5 text-lg font-bold text-white backdrop-blur transition hover:bg-white/20"
            >
              {business.phone.replace("+33", "0")}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
