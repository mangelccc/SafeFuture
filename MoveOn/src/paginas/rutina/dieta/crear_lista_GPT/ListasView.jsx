// ListasView.jsx
import React, { useState, useEffect, useContext } from "react";
import { supabaseConexion } from "../../../../bibliotecas/config.js";
import { contextoAuth } from "../../../../contextos/AuthContexto.jsx";
import ListaDetalle from "./ListaDetalle.jsx";

const ListasView = ({ refrescarSignal }) => {
  const { usuario } = useContext(contextoAuth);
  const [listas, setListas] = useState([]);
  const [error, setError] = useState("");
  const [listaSeleccionada, setListaSeleccionada] = useState(null);

  // Función para obtener las listas del usuario
  const obtenerListas = async () => {
    if (!usuario?.id) return;
    try {
      const { data, error } = await supabaseConexion
        .from("listas")
        .select(`*, productos_listas ( id, alimento_id, cantidad )`)
        .eq("usuario_id", usuario.id);

      if (error) {
        setError(error.message);
      } else {
        setListas(data);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  // Función para eliminar una lista
  const eliminarLista = async (listaId) => {
    if (window.confirm("¿Estás seguro de eliminar la lista?")) {
      try {
        const { error } = await supabaseConexion
          .from("listas")
          .delete()
          .eq("id", listaId);
        if (error) {
          setError(error.message);
        } else {
          obtenerListas();
        }
      } catch (err) {
        setError(err.message);
      }
    }
  };

  useEffect(() => {
    obtenerListas();
  }, [usuario, refrescarSignal]);

  return (
    <div className="listas-view">
      <h2>Mis Listas</h2>
      {error && <p className="error">{error}</p>}
      {listas.length === 0 && <p>No tienes listas creadas.</p>}
      <ul className="lista-de-listas">
        {listas.map((lista) => (
          <li key={lista.id} className="lista-item">
            <div className="lista-header">
              <span>
                <strong>{lista.nombre}</strong> (Creada el{" "}
                {new Date(lista.created_at).toLocaleDateString()})
              </span>
              <div className="acciones-lista">
                <button onClick={() => setListaSeleccionada(lista)}>
                  Editar / Ver Detalles
                </button>
                <button onClick={() => eliminarLista(lista.id)}>
                  Eliminar
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {listaSeleccionada && (
        <div className="detalle-container">
          <button onClick={() => setListaSeleccionada(null)}>Cerrar Detalle</button>
          <ListaDetalle
            lista={listaSeleccionada}
            actualizarListas={obtenerListas} // Para refrescar tras edición
          />
        </div>
      )}
    </div>
  );
};

export default ListasView;
