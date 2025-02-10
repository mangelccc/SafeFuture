import React from "react";
import useAppContext from "../../../../../hooks/useAppContext.jsx";
import AlimentosEnLista from "../alimentos-elementos/AlimentosEnLista.jsx";

const AlimentosEnNuevaLista = () => {
  // Extraemos el contexto de listas usando el hook centralizado
  const { listas } = useAppContext();
  const { sumarAlimento, restarAlimento, nombreLista, alimentosLista } = listas;

  return (
    <div className="lista-alimento-seleccionados">
      <h3>Lista: {nombreLista}</h3>
      <AlimentosEnLista
        alimentosLista={alimentosLista}
        sumarAlimento={sumarAlimento}
        restarAlimento={restarAlimento}
      />
    </div>
  );
};

export default AlimentosEnNuevaLista;
