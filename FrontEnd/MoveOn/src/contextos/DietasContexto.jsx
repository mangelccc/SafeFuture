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

    const [nuevaDieta, setNuevaDieta] = useState(dietaVacia);
    // Guardar la dieta, y generar su ID para posteriormente hacer los siguientes pasos.
    const [guardarDieta, setGuardarDieta] = useState(semaforoRojo);
    const [dietasUsuario, setDietasUsuario] = useState(arrayVacio);
    const [errorDietas, setErrorDietas] = useState(cadenaVacia);

    /* Hook de navigate para poder redireccionar al usuario. */
    const navegar = useNavigate();

    /* Obtengo la sesión del usuario y sus datos desde el contexto. */
    const { usuario, sesionIniciada } = useContext(contextoAuth);

    const establecerNuevaDieta = () => {
        setGuardarDieta(semaforoRojo);

        setNuevaDieta(dietaVacia);
    }
    //?VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV LOS MACROS DEL DANDY

    const iniciaFormulario = {
        peso: "",
        altura: "",
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
        console.log(formularioData) // ⬅️⬅️⬅️⬅️⬅️⬅️⬅️⬅️⬅️⬅️⬅️⬅️⬅️⬅️⬅️⬅️⬅️⬅️⬅️⬅️
    };

    const seleccionarPaso = (letra) => {
        setPaso(letra);
    }

    useEffect(() => {
        if (paso === "final") {
            navegar("/rutina/dietas");
            setFormularioData(iniciaFormulario);
            setPaso("A");

            //! REINICIAR AQUI EL FORMULARIO, REDIRIGIR A RUTA CORRECTA
        }
    }, [paso, navegar]);

    // ✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️✔️


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
        console.log(formulario); //!<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
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

    


    const crearIdDieta = () => {
            setGuardarDieta(true);
            setNuevaDieta({...nuevaDieta, id_dieta: crypto.randomUUID()});
    };

    const registrarDietaEnBD = async (dietaPersonalizada) => {
        console.log(JSON.stringify(nuevaDieta));

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

            if (!resp2.ok) {
                setErrorDietas(data.message || "Error al crear la dieta.");
            } else {
                // Actualizamos las dietas del usuario para evitar mas llamadas si es posible, POR PROBAR //!<<<<<<<<<<<<
                setDietasUsuario([...dietasUsuario, dietaPersonalizada]);
                setPaso("final");
                
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



    }

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