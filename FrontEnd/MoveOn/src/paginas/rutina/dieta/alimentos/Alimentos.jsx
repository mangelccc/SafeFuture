import React from 'react';
import Alimento from './Alimento.jsx';

const Alimentos = ({ alimentos, seleccionarAlimento, dietaId }) => {
  return(
  <div className="lista-alimentos">
    <h2 className='p-0 dark:text-gold underline underline-offset-3 decoration-turq hsm:p-4 sm:my-4'>Alimentos</h2>
    
    <ul className='grid hsm:grid-cols-2 sm:grid-cols-5 gap-4 hsm:mx-4'>
      {alimentos.length && Array.isArray(alimentos) ? 
        alimentos.map((alimento) => 
          <Alimento key={alimento.id_alimento} alimento={alimento} dietaId={dietaId} seleccionarAlimento={seleccionarAlimento}/>
        )
       : 
        <li>No se encontraron alimentos.</li>
      }
    </ul>
  </div>
  );
};

export default Alimentos