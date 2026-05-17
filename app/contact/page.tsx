'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Phone, Mail, MapPin, Clock } from 'lucide-react';


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          city: '',
          service: '',
          message: '',
        });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert('Erreur : ' + (result.errors?.join(', ') || result.message));
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('Une erreur est survenue. Veuillez réessayer.');
    }
  };

  return (
    <>
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200">
        <div className="container-custom py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-primary-600 hover:text-primary-700">Accueil</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-700 font-medium">Contact</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden py-20 md:py-32 text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Contactez-nous
            </h1>
            <p className="text-xl text-primary-50">
              Vous avez un projet de maçonnerie ? Nous sommes là pour discuter de vos besoins et vous proposer la meilleure solution.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="heading-md mb-8">Nos coordonnées</h2>
              </div>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Téléphone</h3>
                    <a href="tel:+33688144257" className="text-primary-600 hover:text-primary-700 font-medium">
                      06 88 14 42 57
                    </a>
                    <p className="text-sm text-gray-600 mt-1">Disponible 24h/24</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a href="mailto:contact@dzmaconnerie38.fr" className="text-primary-600 hover:text-primary-700 font-medium">
                      contact@dzmaconnerie38.fr
                    </a>
                    <p className="text-sm text-gray-600 mt-1">Réponse sous 24h</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Localisation</h3>
                    <p className="text-gray-700">Artas 38170<br />Rhône-Alpes</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Horaires</h3>
                    <p className="text-gray-700">Lun - Ven : 7h - 18h<br />Sam : 9h - 13h</p>
                  </div>
                </div>
              </div>

              {/* CTA Card */}
              <div className="bg-primary-50 p-6 rounded-xl border border-primary-200 mt-8">
                <h3 className="font-semibold text-gray-900 mb-3">Urgence ?</h3>
                <p className="text-sm text-gray-700 mb-4">
                  Appelez-nous directement pour une intervention d'urgence
                </p>
                <a href="tel:+33688144257" className="btn-primary w-full text-center">
                  Appeler maintenant
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Envoyez-nous votre demande</h2>

                {submitted && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 font-medium">Merci ! Nous avons reçu votre message. Nous vous recontacterons sous 24h.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-600 focus:ring-2 focus:ring-primary-100 transition"
                      placeholder="Jean Dupont"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-600 focus:ring-2 focus:ring-primary-100 transition"
                      placeholder="jean@example.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-600 focus:ring-2 focus:ring-primary-100 transition"
                      placeholder="06 12 34 56 78"
                    />
                  </div>

                  {/* City */}
                  <div>
                    <label htmlFor="city" className="block text-sm font-semibold text-gray-900 mb-2">
                      Ville du projet *
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-600 focus:ring-2 focus:ring-primary-100 transition"
                      placeholder="Bourgoin-Jallieu"
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-gray-900 mb-2">
                      Type de service *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-600 focus:ring-2 focus:ring-primary-100 transition"
                    >
                      <option value="">Sélectionnez un service</option>
                      <option value="maconnerie">Maçonnerie générale</option>
                      <option value="renovation">Rénovation</option>
                      <option value="extension">Extension maison</option>
                      <option value="terrassement">Terrassement</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                      Décrivez votre projet *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-600 focus:ring-2 focus:ring-primary-100 transition resize-none"
                      placeholder="Décrivez votre projet en détail..."
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="btn-primary w-full justify-center"
                  >
                    Envoyer ma demande <ArrowRight className="ml-2 w-4 h-4" />
                  </button>

                  <p className="text-xs text-gray-600 text-center">
                    * Champs obligatoires
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-md mb-12 text-center">Pourquoi nous contactez ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                title: 'Devis gratuit',
                desc: 'Sans engagement et personnalisé',
              },
              {
                title: 'Réponse rapide',
                desc: 'Sous 24h maximum',
              },
              {
                title: 'Professionnels',
                desc: 'Experts reconnus depuis 15 ans',
              },
              {
                title: 'Garantie',
                desc: 'Décennale sur tous les travaux',
              },
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-white rounded-xl border border-gray-200 hover:border-primary-600 hover:shadow-lg transition-all text-center">
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="hero-gradient py-16 md:py-24 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-xl text-primary-50 mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour discuter de votre vision
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+33688144257" className="btn-secondary border-white text-white hover:bg-white hover:bg-opacity-10">
              <Phone className="w-4 h-4 mr-2" />
              06 88 14 42 57
            </a>
            <a href="mailto:contact@dzmaconnerie38.fr" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
              Envoyer un email <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
