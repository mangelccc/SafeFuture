import React from "react";
import servicios from "../../objetos/servicios.js";
import ItemServicios from "./ItemServicios.jsx";

const Servicios = () => {
  return (
    <div>
      {/* El color gold y el padding se definen con las clases "text-gold" y "pl-5" */}
      <h2 id="servicios" className="dark:text-gold pl-5">NUESTROS SERVICIOS</h2>
      {/* Grid de 3 columnas, gap y padding de 20px (p-5 y gap-5) */}
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
