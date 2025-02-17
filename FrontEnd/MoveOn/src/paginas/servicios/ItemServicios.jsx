import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ItemServicios = ({ icono, texto }) => {
    return (
        <article className="item-servicios">
            <FontAwesomeIcon className="servicio-icono" icon={icono} />
            <p className="servicio-texto linea-divisoria">{texto}</p>
        </article>
    );
}

export default ItemServicios;