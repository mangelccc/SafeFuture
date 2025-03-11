import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./Rutina.css";

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

          <Link to="/rutina/ejercicio" className="rutinas-item">
            <FontAwesomeIcon icon={faDumbbell} size="5x" />
          </Link>

          <Link to="/rutina/FormularioMacros" className="rutinas-item">
            <FontAwesomeIcon icon={faEgg} size="5x" />
          </Link>

          <Link to="/rutina/Calendario" className="rutinas-item">
            <FontAwesomeIcon icon={faCalendar} size="5x" />
          </Link>

          <Link to="/rutina/Finanzas" className="rutinas-item">
            <FontAwesomeIcon icon={faPiggyBank} size="5x" />
          </Link>

          <Link to="/rutina/NoFumar" className="rutinas-item">
            <FontAwesomeIcon icon={faSmokingBan} size="5x" />
          </Link>

          <Link to="/rutina/Trabajo" className="rutinas-item">
            <FontAwesomeIcon icon={faBriefcase} size="5x" />
          </Link>
          
        </div>
      </div>
    </>
  );
};

export default Rutina;
