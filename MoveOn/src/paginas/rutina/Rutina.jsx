import React from "react";
import "./Rutina.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
          <div className="rutinas-item">
            <FontAwesomeIcon icon={faDumbbell} size="5x" />
          </div>
          <div className="rutinas-item">
            <FontAwesomeIcon icon={faEgg} size="5x" />
          </div>
          <div className="rutinas-item">
            <FontAwesomeIcon icon={faCalendar} size="5x" />
          </div>
          <div className="rutinas-item">
            <FontAwesomeIcon icon={faPiggyBank} size="5x" />
          </div>
          <div className="rutinas-item">
            <FontAwesomeIcon icon={faSmokingBan} size="5x" />
          </div>
          <div className="rutinas-item">
            <FontAwesomeIcon icon={faBriefcase} size="5x" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Rutina;
