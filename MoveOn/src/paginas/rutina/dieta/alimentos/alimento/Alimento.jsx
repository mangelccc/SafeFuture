import React, { useState, useContext } from "react";
import { contextoAlimentos } from "../../../../../contextos/AlimentosContexto.jsx";
import { contextoListas } from "../../../../../contextos/ListasContexto.jsx";
import Macros from "../macros/Macros.jsx";
import { precioPorKilo } from "../../../../../bibliotecas/biblioteca.js";
import "./Alimento.css";

const Alimento = ({ alimento }) => {
  const { iniciarEdicion, deleteAlimento, admin } = useContext(contextoAlimentos);
  const { 
    agregarAlimento,         
    agregarAlimentoEdicion,  
    listaEnEdicion           
  } = useContext(contextoListas);

  const [mostrarMacros, setMostrarMacros] = useState(false);

  const alternarMostrarMacros = () => {
    setMostrarMacros((prevMostrarMacros) => !prevMostrarMacros);
  };

  // Función que decide qué función de agregar usar según el modo
  const manejarAgregar = () => {
    if (listaEnEdicion) {
      // Si se está editando una lista, agrega el alimento al arreglo de edición
      agregarAlimentoEdicion(alimento);
    } else {
      // Si no se está editando, se utiliza la función para creación de lista
      agregarAlimento(alimento);
    }
  };

  return (
    <div className="alimento" key={alimento.id}>
      <div className="alimento-img-container" id={alimento.id}>
        <img src={alimento.imagen_url} alt={alimento.nombre} />
      </div>
      <p><strong>Nombre:</strong> {alimento.nombre}</p>
      <p><strong>Precio kg/$:</strong> {precioPorKilo(alimento.peso_kg, alimento.precio_euros)}</p>
      <div className="admin">
        <button onClick={alternarMostrarMacros}>Macros</button>
        <button onClick={manejarAgregar}>Anadir</button>
        {admin && (
          <>
            <button onClick={() => iniciarEdicion(alimento)}>Modificar</button>
            <button
              onClick={() => {
                if (
                  window.confirm(
                    `¿Estás seguro de que deseas eliminar ${alimento.nombre}?`
                  )
                ) {
                  deleteAlimento(alimento.id);
                }
              }}
            >
              Eliminar
            </button>
          </>
        )}
      </div>
      {mostrarMacros && (
        <Macros
          hidratos={alimento.hidratos}
          grasas={alimento.grasas}
          proteinas={alimento.proteinas}
          calorias={alimento.calorias}
        />
      )}
    </div>
  );
};

export default Alimento;
