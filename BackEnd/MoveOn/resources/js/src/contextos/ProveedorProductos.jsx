import React, { createContext, useState, useEffect, useContext } from 'react';
import { useLocation } from "react-router-dom";
import { supabaseConexion } from '../conexionSupabase/supabase.js';
import { filtrarProductos, ordenarProductos, validarDato } from '../bibliotecas/funcioteca.js';
import { contextoSesion } from "./ProveedorSesion.jsx";
import Swal from 'sweetalert2';


const contextoProductos = createContext();

const ProveedorProductos = ({ children }) => {

    /* Constantes con valores iniciales para los estados. */
    const arrayInicial = [];
    const cadenaInicial = "";
    const semaforoInicial = false;

    /* Valor inicial para los filtros que voy a utilizar. */
    const filtrosIniciales = {
        nombre: "",
        precio: 0,
        peso: 0
    };

    /* Valor inicial para los productos que puedan crear o modificar. */
    const productoInicial = {
        nombre: "",
        peso: 0,
        precio: 0,
        imagen_url: "",
        descripcion: ""
    };
    /* Hook que voy a utilizar para reiniciar los posibles errores que haya al cambiar entre páginas. */
    const cambioDeRuta = useLocation();

    /* Estados para exportar. */
    const [listadoProductos, setListadoProductos] = useState(arrayInicial);
    const [productosFiltrados, setProductosFiltrados] = useState(arrayInicial);
    const [filtros, setFiltros] = useState(filtrosIniciales);
    const [errorProductos, setErrorProductos] = useState(cadenaInicial);
    const [producto, setProducto] = useState(productoInicial);
    const [edicion, setEdicion] = useState(semaforoInicial);

    /* Variable del contexto sesión que usaré para obtener el listado cuando se haga login. */
    const { sesionIniciada } = useContext(contextoSesion)

    /* Esta función la utilizaré para poder mostrar el listado tras editar un producto, o cancelar la edición de un producto. */
    const cambiarModoDeEdicion = () => {
        setEdicion(false);
    };

    /* Para establecer los campos del formulario de productos a su valor inicial. */
    const reiniciarFormulario = () => {
        setProducto(productoInicial);
    };

    /* Para obtener los datos de un producto(objeto) de la lista de productos. */
    const obtenerProductoDeLaLista = (id) => {
        return productosFiltrados.filter((prod) => prod.id_producto === id)
    }

    /* Función para obtener el listado de los productos de la base de datos. */
    const obtenerListado = async () => {
        try {
            const { data, error } = await supabaseConexion.from("productos").select("*");
            /* Comprobación de errores. */
            if (error || !data) {
                throw new Error("Ha habido un error al obtener el listado de productos.");
            }
            /* Establezco ambos estados con el listado original. */
            setListadoProductos(data);
            setProductosFiltrados(data);
        } catch (error) {
            setErrorProductos(error.message);
        }
    };

    /* Función para volver a dejar el listado de productos para filtrar sin filtros. */
    const reiniciarListado = () => {
        setProductosFiltrados(listadoProductos);
        setFiltros(filtrosIniciales);
    };

    /* Función para aplicar los filtros al listado de productos filtrados. */
    const aplicarFiltros = (propiedad, valor) => {
        let productosAFiltrar = [...listadoProductos];
        setProductosFiltrados(filtrarProductos(productosAFiltrar, propiedad, valor));
    };

    /* Función para actualizar los filtros del formulario de filtros y tenerlo controlado. */
    const actualizarFiltro = (evento) => {
        const { name, value } = evento.target;
        setFiltros({ ...filtros, [name]: value });
    };

    /* Función para actualizar los filtros del formulario de productos y tenerlo controlado. */
    const actualizarProducto = (evento) => {
        const { name, value } = evento.target;
        setProducto({ ...producto, [name]: value });
    };

    /* Función para ordenar el listado de productos filtrados. */
    const ordenarPor = (propiedad) => {
        let productosOrdenados = ordenarProductos(productosFiltrados, propiedad);
        setProductosFiltrados(productosOrdenados);
    };

    /* Función para insertar productos en la base de datos y en el listado. */
    const insertarProducto = async () => {
        try {
            // Genero un ID único y actualizo el producto.
            let nuevoProducto = { ...producto, id_producto: crypto.randomUUID() };
            /* Inserto una imagen por defecto en caso de que la URL esté vacía. */
            if (!nuevoProducto.imagen_url) {
                nuevoProducto = { ...nuevoProducto, imagen_url: "https://egivszshtsuxcmjzxvnv.supabase.co/storage/v1/object/public/almacenProductos/alimentos.jpg?t=2025-01-24T19%3A28%3A28.866Z" };
            }

            // Inserto el producto en la base de datos.
            const respuesta = await supabaseConexion.from("productos").insert(nuevoProducto);
            // Por si hay algún error.
            if (respuesta.error) {
                throw new Error(respuesta.error.message);
            }

            // Actualizo ambos estados con el nuevo producto.
            setListadoProductos([...listadoProductos, nuevoProducto]);
            setProductosFiltrados([...listadoProductos, nuevoProducto]);

            // Reinicio el formulario al estado inicial.
            reiniciarFormulario();
            // Borro los posibles errores que puedan haber.
            setErrorProductos(cadenaInicial);

            /*  Mensaje emergente que te avisa de que se ha realizado el insert. */
            Swal.fire({
                title: "Producto insertado correctamente.",
                icon: "success",
                timer: 1500,
                showConfirmButton: false
            });

        } catch (error) {
            setErrorProductos(error.message);
        }
    };


    /* Función para borrar un producto de la base de datos y del listado.*/
    const borrarProducto = async (evento) => {
        try {
            const id = evento.target.parentNode.id; // Obtenemos el ID del producto.
            if (id) {
                // Muestro una ventana de confirmación.
                Swal.fire({
                    title: "¿Estás seguro de que lo quieres borrar?",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#d33",
                    cancelButtonColor: "#3085d6",
                    confirmButtonText: "Eliminar",
                    cancelButtonText: "Cancelar",
                }).then(async (result) => {
                    if (result.isConfirmed) {
                        // Si se confirma, realiza el borrado en la base de datos.
                        const { data, error } = await supabaseConexion
                            .from("productos")
                            .delete()
                            .eq("id_producto", id);

                        if (error) {
                            throw new Error(error.message);
                        }

                        /* Con este filter obtengo todos los productos del listado, menos el seleccionado. */
                        const productosActualizados = listadoProductos.filter((producto) => {
                            if (producto.id_producto !== id) {
                                return producto;
                            }
                        });
                        /* Actualizo el estado de las listas de productos. */
                        setListadoProductos(productosActualizados);
                        setProductosFiltrados(productosActualizados);

                        // Muestro la confirmación de borrado.
                        Swal.fire({
                            title: "¡Borrado!",
                            text: "El producto ha sido eliminado.",
                            icon: "success",
                            timer: 1500,
                            showConfirmButton: false
                        });
                    }
                });
            }
        } catch (error) {
            setErrorProductos(error.message);
        }
    };


    /* Función para habilitar la edición de un producto y mostrar el formulario con sus datos.*/
    const editarProducto = (evento) => {
        try {
            const id = evento.target.parentNode.id; // Obtenemos el ID del producto.
            if (id) {
                // Muestro una ventana de confirmación.
                Swal.fire({
                    title: "¿Estás seguro de que lo quieres editar?",
                    icon: "question",
                    showCancelButton: true,
                    confirmButtonColor: "#11a011",
                    cancelButtonColor: "#3085d6",
                    confirmButtonText: "Editar",
                    cancelButtonText: "Cancelar",
                }).then(async (result) => {
                    if (result.isConfirmed) {
                        /* Si se confirma, establezco el modo de edición que, muestra el formulario. */
                        setEdicion(true);
                        /* Obtengo mediante el ID el producto de la lista. */
                        const productoClicado = obtenerProductoDeLaLista(id);
                        setProducto(productoClicado[0]); /* Y ya establezco el objeto producto con los valores del producto seleccionado. */
                    }
                });
            }
        } catch (error) {
            setErrorProductos(error.message);
        }
    };

    /* Función para modificar un producto existente en la base de datos y actualizar el listado. */
    const modificarProducto = async () => {

        // Llamada a la base de datos para actualizar un prodcuto.
        const { data, error } = await supabaseConexion
            .from("productos")
            .update(producto)
            .eq("id_producto", producto.id_producto); // Edito el producto por su ID.

        // Actualizo el estado de los productos:
        // Primero borro el producto que había en la lista antes.
        const productosActualizados = productosFiltrados.filter((prodFiltr) => {
            if (prodFiltr.id_producto !== producto.id_producto) {
                return producto;
            }
        });
        /* Y ya segundo, para que se reflejen los cambios en ambos estados, inserto el producto actualizado de nuevo en la lista,
        esto es necesario para evitar más llamadas a la base de datos (También se puede actualizar mediante un map). */
        setProductosFiltrados([...productosActualizados, producto]);
        setListadoProductos([...productosActualizados, producto]);
        /* Y el modo de edición pasa a false para volver al listado de productos. */
        cambiarModoDeEdicion();

        /* Por último informo al usuario de que el producto ha sido editado. */
        Swal.fire({
            title: "¡Editado!",
            text: "Se ha editado el producto.",
            icon: "success",
            timer: 1500,
            showConfirmButton: false
        });
    }


    // Función que filtra la lista de productos eliminando el producto que coincide con el Id proporcionado.
    const filtrarProductoDisponible = (idProducto) => {
        setProductosFiltrados(prevProductos => prevProductos.filter(prod => prod.id_producto !== idProducto));
    };

    
    // Función para "mostrar" o reintegrar un producto al listado de productos disponibles.
    const mostrarProductoDisponible = (idProducto) => {
        // Buscamos el producto en el listado completo
        const productoAmostrar = listadoProductos.find(prod => prod.id_producto === idProducto);
        if (productoAmostrar) {
            setProductosFiltrados(prodFiltr => {
                // Si ya está presente, no hacemos nada.
                if (prodFiltr.some(prod => prod.id_producto === idProducto)) {
                    return prodFiltr;
                }
                return [...prodFiltr, productoAmostrar];
            });
        }
    };

    // Función para validar el formulario.
    const validarFormProducto = (evento) => {
        // Accedemos al elemento del formulario, ya que su parent solo puede ser él.
        const formulario = evento.target.parentNode.parentNode;
        // Array vacío para guardar todos los errores del formulario.
        let erroresFormulario = [];
        // Compruebo cada elemento del formulario.
        for (let i = 0; i < formulario.elements.length - 1; i++) {

            /* Además tengo que asegurarme de que no se comprueben los botones. */
            let elemento = formulario.elements[i];
            if (elemento.tagName === "INPUT") {
                // Variable que almacenará un array de los posibles errores que haya en los elementos del formulario.
                let erroresElemento = validarDato(formulario.elements[i]);
                // En esta otra, selecciono el label de los input.
                let label = formulario.elements[i].previousElementSibling;
                // Añado o elimino las clases de error.
                if (erroresElemento.length !== 0) {
                    formulario.elements[i].classList.add("inputError")
                    label.classList.add("labelError");
                } else {
                    formulario.elements[i].classList.remove("inputError");
                    label.classList.remove("labelError");
                }
                // Se añaden los posibles errores de cada elemento al array vacío.
                erroresFormulario = [...erroresFormulario, ...erroresElemento];
            }
        }
        // Establezco el estado de los errores, por los del array.
        setErrorProductos(erroresFormulario);
        return erroresFormulario.length === 0;
    };

    /* Obtengo el listado cuando se inicia la sesión en el sitio web. */
    useEffect(() => {
        if (sesionIniciada === true) {
            obtenerListado();
        }
    }, [sesionIniciada]);

    /* Para establecer el estado de errores a 0, al navegar por el sitio web. */
    useEffect(() => {
        if (errorProductos.length) {
            setErrorProductos(cadenaInicial);
        }
    }, [cambioDeRuta.pathname]) //pathname es la ruta actual, lo cual se comprueba siempre. Si hay errores, los dejo en 0.

    /* Objeto que se exportará a todos los hijos del proveedor.*/
    const datosAExportar = {
        listadoProductos,
        productosFiltrados,
        reiniciarListado,
        aplicarFiltros,
        filtros,
        actualizarFiltro,
        ordenarPor,
        errorProductos,
        actualizarProducto,
        producto,
        insertarProducto,
        borrarProducto,
        edicion,
        editarProducto,
        reiniciarFormulario,
        cambiarModoDeEdicion,
        modificarProducto,
        validarFormProducto,
        filtrarProductoDisponible,
        mostrarProductoDisponible,
    };

    return (
        <contextoProductos.Provider value={datosAExportar}>
            {children}
        </contextoProductos.Provider>
    )
}

export default ProveedorProductos;
export { contextoProductos };