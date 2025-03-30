import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { contextoAuth } from "./AuthContexto.jsx"
import { validarCamposDieta, calcularMacronutrientes } from '../bibliotecas/biblioteca.js';

/* import { contextoProductos } from './ProveedorProductos.jsx'; */ //! esto será el contexto de los alimentos.

import Swal from 'sweetalert2';

const contextoDietas = createContext();

const DietasContexto = ({ children }) => {


    /* Constantes iniciales por defecto. */
    const arrayVacio = [];
    const cadenaVacia = "";
    const dietaVacia = {
        nombre: cadenaVacia,
        descripcion: cadenaVacia,
    }

    const [nuevaDieta, setNuevaDieta] = useState(dietaVacia);
    const [dietaCreada, setDietaCreada] = useState(null);

    const [dietasUsuario, setDietasUsuario] = useState(arrayVacio);
    const [errorDietas, setErrorDietas] = useState(cadenaVacia);

    /* Hook de navigate para poder redireccionar al usuario. */
    const navegar = useNavigate();

    /* Obtengo la sesión del usuario y sus datos desde el contexto. */
    const { usuario, sesionIniciada } = useContext(contextoAuth);

    
    //?VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV LOS MACROS DEL DANDY


    const iniciaFormulario = {
        peso: 0,
        altura: 0,
        edad: 0,
        sexo: "",
        actividad: "",
        objetivo: "",
    };

    const pasosArray = ["A", "B", "C", "D"];

    const [paso, setPaso] = useState("A");
    const [formularioData, setFormularioData] = useState(iniciaFormulario);

    const siguientePaso = () => {
        if (paso === "A") setPaso("B");
        else if (paso === "B") setPaso("C");
        else if (paso === "C") setPaso("D");
    };

    const anteriorPaso = () => {
        if (paso === "D") setPaso("C");
        else if (paso === "C") setPaso("B");
        else if (paso === "B") setPaso("A");
    };

    const cambiarFormulario = (e) => {
        setFormularioData({
            ...formularioData,
            [e.target.name]: e.target.value,
        });
        console.log(formularioData)
    };

    const terminarFormulario = async () => {
        await guardarDatosMacros(); // Llama a la función para guardar datos antes de continuar
        setPaso("final");
    };

    const guardarDatosMacros = async () => {
        if (!usuario || !usuario.id) {
            console.error("No se encontró el usuario autenticado.");
            return;
        }
    
        // Calcular macronutrientes con los datos actuales del formulario
        const macrosCalculados = calcularMacronutrientes(formularioData);
    
        try {
            const { data, error } = await undefined
                .from("usuario_macros")
                .insert([
                    {
                        uuid_usuario: usuario.id,
                        peso: formularioData.peso,
                        altura: formularioData.altura,
                        edad: formularioData.edad,
                        sexo: formularioData.sexo,
                        actividad: formularioData.actividad,
                        objetivo: formularioData.objetivo,
                        calorias_diarias: Math.round(macrosCalculados.caloriasObjetivo), // Convertir a entero
                        proteinas_diarias: parseFloat(macrosCalculados.proteinas.toFixed(2)), // Redondear a 2 decimales
                        grasas_diarias: parseFloat(macrosCalculados.grasas.toFixed(2)), // Redondear a 2 decimales
                        carbohidratos_diarias: parseFloat(macrosCalculados.carbohidratos.toFixed(2)) // Redondear a 2 decimales
                    },
                ]);
    
            if (error) {
                throw error;
            }
    
            console.log("Datos guardados correctamente en Supabase:", data);
        } catch (error) {
            console.error("Error al guardar los datos en Supabase:", error.message);
        }
    };
    
    

    const seleccionarPaso = (letra) => {
        setPaso(letra);
    }

    /* useEffect(() => {
        console.log(formularioData);
    }, [formularioData]); */

    const navigate = useNavigate();
    useEffect(() => {
        if (paso === "final") {
            navigate("/Rutina/CrearDieta");
            setPaso("A"); 
        }
    }, [paso, navigate]);


    //!-----------------------------------------------------------------------------------vvvvvvvvvvvvvvvvvvvvvvvvvv POR MODIFICAR /EDITAR Y QUITAR

    /*     const { filtrarProductoDisponible, reiniciarListado, mostrarProductoDisponible } = useContext(contextoProductos); */ //! CONTEXTO ALIMENTOS

    /* Estado para la inserción múltiple de la tabla productos_listas,
es decir donde almacenaré los productos que va incluyendo el usuario en la lista de compra. */
    const [listaCompra, setListaCompra] = useState(arrayVacio);

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
            const nuevaDieta = listaC.filter((producto) => producto.id_producto !== idProducto);
            mostrarProductoDisponible(idProducto);
            return nuevaDieta;
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
            const { data, error } = await undefined
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
            setErrorDietas(error.message);
        }
    };

    /* Función que utilizaré para eliminar los productos que se quiten en la lista de compra cuando se guarden los cambios. */
    const eliminarProductosNoSeleccionados = async (ListaActual) => {
        // Obtenemos los ids de los productos que queremos conservar
        const idsAConservar = listaCompra.map(item => item.id_producto);

        try {
            const { error } = await undefined
                .from('productos_listas')
                .delete()
                .eq('id_lista', ListaActual)
                // Usamos la condición .not para eliminar aquellos registros cuyo id_producto NO esté en la lista de IDs a conservar.
                .not('id_producto', 'in', `(${idsAConservar.join(',')})`);

            if (error) {
                throw error;
            }
        } catch (error) {
            setErrorDietas(error.message);
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
            const { error } = await undefined
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
            setErrorDietas(error.message)
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
        return dietasUsuario.find(lista => lista.id_lista === idLista);
    };







    /* Función para obtener el listado de los productos de la base de datos. */
    const obtenerListasDeCompra = async () => {
        try {
            const { data, error } = await undefined
                .from("listas_compra")
                .select("*")
                .eq("id_usuario", usuario.id);

            /* Comprobación de errores. */
            if (error || !data) {
                throw new Error("Ha habido un error al obtener el listado de productos.");
            }
            /* Establezco el estado con las listas de compra del usuario. */
            setDietasUsuario(data);

        } catch (error) {
            setErrorDietas(error.message);
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
                        const { data, error } = await undefined
                            .from("listas_compra")
                            .delete()
                            .eq("id_lista", id);

                        if (error) {
                            throw new Error(error.message);
                        }

                        /* Con este filter obtengo todos los productos del listado, menos el seleccionado. */
                        const listasActualizadas = dietasUsuario.filter((lista) => {
                            if (lista.id_lista !== id) {
                                return lista;
                            }
                        });
                        /* Actualizo el estado de las listas de productos. */
                        setDietasUsuario(listasActualizadas);

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
            setDietasUsuario(error.message);
        }
    };





    /* Obtengo el listado cuando se inicia la sesión en el sitio web. */
    useEffect(() => {
        if (sesionIniciada === true && usuario && usuario.id) {
            obtenerListasDeCompra();
        }
    }, [sesionIniciada, usuario]);



    //!-------------------------------------------------------------

    /* Función para actualizar los datos de una dieta que se está creando. */
    const actualizarFormDieta = (evento) => {
        const { name, value } = evento.target;
        setNuevaDieta({ ...nuevaDieta, [name]: value });
    };


    // Función para validar el formulario de crear dieta.
    const validarDieta = (evento) => {
        // Accedemos al elemento del formulario, ya que su parent solo puede ser él.
        const formulario = evento.target.parentNode;
        console.log(formulario); //!<<<<<<<<<<<
        // Array vacío para guardar todos los errores del formulario.
        let erroresFormulario = [];
        // Compruebo cada elemento del formulario.
        for (let i = 0; i < formulario.elements.length - 1; i++) {

            /* Además tengo que asegurarme de que no se comprueben los botones. */
            let elemento = formulario.elements[i];
            if (elemento.tagName === "INPUT") {

                // Variable que almacenará un array de los posibles errores que haya en los elementos del formulario.
                let erroresElemento = validarCamposDieta(formulario.elements[i]);
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
        setErrorDietas(erroresFormulario);
        console.log(erroresFormulario.length)
        return erroresFormulario.length === 0;
    };


    

    const crearDieta = async () => {
        try {
            const response = await fetch("http://localhost:8089/api/dietas", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(nuevaDieta),
            });
            const data = await response.json();

            if (!response.ok) {
                setErrorDietas(data.message || "Error al crear la dieta.");
            } else {
                // Suponiendo que data es el objeto creado con su id
                setDietasUsuario([...dietasUsuario, data]);
                setDietaCreada(data); // Aquí guardamos la dieta con su id
                setNuevaDieta(dietaVacia);

                Swal.fire({
                    title: "Dieta guardada correctamente.",
                    icon: "success",
                    timer: 1500,
                    showConfirmButton: false
                });

                // Aquí puedes decidir si navegar o renderizar condicionalmente
                // Por ejemplo, podrías redirigir a una ruta que incluya el id:
                // navegar(`/rutina/dietas/${data.id}/objetivos`);
            }
        } catch (error) {
            setErrorDietas(error.message);
        }
    };

    /* Para encapsular el set para los errores de las listas. */
    const restablecerErroresDietas = () => {
        setErrorDietas(cadenaVacia);
    }

    //!------------------------------------------
    /* Objeto para exportar con lo necesario. */
    const datosDietas = {
        actualizarFormDieta,
        nuevaDieta,
        validarDieta,
        errorDietas,
        crearDieta,
        restablecerErroresDietas,
        dietaCreada,


        //? V V LOS MACROS DEL DANDY
        siguientePaso,
        anteriorPaso,
        cambiarFormulario,
        terminarFormulario,
        pasosArray,
        paso,
        formularioData,
        seleccionarPaso,

        //! V V LOS QUE FALTAN POR CAMBIAR / QUITAR
        dietasUsuario,
        eliminarListaDeCompra,
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
        <contextoDietas.Provider value={datosDietas}>
            {children}
        </contextoDietas.Provider>

    )
}

export default DietasContexto;
export { contextoDietas };