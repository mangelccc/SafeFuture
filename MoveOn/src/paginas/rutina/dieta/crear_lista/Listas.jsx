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

  // Manejador único de clic delegado en el contenedor principal
  const manejarClic = (e) => {
    const target = e.target;

    if (
      target.classList.contains("delegated-ver-lista") ||
      target.classList.contains("delegated-eliminar-lista") ||
      target.classList.contains("delegated-actualizar-lista")
    ) {
      // Obtener el contenedor padre con data-id de la lista
      const listaContenedor = target.closest(".lista-usuario-resumen");
      if (!listaContenedor) return;
      const listaId = listaContenedor.getAttribute("data-id");

      // Buscar la lista correspondiente en el estado
      const lista = listasUsuario.find(
        (item) => item.id.toString() === listaId
      );
      if (!lista) return;

      // Ejecutar la acción correspondiente
      if (target.classList.contains("delegated-ver-lista")) {
        editarLista(lista);
      } else if (target.classList.contains("delegated-eliminar-lista")) {
        const confirmar = window.confirm(
          `¿Estás seguro de que deseas eliminar la lista "${lista.nombre}"?`
        );
        if (confirmar) {
          eliminarLista(lista);
        }
      } else if (target.classList.contains("delegated-actualizar-lista")) {
        actualizarListaEdicion();
      }
    }
  };

  return (
    <div className="lista-contenedor" onClick={manejarClic}>
      {listasUsuario.length > 0 ? (
        listasUsuario.map((lista) => (
          <div key={lista.id} className="lista-usuario-resumen" data-id={lista.id}>
            <div className="usuario-lista-resumen">
              <h4>{lista.nombre}</h4>
              <div>
                {/* Botones con clases delegadas */}
                <button className="delegated-ver-lista">Ver</button>
                <button className="delegated-eliminar-lista">Eliminar</button>
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
                <button className="delegated-actualizar-lista">
                  Actualizar
                </button>
              </div>
            )}
          </div>
        ))
      ) : (
        <p>No tienes listas creadas.</p>
      )}
    </div>
  );
};

export default Lista;
