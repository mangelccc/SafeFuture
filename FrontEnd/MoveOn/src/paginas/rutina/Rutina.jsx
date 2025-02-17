import React from "react";
import "./Rutina.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import {
  faDumbbell,
  faEgg,
  faCalendar,
  faPiggyBank,
  faSmokingBan,
  faBriefcase,
  faCirclePlus,
} from "@fortawesome/free-solid-svg-icons";

const Rutina = () => {
  return (
    <>
      <div id="crear-rutina">
        <div className="crear-rutina-general">
          <FontAwesomeIcon icon={faCirclePlus} size="2x" />
          <h2>Crear Rutina</h2>
        </div>
        <div className="contenedor-rutinas">

          <Link to="/Rutina/Ejercicio" className="rutinas-item">
            <FontAwesomeIcon icon={faDumbbell} size="5x" />
          </Link>

          <Link to="/Rutina/FormularioMacros" className="rutinas-item">
            <FontAwesomeIcon icon={faEgg} size="5x" />
          </Link>

          <Link to="/Rutina/Calendario" className="rutinas-item">
            <FontAwesomeIcon icon={faCalendar} size="5x" />
          </Link>

          <Link to="/Rutina/Finanzas" className="rutinas-item">
            <FontAwesomeIcon icon={faPiggyBank} size="5x" />
          </Link>

          <Link to="/Rutina/NoFumar" className="rutinas-item">
            <FontAwesomeIcon icon={faSmokingBan} size="5x" />
          </Link>

          <Link to="/Rutina/Trabajo" className="rutinas-item">
            <FontAwesomeIcon icon={faBriefcase} size="5x" />
          </Link>
          
        </div>
      </div>
    </>
  );
};

export default Rutina;
