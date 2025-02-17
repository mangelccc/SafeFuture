import React from "react";
import AlimentoEnLista from "./AlimentoEnLista";

const AlimentosEnListado = ({ alimentosLista, sumarAlimento, restarAlimento }) => {

  const manejarClic = (e) => {
    const alimentoElemento = e.target.closest(".alimento-seleccionado");
    if (!alimentoElemento) return;
    const id = alimentoElemento.dataset.id;
    if (e.target.classList.contains("btn-sumar")) {
      sumarAlimento(id);
    }
    if (e.target.classList.contains("btn-restar")) {
      restarAlimento(id);
    }
  };

  return (
    <div onClick={manejarClic}>
      {alimentosLista.length > 0 ? (
        alimentosLista.map((alimento) => (
          <AlimentoEnLista key={alimento.id} alimento={alimento} />
        ))        
      ) : (
        <p>No hay alimentos en la lista.</p>
      )}
    </div>
  );
};

export default AlimentosEnListado;
