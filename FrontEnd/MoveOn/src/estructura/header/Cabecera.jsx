import React, { useContext, useState } from "react";
import { contextoAuth } from "../../contextos/AuthContexto";
import { Link } from "react-router-dom";
import Logo from "../../galeria/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser, faXmarkSquare } from "@fortawesome/free-solid-svg-icons";
import BotonTema from "./BotonTema.jsx";
import Navegacion from "./Navegacion.jsx";
import "./Cabecera.css";

const Cabecera = () => {
  const { sesionIniciada } = useContext(contextoAuth);
  const [menu, setMenu] = useState(false);
  const alternarMenu = () => {
    setMenu(!menu);
  }

  return (
    <>
      <header className="min-h-24 w-full flex justify-around items-center bg-white dark:bg-black border-b-2 dark:border-white border-black ">

        <FontAwesomeIcon className="sm:hidden hsm:block text-4xl bg-gold dark:bg-black dark:text-gold border border-2 border-black dark:border-white p-2 rounded-lg cursor-pointer"
          onClick={alternarMenu}
          icon={menu ? faXmarkSquare : faBars} />

        <div className="w-14 h-14 min-w-14 min-h-14 ">
          <Link to="/">
            <img src={Logo} className="hsm:w-2 hsm:h-2 w-full h-full object-contain" />
          </Link>
        </div>

        <div className="hsm:hidden sm:block">
          <Navegacion />
        </div>

        <div className="flex justify-center align-center">
          <div className="hsm:hidden sm:block sm:flex">
            <BotonTema />
          </div>
          <Link to={sesionIniciada ? "/usuario-informacion" : "/usuario"}>
            <FontAwesomeIcon
              className="text-4xl dark:text-white p-1.5 border-4 border-black dark:border-white dark:hover:border-purple rounded-lg dark:hover:text-gold hover:bg-gold dark:bg-transparent hover:border-purple dark:hover:shadow-[0_0_15px_#07BEB8] transition-colors duration-300"
              icon={faUser}
            />
          </Link>
        </div>
        
      </header>
      <div className="hsm:block sm:hidden">
        <Navegacion menu={menu} alternar={alternarMenu} />
      </div>
    </>
  );
};

export default Cabecera;
