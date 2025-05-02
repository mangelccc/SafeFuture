import React from "react";

const ContenedorAppEjercicios = ({ children }) => {
  return (
    <div className="text-black dark:text-white flex flex-row items-center border-2 rounded-lg border-black dark:border-white">
      {children}
    </div>
  );
};

export default ContenedorAppEjercicios;
