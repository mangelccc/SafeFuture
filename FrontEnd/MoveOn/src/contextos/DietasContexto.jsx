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
    const semaforoRojo = false;
    const dietaVacia = {
        nombre: cadenaVacia,
        descripcion: cadenaVacia,
    }
    
    const pasosArray = ["A", "B", "C", "D"];
    const iniciaFormulario = {
        peso: "",
        altura: "",
        actividad: "",
        objetivo: "",
    };

    const [nuevaDieta, setNuevaDieta] = useState(dietaVacia);
    // Guardar la dieta, y generar su ID para posteriormente hacer los siguientes pasos.
    const [guardarDieta, setGuardarDieta] = useState(semaforoRojo);
    const [dietasUsuario, setDietasUsuario] = useState(arrayVacio);
    const [errorDietas, setErrorDietas] = useState(cadenaVacia);
    const [paso, setPaso] = useState(pasosArray[0]);
    const [formularioData, setFormularioData] = useState(iniciaFormulario);

    /* Hook de navigate para poder redireccionar al usuario. */
    const navegar = useNavigate();

    /* Obtengo la sesión del usuario y sus datos desde el contexto. */
    const { usuario, sesionIniciada } = useContext(contextoAuth);

    const establecerNuevaDieta = () => {
        setGuardarDieta(semaforoRojo);
        setNuevaDieta(dietaVacia);
        setFormularioData(iniciaFormulario);
        setPaso(pasosArray[0]);
    }

    const siguientePaso = () => {
        if (paso === pasosArray[0]) setPaso(pasosArray[1]);
        else if (paso === pasosArray[1]) setPaso(pasosArray[2]);
        else if (paso === pasosArray[2]) setPaso(pasosArray[3]);
    };

    const anteriorPaso = () => {
        if (paso === pasosArray[3]) setPaso(pasosArray[2]);
        else if (paso === pasosArray[2]) setPaso(pasosArray[1]);
        else if (paso === pasosArray[1]) setPaso(pasosArray[0]);
    };

    const cambiarFormulario = (e) => {
        setFormularioData({
            ...formularioData,
            [e.target.name]: e.target.value,
        });
    };

    const seleccionarPaso = (letra) => {
        setPaso(letra);
    }

    
    
    /* Función para actualizar los datos de una dieta que se está creando. */
    const actualizarFormDieta = (evento) => {
        const { name, value } = evento.target;
        setNuevaDieta({ ...nuevaDieta, [name]: value });
    };
    
    
    // Función para validar el formulario de crear dieta.
    const validarDieta = (evento) => {
        // Accedemos al elemento del formulario, ya que su parent solo puede ser él.
        const formulario = evento.target.parentNode;
        
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

        return erroresFormulario.length === 0;
    };
    
    
    const crearIdDieta = () => {
        setGuardarDieta(true);
        setNuevaDieta({ ...nuevaDieta, id_dieta: crypto.randomUUID() });
    };
    
    const registrarDietaEnBD = async (dietaPersonalizada) => {

        
        try {
            const resp1 = await fetch("http://localhost:8089/api/dietas", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(nuevaDieta),
            });
            
            const resp2 = await fetch("http://localhost:8089/api/usuario-dieta", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(dietaPersonalizada),
            });
            
            if (!resp2.ok) {
                throw new Error("Error en la solicitud: " + resp2.statusText);
            }
            
            Swal.fire({
                title: "Dieta guardada correctamente.",
                icon: "success",
                timer: 1500,
                showConfirmButton: false
            });
            
            const data = await resp2.json();
            
            const dietaFusionada = {
                id_dieta: data.usuario_dieta.id_usuario_dieta,
                nombre: nuevaDieta.nombre,
                descripcion: nuevaDieta.descripcion,
                pivot: {
                    ...dietaPersonalizada,
                    peso_usuario: dietaPersonalizada.peso_usuario.toFixed(2),
                    altura_usuario: dietaPersonalizada.altura_usuario.toFixed(2),
                    created_at: new Date().toISOString(),
                    updated_at: new Date().toISOString()
                }
            };

            if (!resp2.ok) {
                setErrorDietas(data.message || "Error al crear la dieta.");
            } else {
                setDietasUsuario([...dietasUsuario, dietaFusionada]);

                establecerNuevaDieta();
                navegar("/rutina/dietas");
                
                Swal.fire({
                    title: "Dieta guardada correctamente.",
                    icon: "success",
                    timer: 1500,
                    showConfirmButton: false
                });
                
            }
        } catch (error) {
            setErrorDietas(error.message);
        }
    };
    
    
    /* Para encapsular el set para los errores de las listas. */
    const restablecerErroresDietas = () => {
        setErrorDietas(cadenaVacia);
    }
    
    const terminarFormulario = async () => {
        //!Aqui se pueden comprobar los datos del formulario 2.
        
        const dietaPersonalizada = {
            id_usuario: usuario.id_usuario.toString(),
            id_dieta: nuevaDieta.id_dieta.toString(),
            peso_usuario: parseFloat(formularioData.peso),
            altura_usuario: parseFloat(formularioData.altura),
            actividad_fisica: formularioData.actividad,
            objetivo: formularioData.objetivo,
            estado: "Activa"
        }
        registrarDietaEnBD(dietaPersonalizada);
        
        
    };
    
    const cargarDietasDelUsuario = async () => {
        
        try {
            const respuesta = await fetch(`http://localhost:8089/api/usuario/${usuario.id_usuario}/dietas`, {
                
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    // Otros headers si es necesario, como tokens de autenticación
                }
                
            });
            if (!respuesta) {
                throw new Error("Ha habido un error al obtener las dietas del usuario.");
            }
            
            const data = await respuesta.json();

            setDietasUsuario(data.dietas);
            
        } catch (error) {
            setErrorDietas(error.message);
        }
    }
    
    useEffect(() => {
        if (sesionIniciada === true && usuario && usuario.id_usuario) {
            cargarDietasDelUsuario();
        }
    }, [sesionIniciada, usuario]);
    

    const eliminarDieta = async (evento) => {
        try {
            if(evento.target.className === "del"){
                
            // Obtengo el ID de la dieta.
            const id = evento.target.parentNode.parentNode.id;
            const idDieta = evento.target.parentNode.parentNode.getAttribute('data-dieta');
            console.log(id)
            console.log(idDieta)

            if (id && idDieta) {
                // Muestro una ventana de confirmación.
                Swal.fire({
                    title: "¿Estás seguro de que quieres borrar la dieta?",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#d33",
                    cancelButtonColor: "#3085d6",
                    confirmButtonText: "Eliminar",
                    cancelButtonText: "Cancelar",
                }).then(async (result) => {
                    if (result.isConfirmed) {
                        // Si se confirma, realiza el borrado en la base de datos.
                        const respuesta1 = await fetch(`http://localhost:8089/api/usuario-dieta/${id}`, {
                            method: 'DELETE',
                            headers: {
                              'Content-Type': 'application/json'}
                        })
                        const respuesta2 = await fetch(`http://localhost:8089/api/dietas/${id}`, {
                            method: 'DELETE',
                            headers: {'Content-Type': 'application/json'}
                          })

                        /* Con este filter obtengo todos los productos del listado, menos el seleccionado. */
                        const dietasActualizadas = dietasUsuario.filter((dieta) => {
                            if (dieta.pivot.id_dieta !== idDieta) {
                                return dieta;
                            }
                        });
                        /* Actualizo el estado de las listas de productos. */
                        setDietasUsuario(dietasActualizadas);

                        // Muestro la confirmación de borrado.
                        Swal.fire({
                            title: "La dieta ha sido eliminada.",
                            icon: "error",
                            timer: 1200,
                        });
                    }
                });
            }
        }
        } catch (error) {
            /* setListasUsuario(error.message); */
        }
    };
    
    //!------------------------------------------
    /* Objeto para exportar con lo necesario. */
    const datosDietas = {
        actualizarFormDieta,
        nuevaDieta,
        validarDieta,
        errorDietas,
        crearIdDieta,
        guardarDieta,
        restablecerErroresDietas,
        eliminarDieta,
        establecerNuevaDieta,
        pasosArray,
        paso,
        seleccionarPaso,
        siguientePaso,
        anteriorPaso,
        terminarFormulario,

        dietasUsuario,

        //? V V LOS MACROS DEL DANDY
        cambiarFormulario,
        formularioData,
    };

    return (
        <contextoDietas.Provider value={datosDietas}>
            {children}
        </contextoDietas.Provider>

    )
}

export default DietasContexto;
export { contextoDietas };