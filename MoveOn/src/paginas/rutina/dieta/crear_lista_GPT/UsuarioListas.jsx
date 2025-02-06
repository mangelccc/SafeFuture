// src/paginas/rutina/dieta/crear_lista_GPT/UsuarioListas.jsx
import React, { useContext } from "react";
import { contextoListas } from "../../../../contextos/ListasContexto";
import AlimentoListado from "./AlimentoListado";
import "./UsuarioListas.css";
import Lista from "./Listas";

const UsuarioListas = () => {
  // Extraemos las funciones y estados del contexto
  const {
    listaEnEdicion,
    alimentosEdicion,
    sumarAlimentoEdicion,
    restarAlimentoEdicion,
    actualizarListaEdicion,
  } = useContext(contextoListas);

  return (
    <div className="lista-usuario">
      <Lista />
      {listaEnEdicion && (
        <div className="lista-alimento-seleccionados">
          <AlimentoListado
            nombreLista={listaEnEdicion.nombre}
            alimentosLista={alimentosEdicion}
            sumarAlimento={sumarAlimentoEdicion}
            restarAlimento={restarAlimentoEdicion}
          />
          <button className="actualizar-alimento" onClick={actualizarListaEdicion}>Actualizar</button>
        </div>
      )}
    </div>
  );
};

export default UsuarioListas;
