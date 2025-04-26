// src/hooks/useAppContext.js
import { useContext } from "react";
import { contextoAlimentos } from "../contextos/AlimentosContexto";
import { contextoAuth } from "../contextos/AuthContexto";

import { ContextoEntrenamiento } from "../contextos/EntrenamientoContexto";
import { ContextoEjercicios } from "../contextos/EjerciciosContexto";
import { contextoDietas } from "../contextos/DietasContexto.jsx";

const useAppContext = () => {
  const alimentos = useContext(contextoAlimentos);
  const auth = useContext(contextoAuth);

  const ejerciciosContex = useContext(ContextoEjercicios);
  const entrenamientoContexto = useContext(ContextoEntrenamiento);
  const dietas = useContext(contextoDietas);
  
  return { alimentos, auth, ejerciciosContex, entrenamientoContexto, dietas };
};

export default useAppContext;
