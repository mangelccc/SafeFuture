import React, {useContext} from "react";
import { contextoAuth } from "../../contextos/AuthContexto.jsx";
import "./UsuarioInformacion.css";
import UsuarioDatos from "./UsuarioDatos.jsx";

const Usuario = () => {
  // Se extrae el usuario autenticado y la función para cerrar sesión
  const { usuario, cerrarSesion } = useContext(contextoAuth);
  console.log(JSON.stringify(usuario))

  return (
    <section id="usuario-informacion" className="flex justify-center flex-col">

      <div className="flex justify-between pr-14 mb-8">
      <h2 className="titulo-secundario underline decoration-purple underline-offset-4 "> Detalles de la cuenta </h2>
      <button className="" onClick={cerrarSesion}>Cerrar sesión</button>
      </div>

      <UsuarioDatos usuario={usuario}/>

      
      
      
    </section>
  );
};

export default Usuario;
