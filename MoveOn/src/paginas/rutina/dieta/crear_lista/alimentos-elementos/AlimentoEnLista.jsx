import React from "react";
import BotonesAlimentoEnLista from "./BotonesAlimentoEnLista";

const AlimentoListado = ({alimento}) => {
    return (
        <div key={alimento.id} className="alimento-seleccionado" data-id={alimento.id}>
            <img src={alimento.imagen_url} alt={alimento.nombre} />
            <p>{alimento.nombre}</p>
            <p>{alimento.peso_kg} KG</p>
            <p>{alimento.precio_euros} $</p>
            <BotonesAlimentoEnLista alimento={alimento}/>
        </div>
    );
};

export default AlimentoListado;
