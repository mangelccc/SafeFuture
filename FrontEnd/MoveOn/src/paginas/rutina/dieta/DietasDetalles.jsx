import React, { useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import useAppContext from '../../../hooks/useAppContext.jsx';

const DietasDetalles = () => {
  const { id } = useParams();
  const { alimentos } = useAppContext();
  const { obtenerAlimentosDieta, alimentosSeleccionados } = alimentos;

  console.log(alimentosSeleccionados)

  /* Cuando se monte el componente, obtengo obtengo los datos de la dieta con dicho id.  */
  useEffect(() => {
    if (id) {
      obtenerAlimentosDieta(id);
    }
  }, []);

  return (
    <>
      <div className='flex sm:justify-between hsm:flex-col gap-4 hsm:items-center p-4'>
        <h2 className='dark:text-gold underline underline-offset-4 decoration-turq'>Alimentos que puedes consumir en el dia </h2>
        <div className='flex gap-4'>
          <Link to={`/rutina/dietas/${id}`} className=''>
            <button className='bg-gold dark:text-black text-lg font-bold py-2 px-4 hsm:w-full rounded-lg cursor-pointer transition-all duration-300 hover:text-white dark:hover:text-white active:text-white hover:bg-purple active:bg-purple hover:shadow-lg'>
              Editar dieta
            </button>
          </Link>
          <Link to="/rutina/dietas">
            <button className='bg-gold dark:text-black text-lg font-bold py-2 px-4 hsm:w-full rounded-lg cursor-pointer transition-all duration-300 hover:text-white dark:hover:text-white active:text-white hover:bg-purple active:bg-purple hover:shadow-lg'>Volver a tus dietas</button>
          </Link>
        </div>
      </div>

      <div className='bg-black1 dark:bg-white2 rounded-lg overflow-hidden mt-4'>
  {
    alimentosSeleccionados.length && Array.isArray(alimentosSeleccionados) ? 
    alimentosSeleccionados.map((alimento) => (
      <div key={alimento.id_alimento} className='flex gap-4 p-4 border-b-2 border-white dark:border-black'>
        <img 
          src={alimento.imagen_url} 
          alt={alimento.nombre} 
          className='w-[60px] h-[60px] object-cover rounded-full shadow-lg'
        />
        <div className='flex justify-between grow'>
          <div className=''>
            <p className='font-bold text-gold dark:text-purple text-lg'>{alimento.nombre}</p>
            <p className='text-sm text-white dark:text-black font-bold'>Cantidad: <span className='font-medium'>{alimento.cantidad}</span></p>
            <p className='text-sm text-white dark:text-black font-bold'>Descripción: <span className='font-medium'>{alimento.descripcion}</span></p>

          </div>
          <div className='self-end'>
          <p className='text-sm text-white dark:text-black font-bold'>Precio aproximado: <span className='font-medium'>{alimento.precio_euros}€</span></p>
          <p className='text-sm text-white dark:text-black font-bold'>Peso por unidad: <span className='font-medium'>{alimento.peso_kg} Kg</span></p>
          </div>
        </div>
      </div>
    )) : (
      <p className='text-center text-white dark:text-black font-bold py-4'>
        No has añadido ningún alimento a tu dieta
      </p>
    )
  }
</div>


    </>
  )
}

export default DietasDetalles;