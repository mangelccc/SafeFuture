import React, { createContext, useState, useEffect } from "react";
import {
  obtenerProductos,
  insertarProducto,
  actualizarProducto,
  eliminarProducto,
} from "../bibliotecas/CreateReadUpdateDelete.js";

const contextoBBDD = createContext();

const BBDDContexto = ({ children }) => {
  

  const datosContexto = {

  };

  return (
    <contextoBBDD.Provider value={datosContexto}>
      {children}
    </contextoBBDD.Provider>
  );
};

export default BBDDContexto;
export { contextoBBDD };