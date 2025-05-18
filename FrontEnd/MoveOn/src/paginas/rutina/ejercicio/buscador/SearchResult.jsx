import React from 'react';

export const SearchResult = ({ result, onSelect }) => {
  return (
    <div
  className="group cursor-pointer bg-white dark:bg-black3 dark:hover:bg-black p-3 flex items-center hover:bg-purple border-b-2 border-black transition-colors duration-200 ease-in-out"
  onClick={() => onSelect(result)}
>
  <img
    src={result.imagen_url}
    alt={result.nombre}
    className="w-12 h-12 rounded-lg object-cover mr-4 transition-transform duration-200 ease-in-out hover:scale-105"
  />
  <span className="text-base font-medium text-gray-800 dark:text-gray-100 group-hover:text-gold transition-colors duration-200 ease-in-out">
    {result.nombre}
  </span>
</div>

  );
};
