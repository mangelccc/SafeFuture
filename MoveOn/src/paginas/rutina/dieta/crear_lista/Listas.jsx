// src/paginas/rutina/dieta/crear_lista_GPT/UsuarioListas.jsx
import React, { useContext, useEffect } from "react";
import { contextoListas } from "../../../../contextos/ListasContexto";
import AlimentoListado from "./AlimentoListado";
import "./Listas.css";

const Lista = () => {
  // Extraemos las funciones y estados del contexto
  const {
    obtenerListasUsuario,
    listasUsuario,
    editarLista,
    eliminarLista,
    listaEnEdicion,
    alimentosEdicion,
    sumarAlimentoEdicion,
    restarAlimentoEdicion,
    actualizarListaEdicion,
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
              <div className="usuario-lista-resumen">
                <h4>{lista.nombre}</h4>
                <div>
                  <button onClick={() => editarLista(lista)}>Ver</button>
                  <button onClick={() => eliminarLista(lista)}>Eliminar</button>
                </div>
              </div>
              {listaEnEdicion && listaEnEdicion.id === lista.id && (
              <div className="lista-alimento-seleccionados">
                <AlimentoListado
                  nombreLista={listaEnEdicion.nombre}
                  alimentosLista={alimentosEdicion}
                  sumarAlimento={sumarAlimentoEdicion}
                  restarAlimento={restarAlimentoEdicion}
                  />
                <button className="actualizar-alimento" onClick={actualizarListaEdicion}>
                  Actualizar
                </button>
              </div>
            )}
          </div>
        ))
      ) : (
        <p>No tienes listas creadas.</p>
      )}
    </>
  );
};

export default Lista;
