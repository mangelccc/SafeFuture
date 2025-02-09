import React, { useContext } from "react";
import { contextoListas } from "../../../../../contextos/ListasContexto";
import NombreListaInput from "./NombreListaInput.jsx";
import AlimentoEnNuevaLista from "./AlimentosEnNuevaLista.jsx";
import "./CrearLista.css";

const CrearLista = () => {
  const {
    createLista,
  } = useContext(contextoListas);

  return (
    <div className="crear-lista">
      <NombreListaInput/>
      <AlimentoEnNuevaLista/>
      <button onClick={createLista} className="crear-btn">
        Crear Lista
      </button>
    </div>
  );
};

export default CrearLista;
