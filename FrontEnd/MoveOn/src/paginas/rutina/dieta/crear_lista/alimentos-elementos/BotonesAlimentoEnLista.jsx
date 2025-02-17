import React from "react";

const BotonesAlimentoEnLista = ({alimento}) => {

  return (
    <div className="alimento-seleccionado-botones">
        <button className="btn-sumar">+</button>
        <button className="btn-restar">-</button>
        {alimento.quantity}
    </div>
  );
};

export default BotonesAlimentoEnLista;
