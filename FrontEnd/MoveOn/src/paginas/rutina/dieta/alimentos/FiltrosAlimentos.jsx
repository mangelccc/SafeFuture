import React from 'react'

const FiltrosAlimentos = ({ filtros, actualizarFiltro }) => {
  // Función para renderizar inputs de rangos numéricos
  const renderInputFiltro = (label, keyMin, keyMax) => (
    <div className="input-filtro bg-gold p-2 rounded-lg flex sm:flex-row hsm:flex-col sm:items-end gap-2" key={label}>
      <div className='flex-1'>
        <label className='block'>{label}:</label>
        <span>Mínimo: </span>
        <input
          type="number"
          className='rounded-md w-full ps-2'
          value={filtros[keyMin]}
          onChange={(e) => actualizarFiltro(keyMin, Number(e.target.value))}
        />
      </div>
      <div className='flex-1'> 
        <span>Máximo: </span>
        <input
          className='rounded-md w-full ps-2'
          type="number"
          value={filtros[keyMax]}
          onChange={(e) => actualizarFiltro(keyMax, Number(e.target.value))}
        />
      </div>
    </div>
  );

  return (
    <>
      <div className="filtros">
        <div>
          <label className='text-white block'>Categoria: </label>
          <select
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gold focus:border-gold block sm:w-4/6 hsm:w-full my-2 p-2.5 dark:bg-gray-700 dark:border-gold dark:text-white dark:focus:ring-gold dark:focus:border-gold'
            onChange={(e) => actualizarFiltro('categoria', e.target.value)}
            value={filtros.categoria}
          >
            <option className='hover:bg-gold' value="">Todas</option>
            <option value="Proteínas">Proteínas</option>
            <option value="Carbohidratos">Carbohidratos</option>
            <option value="Grasas">Grasas</option>
            <option value="Vitaminas">Vitaminas</option>
          </select>
        </div>
        <h3 className='text-white py-2'>Filtros de rango:</h3>
        <div className='grid hsm:grid-cols-1 sm:grid-cols-2 gap-4'>
          {renderInputFiltro('Carbohidratos', 'minCarbohidratos', 'maxCarbohidratos')}
          {renderInputFiltro('Proteínas', 'minProteinas', 'maxProteinas')}
          {renderInputFiltro('Calorías', 'minCalorias', 'maxCalorias')}
          {renderInputFiltro('Grasas', 'minGrasas', 'maxGrasas')}
        </div>
      </div>

    </>
  );
};

export default FiltrosAlimentos