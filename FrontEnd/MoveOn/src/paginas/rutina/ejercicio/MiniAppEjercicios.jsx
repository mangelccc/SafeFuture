import React, { useState } from "react";
import Contenedor from "../../../contenedores/contenedores-ejercicios/ContenedorAppEjercicios.jsx";
import Menu from "./ComponentesApp/MenuAppEjercicio.jsx";
import Cuerpo from "./ComponentesApp/CuerpoAppEjercicio.jsx";
import { Menu as MenuIcon, X as CloseIcon } from "lucide-react";

const MiniAppEjercicios = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen((prev) => !prev);

  return (
    <Contenedor>
      {/* Botón hamburguesa solo en móvil */}
      <div className="sm:hidden p-4">
        <button
          onClick={toggleDrawer}
          className="focus:outline-none"
          aria-label="Toggle menu"
        >
          <MenuIcon size={24} />
        </button>
      </div>

      {/* Drawer lateral para móvil */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform transition-transform duration-300 z-50
          ${drawerOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Menú</h2>
          <button onClick={toggleDrawer} className="focus:outline-none" aria-label="Cerrar menú">
            <CloseIcon size={24} />
          </button>
        </div>
        <Menu />
      </div>

      {/* Fondo semitransparente al abrir drawer */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleDrawer}
        />
      )}

      {/* Menú normal en escritorio */}
      <div className="hsm:hidden sm:block">
        <Menu />
      </div>

      <Cuerpo />
    </Contenedor>
  );
};

export default MiniAppEjercicios;
