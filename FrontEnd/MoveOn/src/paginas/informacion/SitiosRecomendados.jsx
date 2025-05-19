import React from 'react';
import { useState } from 'react';
import { recommendedSites } from "../../bibliotecas/biblioteca.js"



const SitiosRecomendados = () => {
  const [activeCategory, setActiveCategory] = useState('Nutrición');

  const categories = recommendedSites.map(cat => cat.category);
  const activeSites = recommendedSites.find(cat => cat.category === activeCategory)?.sites || [];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 dark:text-gold">Sitios Recomendados</h1>

      {/* Navegación por categorías */}
      <nav className="flex space-x-4 mb-6">
        {categories.map(cat => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-lg focus:outline-none border-gray-600 border-1 ${
              activeCategory === cat ? 'bg-purple text-white' : 'bg-gray-200 text-black2'
            }`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </nav>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {activeSites.map(site => (
          <a
            key={site.name}
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 border rounded-lg hover:shadow-lg transition-shadow border-gray-600"
          >
            <h2 className="text-xl font-semibold mb-2 dark:text-white underline">{site.name}</h2>
            <p className="text-gray-600 dark:text-white ">{site.description}</p>
            <span className="text-purple dark:text-turq bg-gray- mt-2 inline-block">Visitar sitio →</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default SitiosRecomendados;