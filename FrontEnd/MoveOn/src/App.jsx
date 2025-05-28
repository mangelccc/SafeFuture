import React from "react";
import Cabecera from "./estructura/header/Cabecera.jsx";
import Cuerpo from "./estructura/body/Cuerpo.jsx";
import RutasPaginas from "./menus/RutasPaginas.jsx";
import SubFooter from "./estructura/footer/SubFooter.jsx";
import Footer from "./estructura/footer/Footer.jsx";

import Proveedores from "./contextos/Proveedores.jsx";

import "./App.css";
import { Element } from "react-scroll";
import BotonSubirArriba from "./menus/BotonSubirArriba.jsx";

const App = () => {
  return (
    <Proveedores>
      <Element name="topScrollAnchor" />
      <Cabecera />
      <Cuerpo>
        <RutasPaginas />
      </Cuerpo>
      <Footer />
      <SubFooter />
      <BotonSubirArriba />
    </Proveedores>
  );
};

export default App;
