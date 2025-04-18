import React from 'react';

const Alimento = ({ alimento, seleccionarAlimento, dietaId }) => {



  return (
    <li>
      <div className='border-1 border-black p-2 rounded-md'>
        <p className="font-bold">{alimento.nombre}</p>
        <img src={alimento.imagen_url} alt={alimento.nombre} width="50" />
        <span>{alimento.precio_euros} € / {alimento.peso_kg} kg</span>
        <button 
        className='bg-purple text-white rounded-md hover:bg-gold hover:text-black transition-all duration-200'
        onClick={() => seleccionarAlimento(alimento, dietaId)}>
          Seleccionar
        </button>
      </div>
    </li>
  )
}

export default Alimento;