import React from 'react';
import "./FiltrosProductos.css";
import useContexto from '../../hooks/useContexto.jsx'
import OrdenarProductos from './OrdenarProductos.jsx';
import ResumenProductos from './ResumenProductos.jsx';
import Errores from '../Errores.jsx';

const FiltrosProductos = () => {
    const { reiniciarListado,
            aplicarFiltros,
            filtros,
            actualizarFiltro,
            errorProductos
        } = useContexto("productos");

    return (
        <>
        <div className='lista-filtros'>
            {/* Botón para reiniciar el listado de productos y los filtros como estaban. */}
            <button onClick={(e) => {
                reiniciarListado();
            }}>Reiniciar los filtros y el listado de productos
            </button>

            <h3>Filtrar productos</h3>
            <form id='form_filtros'>
            <div>
                <label htmlFor='nombre'>Nombre:</label>
                <input
                    type='text'
                    name='nombre'
                    id='filtroNombre'
                    placeholder='Nombre del producto'
                    value={filtros.nombre || ""} /* Valores controlados con un objeto para los input de los filtros. */
                    onChange={(e) => {
                        actualizarFiltro(e);    /* Y un onChange para actualizar los filtros del formulario y tenerlo controlado . */
                    }}
                />
            </div>
            <button onClick={(e) => {
                e.preventDefault(); 
                /* Función para aplicar los filtros al listado de productos.
                Se le pasa la propiedad (clave) y el valor. */
                aplicarFiltros('nombre', filtros.nombre);
             }}>Filtrar nombre</button>
            <div>
                <label htmlFor='precio'>Precio:</label>
                <input
                    type='number'
                    name='precio'
                    id='filtroPrecio'
                    step='0.1'
                    value={filtros.precio}
                    onChange={(e) => {
                        actualizarFiltro(e);
                    }}
                />
            </div>
            <button onClick={(e) => {
                e.preventDefault();
                aplicarFiltros('precio', filtros.precio);
             }}>Filtrar precio</button>
            <div>
                <label htmlFor='peso'>Peso(Kg):</label>
                <input
                    type='number'
                    name='peso'
                    id='filtroPeso'
                    step='0.1'
                    value={filtros.peso}
                    onChange={(e) => {
                        actualizarFiltro(e);
                    }}
                />
            </div>
            <button onClick={(e) => {
                e.preventDefault();
                aplicarFiltros('peso', filtros.peso);
            }}>Filtrar peso</button>
            </form>

            <OrdenarProductos/>
            <ResumenProductos />
            <Errores>{errorProductos}</Errores>
        </div>
        
        </>
    )
}

export default FiltrosProductos;