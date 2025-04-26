import React from 'react';

const Alimento = ({ alimento, seleccionarAlimento, dietaId }) => {



  return (
    <li>
      <div className='border-1 border-black p-2 rounded-md dark:bg-white h-full flex flex-col'>
        <p className="font-bold">{alimento.nombre}</p>
        <img className='m-auto py-4 w-20' src={alimento.imagen_url} alt={alimento.nombre} />
        <span className='mb-2 self-center'>{alimento.precio_euros} € / {alimento.peso_kg} kg</span>
        <div className='flex justify-between'>
          <span className='font-bold'>Calorias:</span><span>{alimento.calorias}</span>
        </div>
        <div className='flex justify-between'>
          <span className='font-bold'>Hidratos:</span><span>{alimento.carbohidratos}</span>
        </div>
        <div className='flex justify-between'>
          <span className='font-bold'>Grasas:</span><span>{alimento.grasas}</span>
        </div>
        <div className='flex justify-between'>
          <span className='font-bold'>Proteinas:</span><span>{alimento.proteinas}</span>
        </div>
        <button
          className='bg-purple text-white rounded-md hover:bg-gold hover:text-black transition-all duration-200 block w-full mt-4 self-end p-1'
          onClick={() => seleccionarAlimento(alimento, dietaId)}>
          Seleccionar
        </button>
      </div>
    </li>
  )
}

export default Alimento;