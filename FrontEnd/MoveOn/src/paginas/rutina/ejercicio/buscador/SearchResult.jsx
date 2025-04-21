/* SearchResult.jsx */
import React from 'react';
import './SearchResult.css';

export const SearchResult = ({ result, onSelect }) => {
  return (
    <div
      className="search-result cursor-pointer"
      onClick={() => onSelect(result)}
    >
      {result.nombre}
    </div>
  );
};