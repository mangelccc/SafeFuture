import React from "react";
import servicios from "../../objetos/servicios.js";
import ItemServicios from "./ItemServicios.jsx";

const Servicios = () => {
  return (
    <div>
      <h2 id="servicios" className="dark:text-gold pl-5">NUESTROS SERVICIOS</h2>
      <section id="contenedor-servicios" className="grid grid-cols-3 gap-5 p-5">
        {servicios.map((servicio, index) => (
          <ItemServicios
            key={index} 
            icono={servicio.icono}
            texto={servicio.texto}
          />
        ))}
      </section>
    </div>
  );
};

export default Servicios;
