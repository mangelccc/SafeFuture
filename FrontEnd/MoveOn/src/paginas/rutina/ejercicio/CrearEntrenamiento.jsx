import React from "react";
import FormularioEntrenamiento from "./FormularioEntrenamiento.jsx";
import useAppContext from "../../../hooks/useAppContext.jsx";

const CrearEntrenamiento = () => {
  return (
    <>
      <h2>Aqui empieza lo buenoooooooooooooooooooo</h2>
      <div className="max-w-3xl w-full mx-auto p-6 bg-white dark:bg-black rounded-lg shadow-md">
        <FormularioEntrenamiento />
      </div>
    </>
  );
};

export default CrearEntrenamiento;

