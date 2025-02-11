import React from "react";
import useAppContext from "../../../../../hooks/useAppContext.jsx";
import AlimentosEnLista from "../alimentos-elementos/AlimentosEnLista.jsx";

const DetalleLista = ({ lista }) => {
  // Extraemos el contexto de listas usando el hook centralizado
  const { listas } = useAppContext();
  const { listaEnEdicion, alimentosEdicion, sumarAlimentoEdicion, restarAlimentoEdicion } = listas;

  return (
    <>
      {listaEnEdicion && listaEnEdicion.id === lista.id && (
        <div className="lista-alimento-seleccionados">
          <AlimentosEnLista
            alimentosLista={alimentosEdicion}
            sumarAlimento={sumarAlimentoEdicion}
            restarAlimento={restarAlimentoEdicion}
          />
          <button className="actualizar-lista">
            Actualizar
          </button>
        </div>
      )}
    </>
  );
};

export default DetalleLista;
