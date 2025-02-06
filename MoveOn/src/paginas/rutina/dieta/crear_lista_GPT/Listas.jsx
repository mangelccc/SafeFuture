// src/paginas/rutina/dieta/crear_lista_GPT/UsuarioListas.jsx
import React, { useContext, useEffect } from "react";
import { contextoListas } from "../../../../contextos/ListasContexto";
import "./Listas.css";

const Lista = () => {
  // Extraemos las funciones y estados del contexto
  const {
    obtenerListasUsuario,
    listasUsuario,
    editarLista,
    eliminarLista,
  } = useContext(contextoListas);

  // Se ejecuta al montar el componente para obtener las listas del usuario
  useEffect(() => {
    obtenerListasUsuario();
  }, [obtenerListasUsuario]);

  return (
    <>
      {listasUsuario.length > 0 ? (
        listasUsuario.map((lista) => (
          <div key={lista.id} className="lista-usuario-resumen">
            <h4>{lista.nombre}</h4>
            <div>
            <button onClick={() => editarLista(lista)}>Ver</button>
            <button onClick={() => eliminarLista(lista)}>Eliminar</button>
            </div>
          </div>
        ))
      ) : (
        <p>No tienes listas creadas.</p>
      )}
    </>
  );
};

export default Lista;
