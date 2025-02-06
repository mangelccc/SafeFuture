import React from "react";

const AlimentoListado = ({ nombreLista, alimentosLista, sumarAlimento, restarAlimento }) => {
  return (
    <>
      <h3>{nombreLista}</h3>
      {alimentosLista.length > 0 ? (
        alimentosLista.map((alimento) => (
          <div key={alimento.id} className="alimento-seleccionado">
            <img src={alimento.imagen_url} alt={alimento.nombre} />
            <p>{alimento.nombre}</p>
            <p>{alimento.peso_kg} KG</p>
            <p>{alimento.precio_euros} $</p>
            <div className="alimento-seleccionado-botones">
              <button onClick={() => sumarAlimento(alimento.id)}>+</button>
              <button onClick={() => restarAlimento(alimento.id)}>-</button>
              {alimento.quantity}
            </div>
          </div>
        ))
      ) : (
        <p>No hay alimentos en la lista.</p>
      )}
    </>
  );
};

export default AlimentoListado;
