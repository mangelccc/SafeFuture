import React, { useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import useContexto from '../../hooks/useContexto.jsx'
import ListasCompraProductos from './ListasCompraProductos.jsx';
import { formatearFechaSB } from "../../bibliotecas/funcioteca.js" 
import "./ListasCompraContenido.css";

const ListasCompraContenido = () => {

    const { id } = useParams();
    const { obtenerProductosListas, obtenerListaPorId } = useContexto("listas");
    const lista = obtenerListaPorId(id);

    /* Cuando se monte el componente, obtengo obtengo los datos de la lista con dicho id.  */
    useEffect(() => {
        if (id) {
            obtenerProductosListas(id);
            
        }
    }, []); 

    return (
        <section className='listas-compra-contenido'>
            <div>
                <div className='lista-compra-info'>
                    <h2>Lista de Compra: {lista && lista.nombre_lista}</h2>
                    <p>Fecha de creación {lista && formatearFechaSB(lista.fecha_creacion)}</p>
                    
                </div>
                <div className='listas-compra-contenido-botones'>
                    <Link to="/listas-compra">
                        <button>Volver a tus listas</button>
                    </Link>
                    
                </div>

                
            </div>
            
            <ListasCompraProductos id={id}/>
        </section>

    );
}

export default ListasCompraContenido;