import React from "react";
import { Routes, Route } from "react-router-dom";
import useContexto from '../../hooks/useContexto.jsx'
import Inicio from "../paginas/Inicio.jsx";
import Autenticacion from "../paginas/Autenticacion.jsx";
import Error from "../paginas/Error.jsx";
import Lista from "../paginas/Lista.jsx";
import RecuperarPass from "../sesion/RecuperarPass.jsx";
import CambiarPass from "../sesion/CambiarPass.jsx";
import AdminLista from "../paginas/AdminLista.jsx";
import CrearProductos from "../productos/CrearProductos.jsx";
import EliminarProductos from "../productos/EliminarProductos.jsx";
import EditarProductos from "../productos/EditarProductos.jsx";
import CrearCuenta from "../sesion/CrearCuenta.jsx"
import ListasCompra from "../paginas/ListasCompra.jsx";
import ListasCompraCrear from "../listasCompra/ListasCompraCrear.jsx";
import ListasCompraContenido from "../listasCompra/ListasCompraContenido.jsx";
import ListasCompraGestion from "../listasCompra/ListasCompraGestion.jsx";

const Rutas = () => {

  const { sesionIniciada } = useContexto("sesion");

  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      
      {sesionIniciada && 
      /* De esta forma me aseguro que solo puedan acceder usuarios con la sesión iniciada. */
        <>
        <Route path="/lista" element={<Lista />} />
        {/* Submenú para editar, crear y eliminar dentro de AdminLista. */}
        <Route path="/lista-admin" element={<AdminLista />}>
          <Route index element={<CrearProductos />} /> {/* Para cuando el usuario navegue a /lista-admin se le rediriga a CrearProductos de forma predeterminada. */}
          <Route path="create" element={ <CrearProductos/> } />
          <Route path="edit" element={ <EditarProductos/> } />
          <Route path="delete" element={ <EliminarProductos/> } />
        </Route>
        <Route path="/listas-compra" element={ <ListasCompra/> } />
        <Route path="/listas-compra-crear" element={ <ListasCompraCrear/> } />
        <Route path="/listas-compra/:id" element={ <ListasCompraContenido/> } />  
        <Route path="/listas-compra/:id/gestion" element={ <ListasCompraGestion/> } />

        <Route path="/cambiar-passwd" element={<CambiarPass />} />
        </>
      }

      <Route path="/login" element={<Autenticacion />} />
      <Route path="/register" element={<CrearCuenta/>} />
      <Route path="/reset-passwd" element={<RecuperarPass />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default Rutas;