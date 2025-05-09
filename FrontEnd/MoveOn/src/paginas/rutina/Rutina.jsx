import React from "react";
import rutinas from "../../objetos/rutinas.js";
import ItemRutina from "./ItemRutina.jsx";


const Rutina = () => {
  return (
    <>
      <h2 id="servicios" className="dark:text-gold pl-5">PLANEA TU RUTINA</h2>
      <h3 className="dark:text-gold pl-5">Selecciona una rutina para empezar</h3>
    <div id="crear-rutina" className="text-center p-5">
      <div className="contenedor-rutinas flex flex-wrap sm:justify-between hsm:justify-center sm:gap-5 hsm:gap-10 hsm:py-5 mx-auto">
        {rutinas.map((rutina, index) => (
          <ItemRutina key={index} icono={rutina.icono} link={rutina.link} title={rutina.title} />
        ))}
      </div>
    </div>
    </>
  );
};

export default Rutina;
