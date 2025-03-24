import React from "react";

const ContenedorMenuAppEjercicio = ({ children }) => {
  return (
    <div className="mini-app-menu flex flex-col items-start space-y-4 border-r dark:border-white p-4 border-black"> 
      {children}
    </div>
  );
};

export default ContenedorMenuAppEjercicio;
