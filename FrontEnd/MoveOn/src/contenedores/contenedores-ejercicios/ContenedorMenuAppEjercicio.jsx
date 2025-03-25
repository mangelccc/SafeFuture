import React from "react";

const ContenedorMenuAppEjercicio = ({ children }) => {
  return (
    <div className="mini-app-menu flex flex-col items-start space-y-4 h-full justify-start"> 
      {children}
    </div>
  );
};

export default ContenedorMenuAppEjercicio;
