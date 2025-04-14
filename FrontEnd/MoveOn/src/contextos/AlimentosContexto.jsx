// src/contextos/AlimentosContexto.jsx
import React, { createContext, useState, useEffect } from "react";

import { validarCreacionAlimento } from "../bibliotecas/biblioteca.js";

const contextoAlimentos = createContext();

const AlimentosContexto = ({ children }) => {
  /*** VALORES INICIALES ***/
  const cadenaVacia = "";
  const listaInicial = [];

  // Estados generales
  const [listadoAlimentos, setListadoAlimentos] = useState(listaInicial);
  const [errorAlimento, setErrorAlimento] = useState(cadenaVacia);

  // Función para obtener los alimentos desde la API
  const getAlimentos = async () => {
    try {
      setErrorAlimento(cadenaVacia);

      const response = await fetch("http://localhost:8089/api/alimentos", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // Otros headers si es necesario, como tokens de autenticación
        }
      });

      if (!response.ok) {
        throw new Error("Error en la respuesta de la API: " + response.statusText);
      }

      const data = await response.json();
      setListadoAlimentos(data.alimentos); // Establecemos los alimentos obtenidos en el estado

    } catch (error) {
      setErrorAlimento("Error al leer los alimentos: " + error.message); // Manejo de errores
    }
  };

  //! LINEA DIVISORIA, ARRIBA LO BUENO, ABAJO POR COMPROBAR.

  const alimentoInicial = {
    id: null,
    nombre: "",
    hidratos: 0,
    grasas: 0,
    proteinas: 0,
    calorias: 0,
    imagen_url: "",
    categoria: "",
    descripcion: "",
    peso_kg: 0,
    precio_euros: 0,
    codigo_barras: "",
  };

  const buscadorInicial = {
    nombre: ""
  };
  const alimentoEdtandoInicial = null;

  const [alimento, setAlimento] = useState(alimentoInicial);

  // Filtros de búsqueda y orden
  const [filtro, setFiltro] = useState(cadenaVacia);
  const [orden, setOrden] = useState(cadenaVacia);

  // Buscador
  const [buscadorDatos, setBuscadorDatos] = useState(buscadorInicial);

  // Edición
  const [alimentoEditando, setAlimentoEditando] = useState(alimentoEdtandoInicial);
  const [alimentoEditado, setAlimentoEditado] = useState(alimentoInicial);

  // Creación
  const [nuevoAlimento, setNuevoAlimento] = useState(alimentoInicial);


  /***********************************/
  /***        FUNCIONES CRUD       ***/
  /***********************************/
  const createAlimento = async (producto) => {
    try {
      setErrorAlimento(cadenaVacia);
      const nuevoAlimento = { ...producto, id: crypto.randomUUID() };
      const { data, error } = await undefined
        .from("alimentos")
        .insert(nuevoAlimento);
      if (error) throw error;
      setListadoAlimentos((alimentosPrevios) => [...alimentosPrevios, nuevoAlimento]);
      setErrorAlimento("Alimento creado con éxito.");
    } catch (error) {
      setErrorAlimento("Error al crear el alimento: " + error.message);
      throw error;
    }
  };


  const updateAlimento = async (id, productoActualizado) => {
    try {
      setErrorAlimento(cadenaVacia);
      const { data, error } = await undefined
        .from("alimentos")
        .update(productoActualizado)
        .eq("id", id);
      if (error) throw error;
      const actualizado = listadoAlimentos.map((alimentoAntiguo) =>
        alimentoAntiguo.id === id ? productoActualizado : alimentoAntiguo
      );
      setListadoAlimentos(actualizado);
      setAlimento(alimentoInicial);
      setErrorAlimento("Alimento actualizado con éxito.");
    } catch (error) {
      setErrorAlimento("Error al actualizar el alimento: " + error.message);
      throw error;
    }
  };

  const deleteAlimento = async (id) => {
    try {
      setErrorAlimento(cadenaVacia);
      const { data, error } = await undefined
        .from("alimentos")
        .delete()
        .eq("id", id);
      if (error) throw error;
      const borrado = listadoAlimentos.filter((alimento) => alimento.id !== id);
      setListadoAlimentos(borrado);
      setErrorAlimento("Alimento eliminado con éxito.");
    } catch (error) {
      setErrorAlimento("Error al eliminar el alimento: " + error.message);
    }
  };

  const guardarCreacion = async () => {
    setErrorAlimento(cadenaVacia);
    const errorValidacion = validarCreacionAlimento(nuevoAlimento);
    if (errorValidacion) {
      setErrorAlimento(errorValidacion);
      return;
    }
    try {
      await createAlimento(nuevoAlimento);
      setNuevoAlimento(alimentoInicial);
    } catch (error) {
      setErrorAlimento(error);
    }
  };

  /*****************************************************************/
  /***       FUNCIONES DE EDICIÓN (iniciar, cancelar, guardar)    ***/
  /*****************************************************************/
  const iniciarEdicion = (producto) => {
    setAlimentoEditando(producto.id);
    setAlimentoEditado(producto);
  };

  const cancelarEdicion = () => {
    setAlimentoEditando(null);
  };

  const guardarEdicion = async () => {
    if (!alimentoEditando) return;
    try {
      await updateAlimento(alimentoEditando, alimentoEditado);
      setAlimentoEditando(false);
    } catch (error) {
      // El error ya se maneja en setErrorAlimento
    }
  };

  /*****************************************************************/
  /***             FILTRO Y ORDEN DE LOS ALIMENTOS                ***/
  /*****************************************************************/
  const filtrarAlimentos = (textoFiltro) => {
    setFiltro(textoFiltro);
  };



  /*****************************************************************/
  /***         MANEJO DEL FORMULARIO (CREACIÓN / EDICIÓN) SOLO ADMINS  ***/
  /*****************************************************************/


  useEffect(() => {
    getAlimentos();
  }, []);

  // Definición del objeto que se proveerá en el contexto
  const datosContexto = {
    // CRUD
    createAlimento,
    getAlimentos,
    updateAlimento,
    deleteAlimento,

    // Estados principales
    alimento,
    listadoAlimentos,
    errorAlimento,

    // Filtro y orden
    filtrarAlimentos,

    // Buscador
    buscadorDatos,

    // Edición
    alimentoEditado,
    alimentoEditando,
    iniciarEdicion,
    cancelarEdicion,
    guardarEdicion,

    // Creación
    nuevoAlimento,
    guardarCreacion,


  };

  return (
    <contextoAlimentos.Provider value={datosContexto}>
      {children}
    </contextoAlimentos.Provider>
  );
};

export default AlimentosContexto;
export { contextoAlimentos };
