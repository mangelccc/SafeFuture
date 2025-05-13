import React, { useState, useEffect } from "react";
import Cabecera from "./estructura/header/Cabecera.jsx";
import Cuerpo from "./estructura/body/Cuerpo.jsx";
import RutasPaginas from "./menus/RutasPaginas.jsx";
import SubFooter from "./estructura/footer/SubFooter.jsx";

import AuthContexto from "./contextos/AuthContexto.jsx";
import AlimentosContexto from "./contextos/AlimentosContexto.jsx";

import "./App.css";
import Footer from "./estructura/footer/Footer.jsx";
import DietasContexto from "./contextos/DietasContexto.jsx";
import NoFumarContexto from "./contextos/NoFumarContexto.jsx";
import ProvedorEjercicios from "./contextos/EjerciciosContexto.jsx";
import ProvedorEntrenamiento from "./contextos/EntrenamientoContexto.jsx";

const App = () => {
  // Estado para mostrar/ocultar cabecera
  const [showHeader, setShowHeader] = useState(true);
  // Última posición de scroll
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      // Si scrolleamos hacia abajo y sobrepasamos cierto umbral, ocultar
      if (currentY > lastScrollY && currentY > 100) {
        setShowHeader(false);
      } else {
        // Si volvemos a subir, mostrar
        setShowHeader(true);
      }
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Función para scroll suave al top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <AuthContexto>
        {/* Cabecera que aparece/oculta según scroll y al click hace scroll to top */}
        <div
          onClick={scrollToTop}
          className={`sticky top-0 left-0 w-full z-50 transform transition-transform duration-300 cursor-pointer
            ${showHeader ? "translate-y-0" : "-translate-y-full"}`}
        >
          <Cabecera />
        </div>

        {/* Contenido principal */}
        <DietasContexto>
          <AlimentosContexto>
            <ProvedorEjercicios>
              <ProvedorEntrenamiento>
                <NoFumarContexto>
                  <Cuerpo>
                    <RutasPaginas />
                  </Cuerpo>
                </NoFumarContexto>
              </ProvedorEntrenamiento>
            </ProvedorEjercicios>
          </AlimentosContexto>
        </DietasContexto>

        <Footer />
        <SubFooter />
      </AuthContexto>
    </>
  );
};

export default App;