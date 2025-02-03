// CrearLista.jsx
import React, { useState, useContext } from "react";
import { supabaseConexion } from "../../../../bibliotecas/config.js";
import { contextoAlimentos } from "../../../../contextos/AlimentosContexto.jsx";
import { contextoAuth } from "../../../../contextos/AuthContexto.jsx"; // Contexto de autenticación
import "./CrearLista.css";

const CrearLista = ({ refrescarListas }) => {
  const [nombreLista, setNombreLista] = useState("");
  const [busqueda, setBusqueda] = useState("");
  // Ahora almacenamos objetos con { alimento, quantity }
  const [alimentosSeleccionados, setAlimentosSeleccionados] = useState([]);
  const [error, setError] = useState("");
  const [mensaje, setMensaje] = useState("");

  const { listadoAlimentos } = useContext(contextoAlimentos);
  const { usuario } = useContext(contextoAuth);

  // Filtra los alimentos según la búsqueda
  const alimentosFiltrados = listadoAlimentos.filter((alimento) =>
    alimento.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  // Si el alimento ya existe, incrementa la cantidad; si no, lo agrega con cantidad 1
  const handleAgregarAlimento = (alimento) => {
    const index = alimentosSeleccionados.findIndex(
      (item) => item.alimento.id === alimento.id
    );
    if (index !== -1) {
      const updated = [...alimentosSeleccionados];
      updated[index].quantity += 1;
      setAlimentosSeleccionados(updated);
    } else {
      setAlimentosSeleccionados([...alimentosSeleccionados, { alimento, quantity: 1 }]);
    }
  };

  // Funciones para incrementar o decrementar manualmente la cantidad
  const handleIncrement = (alimentoId) => {
    const updated = alimentosSeleccionados.map(item =>
      item.alimento.id === alimentoId
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setAlimentosSeleccionados(updated);
  };

  const handleDecrement = (alimentoId) => {
    const updated = alimentosSeleccionados.map(item =>
      item.alimento.id === alimentoId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setAlimentosSeleccionados(updated);
  };

  const handleRemover = (alimentoId) => {
    setAlimentosSeleccionados(
      alimentosSeleccionados.filter(item => item.alimento.id !== alimentoId)
    );
  };

  // Función para crear la lista y sus relaciones en la tabla intermedia
  const crearLista = async () => {
    if (!nombreLista.trim()) {
      setError("El nombre de la lista es obligatorio.");
      return;
    }
    if (alimentosSeleccionados.length === 0) {
      setError("Debes seleccionar al menos un alimento.");
      return;
    }
    if (!usuario?.id) {
      setError("No se encontró el usuario autenticado.");
      return;
    }
    setError("");

    try {
      // 1. Insertar la nueva lista en la tabla "listas"
      const { data: listaData, error: errorLista } = await supabaseConexion
        .from("listas")
        .insert({
          nombre: nombreLista,
          usuario_id: usuario.id
        })
        .select();

      if (errorLista) {
        setError(errorLista.message);
        return;
      }
      const listaCreada = listaData[0];

      // 2. Insertar cada alimento seleccionado en la tabla intermedia "productos_listas"
      const inserciones = alimentosSeleccionados.map(item => {
        return supabaseConexion.from("productos_listas").insert({
          lista_id: listaCreada.id,
          alimento_id: item.alimento.id,
          cantidad: item.quantity,
        });
      });
      await Promise.all(inserciones);

      setMensaje("Lista creada exitosamente.");
      setNombreLista("");
      setAlimentosSeleccionados([]);
      setBusqueda("");
      if (refrescarListas) refrescarListas();
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="crear-lista">
      <h2>Crear Nueva Lista</h2>
      {error && <p className="error">{error}</p>}
      {mensaje && <p className="exito">{mensaje}</p>}
      <div className="campo">
        <label>Nombre de la lista:</label>
        <input
          type="text"
          placeholder="Ingresa el nombre de la lista"
          value={nombreLista}
          onChange={(e) => setNombreLista(e.target.value)}
        />
      </div>

      <div className="buscador">
        <h3>Buscar Alimentos</h3>
        <input
          type="text"
          placeholder="Buscar..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
        <ul className="lista-busqueda">
          {alimentosFiltrados.map((alimento) => (
            <li key={alimento.id}>
              {alimento.nombre}{" "}
              <button onClick={() => handleAgregarAlimento(alimento)}>Agregar</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="seleccionados">
        <h3>Alimentos Seleccionados</h3>
        <ul>
          {alimentosSeleccionados.map((item) => (
            <li key={item.alimento.id}>
              {item.alimento.nombre} - Cantidad: {item.quantity}{" "}
              <button onClick={() => handleIncrement(item.alimento.id)}>+</button>
              <button onClick={() => handleDecrement(item.alimento.id)}>-</button>
              <button onClick={() => handleRemover(item.alimento.id)}>Remover</button>
            </li>
          ))}
        </ul>
      </div>

      <button onClick={crearLista} className="crear-btn">
        Crear Lista
      </button>
    </div>
  );
};

export default CrearLista;
