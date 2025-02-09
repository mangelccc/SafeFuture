import React, { useContext } from "react";
import { contextoListas } from "../../../../../contextos/ListasContexto";
import AlimentosEnLista from "../alimentos-elementos/AlimentosEnLista";

const AlimentosEnNuevaLista = () => {
  const {
    sumarAlimento,
    restarAlimento,
    nombreLista,
    alimentosLista,
  } = useContext(contextoListas);

  return (

      <div className="lista-alimento-seleccionados">
      <h3>{nombreLista}</h3>
        <AlimentosEnLista
          alimentosLista={alimentosLista}
          sumarAlimento={sumarAlimento}
          restarAlimento={restarAlimento}
        />
      </div>
  );
};

export default AlimentosEnNuevaLista;
