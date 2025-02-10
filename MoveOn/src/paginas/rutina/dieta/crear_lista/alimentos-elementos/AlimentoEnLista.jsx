import React from "react";
import BotonesAlimentoEnLista from "./BotonesAlimentoEnLista.jsx";

const AlimentoListado = ({alimento}) => {
    return (
        <div className="alimento-seleccionado" data-id={alimento.id}>
            <img src={alimento.imagen_url} alt={alimento.nombre} />
            <p>{alimento.nombre}</p>
            <p>{alimento.peso_kg} KG</p>
            <p>{alimento.precio_euros} $</p>
            <BotonesAlimentoEnLista alimento={alimento}/>
        </div>
    );
};

export default AlimentoListado;
