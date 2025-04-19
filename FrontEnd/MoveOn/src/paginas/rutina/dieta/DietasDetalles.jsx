import React, { useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import useAppContext from '../../../hooks/useAppContext.jsx';

const DietasDetalles = () => {
  const { id } = useParams();
  const { alimentos } = useAppContext();
  const { obtenerAlimentosDieta, listaAlimentosDieta, alimentosSeleccionados } = alimentos;

  console.log(listaAlimentosDieta)
  console.log(alimentosSeleccionados)

  /* Cuando se monte el componente, obtengo obtengo los datos de la dieta con dicho id.  */
  useEffect(() => {
    if (id) {
      obtenerAlimentosDieta(id);
    }
  }, []);

  return (
    <>
      <div className='flex justify-between'>
        <h2 className='dark:text-gold'>Detalles de tu dieta (nombre) </h2>
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

      <div className='bg-purple p-5 mt-2 sm:rounded-lg'>
        {
          listaAlimentosDieta.length && Array.isArray(listaAlimentosDieta) ? 
          listaAlimentosDieta.map((alimento) => 
             
              <div key={alimento.id_alimento} className='bg-white2 text-center border-b-2 border-white3'>
                <p className='px-4 py-2'>{alimento.nombre}</p>
                <p className='px-4 py-2'>Cantidad: {alimento.cantidad}</p>
              </div>
            
          ) : ""
        }
      </div>

    </>
  )
}

export default DietasDetalles