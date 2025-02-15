import Cabecera from "./estructura/header/Cabecera.jsx";
import Cuerpo from "./estructura/body/Cuerpo.jsx";
import RutasPaginas from "./menus/RutasPaginas.jsx";
import SubFooter from "./estructura/footer/SubFooter.jsx";

import AuthContexto from "./contextos/AuthContexto.jsx";
import MacrosContexto from "./contextos/MacrosContexto.jsx";
import AlimentosContexto from "./contextos/AlimentosContexto.jsx";
import ListasContexto from "./contextos/ListasContexto.jsx";
import "./App.css";
import Footer from "./estructura/footer/Footer.jsx";


const App = () => {

  return (
    <>
      <AuthContexto>
        <Cabecera />
        <Cuerpo>
          <AlimentosContexto>
            <MacrosContexto>
              <ListasContexto>
              <RutasPaginas />
              </ListasContexto>
            </MacrosContexto>
          </AlimentosContexto>
        </Cuerpo>
        <Footer/>
        <SubFooter />
      </AuthContexto>
    </>
  )
}

export default App;
