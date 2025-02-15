import React from "react";
import "./Servicios.css"
import servicios from "../../objetos/servicios.js"
import ItemServicios from "./ItemServicios.jsx";

const Servicios = () => {

  return (
    <>
      <h2 id="servicios">NUESTROS SERVICIOS</h2>
      <section id="contenedor-servicios">
      {servicios.map((servicio, index) => (
        <ItemServicios
          key={index} 
          icono={servicio.icono}
          texto={servicio.texto}
        />
      ))}
      </section>
    </>
  );
};

export default Servicios;