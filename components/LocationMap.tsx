import { MapPin, Star } from "lucide-react";
import { siteConfig } from "@/data/config";

const { business } = siteConfig;

/**
 * Carte Google Maps intégrée (iframe, sans clé API — endpoint public `output=embed`).
 * Chargée en lazy pour ne pas pénaliser le LCP. Sert le SEO local (zone
 * d'intervention comprise par Google) et la confiance (localisation réelle).
 */
export function LocationMap({
  zoom = 11,
  title = `Zone d'intervention de ${business.name}`,
  variant = "light",
  className = "",
}: {
  zoom?: number;
  title?: string;
  variant?: "light" | "dark";
  className?: string;
}) {
  // repli sur les coordonnées d'Artas si le champ optionnel n'est pas renseigné
  const { latitude, longitude } = business.coordinates ?? {
    latitude: 45.536842,
    longitude: 5.165274,
  };
  const embedSrc = `https://www.google.com/maps?q=${latitude},${longitude}&z=${zoom}&hl=fr&output=embed`;
  const dark = variant === "dark";

  return (
    <div className={className}>
      <div
        className={`overflow-hidden rounded-2xl border shadow-sm ${
          dark ? "border-white/10" : "border-gray-200"
        }`}
      >
        <iframe
          src={embedSrc}
          title={title}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-[320px] w-full md:h-[400px]"
          style={{ border: 0 }}
          allowFullScreen
        />
      </div>

      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p
          className={`flex items-start gap-2 text-sm ${
            dark ? "text-gray-300" : "text-gray-600"
          }`}
        >
          <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary-500" />
          <span>
            {business.address}, {business.zipCode} {business.city}
          </span>
        </p>
        {business.socialProfiles.google && (
          <a
            href={business.socialProfiles.google}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex flex-shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${
              dark
                ? "border-white/20 bg-white/5 text-white hover:border-primary-400 hover:text-primary-300"
                : "border-gray-200 bg-white text-gray-700 hover:border-primary-500 hover:text-primary-600"
            }`}
          >
            <Star className="h-4 w-4 text-primary-500" />
            Voir nos avis Google
          </a>
        )}
      </div>
    </div>
  );
}
