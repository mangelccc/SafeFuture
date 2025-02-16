import React, {useContext} from "react";
import { contextoAuth } from "../../contextos/AuthContexto.jsx";
import "./UsuarioInformacion.css";

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



      <article className="w-1/2 ml-8 mb-8 border border-gold text-wsmk">
        <div className="bg-black3 py-4 px-8 font-bold text-xl">
          <p>Nombre de usuario</p>
        </div>
        <div className="bg-black2 py-4 px-8 grid grid-cols-3">
          <span className="col-start-1">Usuario
            
          </span>
          <span className="col-start-2">
            {usuario && usuario.nombre
              ? usuario.nombre
              : "No hay usuario activo"}
              </span>
        </div>
      </article>

      <article className="w-1/2 ml-8 mb-8 border border-gold text-wsmk">
        <div className="bg-black3 py-4 px-8 font-bold text-xl">
          <p>Correo electrónico</p>
        </div>
        <div className="bg-black2 py-4 px-8 grid grid-cols-3">
          <span className="col-start-1">Correo
            
          </span>
          <span className="col-start-2">
            {usuario && usuario.correo
              ? usuario.correo
              : "Correo no encontrado"}
              </span>
        </div>
      </article>
        
      <article className="w-1/2 ml-8 mb-8 border border-gold text-wsmk">
        <div className="bg-black3 py-4 px-8 font-bold text-xl">
          <p>Contraseña</p>
        </div>
        <div className="bg-black2 py-4 px-8 grid grid-cols-3">
          <span className="col-start-1">Contraseña</span>
          <span className="col-start-2">
            {usuario && usuario.contrasena
              ? "* * * * * * * * * * *"
              : "Contraseña no encontrada"}
              </span>
        </div>
      </article>

      <article className="w-1/2 ml-8 mb-8 border border-gold text-wsmk">
        <div className="bg-black3 py-4 px-8 font-bold text-xl">
          <p>Edad</p>
        </div>
        <div className="bg-black2 py-4 px-8 grid grid-cols-3">
          <span className="col-start-1">Edad</span>
          <span className="col-start-2">
            {usuario && usuario.edad
              ? usuario.edad
              : "Edad no encontrada"}
              </span>
        </div>
      </article>

      <article className="w-1/2 ml-8 mb-8 border border-gold text-wsmk">
        <div className="bg-black3 py-4 px-8 font-bold text-xl">
          <p>Sexo</p>
        </div>
        <div className="bg-black2 py-4 px-8 grid grid-cols-3">
          <span className="col-start-1">Sexo</span>
          <span className="col-start-2">
            {usuario && usuario.sexo
              ? usuario.sexo
              : "Sexo no encontrado"}
              </span>
        </div>
      </article>
      
      
    </section>
  );
};

export default Usuario;
