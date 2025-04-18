import React from 'react';
import Alimento from './Alimento.jsx';

const Alimentos = ({ alimentos, seleccionarAlimento, dietaId }) => {
  console.log(alimentos);
  return(
  <div className="lista-alimentos">
    <h3>Alimentos</h3>
    
    <ul>
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