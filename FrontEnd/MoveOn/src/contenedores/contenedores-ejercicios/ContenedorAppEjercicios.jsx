import React from "react";

const ContenedorAppEjercicios = ({ children }) => {
  return (
    <div className="flex flex-row min-h-[80vh] rounded-lg overflow-hidden border border-black dark:border-white">
      {children}
    </div>
  );
};


export default ContenedorAppEjercicios;
