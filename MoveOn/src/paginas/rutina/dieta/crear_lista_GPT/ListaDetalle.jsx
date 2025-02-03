// ListaDetalle.jsx
import React, { useState, useEffect, useContext } from "react";
import { supabaseConexion } from "../../../../bibliotecas/config.js";
import { contextoAlimentos } from "../../../../contextos/AlimentosContexto.jsx";

const ListaDetalle = ({ lista, actualizarListas }) => {
  const { listadoAlimentos } = useContext(contextoAlimentos);
  const [detalle, setDetalle] = useState([]); // Registros de productos_listas
  const [busqueda, setBusqueda] = useState("");
  const [error, setError] = useState("");
  const [mensaje, setMensaje] = useState("");

  // Función para obtener el detalle de la lista
  const obtenerDetalle = async () => {
    try {
      const { data, error } = await supabaseConexion
        .from("productos_listas")
        .select("*")
        .eq("lista_id", lista.id);
      if (error) {
        setError(error.message);
        return;
      }
      const detalleConAlimento = data.map((registro) => {
        const alimento = listadoAlimentos.find((a) => a.id === registro.alimento_id);
        return { ...registro, alimento };
      });
      setDetalle(detalleConAlimento);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    obtenerDetalle();
  }, [lista, listadoAlimentos]);

  // Función para quitar un alimento de la lista
  const quitarAlimento = async (productoListaId) => {
    try {
      const { error } = await supabaseConexion
        .from("productos_listas")
        .delete()
        .eq("id", productoListaId);
      if (error) {
        setError(error.message);
      } else {
        setMensaje("Alimento removido.");
        obtenerDetalle();
        actualizarListas();
      }
    } catch (err) {
      setError(err.message);
    }
  };

  // Función para actualizar la cantidad de un alimento
  const actualizarCantidad = async (productoListaId, nuevaCantidad) => {
    if (nuevaCantidad < 1) return;
    try {
      const { error } = await supabaseConexion
        .from("productos_listas")
        .update({ cantidad: nuevaCantidad })
        .eq("id", productoListaId);
      if (error) {
        setError(error.message);
      } else {
        setMensaje("Cantidad actualizada.");
        obtenerDetalle();
        actualizarListas();
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const handleIncrement = (item) => {
    actualizarCantidad(item.id, item.cantidad + 1);
  };

  const handleDecrement = (item) => {
    if (item.cantidad > 1) {
      actualizarCantidad(item.id, item.cantidad - 1);
    }
  };

  // Alimentos disponibles para agregar (los que aún no están en la lista)
  const alimentosParaAgregar = listadoAlimentos
    .filter((alimento) => !detalle.some((d) => d.alimento_id === alimento.id))
    .filter((alimento) => alimento.nombre.toLowerCase().includes(busqueda.toLowerCase()));

  const agregarAlimento = async (alimento) => {
    try {
      const { error } = await supabaseConexion
        .from("productos_listas")
        .insert({
          lista_id: lista.id,
          alimento_id: alimento.id,
          cantidad: 1,
        });
      if (error) {
        setError(error.message);
      } else {
        setMensaje("Alimento agregado.");
        obtenerDetalle();
        actualizarListas();
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="lista-detalle">
      <h3>Detalle de la lista: {lista.nombre}</h3>
      {error && <p className="error">{error}</p>}
      {mensaje && <p className="exito">{mensaje}</p>}

      <h4>Alimentos en la lista:</h4>
      {detalle.length === 0 ? (
        <p>No hay alimentos en esta lista.</p>
      ) : (
        <ul className="detalle-lista">
          {detalle.map((item) => (
            <li key={item.id}>
              {item.alimento ? item.alimento.nombre : "Alimento no encontrado"} - Cantidad: {item.cantidad}{" "}
              <button onClick={() => handleIncrement(item)}>+</button>
              <button onClick={() => handleDecrement(item)}>-</button>
              <button onClick={() => quitarAlimento(item.id)}>Quitar</button>
            </li>
          ))}
        </ul>
      )}

      <hr />

      <h4>Agregar Alimento:</h4>
      <input
        type="text"
        placeholder="Buscar alimento..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
      <ul className="lista-agregar">
        {alimentosParaAgregar.map((alimento) => (
          <li key={alimento.id}>
            {alimento.nombre}{" "}
            <button onClick={() => agregarAlimento(alimento)}>Agregar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaDetalle;
