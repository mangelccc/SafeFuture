// src/hooks/useAppContext.js
import { useContext } from "react";
import { contextoAlimentos } from "../contextos/AlimentosContexto.jsx";
import { contextoAuth } from "../contextos/AuthContexto.jsx";
import { contextoListas } from "../contextos/ListasContexto.jsx";
import { ContextoEjercicios } from "../contextos/EjerciciosContexto.jsx";
import { contextoDietas } from "../contextos/DietasContexto.jsx";

const useAppContext = () => {
  const alimentos = useContext(contextoAlimentos);
  const auth = useContext(contextoAuth);
  const listas = useContext(contextoListas);
  const ejerciciosContex = useContext(ContextoEjercicios);
  const dietas = useContext(contextoDietas);
  
  return { alimentos, auth, listas, ejerciciosContex, dietas };
};

export default useAppContext;
