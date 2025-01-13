import React from "react";
import "./Pie.css";
import ramon from "../../Bibliotecas/img/ramon.jpg";

const Pie = () => {
  return (
    <>
      <footer id='pie'>
        <p>&copy; 2025 - Creado por Miguel Ángel Grimal López y Ramón Galinsoga Cremades </p>
        <img src={ramon}/>
      </footer>
    </>
  );
};

export default Pie;
