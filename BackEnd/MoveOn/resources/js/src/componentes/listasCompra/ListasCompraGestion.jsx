import React, { useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import ListadoProductos from '../productos/ListadoProductos.jsx';
import ListaProductosPrevia from './ListaProductosPrevia.jsx';
import useContexto from '../../hooks/useContexto.jsx'
import "./ListasCompraGestion.css";

const ListasCompraGestion = () => {
    const { id: ListaActual } = useParams(); // ID de la lista actual
    const { borrarYReiniciarLista, actualizarProductosEnDB, obtenerProductosListas, obtenerListaPorId } = useContexto("listas");

    const lista = obtenerListaPorId(ListaActual);

    useEffect(() => {
        if (ListaActual) {
            borrarYReiniciarLista();
            obtenerProductosListas(ListaActual);
        }
    }, [ListaActual]);

    return (
        <section className='listas-compra-gestion'>
            <section className='listas-compra-gestion-info'>
                <h2>Añadir productos en la lista: {lista ? lista.nombre_lista : ListaActual}</h2>
                <p>Haz clic encima de un producto del listado para incluirlo en tu lista.</p>

                <Link to={`/listas-compra/${ListaActual}`}>
                    <button>
                        Ir a los detalles
                    </button>
                </Link>

                <section className='listas-compra-gestion-botones'>
                    <button className='btn-insertar' onClick={(e) => actualizarProductosEnDB(ListaActual)}>
                        Guardar cambios
                    </button>
                    <button className='btn-reset' onClick={(e) => borrarYReiniciarLista()}>
                        Quitar todos los productos
                    </button>
                </section>
                {/* Lista donde se verán los productos que hay en la lista de la compra. */}
                <ListaProductosPrevia edicion={true} />
            </section>
            <section className='listas-compra-gestion-lista'>
                <ListadoProductos anyadir={true} idListaCompra={ListaActual} />
            </section>
        </section>
    );
};

export default ListasCompraGestion;
