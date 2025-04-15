import React from 'react'

const FiltrosAlimentos = ({ filtros, actualizarFiltro }) => {
    // Función para renderizar inputs de rangos numéricos
    const renderInputFiltro = (label, keyMin, keyMax) => (
      <div className="input-filtro" key={label}>
        <label>{label}:</label>
        <input
          type="number"
          value={filtros[keyMin]}
          onChange={(e) => actualizarFiltro(keyMin, Number(e.target.value))}
        />
        <input
          type="number"
          value={filtros[keyMax]}
          onChange={(e) => actualizarFiltro(keyMax, Number(e.target.value))}
        />
      </div>
    );
  
    return (
      <div className="filtros">
        <div>
          <label>Categoria: </label>
          <select
            onChange={(e) => actualizarFiltro('categoria', e.target.value)}
            value={filtros.categoria}
          >
            <option value="">Todas</option>
            <option value="Proteínas">Proteínas</option>
            <option value="Carbohidratos">Carbohidratos</option>
            <option value="Grasas">Grasas</option>
            <option value="Vitaminas">Vitaminas</option>
          </select>
        </div>
        {renderInputFiltro('Carbohidratos', 'minCarbohidratos', 'maxCarbohidratos')}
        {renderInputFiltro('Proteínas', 'minProteinas', 'maxProteinas')}
        {renderInputFiltro('Calorías', 'minCalorias', 'maxCalorias')}
        {renderInputFiltro('Grasas', 'minGrasas', 'maxGrasas')}
      </div>
    );
  };

export default FiltrosAlimentos