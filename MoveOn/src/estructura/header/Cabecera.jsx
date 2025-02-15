import React, { useContext } from "react";
import { contextoAuth } from "../../contextos/AuthContexto";
import { Link } from "react-router-dom";
import Logo from "../../galeria/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./Cabecera.css";

const Cabecera = () => {

  const { sesionIniciada } = useContext(contextoAuth);

  return (
    <header>
      <div className="logo">
        <img src={Logo} />
      </div>

      <nav>
        <ul>
          <li>
            <Link to="/" className="nav-link">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/QueSomos" className="nav-link">
              ¿Que Somos?
            </Link>
          </li>
          <li>
            <Link to="/Servicios" className="nav-link">
              Servicios
            </Link>
          </li>
          <li>
            <Link to="/Rutina" className="nav-link">
              Plantea tu rutina
            </Link>
          </li>
          <li>
              <Link to="/Foro" className="nav-link">
                Foro
              </Link>
          </li>
          <li>
              <Link to="/Contactanos" className="nav-link">
                Contacto
              </Link>
          </li>
        </ul>
      </nav>

      <div className="user">
        {sesionIniciada ? (
          <Link to="/UsuarioInformacion" className="user-link">
            <FontAwesomeIcon className="icon__user" icon={faUser} />
          </Link>
        ) : (
          <Link to="/Usuario" className="user-link">
            <FontAwesomeIcon className="icon__user" icon={faUser} />
          </Link>
        )}
      </div>
    </header>
  );
};

export default Cabecera;
