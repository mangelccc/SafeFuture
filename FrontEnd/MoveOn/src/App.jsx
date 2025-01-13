import "./App.css";
import Cabecera from "./Componentes/estructura/Cabecera.jsx";
import Contenido from "./Componentes/estructura/Contenido.jsx";
import Pie from "./Componentes/estructura/Pie.jsx";
import Rutas from "./Componentes/Rutas/Rutas.jsx";

function App() {
  return (
    <>
      <Cabecera/>
      <Contenido>
        <Rutas />
      </Contenido>
      <Pie />
    </>
  );
}

export default App;
