import React from "react";
import useAppContext from "../../../../hooks/useAppContext";
import Alimento from "../alimentos/alimento/Alimento.jsx";
import AlimentoModificableAdm from "../administracion/AlimentoModificableAdm.jsx";
import "./Alimentos.css";

const Alimentos = () => {
  // Extraemos los contextos mediante useAppContext
  const { alimentos, listas } = useAppContext();
  const { 
    alimentosVisibles, 
    alimentoEditando, 
    admin,
    mostrarMacrosMap,
    manejarClicAlimentos,
  } = alimentos;
  const { listaEnEdicion,manejarAgregarAlimento } = listas;
  return (
    <div
      className="contenedor-alimentos"
      onClick={(e) => manejarClicAlimentos(e, listaEnEdicion, manejarAgregarAlimento)}
    >
      {alimentosVisibles.map((alimento) =>
        alimentoEditando === alimento.id ? (
          <AlimentoModificableAdm key={alimento.id} alimento={alimento} />
        ) : (
          <Alimento
            key={alimento.id}
            alimento={alimento}
            mostrarMacros={mostrarMacrosMap[alimento.id]}
            admin={admin}
          />
        )
      )}
    </div>
  );
};

export default Alimentos;
