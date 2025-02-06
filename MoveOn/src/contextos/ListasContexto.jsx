// src/contextos/ListasContexto.jsx
import React, { createContext, useState, useContext } from "react";
import { supabaseConexion } from "../bibliotecas/config.js";
import { contextoAlimentos } from "./AlimentosContexto.jsx";
import { contextoAuth } from "./AuthContexto.jsx";

const contextoListas = createContext();

const ListasContexto = ({ children }) => {
  /*** Estados para CREAR LISTA ***/
  const nombreListaInicial = "";
  const errorListaInicial = "";
  const alimentosInicial = [];

  const [nombreLista, setNombreLista] = useState(nombreListaInicial);
  const [alimentosLista, setAlimentosLista] = useState(alimentosInicial);
  const [error, setError] = useState(errorListaInicial);

  /*** Estados para EDITAR LISTAS (UsuarioListas) ***/
  const [listasUsuario, setListasUsuario] = useState([]);
  const [listaEnEdicion, setListaEnEdicion] = useState(null);
  const [alimentosEdicion, setAlimentosEdicion] = useState([]);

  // Extraer datos de otros contextos
  const { listadoAlimentos } = useContext(contextoAlimentos);
  const { usuario } = useContext(contextoAuth);

  /**************************/
  /*** FUNCIONES CREAR LISTA ***/
  /**************************/

  // Función para crear una lista en Supabase
  const createLista = async () => {
    if (!nombreLista.trim()) {
      setError("El nombre de la lista es obligatorio.");
      return;
    }
    if (alimentosLista.length === 0) {
      setError("Debes seleccionar al menos un alimento.");
      return;
    }
    if (!usuario?.id) {
      setError("No se encontró el usuario autenticado.");
      return;
    }
    setError(errorListaInicial);

    try {
      // Inserta la nueva lista en la tabla "listas"
      const { data, error: errorLista } = await supabaseConexion
        .from("listas")
        .insert({ nombre: nombreLista, usuario_id: usuario.id })
        .select();

      if (errorLista) throw errorLista;

      const listaCreada = data[0];

      // Inserta cada alimento seleccionado en "productos_listas"
      await Promise.all(
        alimentosLista.map((alimento) =>
          supabaseConexion.from("productos_listas").insert({
            lista_id: listaCreada.id,
            alimento_id: alimento.id,
            cantidad: alimento.quantity,
          })
        )
      );

      setError("Lista creada exitosamente.");
      // Reiniciar estados
      setNombreLista(nombreListaInicial);
      setAlimentosLista(alimentosInicial);
    } catch (error) {
      setError(error.message);
    }
  };

  // Función para agregar un alimento a la lista (estructura para creación)
  const agregarAlimento = (alimento) => {
    const i = alimentosLista.findIndex(
      (alimentoLista) => alimentoLista.id === alimento.id
    );
    if (i !== -1) {
      const actualizacion = [...alimentosLista];
      actualizacion[i].quantity += 1;
      setAlimentosLista(actualizacion);
    } else {
      setAlimentosLista([...alimentosLista, { ...alimento, quantity: 1 }]);
    }
  };

  // Función para incrementar la cantidad de un alimento en la creación
  const sumarAlimento = (alimentoId) => {
    setAlimentosLista(
      alimentosLista.map((alimentoLista) =>
        alimentoLista.id === alimentoId
          ? { ...alimentoLista, quantity: alimentoLista.quantity + 1 }
          : alimentoLista
      )
    );
  };

  // Función para decrementar la cantidad o eliminar el alimento en la creación
  const restarAlimento = (alimentoId) => {
    setAlimentosLista(
      alimentosLista
        .map((alimentoLista) =>
          alimentoLista.id === alimentoId
            ? { ...alimentoLista, quantity: alimentoLista.quantity - 1 }
            : alimentoLista
        )
        .filter((alimentoLista) => alimentoLista.quantity > 0)
    );
  };

  // Función para asignar el nombre de la lista en la creación
  const nombrarListado = (nombre) => {
    setNombreLista(nombre);
  };

  // Función para actualizar (guardar) los cambios en una lista creada previamente
  // (usando el estado "alimentosLista")
  const actualizarLista = async (listaId) => {
    try {
      // Eliminamos los registros existentes de productos_listas para esta lista
      const { error: errorDelete } = await supabaseConexion
        .from("productos_listas")
        .delete()
        .eq("lista_id", listaId);
      if (errorDelete) {
        setError(errorDelete.message);
        return;
      }
      // Insertamos cada alimento según el estado actual de "alimentosLista"
      await Promise.all(
        alimentosLista.map((alimento) =>
          supabaseConexion.from("productos_listas").insert({
            lista_id: listaId,
            alimento_id: alimento.id,
            cantidad: alimento.quantity,
          })
        )
      );
      setError("Lista actualizada exitosamente.");
    } catch (error) {
      setError(error.message);
    }
  };

  /*******************************/
  /*** FUNCIONES EDITAR LISTAS ***/
  /*******************************/

  // Función para obtener las listas del usuario
  const obtenerListasUsuario = async () => {
    if (!usuario?.id) return;
    const { data, error } = await supabaseConexion
      .from("listas")
      .select("*")
      .eq("usuario_id", usuario.id);
    if (error) {
      console.error("Error al obtener las listas:", error.message);
      return;
    }
    setListasUsuario(data);
  };

  // Función para cargar la información de una lista (alimentos) para editarla
  const editarLista = async (lista) => {
    const { data, error } = await supabaseConexion
      .from("productos_listas")
      .select("*")
      .eq("lista_id", lista.id);
    if (error) {
      console.error("Error al cargar la lista:", error.message);
      return;
    }
    // Se completa la información de cada alimento buscando en el listadoAlimentos
    const alimentosConDetalle = data
      .map((item) => {
        const alimento = listadoAlimentos.find(
          (a) => a.id === item.alimento_id
        );
        if (alimento) {
          return { ...alimento, quantity: item.cantidad };
        }
        return null;
      })
      .filter((item) => item !== null);

    setListaEnEdicion(lista);
    setAlimentosEdicion(alimentosConDetalle);
  };

  // Función para incrementar la cantidad de un alimento en la edición
  const sumarAlimentoEdicion = (alimentoId) => {
    setAlimentosEdicion(
      alimentosEdicion.map((alimento) =>
        alimento.id === alimentoId
          ? { ...alimento, quantity: alimento.quantity + 1 }
          : alimento
      )
    );
  };

  // Función para decrementar la cantidad o eliminar el alimento en la edición
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

  // Función para actualizar la lista en edición en Supabase
  const actualizarListaEdicion = async () => {
    if (!listaEnEdicion) return;
    try {
      // Eliminamos los registros existentes para esta lista
      const { error: errorDelete } = await supabaseConexion
        .from("productos_listas")
        .delete()
        .eq("lista_id", listaEnEdicion.id);
      if (errorDelete) throw errorDelete;
      // Insertamos cada alimento con la cantidad actualizada
      await Promise.all(
        alimentosEdicion.map((alimento) =>
          supabaseConexion.from("productos_listas").insert({
            lista_id: listaEnEdicion.id,
            alimento_id: alimento.id,
            cantidad: alimento.quantity,
          })
        )
      );
      alert("Lista actualizada exitosamente.");
      // Limpiamos el estado de edición
      setListaEnEdicion(false);
      setAlimentosEdicion([]);
      // Actualizamos las listas del usuario
      obtenerListasUsuario();
    } catch (error) {
      console.error("Error al actualizar la lista:", error.message);
      alert("Error al actualizar la lista: " + error.message);
    }
  };

  const resetearAlimentos = () => {
    setAlimentosLista(alimentosInicial);
    setListaEnEdicion(false);
  }

  /*******************************/
  /*** FUNCIÓN ELIMINAR LISTA ***/
  /*******************************/
  const eliminarLista = async (lista) => {
    try {
      // Se elimina la lista en la tabla "listas"
      const { error } = await supabaseConexion
        .from("listas")
        .delete()
        .eq("id", lista.id);
      if (error) throw error;
      alert("Lista eliminada exitosamente.");
      setListaEnEdicion(false);
      // Se refrescan las listas del usuario
      obtenerListasUsuario();
    } catch (error) {
      console.error("Error al eliminar la lista:", error.message);
      alert("Error al eliminar la lista: " + error.message);
    }
  };

  // Función para agregar un alimento a la lista en edición
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


  /*******************************/
  /*** DATOS DEL CONTEXTO ***/
  /*******************************/
  const datosContexto = {
    // Funciones y estados para creación de listas
    createLista,
    agregarAlimento,
    sumarAlimento,
    restarAlimento,
    nombrarListado,
    nombreLista,
    alimentosLista,
    actualizarLista,
    error,
    // Funciones y estados para edición de listas
    obtenerListasUsuario,
    listasUsuario,
    editarLista,
    listaEnEdicion,
    alimentosEdicion,
    sumarAlimentoEdicion,
    restarAlimentoEdicion,
    actualizarListaEdicion,
    eliminarLista,

    //
    agregarAlimentoEdicion,
    resetearAlimentos
  };

  return (
    <contextoListas.Provider value={datosContexto}>
      {children}
    </contextoListas.Provider>
  );
};

export default ListasContexto;
export { contextoListas };
