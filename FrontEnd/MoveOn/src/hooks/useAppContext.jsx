// src/hooks/useAppContext.js
import { useContext } from "react";
import { contextoAlimentos } from "../contextos/AlimentosContexto";
import { contextoAuth } from "../contextos/AuthContexto";
import { contextoListas } from "../contextos/ListasContexto";
import { ContextoEntrenamiento } from "../contextos/EntrenamientoContexto";
import { ContextoEjercicios } from "../contextos/EjerciciosContexto";

const useAppContext = () => {
  const alimentos = useContext(contextoAlimentos);
  const auth = useContext(contextoAuth);
  const listas = useContext(contextoListas);
  const ejerciciosContex = useContext(ContextoEjercicios);
  const entrenamiento = useContext(ContextoEntrenamiento);
  
  return { alimentos, auth, listas, ejerciciosContex,entrenamiento };
};

export default useAppContext;
