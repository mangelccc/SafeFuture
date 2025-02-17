// src/hooks/useAppContext.js
import { useContext } from "react";
import { contextoAlimentos } from "../contextos/AlimentosContexto";
import { contextoAuth } from "../contextos/AuthContexto";
import { contextoListas } from "../contextos/ListasContexto";

const useAppContext = () => {
  const alimentos = useContext(contextoAlimentos);
  const auth = useContext(contextoAuth);
  const listas = useContext(contextoListas);
  
  return { alimentos, auth, listas };
};

export default useAppContext;
