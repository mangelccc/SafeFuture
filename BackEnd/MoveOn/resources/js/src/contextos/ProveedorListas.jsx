import React, { createContext, useState, useContext, useEffect } from 'react';
import { supabaseConexion } from '../conexionSupabase/supabase.js';
import { validarNombre } from '../bibliotecas/funcioteca.js';
import { contextoSesion } from './ProveedorSesion.jsx';
import { contextoProductos } from './ProveedorProductos.jsx';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const contextoListas = createContext();

const ProveedorListas = ({ children }) => {

    /* Constantes iniciales por defecto. */
    const arrayVacio = [];
    const cadenaVacia = "";
    const listaVacia = {
        id_lista: cadenaVacia,
        nombre_lista: cadenaVacia,
        id_usuario: cadenaVacia,
    }

    const [nuevaLista, setNuevaLista] = useState(listaVacia);
    const [listasUsuario, setListasUsuario] = useState(arrayVacio);
    /* Estado para la inserción múltiple de la tabla productos_listas,
    es decir donde almacenaré los productos que va incluyendo el usuario en la lista de compra. */
    const [listaCompra, setListaCompra] = useState(arrayVacio);

    const [errorListas, setErrorListas] = useState(cadenaVacia);

    /* Hook de navigate para poder redireccionar al usuario. */
    const navegar = useNavigate();

    /* Obtengo la sesión del usuario y sus datos desde el contexto. */
    const { usuario, sesionIniciada } = useContext(contextoSesion);

    const { filtrarProductoDisponible, reiniciarListado, mostrarProductoDisponible } = useContext(contextoProductos);


    const anyadirProductosALista = (evento, idLista) => {
        const tr = evento.target.closest('tr');
        if (tr && tr.id) {
            const idProducto = tr.id;
            // Actualizamos la lista de productos seleccionados.
            setListaCompra(prod => [...prod,
            {
                id_producto: idProducto,
                id_lista: idLista,
                cantidad: 1
            }
            ]);
            filtrarProductoDisponible(idProducto);
        }
    };


    // Función para eliminar un producto de la lista de compra y devolverlo a los disponibles.
    const eliminarProductoDeLista = (idProducto) => {
        setListaCompra((listaC) => {
            const nuevaLista = listaC.filter((producto) => producto.id_producto !== idProducto);
            mostrarProductoDisponible(idProducto);
            return nuevaLista;
        });
    };

    const borrarYReiniciarLista = () => {
        setListaCompra(arrayVacio); // Se vacía la lista de compra.
        reiniciarListado(); // Y se reinicia el listado de productos.
    };

    // Función para obtener los productos de la lista de compra. ListaActual es el ID de la lista. 
    const obtenerProductosListas = async (ListaActual) => {
        try {
            /* Se realiza la consulta múltiple, teniendo en cuenta que la lista que buscamos coincida con el id pasado por parámetro. */
            const { data, error } = await supabaseConexion
                .from("productos_listas")
                .select(`id_lista, id_producto, cantidad, lista:listas_compra(id_usuario)`)
                .eq("lista.id_usuario", usuario.id)
                .eq("id_lista", ListaActual);

            /* Por si hay errores. */
            if (error) {
                throw error;
            } else {
                setListaCompra(data);
            }
        } catch (error) {
            setErrorListas(error.message);
        }
    };

    /* Función que utilizaré para eliminar los productos que se quiten en la lista de compra cuando se guarden los cambios. */
    const eliminarProductosNoSeleccionados = async (ListaActual) => {
        // Obtenemos los ids de los productos que queremos conservar
        const idsAConservar = listaCompra.map(item => item.id_producto);

        try {
            const { error } = await supabaseConexion
                .from('productos_listas')
                .delete()
                .eq('id_lista', ListaActual)
                // Usamos la condición .not para eliminar aquellos registros cuyo id_producto NO esté en la lista de IDs a conservar.
                .not('id_producto', 'in', `(${idsAConservar.join(',')})`);

            if (error) {
                throw error;
            }
        } catch (error) {
            setErrorListas(error.message);
        }
    };


    /* Función nueva, si el registro ya existe, se actualiza la cantidad, si no existe, se inserta. */
    const actualizarProductosEnDB = async (ListaActual) => {

        try {
            // 1. Elimino los productos que ya no están en el estado.
            await eliminarProductosNoSeleccionados(ListaActual);

            // 2. Preparo los datos a actualizar/insertar.
            const productosParaUpsert = listaCompra.map(({ id_producto, cantidad }) => ({
                id_lista: ListaActual,
                id_producto,
                cantidad,
            }));

            // 3. Se realiza el upsert
            const { error } = await supabaseConexion
                .from('productos_listas')
                .upsert(productosParaUpsert);

            if (error) {
                Swal.fire({
                    title: "Error",
                    text: error.message,
                    icon: "error",
                    timer: 1500,
                    showConfirmButton: true
                });
            } else {
                Swal.fire({
                    title: "Lista actualizada",
                    icon: "success",
                    timer: 1500,
                    showConfirmButton: false
                });

                // Refresco el estado para evitar errores.
                obtenerProductosListas(ListaActual);
                navegar(`/listas-compra/${ListaActual}`);
            }
        } catch (error) {
            setErrorListas(error.message)
        }
    };

    /* Función para sumarle o restarle cantidad a un producto en la lista de compra. */
    const actualizarCantidadProducto = (clase, idProducto, cantidad) => {

        // Si es el botón de "mas".
        if (clase === "btn-mas") {
            setListaCompra(listaC => {
                return listaC.map(item =>
                    item.id_producto === idProducto
                        ? { ...item, cantidad: item.cantidad + 1 }
                        : item
                );
            });
        }

        // Si es el botón de "menos".
        else if (clase === "btn-menos") {
            setListaCompra(listaC => {
                return listaC.map(item => {
                    if (item.id_producto === idProducto) {
                        /* Si la cantidad baja de 1, procede a eliminarse. */
                        if (cantidad > 1) {
                            return { ...item, cantidad: item.cantidad - 1 };
                        } else {
                            eliminarProductoDeLista(idProducto);
                        }
                    }
                    return item;
                });
            });
        }

    };

    // Utilizando delegación de eventos, establezco la función del botón seleccionado en la lista de compra.
    const botonesDelProducto = (e) => {

        const datos = e.target.closest('.botones-producto');
        const claseBoton = e.target.className;
        const idProducto = datos.getAttribute('data-id');
        const cantidad = datos.getAttribute('data-cantidad');

        switch (claseBoton) {
            case "btn-menos":
                actualizarCantidadProducto(claseBoton, idProducto, cantidad);
                break;

            case "btn-mas":
                actualizarCantidadProducto(claseBoton, idProducto, cantidad);
                break;

            case "btn-eliminar":
                eliminarProductoDeLista(idProducto);
                break;
        }

    };


    /* Obtiene la lista de compra que coincide con el id recibido */
    const obtenerListaPorId = (idLista) => {
        return listasUsuario.find(lista => lista.id_lista === idLista);
    };


    /* Función para actualizar el nombre de la nueva lista que se está creando. */
    const actualizarNombreLista = (evento) => {
        setNuevaLista({ ...nuevaLista, nombre_lista: evento.target.value });
    };

    const crearLista = async () => {
        try {
            // Genero un ID único para la lista que voy a insertar.
            let listaAInsertar = { ...nuevaLista, id_lista: crypto.randomUUID() };
            // Le establezco el id del usuario actual a dicha lista.
            listaAInsertar = { ...listaAInsertar, id_usuario: usuario.id };

            // Inserto la lista en la base de datos y selecciono todos los campos (incluyendo fecha_creacion).
            const { data, error } = await supabaseConexion
                .from("listas_compra")
                .insert(listaAInsertar)
                .select('*');

            if (error) {
                throw new Error(error.message);
            }

            // Actualizo el estado de las listas con el registro insertado, como es un array ponemos el [0].
            setListasUsuario([...listasUsuario, data[0]]);

            // Reinicio el formulario al estado inicial.
            setNuevaLista(listaVacia);

            Swal.fire({
                title: "Lista creada correctamente.",
                icon: "success",
                timer: 1500,
                showConfirmButton: false
            });

            navegar("/listas-compra");
        } catch (error) {
            setErrorListas(error.message);
        }
    };


    /* Función para obtener el listado de los productos de la base de datos. */
    const obtenerListasDeCompra = async () => {
        try {
            const { data, error } = await supabaseConexion
                .from("listas_compra")
                .select("*")
                .eq("id_usuario", usuario.id);

            /* Comprobación de errores. */
            if (error || !data) {
                throw new Error("Ha habido un error al obtener el listado de productos.");
            }
            /* Establezco el estado con las listas de compra del usuario. */
            setListasUsuario(data);

        } catch (error) {
            setErrorListas(error.message);
        }
    };

    const eliminarListaDeCompra = (evento) => {
        try {
            // Obtengo el ID de la lista.
            const id = evento.target.parentNode.parentNode.id;
            if (id) {
                // Muestro una ventana de confirmación.
                Swal.fire({
                    title: "¿Estás seguro que quieres borrar la lista?",
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
                            .from("listas_compra")
                            .delete()
                            .eq("id_lista", id);

                        if (error) {
                            throw new Error(error.message);
                        }

                        /* Con este filter obtengo todos los productos del listado, menos el seleccionado. */
                        const listasActualizadas = listasUsuario.filter((lista) => {
                            if (lista.id_lista !== id) {
                                return lista;
                            }
                        });
                        /* Actualizo el estado de las listas de productos. */
                        setListasUsuario(listasActualizadas);

                        // Muestro la confirmación de borrado.
                        Swal.fire({
                            title: "La lista ha sido eliminada.",
                            icon: "error",
                            timer: 1500,
                            showConfirmButton: false
                        });
                    }
                });
            }
        } catch (error) {
            setListasUsuario(error.message);
        }
    };



    // Función para validar el formulario de crear lista.
    const validarLista = (evento) => {
        const input = evento.target.form.elements["nombre_lista"];
        const label = input.previousElementSibling;

        // Para incluir los posibles errores que me pueda dar la función validar nombre.
        const erroresElemento = validarNombre(input);

        // Agregamos o eliminamos clases de error.
        input.classList.toggle("inputError", erroresElemento.length > 0);
        label.classList.toggle("labelError", erroresElemento.length > 0);

        // Y establezco los posibles errores al estado de ErrorLista.
        setErrorListas(erroresElemento);

        return erroresElemento.length === 0;
    };

    /* Obtengo el listado cuando se inicia la sesión en el sitio web. */
    useEffect(() => {
        if (sesionIniciada === true && usuario && usuario.id) {
            obtenerListasDeCompra();
        }
    }, [sesionIniciada, usuario]);

    /* Para encapsular el set para los errores de las listas. */
    const restablecerErroresLista = () => {
        setErrorListas(cadenaVacia);
    }


    /* Objeto para exportar con lo necesario. */
    const datosListas = {
        actualizarNombreLista,
        nuevaLista,
        errorListas,
        validarLista,
        crearLista,
        listasUsuario,
        eliminarListaDeCompra,
        restablecerErroresLista,
        obtenerListaPorId,
        anyadirProductosALista,
        listaCompra,
        botonesDelProducto,
        eliminarProductoDeLista,
        borrarYReiniciarLista,
        actualizarProductosEnDB,
        obtenerProductosListas,
        actualizarCantidadProducto,


    };

    return (
        <contextoListas.Provider value={datosListas}>
            {children}
        </contextoListas.Provider>

    )
}

export default ProveedorListas;
export { contextoListas };