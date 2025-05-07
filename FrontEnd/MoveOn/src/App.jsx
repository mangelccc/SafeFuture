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


const App = () => {
  /* //! METER TODOS LOS CONTEXTOS EN UNO SOLO, Y DENTRO DE ESTE contexto, TODOS LOS QUE HEMOS DEFINIDO PARA QUE SE QUEDE CLEAN */
  return (
    <>
      <AuthContexto>
        <Cabecera />
    
        <DietasContexto>
          <AlimentosContexto>
            <NoFumarContexto>

            <Cuerpo>

                <RutasPaginas />

            </Cuerpo>
            
            </NoFumarContexto>
          </AlimentosContexto>
        </DietasContexto>

        <Footer />
        <SubFooter />
      </AuthContexto>
    </>
  )
}

export default App;
