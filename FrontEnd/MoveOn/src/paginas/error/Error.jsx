import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-start mt-8 mb-14 bg-white text-black dark:bg-black1 dark:text-white transition-colors">
      <h1 className="text-6xl font-bold text-purple dark:text-gold mb-4">404</h1>
      <p className="text-xl text-black3 dark:text-white3 mb-6">La página que buscas no existe.</p>
      <Link to="/" className="px-6 py-3 rounded-xl bg-gold text-black font-semibold shadow-md hover:bg-purple hover:text-white transition-colors dark:bg-purple dark:text-white dark:hover:bg-gold dark:hover:text-black">
        Volver al inicio
      </Link>
    </div>
  );
};

export default Error;
