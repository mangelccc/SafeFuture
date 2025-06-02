import React from 'react';
import { SearchResult } from './SearchResult';

export const SearchResultsList = ({ results, onSelect }) => {
  return (
    <div className="w-full h-[445px] bg-white flex flex-col shadow-md rounded-lg mt-4 overflow-y-auto">
      {results.map((result) => (
        <SearchResult
          key={result.id_ejercicio}
          result={result}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
};
