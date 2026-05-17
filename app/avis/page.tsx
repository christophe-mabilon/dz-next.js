export default function AvisPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Avis clients</h1>
        <p className="text-xl text-gray-600 mb-12">⭐ 4.9/5 (42 avis)</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'Jean Dupont', text: 'Excellent travail! Équipe professionnelle.' },
            { name: 'Marie Martin', text: 'Respecte les délais. Très satisfait!' },
            { name: 'Pierre Blanc', text: 'Devis gratuit clair, pas de surprise.' },
          ].map((review, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-center mb-3">
                {'⭐'.repeat(5)}
              </div>
              <p className="text-gray-700 mb-4">"{review.text}"</p>
              <p className="font-semibold">{review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}