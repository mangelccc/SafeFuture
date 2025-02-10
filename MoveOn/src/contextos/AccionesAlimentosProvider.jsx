import React, { createContext, useState, useCallback } from "react";
import useAppContext from "../hooks/useAppContext";

// Creamos el contexto
export const AccionesAlimentosContext = createContext();

// Provider que encapsula el estado y la función manejarClic
const AccionesAlimentosProvider = ({ children }) => {
  // Estado para controlar la visualización de macros por alimento
  const [mostrarMacrosMap, setMostrarMacrosMap] = useState({});

  // Extraemos datos necesarios de los contextos existentes
  const { alimentos, listas } = useAppContext();
  const { alimentosVisibles, admin, iniciarEdicion, deleteAlimento } = alimentos;
  const { listaEnEdicion, agregarAlimento, agregarAlimentoEdicion } = listas;

  // Definimos la función manejarClic usando useCallback para evitar recrearla en cada render
  const manejarClic = useCallback((e) => {
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

      // Se localiza el objeto alimento en el listado visible
      const alimento = alimentosVisibles.find(
        (item) => item.id.toString() === id
      );
      if (!alimento) return;

      // Acciones según la clase del botón clicado
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
  }, [
    admin,
    alimentosVisibles,
    listaEnEdicion,
    iniciarEdicion,
    deleteAlimento,
    agregarAlimento,
    agregarAlimentoEdicion,
  ]);

  return (
    <AccionesAlimentosContext.Provider value={{ mostrarMacrosMap, manejarClic }}>
      {children}
    </AccionesAlimentosContext.Provider>
  );
};

export default AccionesAlimentosProvider;
