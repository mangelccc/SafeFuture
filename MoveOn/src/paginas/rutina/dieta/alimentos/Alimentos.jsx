import React, { useContext, useState } from "react";
import { contextoAlimentos } from "../../../../contextos/AlimentosContexto.jsx";
import { contextoListas } from "../../../../contextos/ListasContexto.jsx";
import Alimento from "../alimentos/alimento/Alimento.jsx";
import AlimentoModificableAdm from "../administracion/AlimentoModificableAdm.jsx";
import "./Alimentos.css";

const Alimentos = () => {
  const { 
    alimentosVisibles, 
    alimentoEditando, 
    iniciarEdicion, 
    deleteAlimento, 
    admin 
  } = useContext(contextoAlimentos);

  const { agregarAlimento, agregarAlimentoEdicion, listaEnEdicion } =
    useContext(contextoListas);

  // Estado para controlar la visualización de macros por alimento
  const [mostrarMacrosMap, setMostrarMacrosMap] = useState({});

  // Manejador único de clic delegado
  const manejarClic = (e) => {
    const target = e.target;

    if (
      target.classList.contains("delegated-macros") ||
      target.classList.contains("delegated-anadir") ||
      target.classList.contains("delegated-modificar") ||
      target.classList.contains("delegated-eliminar")
    ) {
      // Se obtiene el contenedor de alimento más cercano con data-id
      const contenedorAlimento = target.closest(".alimento");
      if (!contenedorAlimento) return;
      const id = contenedorAlimento.getAttribute("data-id");

      // Se localiza el objeto alimento
      const alimento = alimentosVisibles.find(
        (item) => item.id.toString() === id
      );
      if (!alimento) return;

      // Acciones según el botón clicado
      if (target.classList.contains("delegated-macros")) {
        // Alternar visibilidad de macros
        setMostrarMacrosMap((prev) => ({
          ...prev,
          [id]: !prev[id],
        }));
      } else if (target.classList.contains("delegated-anadir")) {
        // Agregar alimento según el modo de lista
        if (listaEnEdicion) {
          agregarAlimentoEdicion(alimento);
        } else {
          agregarAlimento(alimento);
        }
      } else if (target.classList.contains("delegated-modificar")) {
        // Modificar alimento (solo admin)
        if (admin) {
          iniciarEdicion(alimento);
        }
      } else if (target.classList.contains("delegated-eliminar")) {
        // Eliminar alimento (con confirmación)
        if (admin) {
          const confirmar = window.confirm(
            `¿Estás seguro de que deseas eliminar ${alimento.nombre}?`
          );
          if (confirmar) {
            deleteAlimento(alimento.id);
          }
        }
      }
    }
  };

  return (
    <div className="contenedor-alimentos" onClick={manejarClic}>
      {alimentosVisibles.map((alimento) =>
        alimentoEditando === alimento.id ? (
          <AlimentoModificableAdm key={alimento.id} alimento={alimento} />
        ) : (
          <Alimento
            key={alimento.id}
            alimento={alimento}
            mostrarMacros={!!mostrarMacrosMap[alimento.id]}
            admin={admin}
          />
        )
      )}
    </div>
  );
};

export default Alimentos;
