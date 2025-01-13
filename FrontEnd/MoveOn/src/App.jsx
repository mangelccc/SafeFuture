import "./App.css";
import Cabecera from "./Componentes/estructura/Cabecera.jsx";
import Contenido from "./Componentes/estructura/Contenido.jsx";
import Pie from "./Componentes/estructura/Pie.jsx";
import Rutas from "./Componentes/Rutas/Rutas.jsx";
import ProveedorUsuario from "./contextos/ProvedorUsuarios.jsx";

function App() {
  return (
    <>
      <ProveedorUsuario>
        <Cabecera/>
        <Contenido>
          <Rutas />
        </Contenido>
        <Pie />
      </ProveedorUsuario>
    </>
  );
}

export default App;
