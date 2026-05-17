export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-2xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-4 text-center">Nous contacter</h1>
        <p className="text-xl text-gray-600 mb-12 text-center">Devis gratuit - Réponse 24h</p>
        
        <form className="bg-white p-8 rounded-lg shadow-sm space-y-6">
          <div>
            <label className="block text-sm font-semibold mb-2">Votre nom</label>
            <input type="text" className="w-full border rounded-lg p-3" placeholder="Jean Dupont" />
          </div>
          
          <div>
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input type="email" className="w-full border rounded-lg p-3" placeholder="jean@example.com" />
          </div>
          
          <div>
            <label className="block text-sm font-semibold mb-2">Téléphone</label>
            <input type="tel" className="w-full border rounded-lg p-3" placeholder="06 12 34 56 78" />
          </div>
          
          <div>
            <label className="block text-sm font-semibold mb-2">Type de travaux</label>
            <select className="w-full border rounded-lg p-3">
              <option>Maçonnerie générale</option>
              <option>Rénovation</option>
              <option>Extension</option>
              <option>Terrassement</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-semibold mb-2">Message</label>
            <textarea className="w-full border rounded-lg p-3 h-32" placeholder="Décrivez votre projet..."></textarea>
          </div>
          
          <button className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700">
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
}