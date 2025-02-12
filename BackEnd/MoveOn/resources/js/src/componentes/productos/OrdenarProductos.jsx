import React from 'react';
import useContexto from '../../hooks/useContexto.jsx'

const OrdenarProductos = () => {

    const { ordenarPor } = useContexto("productos");

    return (
        <>
            <h3>Ordenar productos</h3>
            <button
                onClick={(e) => {
                    /* Función reutilizable a la que le paso la propiedad para que ordene por dicha columna. */
                    ordenarPor("nombre");
                }}>Por nombre
            </button>
            <button
                onClick={(e) => {
                    ordenarPor("precio");
                }}>Por Precio
            </button>
            <button
                onClick={(e) => {
                    ordenarPor("peso");
                }}>Por Peso
            </button>
        </>
    )
}

export default OrdenarProductos;