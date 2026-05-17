export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-4 text-center">Blog maçonnerie</h1>
        <p className="text-xl text-gray-600 mb-12 text-center">Conseils et actualités</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {[
            { title: 'Comment choisir un bon maçon?', date: '17 mai 2024' },
            { title: 'Terrasse béton vs pierre naturelle', date: '10 mai 2024' },
            { title: 'Faut-il un permis pour une extension?', date: '5 mai 2024' },
          ].map((post, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-sm text-gray-500">{post.date}</p>
              <p className="text-gray-600 mt-4">Contenu de l'article...</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}