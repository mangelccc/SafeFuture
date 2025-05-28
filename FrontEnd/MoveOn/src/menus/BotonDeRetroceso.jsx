
import React from 'react';import { useNavigate } from 'react-router-dom';

const BotonDeRetroceso = ({textoBoton}) => {
  const navigate = useNavigate();

  const irAtras = () => {
    navigate(-1); 
  };

  return (
    <button onClick={irAtras} className="bg-purple text-white px-6 py-2 rounded-xl shadow-lg dark:hover:bg-purpleOp hover:scale-102 transition-all duration-300 ease-in-out text-shadow-md">
      {textoBoton || 'Volver atrás'}
    </button>
  );
};

export default BotonDeRetroceso;
