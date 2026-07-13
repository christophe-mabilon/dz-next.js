import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ChevronsLeftRight,
  Clock,
  Droplets,
  Images,
  Layers,
  MapPin,
  User,
  Ruler,
  Package,
  Star,
  Phone,
  Plus,
} from "lucide-react";
import { realisations } from "@/data/realisations";
import { siteConfig } from "@/data/config";
import {
  generateMetadata as generatePageMetadata,
  generateRealisationSchema,
  generateBreadcrumbSchema,
} from "@/lib/seo";
import {
  materialsGlossary,
  realisationServiceSlug,
} from "@/data/realisations-content";
import { serviceFaqs } from "@/data/services-content";
import { services } from "@/data/services";
import { getRelatedCities } from "@/lib/getRelatedCities";
import { cities } from "@/data/cities";
import { reviews } from "@/data/reviews";
import { formatPhone } from "@/lib/format";
import { RealisationGallery } from "@/components/RealisationGallery";
import { ZoomableImage } from "@/components/Lightbox";

// icône d'un chiffre clé choisie selon son intitulé
function figureIcon(text: string) {
  const t = text.toLowerCase();
  if (/(m²|m³|\bml\b|×|mètre|largeur|surface)/.test(t)) return Ruler;
  if (/(jour|semaine|mois|20\d\d|durée|chantier)/.test(t)) return Clock;
  if (/(drainage|eau|galet|pluvial)/.test(t)) return Droplets;
  if (/(client|équipe|particulier|professionnel)/.test(t)) return User;
  if (/(pisé|parpaing|béton|soubassement|treillis|pierre|niveau|restanque|plage|escalier)/.test(t))
    return Layers;
  return BadgeCheck;
}

const { business } = siteConfig;

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return realisations.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const realisation = realisations.find((r) => r.slug === slug);
  if (!realisation) return {};
  return generatePageMetadata(
    `${realisation.title} | DZ Maçonnerie`,
    realisation.description,
    `/realisations/${slug}`,
  );
}

export default async function RealisationDetailPage({ params }: Props) {
  const { slug } = await params;
  const realisation = realisations.find((r) => r.slug === slug);

  if (!realisation) notFound();

  const phone = formatPhone(business.phone);

  // titre scindé pour colorer la ville (« … à Bourgoin-Jallieu »)
  const splitAt = realisation.title.lastIndexOf(" à ");
  const titleMain =
    splitAt > 0 ? realisation.title.slice(0, splitAt) : realisation.title;
  const titleCity = splitAt > 0 ? realisation.title.slice(splitAt + 3) : null;

  // contexte / détails sans duplication
  const contentParas = realisation.content.split("\n\n");
  const contextParas = realisation.context ?? contentParas.slice(0, 1);
  const detailParas = realisation.context ? contentParas : contentParas.slice(1);

  // avant / après
  const avantImg = realisation.images.find((i) => i.phase === "avant");
  const apresImg = realisation.images.find((i) => i.phase === "apres");

  // chiffres clés (repli : surface + durée réelles)
  const figures =
    realisation.keyFigures ??
    [
      realisation.surface
        ? { value: realisation.surface, label: "de surface" }
        : null,
      realisation.duration
        ? { value: realisation.duration, label: "de chantier" }
        : null,
    ].filter((f): f is { value: string; label: string } => f !== null);

  // stats du héro (uniquement les champs renseignés)
  const heroStats = [
    {
      icon: MapPin,
      label: "Localisation",
      value: realisation.city,
    },
    realisation.duration && {
      icon: Clock,
      label: "Durée du chantier",
      value: realisation.duration,
    },
    realisation.clientType && {
      icon: User,
      label: "Type de client",
      value: realisation.clientType,
    },
    realisation.surface && {
      icon: Ruler,
      label: "Surface concernée",
      value: realisation.surface,
    },
    realisation.materials?.[0] && {
      icon: Package,
      label: "Matériau principal",
      value: realisation.materials[0],
    },
  ].filter(Boolean) as {
    icon: typeof Clock;
    label: string;
    value: string;
  }[];

  // avis client réel de la même commune (si disponible)
  const localReview = reviews.find(
    (r) =>
      r.city?.localeCompare(realisation.city, "fr", {
        sensitivity: "base",
      }) === 0,
  );

  // FAQ du service correspondant
  const svcSlug = realisationServiceSlug[realisation.service];
  const svc = services.find((s) => s.slug === svcSlug);
  const faqs = svcSlug ? (serviceFaqs[svcSlug] ?? []).slice(0, 5) : [];

  // maillage villes voisines du chantier
  const cityMatch = cities.find(
    (c) =>
      c.name.localeCompare(realisation.city, "fr", { sensitivity: "base" }) ===
      0,
  );
  const nearby = cityMatch ? getRelatedCities(cityMatch.slug, 4) : [];

  // réalisations similaires : même service d'abord
  const similar = [...realisations]
    .filter((r) => r.slug !== realisation.slug)
    .sort(
      (a, b) =>
        Number(realisationServiceSlug[b.service] === svcSlug) -
        Number(realisationServiceSlug[a.service] === svcSlug),
    )
    .slice(0, 4);

  return (
    <main className="bg-white">
      {/* Schema : réalisation (Article + lieu du chantier + galerie) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateRealisationSchema(realisation)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Accueil", url: "/" },
              { name: "Réalisations", url: "/realisations" },
              { name: realisation.title, url: `/realisations/${slug}` },
            ]),
          ),
        }}
      />

      {/* HERO sombre avec photo du chantier */}
      <section className="relative overflow-hidden  text-white">
        {realisation.images[0] && (
          <>
            <Image
              src={realisation.images[0].src}
              alt={realisation.images[0].alt}
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-950/70 to-gray-900/20" />
          </>
        )}

        <div className="relative z-10 mx-auto max-w-8xl px-6 py-16 md:py-20 lg:px-8">
          {/* fil d'ariane */}
          <ol className="mb-8 flex flex-wrap items-center gap-1 text-sm text-gray-400">
            <li>
              <Link href="/" className="transition hover:text-white">
                Accueil
              </Link>
            </li>
            <li className="px-1">/</li>
            <li>
              <Link href="/realisations" className="transition hover:text-white">
                Réalisations
              </Link>
            </li>
            <li className="px-1">/</li>
            <li className="text-gray-200">{realisation.title}</li>
          </ol>

          <span className="mb-5 inline-flex items-center rounded-full border border-primary-500/40 bg-primary-500 px-4 py-2 text-sm font-medium text-white">
            {realisation.service} • {realisation.city} • {realisation.date}
          </span>

          <h1 className="mb-4 max-w-3xl text-4xl font-black leading-tight md:text-5xl">
            {titleMain}
            {titleCity && (
              <>
                {" "}
                <span className="text-primary-400">à {titleCity}</span>
              </>
            )}
          </h1>

          <p className="mb-8 max-w-2xl text-base leading-relaxed text-gray-300">
            {realisation.description}
          </p>

          {heroStats.length > 0 && (
            <dl className="mb-10 flex flex-wrap gap-x-10 gap-y-5">
              {heroStats.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-3">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-primary-500/40 bg-primary-500/10">
                    <Icon className="h-5 w-5 text-primary-400" />
                  </span>
                  <div>
                    <dt className="text-xs text-gray-400">{label}</dt>
                    <dd className="font-bold text-white">{value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          )}

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-primary-600 px-6 py-3.5 font-bold text-white transition hover:bg-primary-700"
            >
              Demander un devis
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 font-bold text-white transition hover:bg-white/15"
            >
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary-700 shadow-lg shadow-primary-900/40">
                <Phone className="h-4 w-4 text-white" />
              </span>
              {phone}
            </Link>
          </div>
        </div>

        {/* accès direct à la galerie (comme la maquette) */}
        <a
          href="#galerie"
          className="absolute bottom-6 right-6 z-10 hidden items-center gap-2 rounded-lg bg-gray-950/70 px-4 py-2.5 text-sm font-bold text-white backdrop-blur transition hover:bg-gray-950/90 md:inline-flex"
        >
          Résultat final
          <Images className="h-4 w-4 text-primary-400" />
        </a>
      </section>

      {/* AVANT/APRÈS (si photos phasées) + CONTEXTE */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-8xl px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              {avantImg && apresImg ? (
                <div className="relative grid gap-4 sm:grid-cols-2">
                  {/* pastille double flèche à la jonction avant/après */}
                  <span className="pointer-events-none absolute left-1/2 top-1/2 z-10 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gray-900 shadow-lg ring-1 ring-gray-200">
                    <ChevronsLeftRight className="h-5 w-5" />
                  </span>
                  {[
                    { img: avantImg, badge: "AVANT" },
                    { img: apresImg, badge: "APRÈS" },
                  ].map(({ img, badge }) => (
                    <ZoomableImage
                      key={img.src}
                      src={img.src}
                      alt={img.alt}
                      sizes="(max-width: 640px) 100vw, 25vw"
                      containerClassName="relative aspect-[3/4] overflow-hidden rounded-2xl"
                    >
                      <span
                        className={`absolute left-3 top-3 rounded-md px-2.5 py-1 text-xs font-black tracking-wide text-white ${
                          badge === "AVANT" ? "bg-gray-900/90" : "bg-primary-600"
                        }`}
                      >
                        {badge}
                      </span>
                    </ZoomableImage>
                  ))}
                </div>
              ) : (
                realisation.images[0] && (
                  <ZoomableImage
                    src={realisation.images[0].src}
                    alt={realisation.images[0].alt}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    containerClassName="relative aspect-[4/3] overflow-hidden rounded-2xl"
                  />
                )
              )}
            </div>

            <div>
              <p className="mb-2 text-sm font-bold uppercase tracking-wide text-primary-600">
                Le projet
              </p>
              <h2 className="mb-6 text-3xl font-black text-gray-900">
                Contexte du projet
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-gray-700">
                {contextParas.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTRAINTES + ÉTAPES (sections remplies au fil des vraies données) */}
      {(realisation.challenges?.length || realisation.steps?.length) && (
        <section className="bg-gray-50 py-16">
          <div className="mx-auto max-w-8xl px-6 lg:px-8">
            <div
              className={`grid gap-12 ${
                realisation.challenges?.length && realisation.steps?.length
                  ? "lg:grid-cols-[340px_1fr]"
                  : ""
              }`}
            >
              {realisation.challenges && realisation.challenges.length > 0 && (
                <div>
                  <p className="mb-2 text-sm font-bold uppercase tracking-wide text-primary-600">
                    Les défis du chantier
                  </p>
                  <h2 className="mb-6 text-2xl font-black text-gray-900">
                    Les contraintes rencontrées
                  </h2>
                  <ul className="space-y-3">
                    {realisation.challenges.map((c) => (
                      <li key={c} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary-600" />
                        <span className="text-gray-700">{c}</span>
                      </li>
                    ))}
                  </ul>
                  {realisation.solution && (
                    <p className="mt-6 rounded-xl border border-primary-200 bg-primary-50 p-4 text-sm leading-relaxed text-gray-700">
                      <strong className="text-primary-700">
                        Notre solution :
                      </strong>{" "}
                      {realisation.solution}
                    </p>
                  )}
                </div>
              )}

              {realisation.steps && realisation.steps.length > 0 && (
                <div>
                  <p className="mb-2 text-sm font-bold uppercase tracking-wide text-primary-600">
                    Les étapes du chantier
                  </p>
                  <h2 className="mb-8 text-2xl font-black text-gray-900">
                    Réalisation étape par étape
                  </h2>
                  <div
                    className={`grid gap-8 sm:grid-cols-2 ${
                      ["", "lg:grid-cols-1", "lg:grid-cols-2", "lg:grid-cols-3", "lg:grid-cols-4", "lg:grid-cols-5"][
                        Math.min(realisation.steps.length, 5)
                      ]
                    }`}
                  >
                    {realisation.steps.map((step, i, arr) => (
                      <div key={step.title} className="flex flex-col">
                        {/* numéro relié par la ligne de progression */}
                        <div className="relative mb-4 flex items-center justify-center">
                          {i > 0 && (
                            <span className="absolute left-0 right-1/2 top-1/2 hidden h-0.5 -translate-y-1/2 bg-primary-200 lg:block" />
                          )}
                          {i < arr.length - 1 && (
                            <span className="absolute left-1/2 right-0 top-1/2 hidden h-0.5 -translate-y-1/2 bg-primary-200 lg:block" />
                          )}
                          <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary-600 bg-white text-sm font-black text-primary-600">
                            {i + 1}
                          </span>
                        </div>
                        <h3 className="mb-2 text-center font-bold text-gray-900">
                          {step.title}
                        </h3>
                        <p className="mb-4 text-center text-sm leading-relaxed text-gray-600">
                          {step.description}
                        </p>
                        {step.image && (
                          <ZoomableImage
                            src={step.image}
                            alt={`${step.title} — ${realisation.title}`}
                            sizes="(max-width: 640px) 100vw, 25vw"
                            containerClassName="relative mt-auto aspect-[4/3] overflow-hidden rounded-xl"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* CHIFFRES CLÉS */}
      {figures.length > 0 && (
        <section className="relative overflow-hidden border-y border-gray-100 bg-gray-950 py-16">
          {/* texture mur en pierre très légère, répétée sur le fond sombre */}
          <div
            aria-hidden
            className="absolute inset-0 bg-repeat opacity-[0.07]"
            style={{
              backgroundImage: "url(/images/textures/mur-pierre-blanche.webp)",
              backgroundSize: "560px",
            }}
          />
          <div className="relative z-10 mx-auto max-w-12xl px-6 lg:px-8">
            <p className="mb-10 text-center text-sm font-bold uppercase tracking-wide text-primary-600">
              Chiffres clés
            </p>
            <dl className="flex flex-wrap items-stretch justify-center gap-y-10">
              {figures.map(({ value, label }, i, arr) => {
                const Icon = figureIcon(`${value} ${label}`);
                return (
                  <div
                    key={label}
                    className="relative px-10 py-2 text-center md:px-16"
                  >
                    <span className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-primary-500/30 bg-primary-500/10">
                      <Icon className="h-6 w-6 text-primary-400" />
                    </span>
                    <dt className="mb-1 text-3xl font-black text-white">
                      {value}
                    </dt>
                    <dd className="text-sm text-gray-400">{label}</dd>
                    {i < arr.length - 1 && (
                      <span className="absolute right-0 top-1/2 h-4/5 w-px -translate-y-1/2 bg-white/40 shadow-[0_0_16px_2px_rgba(20,184,166,0.5)]" />
                    )}
                  </div>
                );
              })}
            </dl>
          </div>
        </section>
      )}

      {/* DÉTAILS DU CHANTIER */}
      {detailParas.length > 0 && (
        <section className="section-padding bg-white">
          <div className="mx-auto max-w-8xl px-6 lg:px-8">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">
              Détails du chantier
            </h2>
            <div className="max-w-4xl space-y-4 text-base leading-relaxed text-gray-700">
              {detailParas.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* GALERIE + AVIS + FAQ */}
      <section id="galerie" className="scroll-mt-24 bg-gray-50 py-16">
        <div className="mx-auto max-w-8xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_380px]">
            <div>
              <p className="mb-2 text-sm font-bold uppercase tracking-wide text-primary-600">
                Galerie photos
              </p>
              <h2 className="mb-8 text-2xl font-black text-gray-900">
                Découvrez le chantier en images
              </h2>
              <RealisationGallery images={realisation.images} />
            </div>

            <div className="space-y-10">
              {localReview && (
                <div>
                  <p className="mb-4 text-sm font-bold uppercase tracking-wide text-primary-600">
                    Avis client — {realisation.city}
                  </p>
                  <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                    <div className="mb-3 flex gap-1">
                      {[...Array(localReview.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="mb-4 text-sm leading-relaxed text-gray-700">
                      &ldquo;{localReview.text}&rdquo;
                    </p>
                    <p className="font-semibold text-gray-900">
                      {localReview.author}
                    </p>
                    <p className="text-sm text-gray-500">
                      {localReview.city} • {localReview.source}
                    </p>
                  </div>
                </div>
              )}

              {faqs.length > 0 && (
                <div>
                  <p className="mb-4 text-sm font-bold uppercase tracking-wide text-primary-600">
                    Questions fréquentes
                  </p>
                  <div className="space-y-2">
                    {faqs.map((faq) => (
                      <details
                        key={faq.question}
                        className="group rounded-xl border border-gray-200 bg-white"
                      >
                        <summary className="flex cursor-pointer items-center justify-between gap-3 p-4 text-sm font-semibold text-gray-900 [&::-webkit-details-marker]:hidden">
                          {faq.question}
                          <Plus className="h-4 w-4 flex-shrink-0 text-primary-600 transition-transform group-open:rotate-45" />
                        </summary>
                        <p className="px-4 pb-4 text-sm leading-relaxed text-gray-600">
                          {faq.answer}
                        </p>
                      </details>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* MATÉRIAUX (glossaire pédagogique) */}
      {realisation.materials && realisation.materials.length > 0 && (
        <section className="section-padding bg-white">
          <div className="mx-auto max-w-8xl px-6 lg:px-8">
            <h2 className="mb-2 text-2xl font-bold text-gray-900">
              Matériaux et techniques : pourquoi ces choix ?
            </h2>
            <p className="mb-6 text-gray-600">
              Chaque matériau de ce chantier a été choisi pour une raison
              précise. Voici lesquelles :
            </p>
            <dl className="grid gap-4 sm:grid-cols-2">
              {realisation.materials.map((m) => (
                <div
                  key={m}
                  className="rounded-xl border border-gray-200 bg-gray-50 p-4"
                >
                  <dt className="mb-1 font-semibold text-primary-700">{m}</dt>
                  {materialsGlossary[m] && (
                    <dd className="text-sm leading-relaxed text-gray-600">
                      {materialsGlossary[m]}
                    </dd>
                  )}
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      {/* MAILLAGE : ce savoir-faire près de chez vous */}
      {svc && (
        <section className="bg-gray-50 py-14">
          <div className="mx-auto max-w-8xl px-6 lg:px-8">
            <h2 className="mb-3 text-2xl font-bold text-gray-900">
              Ce savoir-faire près de chez vous
            </h2>
            <p className="mb-5 text-gray-600">
              Ce chantier illustre notre expertise en {svc.name.toLowerCase()}.
              Découvrez ce service en détail, ou directement pour votre
              commune :
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={`/services/${svc.slug}`}
                className="inline-flex items-center rounded-xl bg-primary-600 px-5 py-2.5 font-semibold text-white transition hover:bg-primary-700"
              >
                {svc.name} →
              </Link>
              {cityMatch && (
                <Link
                  href={`/services/${svc.slug}/${cityMatch.slug}`}
                  className="inline-flex items-center rounded-full border border-primary-300 bg-white px-4 py-2 text-sm text-primary-700 transition hover:bg-primary-50"
                >
                  {svc.name} {realisation.city}
                </Link>
              )}
              {nearby.slice(0, 3).map((c) => (
                <Link
                  key={c.slug}
                  href={`/services/${svc.slug}/${c.slug}`}
                  className="inline-flex items-center rounded-full border border-primary-300 bg-white px-4 py-2 text-sm text-primary-700 transition hover:bg-primary-50"
                >
                  {svc.name} {c.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* RÉALISATIONS SIMILAIRES */}
      {similar.length > 0 && (
        <section className="section-padding bg-white">
          <div className="mx-auto max-w-8xl px-6 lg:px-8">
            <p className="mb-2 text-sm font-bold uppercase tracking-wide text-primary-600">
              Réalisations similaires
            </p>
            <h2 className="mb-8 text-2xl font-black text-gray-900">
              D&apos;autres projets qui pourraient vous intéresser
            </h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {similar.map((r) => (
                <Link
                  key={r.slug}
                  href={`/realisations/${r.slug}`}
                  className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
                >
                  {r.images?.[0] && (
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={r.images[0].src}
                        alt={r.images[0].alt}
                        fill
                        sizes="(max-width: 640px) 100vw, 25vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="p-4">
                    <h3 className="mb-1 text-sm font-bold leading-snug text-gray-900 group-hover:text-primary-600">
                      {r.title}
                    </h3>
                    <p className="text-xs text-gray-500">
                      {r.city}
                      {(r.surface || r.duration) && (
                        <>
                          {" "}
                          •{" "}
                          {[r.surface, r.duration]
                            .filter(Boolean)
                            .join(" – ")}
                        </>
                      )}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA FINAL */}
      <section className="bg-gray-900 py-14 text-white">
        <div className="mx-auto flex max-w-8xl flex-col items-center justify-between gap-6 px-6 md:flex-row lg:px-8">
          <div>
            <h2 className="text-3xl font-black">
              Vous avez un projet{" "}
              <span className="text-primary-400">similaire ?</span>
            </h2>
            <p className="mt-2 max-w-xl text-gray-300">
              Nous intervenons dans tout le Nord-Isère pour vos travaux de
              maçonnerie, terrassement et aménagement extérieur.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-primary-600 px-6 py-3.5 font-bold text-white transition hover:bg-primary-700"
            >
              Demander un devis gratuit
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 font-bold text-white transition hover:bg-white/15"
            >
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary-700 shadow-lg shadow-primary-900/40">
                <Phone className="h-4 w-4 text-white" />
              </span>
              {phone}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
