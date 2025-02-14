import React, { useEffect } from 'react';
import "./FormProductos.css";
import useContexto from '../../hooks/useContexto.jsx'

import Errores from '../Errores.jsx';

const FormProductos = ({ insertar, editar, eliminar }) => {

    const { producto,
        actualizarProducto,
        insertarProducto,
        modificarProducto,
        errorProductos,
        reiniciarFormulario,
        cambiarModoDeEdicion,
        validarFormProducto } = useContexto("productos");

        /* He creado esta función para que la función del botón del formulario varie según el parámetro activo (props). */
    const manejarBoton = (evento) => {
        if (validarFormProducto(evento)) {
            if (insertar) { /* No hago otras comprobaciones porque "eliminar" lo utilizo solamente para cambiar el título. */
                insertarProducto();
            } else {
                modificarProducto();
            }
        }
    };

    /* Este useEffect lo he creado porque si un producto se esta editando en el formulario y, se va de la página
    de insertar producto, que se reinicie y no aparezcan los datos del producto que se estaba editando. */
    useEffect(() => {
        if (!editar) {
            reiniciarFormulario();
        }
    }, [])

    return (
        <>
            {/* Para variar el título dependiendo del parámetro entrante. */}
            <h2>{insertar ? "Insertar productos" : editar ? "Editar productos" : eliminar && "Eliminar producto"}</h2>
            <form id='formulario-productos'>
                <div className='campo-formulario'>
                    <label htmlFor='nombre'>Nombre: </label>
                    <input
                        type='text'
                        name='nombre'
                        value={producto.nombre || ""}
                        onChange={(e) => {
                            actualizarProducto(e);
                        }}
                    />
                </div>
                <div className='campo-formulario'>
                    <label htmlFor='peso'>Peso: </label>
                    <input
                        type='text'
                        name='peso'
                        value={producto.peso || ""}
                        onChange={(e) => {
                            actualizarProducto(e);
                        }}
                    />
                </div>
                <div className='campo-formulario'>
                    <label htmlFor='precio'>Precio: </label>
                    <input
                        type='text'
                        name='precio'
                        value={producto.precio || ""}
                        onChange={(e) => {
                            actualizarProducto(e);
                        }}
                    />
                </div>
                <div className='campo-formulario'>
                    <label htmlFor='descripcion'>Descripción: </label>
                    <input
                        type='text'
                        name='descripcion'
                        value={producto.descripcion || ""}
                        onChange={(e) => {
                            actualizarProducto(e);
                        }}
                    />
                </div>
                <div className='campo-formulario'>
                    <label htmlFor='imagen_url'>URL de la imagen (Opcional):</label>
                    <input
                        type='text'
                        name='imagen_url'
                        value={producto.imagen_url || ""}
                        onChange={(e) => {
                            actualizarProducto(e);
                        }}
                    />
                </div>
                <div className='campo-formulario'>
                    <button
                        onClick={(e) => {
                            e.preventDefault() /* Tengo que prevenir el comportamiento por defecto, es un botón. */
                            manejarBoton(e);
                        }}
                    > {/* Para variar el valor del texto del botón según el parámetro entrante. */}
                        {insertar ? "Guardar Producto" : "Editar Producto"}
                    </button>
                    {editar &&
                        <button
                            onClick={(e) => {
                                e.preventDefault() 
                                /* Para establecer el estado "edicion" (en el contexto) a false, que es el que controla la vista del formulario 
                                o del listado, en resumen para volver a mostrar el listado. */
                                cambiarModoDeEdicion(); 
                            }}
                        >
                            Volver al listado
                        </button>
                    }
                </div>
            </form >
            <Errores>{errorProductos}</Errores>
        </>
    )
}

export default FormProductos;