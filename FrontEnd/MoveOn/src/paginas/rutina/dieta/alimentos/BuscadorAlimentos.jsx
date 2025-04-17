import React from 'react';

const BuscadorAlimentos = ({ busqueda, buscarAlimento }) => (
  <div className="buscador">
    <label className='text-white'>Buscador: </label>
    <div class="relative">
      <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
        </svg>
      </div>
      <input
        type="search"
        className="block sm:w-4/6 hsm:w-full p-2 ps-10 my-2 text-sm text-gray-900 border border-gold rounded-lg bg-gray-50 focus:ring-gold focus:border-gold dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gold dark:focus:border-gold"
        placeholder="Buscar alimento..."
        value={busqueda}
        onChange={(e) => buscarAlimento(e.target.value)}
      />
    </div>
  </div>
);

export default BuscadorAlimentos