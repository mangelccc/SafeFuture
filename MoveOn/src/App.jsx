import { Router } from "react-router-dom";
import Cabecera from "./estructura/header/Cabecera.jsx";
import Cuerpo from "./estructura/body/Cuerpo.jsx";
import RutasPaginas from "./menus/RutasPaginas.jsx";
import Footer from "./estructura/footer/Footer.jsx";

import AuthContexto from "./contextos/AuthContexto.jsx";
import "./App.css";


const App = () => {

  return (
    <>
      <AuthContexto>
        <Cabecera />
        <Cuerpo>
          <RutasPaginas />
        </Cuerpo>
        <Footer />
      </AuthContexto>
    </>
  )
}

export default App
