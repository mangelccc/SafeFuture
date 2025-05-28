import React from "react";
import { Link } from "react-router-dom";

const ContenedorAppEjercicios = ({ children }) => {
  return (
    <>
    <div className="flex hsm:flex-col sm:flex-row min-h-[80vh] sm:rounded-lg overflow-hidden sm:border border-black dark:border-white">
      {children}
    </div>
                <div className="flex justify-center mt-4">
                <Link to="/rutina">
                    <button className="bg-purple text-white px-6 py-2 rounded-xl shadow-lg dark:hover:bg-purpleOp hover:scale-102 transition-all duration-300 ease-in-out text-shadow-md">
                        Volver a tus rutinas
                    </button>
                </Link>
            </div>
            </>
  );
};


export default ContenedorAppEjercicios;
