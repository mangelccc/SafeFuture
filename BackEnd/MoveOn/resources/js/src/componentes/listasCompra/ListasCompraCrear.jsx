import React, { useEffect } from 'react';
import useContexto from '../../hooks/useContexto.jsx'
import { Link } from "react-router-dom";
import Errores from '../Errores.jsx';
import "./ListasCompraCrear.css"

const ListasCompraCrear = () => {

    const { actualizarNombreLista, nuevaLista, errorListas, validarLista, crearLista, restablecerErroresLista } = useContexto("listas");

    useEffect(() =>{
        restablecerErroresLista();
    },[])

    return (
        <section className='listas-compra-crear'>
            <div>
                <h2>Crear una nueva lista</h2>
                <form id='crear-lista'>
                    <label htmlFor='nombre_lista'>Elige el nombre de tu lista:</label>
                    <input
                        name='nombre_lista'
                        type='text'
                        value={nuevaLista.nombre_lista || ""}
                        placeholder='Cuernos de unicornio rebozados al limón'
                        onChange={(e) => {
                            actualizarNombreLista(e);
                        }}
                    />
                    <button onClick={(e) => {
                        e.preventDefault();
                        /* Si no hay ningún error en el input, se procede a crear la lista. */
                        if (validarLista(e)) {
                            crearLista();
                        }
                    }}>Crear Lista</button>
                </form>
                <Errores>{errorListas}</Errores>
            </div>
            <div>
                <Link to="/listas-compra">
                    <button>Volver a tus listas</button>
                </Link>
            </div>
        </section>
    )
}

export default ListasCompraCrear;