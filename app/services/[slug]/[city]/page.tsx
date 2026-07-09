import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import HeroSection from "@/components/sections/hero/HeroSection";
import { services, getServiceBySlug } from "@/data/services";
import { cities, getCityBySlug } from "@/data/cities";
import {
  generateMetadata as generatePageMetadata,
  generateServiceSchema,
} from "@/lib/seo";
import { siteConfig } from "@/data/config";
import { generateSeoTitle, generateSeoDescription } from "@/lib/seo-generators";
import { generateLocalIntroduction } from "@/lib/seo-generators";
import { generateSeoFaqs } from "@/lib/seo-generators";
import { DynamicFooter } from "@/components/DynamicFooter";

const { business } = siteConfig;

interface CombinedPageProps {
  params: Promise<{
    slug: string;
    city: string;
  }>;
}

export async function generateStaticParams() {
  const params = [];
  for (const service of services) {
    for (const city of cities) {
      params.push({
        slug: service.slug,
        city: city.slug,
      });
    }
  }
  return params;
}

export async function generateMetadata(
  props: CombinedPageProps,
): Promise<Metadata> {
  const { slug, city } = await props.params;
  const service = getServiceBySlug(slug);
  const cityData = getCityBySlug(city);

  if (!service || !cityData) return {};

  const title = generateSeoTitle(service, cityData);
  const description = generateSeoDescription(service, cityData);
  return generatePageMetadata(
    title,
    description,
    `/services/${service.slug}/${cityData.slug}`,
    service.image || `${siteConfig.siteUrl}/og-service.jpg`,
  );
}

export default async function CombinedServiceCityPage(
  props: CombinedPageProps,
) {
  const { slug, city } = await props.params;
  const service = getServiceBySlug(slug);
  const cityData = getCityBySlug(city);

  if (!service || !cityData) notFound();

  const faqItems = generateSeoFaqs(service, cityData);
  const gallery =
    service.galleryImages ?? (service.image ? [service.image] : []);
  const steps = service.processSteps ?? [
    "Prise de contact et devis gratuit sous 24h",
    "Visite technique et planification du chantier",
    "Réalisation des travaux par nos équipes qualifiées",
    "Livraison, contrôle qualité et garantie décennale",
  ];

  return (
    <>
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateServiceSchema(
              `${service.name} à ${cityData.name}`,
              `Expert en ${service.name.toLowerCase()} à ${cityData.name}`,
              `${siteConfig.siteUrl}/services/${service.slug}/${cityData.slug}`,
            ),
          ),
        }}
      />

      {/* HERO */}
      <HeroSection
        badge={`${service.name} • ${cityData.name} • ${cityData.zipCode}`}
        title={service.name}
        highlight={`à ${cityData.name}`}
        description={`${service.description} à ${cityData.name} (${cityData.zipCode}). Service professionnel avec devis gratuit et garantie décennale.`}
        image="/images/realisations/artisan-macon-bourgoin-jallieu-terrasse-gres-cerame-dz-maconnerie-terrassement.webp"
        imageAlt={`${service.name} à ${cityData.name}`}
        primaryButtonText="Demander un devis"
        primaryButtonHref="/contact"
        secondaryButtonText={business.phone.replace("+33", "0")}
        secondaryButtonHref="/contact"
        cards={[
          {
            icon: "hammer",
            title: service.name,
            description: `Expert à ${cityData.name} et ses environs.`,
          },
          {
            icon: "shield",
            title: "Garantie décennale",
            description: "Travaux assurés sur tous les chantiers.",
          },
          {
            icon: "star",
            title: "Devis gratuit",
            description: "Réponse sous 24h pour votre projet.",
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
                href="/services"
                className="transition hover:text-primary-600 hover:underline"
              >
                Services
              </Link>
            </li>
            <li className="select-none px-1 text-gray-400">/</li>
            <li>
              <Link
                href={`/services/${service.slug}`}
                className="transition hover:text-primary-600 hover:underline"
              >
                {service.name}
              </Link>
            </li>
            <li className="select-none px-1 text-gray-400">/</li>
            <li className="font-medium text-gray-800" aria-current="page">
              {cityData.name}
            </li>
          </ol>
        </div>
      </nav>

      {/* STATS BAND */}
      <div className="bg-primary-700 text-white">
        <div className="mx-auto max-w-8xl px-6 lg:px-8">
          <dl className="grid grid-cols-2 md:grid-cols-4 divide-x divide-primary-600">
            {[
              { value: "10 ans", label: "d'expérience" },
              { value: "500+", label: "chantiers réalisés" },
              { value: "100%", label: "garantie décennale" },
              { value: "24h", label: "délai de réponse" },
            ].map(({ value, label }) => (
              <div key={label} className="py-5 px-6 text-center">
                <dt className="text-2xl font-bold">{value}</dt>
                <dd className="text-sm text-primary-200 mt-0.5">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* INTRO + IMAGE */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-8xl px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {service.name} à {cityData.name}
              </h2>
              <p className="text-base text-gray-700 leading-relaxed whitespace-pre-line">
                {generateLocalIntroduction(service, cityData)}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary">
                  Devis gratuit <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <a
                  href={`tel:${business.phone}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary-600 px-5 py-3 text-sm font-semibold text-primary-700 hover:bg-primary-50 transition"
                >
                  <Phone className="w-4 h-4" />
                  {business.phone.replace("+33", "0")}
                </a>
              </div>
            </div>
            {service.image && (
              <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={service.image}
                  alt={`${service.name} à ${cityData.name}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur rounded-lg px-3 py-2 text-sm font-semibold text-gray-800">
                  {service.name} — {cityData.name}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* PROCESS STEPS */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-8xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-10 text-center">
            Comment ça marche ?
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div
                key={i}
                className="relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <div className="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold text-lg mb-4">
                  {i + 1}
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-11 left-full w-6 h-0.5 bg-primary-200 z-10" />
                )}
                <p className="text-sm text-gray-700 leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      {gallery.length > 0 && (
        <section className="section-padding bg-white">
          <div className="mx-auto max-w-8xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Nos réalisations — {service.name}
            </h2>
            <div
              className={`grid gap-4 ${gallery.length === 1 ? "grid-cols-1 max-w-xl mx-auto" : gallery.length === 2 ? "grid-cols-2" : "grid-cols-1 sm:grid-cols-3"}`}
            >
              {gallery.map((src, i) => (
                <div
                  key={i}
                  className={`relative overflow-hidden rounded-2xl shadow-md group ${gallery.length === 3 && i === 0 ? "sm:col-span-2 h-72" : "h-56"}`}
                >
                  <Image
                    src={src}
                    alt={`${service.name} à ${cityData.name} — photo ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-gray-500 mt-4">
              Exemples de chantiers réalisés en Nord-Isère •{" "}
              <Link
                href="/realisations"
                className="text-primary-600 hover:underline"
              >
                Voir toutes nos réalisations
              </Link>
            </p>
          </div>
        </section>
      )}

      {/* POURQUOI + ZONE */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-8xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Pourquoi nous choisir à {cityData.name} ?
              </h3>
              <div className="space-y-3">
                {[
                  "Expertise reconnue depuis 10 ans",
                  "Équipe de maçons professionnels",
                  "Garantie décennale certifiée",
                  "Respect strict des délais",
                  "Devis gratuit sans engagement",
                  "Intervention rapide dans la région",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-primary-50 rounded-2xl p-8 border border-primary-100 flex flex-col justify-center">
              <h3 className="text-xl font-semibold text-primary-900 mb-4">
                Nos interventions à {cityData.name}
              </h3>
              <p className="text-gray-700 mb-4">
                Nous réalisons l'ensemble de nos prestations maçonnerie à{" "}
                {cityData.name} et ses environs. Chaque projet est unique et
                nous adaptons nos solutions à vos besoins et votre budget.
              </p>
              <p className="text-sm text-gray-600 mb-6">
                <strong>Zone d'intervention :</strong> {cityData.name},{" "}
                {cityData.region}
              </p>
              <Link href="/contact" className="btn-primary text-center">
                Obtenir un devis gratuit{" "}
                <ArrowRight className="ml-2 w-4 h-4 inline" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BOX */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-8xl px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-white text-center shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Vous avez un projet de {service.name.toLowerCase()} à{" "}
              {cityData.name} ?
            </h2>
            <p className="text-primary-100 mb-8 max-w-xl mx-auto">
              Contactez DZ Maçonnerie pour un devis gratuit et personnalisé.
              Notre équipe vous répond sous 24h.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary-700 font-semibold rounded-xl px-6 py-3 hover:bg-primary-50 transition"
              >
                Demander un devis <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`tel:${business.phone}`}
                className="inline-flex items-center justify-center gap-2 border border-white/40 text-white font-semibold rounded-xl px-6 py-3 hover:bg-white/10 transition"
              >
                <Phone className="w-4 h-4" />
                {business.phone.replace("+33", "0")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-gray-50">
        <div className="mx-auto max-w-8xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Questions fréquentes — {service.name} à {cityData.name}
          </h2>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm divide-y divide-gray-100">
            {faqItems.map((faq, index) => (
              <div key={index} className="p-6">
                <h3 className="text-base font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="hero-gradient py-16 md:py-24 text-white">
        <div className="px-4 mx-auto text-center max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Besoin d'un expert en {service.name.toLowerCase()} à {cityData.name}{" "}
            ?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Contactez DZ Maçonnerie dès aujourd'hui. Devis gratuit et sans
            engagement.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary-700 font-bold rounded-xl px-8 py-4 hover:bg-gray-100 transition text-lg"
          >
            Demander un devis <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <DynamicFooter currentCitySlug={cityData.slug} />
    </>
  );
}
