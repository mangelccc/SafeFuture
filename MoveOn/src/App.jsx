import { Router } from "react-router-dom";
import Cabecera from "./estructura/header/Cabecera.jsx";
import Cuerpo from "./estructura/body/Cuerpo.jsx";
import RutasPaginas from "./menus/RutasPaginas.jsx";
import SubRutasRutina from "./menus/SubRutasRutina.jsx";
import Footer from "./estructura/footer/Footer.jsx";

import AuthContexto from "./contextos/AuthContexto.jsx";
import MacrosContexto from "./contextos/MacrosContexto.jsx";
import AlimentosContexto from "./contextos/AlimentosContexto.jsx";
import "./App.css";


const App = () => {

  return (
    <>
      <AuthContexto>
        <Cabecera />
        <Cuerpo>
          <RutasPaginas />
          <AlimentosContexto>
            <MacrosContexto>
              <SubRutasRutina />
            </MacrosContexto>
            </AlimentosContexto>
        </Cuerpo>
        <Footer />
      </AuthContexto>
    </>
  )
}

export default App;
