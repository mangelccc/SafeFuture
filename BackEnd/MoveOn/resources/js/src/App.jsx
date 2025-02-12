import React from 'react';
import "./App.css";
import Header from "./componentes/esqueleto/Header.jsx";
import Navbar from "./componentes/esqueleto/Navbar.jsx";
import Content from "./componentes/esqueleto/Content.jsx";
import Footer from "./componentes/esqueleto/Footer.jsx";
import Rutas from "./componentes/rutas/Rutas.jsx";
import ProveedorSesion from "./contextos/ProveedorSesion.jsx";
import ProveedorProductos from "./contextos/ProveedorProductos.jsx";
import ProveedorListas from "./contextos/ProveedorListas.jsx";


function App() {
  return (
    <>
      <ProveedorSesion>
          <Header />
          <Navbar />
          <Content>
            <ProveedorProductos>
              <ProveedorListas>
                <Rutas />
              </ProveedorListas>
            </ProveedorProductos>
          </Content>
          <Footer/>
      </ProveedorSesion>
    </>
  );
}

export default App;
