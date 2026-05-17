export default function RealisationsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Nos réalisations</h1>
        <p className="text-xl text-gray-600 mb-12">Découvrez nos derniers projets de maçonnerie</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="w-full h-48 bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white text-2xl font-bold">
                Projet {i}
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">Réalisation {i}</h3>
                <p className="text-sm text-gray-600">Description du projet de maçonnerie</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}