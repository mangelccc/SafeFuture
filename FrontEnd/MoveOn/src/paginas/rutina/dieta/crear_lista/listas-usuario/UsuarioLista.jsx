import React from "react";
import InformacionListas from "./InformacionLista.jsx";
import DetallesListas from "./DetalleLista.jsx"

const UsuarioLista = ({lista}) => {

  return (
          <div key={lista.id} className="lista-usuario-resumen" data-id={lista.id}>
            <InformacionListas lista={lista}/>
            {/*Los detalles se mostraran en caso de que el usuario le de clic a ver en InformacionListas.*/}
            <DetallesListas lista={lista}/>
          </div>
  );
};

export default UsuarioLista;
