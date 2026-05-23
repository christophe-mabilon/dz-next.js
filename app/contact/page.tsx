"use client";

import { useState } from "react";
import Link from "next/link";

import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Star,
  BadgeCheck,
  Shield,
} from "lucide-react";

import HeroSection from "@/components/sections/hero/HeroSection";

import { siteConfig } from "@/data/config";

const { business } = siteConfig;

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitted(true);

        setFormData({
          name: "",
          email: "",
          phone: "",
          city: "",
          service: "",
          message: "",
        });

        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert("Erreur : " + (result.errors?.join(", ") || result.message));
      }
    } catch (error) {
      console.error("Erreur:", error);

      alert("Une erreur est survenue. Veuillez réessayer.");
    }
  };

  return (
    <>
      {/* HERO */}
      <HeroSection
        badge={`Contact • ${business.city} • Nord-Isère`}
        title="Contactez"
        highlight="DZ Maçonnerie"
        description={`Besoin d’un devis pour vos travaux de maçonnerie, terrassement, dalle béton, rénovation ou extension maison en Isère ? Contactez ${business.name} pour une réponse rapide.`}
        image="/images/realisations/chantier_maçonnerie.avif"
        imageAlt={`Contact ${business.name}`}
        primaryButtonText="Demander un devis"
        primaryButtonHref="/contact"
        secondaryButtonText={business.phone.replace("+33", "0")}
        secondaryButtonHref="/contact"
        cards={[
          {
            icon: "hammer",
            title: "Devis gratuit",
            description: "Étude personnalisée pour votre projet.",
          },

          {
            icon: "shield",
            title: "Réponse rapide",
            description: "Retour sous 24h pour vos demandes.",
          },

          {
            icon: "star",
            title: "Accompagnement",
            description: "Conseils et suivi pour tous vos travaux.",
          },
        ]}
      />

      {/* CONTACT */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* INFOS */}
            <div className="space-y-6">
              <div>
                <h2 className="heading-md mb-8">Nos coordonnées</h2>
              </div>

              <div className="space-y-6">
                {/* PHONE */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary-100">
                    <Phone className="h-6 w-6 text-primary-600" />
                  </div>

                  <div>
                    <h3 className="mb-1 font-semibold text-gray-900">
                      Téléphone
                    </h3>

                    <a
                      href="/contact"
                      className="font-medium text-primary-600 hover:text-primary-700"
                    >
                      {business.phone.replace("+33", "0")}
                    </a>

                    <p className="mt-1 text-sm text-gray-600">
                      Disponible du lundi au vendredi
                    </p>
                  </div>
                </div>

                {/* EMAIL */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary-100">
                    <Mail className="h-6 w-6 text-primary-600" />
                  </div>

                  <div>
                    <h3 className="mb-1 font-semibold text-gray-900">Email</h3>

                    <a
                      href="/contact"
                      className="font-medium text-primary-600 hover:text-primary-700"
                    >
                      {business.email}
                    </a>

                    <p className="mt-1 text-sm text-gray-600">
                      Réponse sous 24h
                    </p>
                  </div>
                </div>

                {/* LOCATION */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary-100">
                    <MapPin className="h-6 w-6 text-primary-600" />
                  </div>

                  <div>
                    <h3 className="mb-1 font-semibold text-gray-900">
                      Localisation
                    </h3>

                    <p className="text-gray-700">
                      {business.address}
                      <br />
                      {business.zipCode} {business.city}
                      <br />
                      {business.region}
                    </p>
                  </div>
                </div>

                {/* HOURS */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary-100">
                    <Clock className="h-6 w-6 text-primary-600" />
                  </div>

                  <div>
                    <h3 className="mb-1 font-semibold text-gray-900">
                      Horaires
                    </h3>

                    <div className="space-y-1 text-gray-700">
                      {business.openingHours?.map((hour) => (
                        <p key={hour}>{hour}</p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* SOCIALS */}
                <div className="flex flex-wrap gap-3 pt-2">
                  {business.socialProfiles.facebook && (
                    <Link
                      href={business.socialProfiles.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex items-center gap-2
                        rounded-full
                        border border-gray-200
                        bg-white
                        px-4 py-2
                        text-sm font-medium text-gray-700
                        transition
                        hover:border-primary-500
                        hover:text-primary-600
                      "
                    >
                      <Facebook className="h-4 w-4" />
                      Facebook
                    </Link>
                  )}

                  {business.socialProfiles.google && (
                    <Link
                      href={business.socialProfiles.google}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex items-center gap-2
                        rounded-full
                        border border-gray-200
                        bg-white
                        px-4 py-2
                        text-sm font-medium text-gray-700
                        transition
                        hover:border-primary-500
                        hover:text-primary-600
                      "
                    >
                      <Star className="h-4 w-4" />
                      Avis Google
                    </Link>
                  )}
                </div>
              </div>

              {/* CTA CARD */}
              <div className="mt-8 rounded-xl border border-primary-200 bg-primary-50 p-6">
                <h3 className="mb-3 font-semibold text-gray-900">
                  Besoin d&apos;une réponse rapide ?
                </h3>

                <p className="mb-4 text-sm text-gray-700">
                  Appelez-nous directement pour discuter de votre projet de
                  maçonnerie ou terrassement.
                </p>

                <a href="/contact" className="btn-primary w-full text-center">
                  Appeler maintenant
                </a>
              </div>
            </div>

            {/* FORM */}
            <div className="lg:col-span-2">
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-8">
                <h2 className="mb-6 text-2xl font-bold text-gray-900">
                  Envoyez-nous votre demande
                </h2>

                {submitted && (
                  <div className="mb-6 rounded-lg border border-green-200 bg-green-50 p-4">
                    <p className="font-medium text-green-800">
                      Merci ! Nous avons reçu votre message. Nous vous
                      recontacterons sous 24h.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* NAME */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-semibold text-gray-900"
                    >
                      Nom complet *
                    </label>

                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 transition focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-100"
                      placeholder="Jean Dupont"
                    />
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-gray-900"
                    >
                      Email *
                    </label>

                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 transition focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-100"
                      placeholder="jean@example.com"
                    />
                  </div>

                  {/* PHONE */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-semibold text-gray-900"
                    >
                      Téléphone
                    </label>

                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 transition focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-100"
                      placeholder="06 12 34 56 78"
                    />
                  </div>

                  {/* CITY */}
                  <div>
                    <label
                      htmlFor="city"
                      className="mb-2 block text-sm font-semibold text-gray-900"
                    >
                      Ville du projet *
                    </label>

                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 transition focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-100"
                      placeholder="Bourgoin-Jallieu"
                    />
                  </div>

                  {/* SERVICE */}
                  <div>
                    <label
                      htmlFor="service"
                      className="mb-2 block text-sm font-semibold text-gray-900"
                    >
                      Type de service *
                    </label>

                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 transition focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-100"
                    >
                      <option value="">Sélectionnez un service</option>

                      <option value="maconnerie">Maçonnerie générale</option>

                      <option value="renovation">Rénovation</option>

                      <option value="extension">Extension maison</option>

                      <option value="terrassement">Terrassement</option>

                      <option value="dalle-beton">Dalle béton</option>

                      <option value="autre">Autre</option>
                    </select>
                  </div>

                  {/* MESSAGE */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-semibold text-gray-900"
                    >
                      Décrivez votre projet *
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 transition focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-100"
                      placeholder="Décrivez votre projet en détail..."
                    />
                  </div>

                  {/* SUBMIT */}
                  <button
                    type="submit"
                    className="btn-primary w-full justify-center"
                  >
                    Envoyer ma demande
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>

                  <p className="text-center text-xs text-gray-600">
                    * Champs obligatoires
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <h2 className="heading-md mb-12 text-center">
            Pourquoi nous contacter ?
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            {[
              {
                title: "Devis gratuit",
                desc: "Sans engagement et personnalisé",
                icon: <ArrowRight className="h-7 w-7" />,
              },

              {
                title: "Réponse rapide",
                desc: "Sous 24h maximum",
                icon: <Clock className="h-7 w-7" />,
              },

              {
                title: "Professionnels",
                desc: "Experts reconnus depuis 10 ans",
                icon: <Shield className="h-7 w-7" />,
              },

              {
                title: "Garantie",
                desc: "Décennale sur tous les travaux",
                icon: <BadgeCheck className="h-7 w-7" />,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="
            rounded-2xl
            border border-white/10
            bg-gray-950
            p-6
            text-center
            transition-all
            hover:border-primary-600
            hover:shadow-lg
          "
              >
                {/* ICON */}
                <div className="mb-4 flex justify-center text-primary-400">
                  {item.icon}
                </div>

                {/* TITLE */}
                <h3 className="mb-2 font-semibold text-white">{item.title}</h3>

                {/* DESCRIPTION */}
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="hero-gradient py-16 text-white md:py-24">
        <div className="container mx-auto text-center">
          <h2 className="mb-4 text-4xl font-bold leading-tight md:text-5xl">
            Prêt à démarrer votre projet ?
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-xl text-primary-50">
            Contactez-nous dès aujourd&apos;hui pour discuter de votre projet de
            maçonnerie et terrassement.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/contact"
              className="btn-secondary border-white text-white hover:bg-white hover:bg-opacity-10"
            >
              <Phone className="mr-2 h-4 w-4" />
              {business.phone.replace("+33", "0")}
            </a>

            <a
              href="/contact"
              className="btn-primary bg-white text-primary-600 hover:bg-gray-100"
            >
              Envoyer un email
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
