import React, { createContext, useState, useContext, useEffect } from "react";
import { supabaseConexion } from "../bibliotecas/config.js";
import { contextoAlimentos } from "./AlimentosContexto.jsx";
import { contextoAuth } from "./AuthContexto.jsx";

const contextoListas = createContext();

const ListasContexto = ({ children }) => {

  const NOMBRE_LISTA_INICIAL = "";
  const ERROR_INICIAL = "";
  const ALIMENTOS_INICIAL = [];
  const LISTAS_USUARIO_INICIAL = [];
  const LISTA_EN_EDICION_INICIAL = null;
  const ALIMENTOS_EDICION_INICIAL = [];
  const MODO_VISTA_INICIAL = "crear";

  const [nombreLista, setNombreLista] = useState(NOMBRE_LISTA_INICIAL);
  const [error, setError] = useState(ERROR_INICIAL);
  const [alimentosLista, setAlimentosLista] = useState(ALIMENTOS_INICIAL);
  const [listasUsuario, setListasUsuario] = useState(LISTAS_USUARIO_INICIAL);
  const [listaEnEdicion, setListaEnEdicion] = useState(LISTA_EN_EDICION_INICIAL);
  const [alimentosEdicion, setAlimentosEdicion] = useState(ALIMENTOS_EDICION_INICIAL);
  const [modoVista, setModoVista] = useState(MODO_VISTA_INICIAL);

  // Extraer datos de otros contextos
  const { listadoAlimentos } = useContext(contextoAlimentos);
  const { usuario } = useContext(contextoAuth);

  const createLista = async () => {
    setError(ERROR_INICIAL);
    try {
      if (/^\s*$/.test(nombreLista)) {
        throw new Error("El nombre de la lista es obligatorio.");
      }      
      if (alimentosLista.length === 0) {
        throw new Error("Debes seleccionar al menos un alimento.");
      }
      if (!usuario?.id) {
        throw new Error("No se encontró el usuario autenticado.");
      }
      const { data, error} = await supabaseConexion
        .from("listas")
        .insert({ nombre: nombreLista, usuario_id: usuario.id })
        .select();

      if (error) throw error;
      if (!data || data.length === 0) {
        throw new Error("No se pudo crear la lista. No hay datos devueltos.");
      }

      const listaCreada = data[0];

      const insertarProductos = alimentosLista.map((alimento) =>
        supabaseConexion.from("productos_listas").insert({
          lista_id: listaCreada.id,
          alimento_id: alimento.id,
          cantidad: alimento.quantity,
        })
      );

      const resultados = await Promise.all(insertarProductos);
      for (const resultado of resultados) {
        if (resultado.error) throw resultado.error;
      }

      setError("Lista creada exitosamente.");
      setNombreLista(NOMBRE_LISTA_INICIAL);
      setAlimentosLista(ALIMENTOS_INICIAL);
    } catch (error) {
      setError(error.message);
    }
  };

  const agregarAlimento = (alimento) => {
    const i = alimentosLista.findIndex((a) => a.id === alimento.id);
    if (i !== -1) {
      const actualizacion = [...alimentosLista];
      actualizacion[i].quantity += 1;
      setAlimentosLista(actualizacion);
    } else {
      setAlimentosLista([...alimentosLista, { ...alimento, quantity: 1 }]);
    }
  };

  const sumarAlimento = (alimentoId) => {
    setAlimentosLista(
      alimentosLista.map((alimento) =>
        alimento.id === alimentoId
          ? { ...alimento, quantity: alimento.quantity + 1 }
          : alimento
      )
    );
  };

  const restarAlimento = (alimentoId) => {
    setAlimentosLista(
      alimentosLista
        .map((alimento) =>
          alimento.id === alimentoId
            ? { ...alimento, quantity: alimento.quantity - 1 }
            : alimento
        )
        .filter((alimento) => alimento.quantity > 0)
    );
  };

  const nombrarListado = (nombre) => {
    setNombreLista(nombre);
  };

  const actualizarLista = async (listaId) => {
    setError(ERROR_INICIAL);
    try {
      const { error } = await supabaseConexion
        .from("productos_listas")
        .delete()
        .eq("lista_id", listaId);

      if (error) throw error;

      const insertarProductos = alimentosLista.map((alimento) =>
        supabaseConexion.from("productos_listas").insert({
          lista_id: listaId,
          alimento_id: alimento.id,
          cantidad: alimento.quantity,
        })
      );

      const resultados = await Promise.all(insertarProductos);
      for (const resultado of resultados) {
        if (resultado.error) throw resultado.error;
      }

      setError("Lista actualizada exitosamente.");
    } catch (error) {
      setError(error.message);
    }
  };

  const obtenerListasUsuario = async () => {
    setError(ERROR_INICIAL);
    try {
      if (!usuario?.id) {
        throw new Error("No se encontró el usuario autenticado para obtener listas.");
      }

      const { data, error } = await supabaseConexion
        .from("listas")
        .select("*")
        .eq("usuario_id", usuario.id);

      if (error) throw error;
      if (!data) {
        throw new Error("No se obtuvieron listas de Supabase.");
      }
      setListasUsuario(data);
    } catch (error) {
      setError(error.message);
    }
  };

  const editarLista = async (lista) => {
    setError(ERROR_INICIAL);
    try {
      if (!lista || !lista.id) {
        throw new Error("La lista que intentas editar no es válida.");
      }

      const { data, error } = await supabaseConexion
        .from("productos_listas")
        .select("*")
        .eq("lista_id", lista.id);

      if (error) throw error;

      const alimentosConDetalle = data
        .map((alimentoDetalle) => {
          const alimento = listadoAlimentos.find((a) => a.id === alimentoDetalle.alimento_id);
          if (alimento) {
            return { ...alimento, quantity: alimentoDetalle.cantidad };
          }
          return null;
        })
        .filter((alimentoDetalle) => alimentoDetalle !== null);

      setListaEnEdicion(lista);
      setAlimentosEdicion(alimentosConDetalle);
    } catch (err) {
      setError(err.message);
    }
  };

  const sumarAlimentoEdicion = (alimentoId) => {
    setAlimentosEdicion(
      alimentosEdicion.map((alimento) =>
        alimento.id === alimentoId
          ? { ...alimento, quantity: alimento.quantity + 1 }
          : alimento
      )
    );
  };

  const restarAlimentoEdicion = (alimentoId) => {
    setAlimentosEdicion(
      alimentosEdicion
        .map((alimento) =>
          alimento.id === alimentoId
            ? { ...alimento, quantity: alimento.quantity - 1 }
            : alimento
        )
        .filter((alimento) => alimento.quantity > 0)
    );
  };

  const actualizarListaEdicion = async () => {
    setError(ERROR_INICIAL);
    try {
      if (!listaEnEdicion) {
        throw new Error("No hay ninguna lista en edición.");
      }

      const { error } = await supabaseConexion
        .from("productos_listas")
        .delete()
        .eq("lista_id", listaEnEdicion.id);

      if (error) throw error;

      const insertarProductos = alimentosEdicion.map((alimento) =>
        supabaseConexion.from("productos_listas").insert({
          lista_id: listaEnEdicion.id,
          alimento_id: alimento.id,
          cantidad: alimento.quantity,
        })
      );
      const resultados = await Promise.all(insertarProductos);
      for (const resultado of resultados) {
        if (resultado.error) throw resultado.error;
      }

      setError("Lista actualizada exitosamente.");
      setListaEnEdicion(LISTA_EN_EDICION_INICIAL);
      setAlimentosEdicion(ALIMENTOS_EDICION_INICIAL);
      obtenerListasUsuario();
    } catch (error) {
      setError("Error al actualizar la lista: " + error.message);
    }
  };

  const resetearAlimentos = () => {
    setAlimentosLista(ALIMENTOS_INICIAL);
    setListaEnEdicion(LISTA_EN_EDICION_INICIAL);
  };

  const eliminarLista = async (lista) => {
    setError(ERROR_INICIAL);
    try {
      if (!lista || !lista.id) {
        throw new Error("No se recibió una lista válida para eliminar.");
      }

      const { error } = await supabaseConexion
        .from("listas")
        .delete()
        .eq("id", lista.id);

      if (error) throw error;

      setError("Lista eliminada exitosamente.");
      setListaEnEdicion(LISTA_EN_EDICION_INICIAL);
      obtenerListasUsuario();
    } catch (error) {
      setError("Error al eliminar la lista: " + error.message);
    }
  };

  const agregarAlimentoEdicion = (alimento) => {
    const i = alimentosEdicion.findIndex((a) => a.id === alimento.id);
    if (i !== -1) {
      const actualizacion = [...alimentosEdicion];
      actualizacion[i].quantity += 1;
      setAlimentosEdicion(actualizacion);
    } else {
      setAlimentosEdicion([...alimentosEdicion, { ...alimento, quantity: 1 }]);
    }
  };

  const alternarLista = () => {
    if (modoVista === "listas") {
      resetearAlimentos();
    }
    setModoVista((modo) => (modo === "crear" ? "listas" : "crear"));
  };


  const manejarClicUsuarioListas = (e) => {
    // Comprueba que se haya recibido el evento
    if (!e) return;
    const target = e.target;

    if (
      target.classList.contains("ver-lista") ||
      target.classList.contains("eliminar-lista") ||
      target.classList.contains("actualizar-lista")
    ) {
      // Buscar el contenedor padre que tenga el atributo data-id
      const listaContenedor = target.closest(".lista-usuario-resumen");
      if (!listaContenedor) return;
      const listaId = listaContenedor.getAttribute("data-id");

      // Buscar la lista correspondiente en el estado
      const lista = listasUsuario.find(
        (listaUsuario) => listaUsuario.id.toString() === listaId
      );
      if (!lista) return;

      if (target.classList.contains("ver-lista")) {
        editarLista(lista);
      } else if (target.classList.contains("eliminar-lista")) {
        const confirmar = window.confirm(
          `¿Estás seguro de que deseas eliminar la lista "${lista.nombre}"?`
        );
        if (confirmar) {
          eliminarLista(lista);
        }
      } else if (target.classList.contains("actualizar-lista")) {
        actualizarListaEdicion();
      }
    }
  };
  
  const datosContexto = {
    // Creación de listas
    createLista,
    agregarAlimento,
    sumarAlimento,
    restarAlimento,
    nombrarListado,
    actualizarLista,
    nombreLista,
    alimentosLista,

    // Manejo de mensajes
    error,

    // Edición de listas
    obtenerListasUsuario,
    listasUsuario,
    editarLista,
    listaEnEdicion,
    alimentosEdicion,
    sumarAlimentoEdicion,
    restarAlimentoEdicion,
    actualizarListaEdicion,
    eliminarLista,
    agregarAlimentoEdicion,

    // Utilidades
    resetearAlimentos,
    modoVista,
    alternarLista,
    manejarClicUsuarioListas,
  };

  return (
    <contextoListas.Provider value={datosContexto}>
      {children}
    </contextoListas.Provider>
  );
};

export default ListasContexto;
export { contextoListas };
