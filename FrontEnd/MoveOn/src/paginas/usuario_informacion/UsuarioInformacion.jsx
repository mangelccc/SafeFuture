import React, { useContext } from "react";
import { contextoAuth } from "../../contextos/AuthContexto.jsx";
import UsuarioDatos from "./UsuarioDatos.jsx";

const Usuario = () => {
  // Se extrae el usuario autenticado y la función para cerrar sesión
  const { usuario, cerrarSesion, editarDatoUsuario } = useContext(contextoAuth);

  return (
    <section id="usuario-informacion" className="flex justify-center flex-col" onClick={(event) => { editarDatoUsuario(event) }}>

      <div className="flex justify-between sm:pr-14 hsm:pr-8 hsm:pt-8 items-center mb-8">
        <h2 className="titulo-secundario text-black1 dark:text-white  pl-8 underline decoration-purple underline-offset-4 "> Detalles de la cuenta </h2>
        <button
          onClick={cerrarSesion}
          className="relative bg-[#6320EE] text-white border-none text-base px-4 py-2 cursor-pointer transition-all duration-[800ms] ease-in-out outline-none font-bold whitespace-normal break-words before:content-[''] before:absolute before:top-0 before:right-0 before:h-[2px] before:w-0 before:bg-[#FFBA49] before:transition-all before:duration-[400ms] before:ease-in-out after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#FFBA49] after:transition-all after:duration-[400ms] after:ease-in-out hover:bg-[#07BEB8] hover:text-[#1a1a1a] hover:before:w-full hover:before:duration-[800ms] hover:after:w-full hover:after:duration-[800ms]"
        >
          Cerrar sesión
        </button>

      </div>

      <UsuarioDatos usuario={usuario}  />

    </section>
  );
};

export default Usuario;
