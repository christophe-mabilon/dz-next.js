import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DZ Maçonnerie',
  description: 'Expert en maçonnerie générale, rénovation, extension et terrassement.',
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-500 to-teal-600 text-white">
      <nav className="p-6 max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">DZ Maçonnerie</h1>
        <a href="tel:0688144257" className="bg-white text-teal-600 px-6 py-2 rounded-lg font-semibold">
          06 88 14 42 57
        </a>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-5xl font-bold mb-6">Maçon expert à Artas & Bourgoin-Jallieu</h2>
        <p className="text-2xl mb-8 text-teal-100">Maçonnerie générale • Rénovation • Extension • Terrassement</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
          <div className="bg-white bg-opacity-10 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Maçonnerie neuf</h3>
            <p className="text-sm">Construction gros œuvre</p>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Rénovation</h3>
            <p className="text-sm">Ravalement & réfection</p>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Extension</h3>
            <p className="text-sm">Agrandissement maison</p>
          </div>
        </div>

        <Link 
          href="/services/maconnerie-neuf" 
          className="inline-block mt-8 bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Voir nos services
        </Link>
      </div>
    </div>
  );
}