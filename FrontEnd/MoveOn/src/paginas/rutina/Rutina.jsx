import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import rutinas from "../../objetos/rutinas.js";
import ItemRutina from "./ItemRutina.jsx";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

const Rutina = () => {
  return (
    <div id="crear-rutina" className="text-center p-5">
      <div
        className="crear-rutina-general flex justify-center items-center 
                   border-2 border-black dark:border-white2 text-gold dark:text-white gap-3 rounded-xl mx-auto mb-8 transition-all duration-300 dark:hover:bg-purpleOp dark:hover:text-gold bg-purple dark:bg-black  hover:bg-purple dark:hover:bg-purpleOp  hover:scale-102 hover:cursor-pointer"
      >
        <FontAwesomeIcon icon={faCirclePlus} size="2x" />
        <h2>Crear Rutina</h2>
      </div>
      <div className="contenedor-rutinas flex flex-wrap justify-between gap-5 mx-auto">
        {rutinas.map((rutina, index) => (
          <ItemRutina key={index} icono={rutina.icono} link={rutina.link} />
        ))}
      </div>
    </div>
  );
};

export default Rutina;
