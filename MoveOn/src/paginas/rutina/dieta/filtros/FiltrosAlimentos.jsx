import React from "react";
import useAppContext from "../../../../hooks/useAppContext.jsx";
import "./FiltrosAlimentos.css";

const FiltrosAlimentos = () => {
  // Extraemos el contexto de alimentos a través del hook centralizado
  const { alimentos } = useAppContext();
  const { ordenarAlimentos, filtrarAlimentos, alternarAdmin } = alimentos;

  const manejarClic = (e) => {
    const target = e.target;

    if (
      target.classList.contains("orden-nombre") ||
      target.classList.contains("orden-peso") ||
      target.classList.contains("orden-precio") ||
      target.classList.contains("admin-cambio")
    ) {
      // Determina la acción a realizar según la clase del botón
      if (target.classList.contains("orden-nombre")) {
        ordenarAlimentos("nombre");
      } else if (target.classList.contains("orden-peso")) {
        ordenarAlimentos("peso");
      } else if (target.classList.contains("orden-precio")) {
        ordenarAlimentos("precio");
      } else if (target.classList.contains("admin-cambio")) {
        alternarAdmin();
      }
    }
  };

  return (
    <div className="contenedor-filtros" onClick={manejarClic}>
      <div className="filtros-botones">
        <button className="orden-nombre">Ordenar por Nombre</button>
        <button className="orden-peso">Ordenar por Peso</button>
        <button className="orden-precio">Ordenar por Precio</button>
        <button className="admin-cambio">Act/desc. Admin</button>
      </div>
      <div className="filtros-busqueda">
        <input
          type="text"
          placeholder="Filtrar por nombre"
          onChange={(e) => filtrarAlimentos(e.target.value)}
        />
      </div>
    </div>
  );
};

export default FiltrosAlimentos;
