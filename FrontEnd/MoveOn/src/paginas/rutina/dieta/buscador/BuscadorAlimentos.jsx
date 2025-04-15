import React from 'react';

const BuscadorAlimentos = ({ busqueda, buscarAlimento }) => (
    <div className="buscador">
      <label>Buscador: </label>
      <input
        type="text"
        placeholder="Buscar alimento..."
        value={busqueda}
        onChange={(e) => buscarAlimento(e.target.value)}
      />
    </div>
  );

export default BuscadorAlimentos