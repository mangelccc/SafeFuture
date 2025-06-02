import React from "react";

const ContenedorMenuAppEjercicio = ({ children }) => {
  return (
    <div className="w-64 bg-black1 dark:bg-black2 text-white dark:text-white flex flex-col items-start p-4 space-y-4 h-full">
      {children}
    </div>
  );
};


export default ContenedorMenuAppEjercicio;
