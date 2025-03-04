import React, { useContext } from "react";
import { contextoAuth } from "../../contextos/AuthContexto";
import { Link } from "react-router-dom";
import Logo from "../../galeria/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Cabecera = () => {
  const { sesionIniciada } = useContext(contextoAuth);

  return (
    <header className="h-24 w-full flex justify-around items-center bg-[#101010] border-b-2 border-white">
      <div className="w-16 h-16">
        <Link to="/">
          <img src={Logo} className="w-full h-full object-contain" />
        </Link>
      </div>

      <nav>
        <ul className="list-none flex gap-5">
          <li>
            <Link to="/" className="text-white font-bold px-3 py-1 rounded-lg transition-colors duration-300 hover:bg-purple">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/QueSomos" className="text-white font-bold px-3 py-1 rounded-lg transition-colors duration-300 hover:bg-purple">
              ¿Qué Somos?
            </Link>
          </li>
          <li>
            <Link to="/Servicios" className="text-white font-bold px-3 py-1 rounded-lg transition-colors duration-300 hover:bg-purple">
              Servicios
            </Link>
          </li>
          <li>
            <Link to="/Rutina" className="text-white font-bold px-3 py-1 rounded-lg transition-colors duration-300 hover:bg-purple">
              Plantea tu rutina
            </Link>
          </li>
          <li>
            <Link to="/Foro" className="text-white font-bold px-3 py-1 rounded-lg transition-colors duration-300 hover:bg-purple">
              Foro
            </Link>
          </li>
          <li>
            <Link to="/Contactanos" className="text-white font-bold px-3 py-1 rounded-lg transition-colors duration-300 hover:bg-purple">
              Contacto
            </Link>
          </li>
        </ul>
      </nav>

      <div>
        {sesionIniciada ? (
          <Link to="/UsuarioInformacion">
            <FontAwesomeIcon
              className="text-4xl text-white p-1.5 border-4 border-white rounded-lg hover:text-gold hover:border-purple hover:shadow-[0_0_15px_#07BEB8] transition-colors duration-300"
              icon={faUser}
            />
          </Link>
        ) : (
          <Link to="/Usuario">
            <FontAwesomeIcon
              className="text-4xl text-white p-1.5 border-4 border-white rounded-lg hover:text-gold hover:border-purple hover:shadow-[0_0_15px_#07BEB8] transition-colors duration-300"
              icon={faUser}
            />
          </Link>
        )}
      </div>
    </header>
  );
};

export default Cabecera;
