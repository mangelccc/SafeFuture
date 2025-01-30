import React, { createContext, useState, useEffect,useContext } from "react";
import { useNavigate } from "react-router-dom";
import { contextoAuth } from "./AuthContexto.jsx";
import { calcularMacronutrientes } from "../bibliotecas/biblioteca.js";
import { supabaseConexion } from "../bibliotecas/config.js";

const contextoMacros = createContext();

const MacrosContexto = ({ children }) => {

    const { usuario } = useContext(contextoAuth);

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
            const { data, error } = await supabaseConexion
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

    const navigate = useNavigate();
    useEffect(() => {
        if (paso === "final") {
            navigate("/Rutina/CrearDieta");
            setPaso("A"); 
        }
    }, [paso, navigate]);

    const datosContexto = {
        siguientePaso,
        anteriorPaso,
        cambiarFormulario,
        terminarFormulario,
        pasosArray,
        paso,
        formularioData,
        seleccionarPaso,
    };

    return (
        <contextoMacros.Provider value={datosContexto}>
            {children}
        </contextoMacros.Provider>
    );
};

export default MacrosContexto;
export { contextoMacros };