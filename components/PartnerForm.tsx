"use client";

import { useState } from "react";
import { Handshake, Send } from "lucide-react";

const inputClass =
  "w-full rounded-lg border border-gray-300 px-4 py-3 transition focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-100";

export function PartnerForm() {
  const [form, setForm] = useState({
    entreprise: "",
    metier: "",
    prenom: "",
    nom: "",
    email: "",
    phone: "",
    city: "",
    website: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    try {
      // API dédiée : validation + enregistrement JSON côté serveur
      const response = await fetch("/api/partenaires", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = await response.json();
      if (response.ok) {
        setSubmitted(true);
        setForm({
          entreprise: "",
          metier: "",
          prenom: "",
          nom: "",
          email: "",
          phone: "",
          city: "",
          website: "",
          message: "",
        });
      } else {
        alert("Erreur : " + (result.errors?.join(", ") || result.message));
      }
    } catch {
      alert("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setSending(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-10 text-center">
        <Handshake className="mx-auto mb-4 h-10 w-10 text-green-600" />
        <h3 className="mb-2 text-xl font-bold text-gray-900">
          Demande envoyée !
        </h3>
        <p className="mx-auto max-w-xl text-gray-600">
          Merci pour votre proposition de partenariat. Nous étudions chaque
          demande et revenons vers vous rapidement.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-gray-200 bg-gray-50 p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="p-entreprise"
            className="mb-1.5 block text-sm font-semibold text-gray-700"
          >
            Nom de l&apos;entreprise *
          </label>
          <input
            id="p-entreprise"
            name="entreprise"
            required
            value={form.entreprise}
            onChange={handleChange}
            className={inputClass}
            placeholder="Ex. Menuiserie Martin"
          />
        </div>
        <div>
          <label
            htmlFor="p-metier"
            className="mb-1.5 block text-sm font-semibold text-gray-700"
          >
            Métier / spécialité *
          </label>
          <input
            id="p-metier"
            name="metier"
            required
            value={form.metier}
            onChange={handleChange}
            className={inputClass}
            placeholder="Ex. Charpentier couvreur"
          />
        </div>
        <div>
          <label
            htmlFor="p-prenom"
            className="mb-1.5 block text-sm font-semibold text-gray-700"
          >
            Prénom *
          </label>
          <input
            id="p-prenom"
            name="prenom"
            required
            value={form.prenom}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label
            htmlFor="p-nom"
            className="mb-1.5 block text-sm font-semibold text-gray-700"
          >
            Nom *
          </label>
          <input
            id="p-nom"
            name="nom"
            required
            value={form.nom}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label
            htmlFor="p-email"
            className="mb-1.5 block text-sm font-semibold text-gray-700"
          >
            Email *
          </label>
          <input
            id="p-email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label
            htmlFor="p-phone"
            className="mb-1.5 block text-sm font-semibold text-gray-700"
          >
            Téléphone *
          </label>
          <input
            id="p-phone"
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label
            htmlFor="p-city"
            className="mb-1.5 block text-sm font-semibold text-gray-700"
          >
            Ville *
          </label>
          <input
            id="p-city"
            name="city"
            required
            value={form.city}
            onChange={handleChange}
            className={inputClass}
            placeholder="Ex. Bourgoin-Jallieu"
          />
        </div>
        <div>
          <label
            htmlFor="p-website"
            className="mb-1.5 block text-sm font-semibold text-gray-700"
          >
            Site web (optionnel)
          </label>
          <input
            id="p-website"
            name="website"
            type="url"
            value={form.website}
            onChange={handleChange}
            className={inputClass}
            placeholder="https://…"
          />
        </div>
      </div>

      <div className="mt-5">
        <label
          htmlFor="p-message"
          className="mb-1.5 block text-sm font-semibold text-gray-700"
        >
          Votre message *
        </label>
        <textarea
          id="p-message"
          name="message"
          required
          minLength={10}
          rows={4}
          value={form.message}
          onChange={handleChange}
          className={`${inputClass} resize-none`}
          placeholder="Présentez votre entreprise et les chantiers sur lesquels nous avons déjà collaboré (ou pourrions collaborer)."
        />
      </div>

      <button
        type="submit"
        disabled={sending}
        className="btn-primary mt-6 inline-flex items-center disabled:opacity-60"
      >
        <Send className="mr-2 h-4 w-4" />
        {sending ? "Envoi en cours…" : "Envoyer ma demande de partenariat"}
      </button>
    </form>
  );
}
