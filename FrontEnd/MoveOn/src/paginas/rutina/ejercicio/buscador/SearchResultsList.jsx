import React from 'react';
import { SearchResult } from './SearchResult';
import './SearchResultsList.css';

export const SearchResultsList = ({ results, onSelect }) => {
  return (
    <div className="results-list">
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