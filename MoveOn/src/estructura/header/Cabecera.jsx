import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../bibliotecas/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./Cabecera.css";

const Cabecera = () => {
  return (
    <header>
      <div className="logo">
        <img src={Logo}/>
      </div>

      <nav>
        <ul>
          <li>
            <Link to="/" className="nav-link">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/Dietas" className="nav-link">
              Dietas
            </Link>
          </li>
          <li>
            <Link to="/Deporte" className="nav-link">
              Deporte
            </Link>
          </li>
          <li>
            <Link to="/CambiarEntorno" className="nav-link">
              Cambiar Entorno
            </Link>
          </li>
        </ul>
      </nav>

      <div className="user">
        <Link to="/Usuario" className="user-link">
          <FontAwesomeIcon className="icon__user" icon={faUser} />
        </Link>
      </div>
    </header>
  );
};

export default Cabecera;
