import React, { createContext,useState, useContext,useEffect } from "react";
import { supabaseConexion } from "../bibliotecas/config.js";
import { contextoAlimentos } from "../contextos/AlimentosContexto.jsx";
import { contextoAuth } from "../contextos/AuthContexto.jsx"; // Contexto de autenticación

const contextoListas = createContext();

const ListasContexto = ({ children }) => {

    const [nombreLista, setNombreLista] = useState("");
    const [busqueda, setBusqueda] = useState("");
    // Ahora almacenamos objetos con { alimento, quantity }
    const [alimentosSeleccionados, setAlimentosSeleccionados] = useState([]);
    const [error, setError] = useState("");
    const [mensaje, setMensaje] = useState("");
  
    const { listadoAlimentos } = useContext(contextoAlimentos);
    const { usuario } = useContext(contextoAuth);
  
  const createLista = async () => {
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
      const nuevaLista = await supabaseConexion.from("listas").insert({nombre: nombreLista,usuario_id: usuario.id})
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
  // Si el alimento ya existe, incrementa la cantidad; si no, lo agrega con cantidad 1
  const agregarAlimento = (alimento) => {
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
  const sumarAlimento = (alimentoId) => {
    const updated = alimentosSeleccionados.map(item =>
      item.alimento.id === alimentoId
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setAlimentosSeleccionados(updated);
  };

  const restarAlimento = (alimentoId) => {
    const updated = alimentosSeleccionados.map(item =>
      item.alimento.id === alimentoId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setAlimentosSeleccionados(updated);
  };

  const eliminarAlimentoLista = (alimentoId) => {
    setAlimentosSeleccionados(
      alimentosSeleccionados.filter(item => item.alimento.id !== alimentoId)
    );
  };


  const datosContexto = {
    createLista,
    agregarAlimento,
    sumarAlimento,
    restarAlimento,
    eliminarAlimentoLista,
    setNombreLista
  };

  return (
    <contextoAlimentos.Provider value={datosContexto}>
      {children}
    </contextoAlimentos.Provider>
  );
};

export default ListasContexto;
export { contextoListas };