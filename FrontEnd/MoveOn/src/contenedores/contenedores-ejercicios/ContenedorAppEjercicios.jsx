import React from "react";

const ContenedorAppEjercicios = ({ children }) => {
  return (
    <div className="flex hsm:flex-col sm:flex-row min-h-[80vh] sm:rounded-lg overflow-hidden sm:border border-black dark:border-white">
      {children}
    </div>
  );
};


export default ContenedorAppEjercicios;
