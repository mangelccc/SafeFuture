// src/componentes/CrearLista.jsx
import React from "react";
import NombreListaInput from "./NombreListaInput.jsx";
import AlimentoEnNuevaLista from "./AlimentosEnNuevaLista.jsx";
import useAppContext from "../../../../../hooks/useAppContext.jsx";
import "./CrearLista.css";

const CrearLista = () => {
  const { listas } = useAppContext();

  return (
    <div className="crear-lista">
      <NombreListaInput />
      <AlimentoEnNuevaLista />
      <button
        onClick={
          (e) => listas
            .createLista(e)
        }
        className="crear-btn"
      >
        Crear Lista
      </button>
    </div>
  );
};

export default CrearLista;
