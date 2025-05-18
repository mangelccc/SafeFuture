import React from 'react';

export const SearchResult = ({ result, onSelect }) => {
  return (
    <div
      className="cursor-pointer bg-white dark:bg-black3 p-3 flex items-center hover:bg-gray-100 border-b-2 border-black"
      onClick={() => onSelect(result)}
    >
      <img
        src={result.imagen_url}
        alt={result.nombre}
        className="w-12 h-12 rounded-lg object-cover mr-4"
      />
      <span className="text-base font-medium text-black1 dark:text-white">
        {result.nombre}
      </span>
    </div>
  );
};