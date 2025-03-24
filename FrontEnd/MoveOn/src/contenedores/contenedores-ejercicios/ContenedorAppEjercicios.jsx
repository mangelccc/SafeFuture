import React from "react";

const ContenedorAppEjercicios = ({ children }) => {
  return (
    <div className="container text-black dark:text-white flex flex-row items-center border-2 rounded-lg m-5 border-black dark:border-white">
      {children}
    </div>
  );
};

export default ContenedorAppEjercicios;
