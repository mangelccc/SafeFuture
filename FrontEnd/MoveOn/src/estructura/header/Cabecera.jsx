import React, { useContext } from "react";
import { contextoAuth } from "../../contextos/AuthContexto";
import { Link } from "react-router-dom";
import Logo from "../../galeria/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import BotonTema from "./BotonTema.jsx";

const Cabecera = () => {
  const { sesionIniciada } = useContext(contextoAuth);

  return (
    <header className="h-24 w-full flex justify-around items-center bg-white dark:bg-black border-b-2 dark:border-white border-black ">
      <div className="w-16 h-16">
        <Link to="/">
          <img src={Logo} className="w-full h-full object-contain" />
        </Link>
      </div>

      <nav>
        <ul className="list-none flex gap-5">
          <li>
            <Link to="/" className="dark:text-white font-bold px-3 py-1 rounded-lg transition-colors duration-300 hover:bg-purple hover:text-white">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/QueSomos" className="dark:text-white font-bold px-3 py-1 rounded-lg transition-colors duration-300 hover:bg-purple hover:text-white">
              ¿Qué Somos?
            </Link>
          </li>
          <li>
            <Link to="/Servicios" className="dark:text-white font-bold px-3 py-1 rounded-lg transition-colors duration-300 hover:bg-purple hover:text-white">
              Servicios
            </Link>
          </li>
          <li>
            <Link to="/Rutina" className="dark:text-white font-bold px-3 py-1 rounded-lg transition-colors duration-300 hover:bg-purple hover:text-white">
              Plantea tu rutina
            </Link>
          </li>
          <li>
            <Link to="/Foro" className="dark:text-white font-bold px-3 py-1 rounded-lg transition-colors duration-300 hover:bg-purple hover:text-white">
              Foro
            </Link>
          </li>
          <li>
            <Link to="/Contactanos" className="dark:text-white font-bold px-3 py-1 rounded-lg transition-colors duration-300 hover:bg-purple hover:text-white">
              Contacto
            </Link>
          </li>
        </ul>
      </nav>

      <div className="flex justify-center ">
        <BotonTema />
        <Link to={sesionIniciada ? "/UsuarioInformacion" : "/Usuario"}>
          <FontAwesomeIcon
            className="text-4xl dark:text-white p-1.5 border-4 border-black dark:border-white dark:hover:border-purple rounded-lg dark:hover:text-gold hover:bg-gold dark:bg-transparent hover:border-purple dark:hover:shadow-[0_0_15px_#07BEB8] transition-colors duration-300"
            icon={faUser}
          />
        </Link>

      </div>
    </header>
  );
};

export default Cabecera;
