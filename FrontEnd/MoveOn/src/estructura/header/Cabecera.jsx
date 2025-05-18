import React, { useContext, useEffect, useRef, useState } from "react";
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
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  const alternarMenu = () => {
    setMenu(!menu);
  };

  // Scroll al top al hacer click en cabecera
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // Oculta la cabecera al hacer scroll hacia abajo, si se ha bajado más de 100px
      if (currentY > lastScrollY.current && currentY > 100) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      // Cierra el menú si está abierto y se hace scroll hacia abajo
      if (currentY > lastScrollY.current && menu) {
        setMenu(false);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menu]);

  return (
    <>
      <div
        onClick={scrollToTop}
        className={`sticky top-0 left-0 w-full z-50 transform transition-transform duration-300 ${
          showHeader ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <header className="min-h-24 w-full flex justify-around items-center bg-white dark:bg-black border-b-2 dark:border-white border-black">
          <FontAwesomeIcon
            className="sm:hidden hsm:block text-4xl bg-gold dark:bg-black dark:text-gold border-2 border-black dark:border-white p-2 rounded-lg cursor-pointer"
            onClick={alternarMenu}
            icon={menu ? faXmarkSquare : faBars}
          />

          <div className="w-14 h-14 min-w-14 min-h-14">
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
                className="text-4xl dark:text-white p-1.5 border-4 border-black dark:border-white dark:hover:border-purple rounded-lg dark:hover:text-gold hover:bg-gold dark:bg-transparent hover:border-purple dark:hover:shadow-[0_0_15px_#07BEB8] transition-colors duration-300 active:scale-102"
                icon={faUser}
              />
            </Link>
          </div>
        </header>

        <div className="hsm:block sm:hidden">
          <Navegacion menu={menu} alternar={alternarMenu} />
        </div>
      </div>
    </>
  );
};

export default Cabecera;
