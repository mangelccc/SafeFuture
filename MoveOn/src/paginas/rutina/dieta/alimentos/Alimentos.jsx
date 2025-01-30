// Alimentos.jsx
import React, { useContext } from "react";
import { contextoAlimentos } from "../../../../contextos/AlimentosContexto.jsx";
import Alimento from "../alimentos/alimento/Alimento.jsx";
import "./Alimentos.css";

const Alimentos = () => {
  const { listadoAlimentos, buscadorDatos } = useContext(contextoAlimentos);

  // Aquí filtramos según lo que el usuario haya tecleado:
  const alimentosFiltrados = listadoAlimentos.filter((alimento) =>
    alimento.nombre
      ?.toLowerCase()
      .includes(buscadorDatos.nombre.toLowerCase())
  );

  return (
    <div className="contenedor-alimentos">
      {alimentosFiltrados.length > 0 ? (
        alimentosFiltrados.map((alimento) => (
          <Alimento key={alimento.id} alimento={alimento} />
        ))
      ) : (
        <p>No hay Alimentos</p>
      )}
    </div>
  );
};

export default Alimentos;
