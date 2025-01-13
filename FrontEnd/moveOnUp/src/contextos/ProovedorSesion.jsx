import React, { createContext } from "react";

const contextoSesion = createContext();

const ProveedorSesion = ({ children }) => {
  
  return (
    
    <contextoSesion.Provider value={datosaExportar}>
      {children}
    </contextoSesion.Provider>
  );
};

export default ProveedorSesion;

export { contextoPlanetas };
