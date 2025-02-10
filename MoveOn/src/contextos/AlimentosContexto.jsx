import React, { createContext, useState, useEffect } from "react";
import { supabaseConexion } from "../bibliotecas/config.js";
import {validarCreacionAlimento,obtenerAlimentosVisibles} from "../bibliotecas/biblioteca.js"

const contextoAlimentos = createContext();

const AlimentosContexto = ({ children }) => {
  /*** VALORES INICIALES ***/
  const errorInicial = "";
  const listaInicial = [];
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
    nombre:""
  };
  const alimentoEdtandoInicial=null;
  const adminInicial = false;
  // Estados generales
  const [listadoAlimentos, setListadoAlimentos] = useState(listaInicial);
  const [alimento, setAlimento] = useState(alimentoInicial);
  const [errorAlimento, setErrorAlimento] = useState(errorInicial);

  // Filtros de búsqueda y orden
  const filtroInicial = "";
  const ordenInicial = "";
  const [filtro, setFiltro] = useState(filtroInicial);
  const [orden, setOrden] = useState(ordenInicial);

  // Buscador
  const [buscadorDatos, setBuscadorDatos] = useState(buscadorInicial);

  // Edición
  const [alimentoEditando, setAlimentoEditando] = useState(alimentoEdtandoInicial);
  const [alimentoEditado, setAlimentoEditado] = useState(alimentoInicial);

  // Creación
  const [nuevoAlimento, setNuevoAlimento] = useState(alimentoInicial);

  // Modo Administrador
  const [admin, setAdmin] = useState(adminInicial);
  const alternarAdmin = () => {
    setAdmin((admin) => !admin);
  };

  /***********************************/
  /***        FUNCIONES CRUD       ***/
  /***********************************/

  const createAlimento = async (producto) => {
    try {
      // Limpiamos el mensaje antes de iniciar
      setErrorAlimento("");

      // Generamos un ID único manualmente (puedes usar supabase si quieres que lo genere)
      const nuevoAlimento = { ...producto, id: crypto.randomUUID() };

      // Insertamos en Supabase
      const { data, error } = await supabaseConexion
        .from("alimentos")
        .insert(nuevoAlimento);

      // Si hay error en la operación
      if (error) throw error;

      // Actualizamos el listado local
      setListadoAlimentos((alimento) => [...alimento, nuevoAlimento]);
      setErrorAlimento("Alimento creado con éxito.");
    } catch (error) {
      setErrorAlimento("Error al crear el alimento: " + error.message);
      throw error;
    }
  };

  const readAlimentos = async () => {
    try {
      setErrorAlimento("");
      const { data, error } = await supabaseConexion
        .from("alimentos")
        .select("*");
      if (error) throw error;

      setListadoAlimentos(data);
    } catch (error) {
      setErrorAlimento("Error al leer los alimentos: " + error.message);
    }
  };

  const updateAlimento = async (id, productoActualizado) => {
    try {
      setErrorAlimento("");
      const { data, error } = await supabaseConexion
        .from("alimentos")
        .update(productoActualizado)
        .eq("id", id);

      if (error) throw error;

      // Actualizamos el listado local
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
      setErrorAlimento("");
      const { data, error } = await supabaseConexion
        .from("alimentos")
        .delete()
        .eq("id", id);

      if (error) throw error;

      // Quitamos el alimento del estado local
      const borrado = listadoAlimentos.filter(
        (alimento) => alimento.id !== id
      );
      setListadoAlimentos(borrado);

      setErrorAlimento("Alimento eliminado con éxito.");
    } catch (error) {
      setErrorAlimento("Error al eliminar el alimento: " + error.message);
    }
  };


  const guardarCreacion = async () => {
    setErrorAlimento("");
  
    // Ejecutar la validación
    const error = validarCreacionAlimento(nuevoAlimento);
    if (error) {
      setErrorAlimento(error);
      return;
    }
  
    try {
      await createAlimento(nuevoAlimento);
      // Se resetea el formulario.
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
      // Si no hay error, finalizamos la edición
      setAlimentoEditando(false);
    } catch (error) {
      // Si hay error, ya está en setErrorAlimento
    }
  };

  /*****************************************************************/
  /***             FILTRO Y ORDEN DE LOS ALIMENTOS                ***/
  /*****************************************************************/
  const filtrarAlimentos = (textoFiltro) => {
    setFiltro(textoFiltro);
  };

  const ordenarAlimentos = (campo) => {
    setOrden(campo);
  };

  const alimentosVisibles = obtenerAlimentosVisibles(listadoAlimentos, filtro, orden);

  /*****************************************************************/
  /***         MANEJO DEL FORMULARIO (CREACIÓN / EDICIÓN)         ***/
  /*****************************************************************/
  const actualizarAlimentoEditado = (e) => {
    const { name, value } = e.target;
    setAlimentoEditado((AlimentoEditado) => ({
      ...AlimentoEditado,
      [name]: value,
    }));
  };
  const actualizarNuevoAlimento = (e) => {
    const { name, value } = e.target;
    setNuevoAlimento((nuevoAlimento) => ({
      ...nuevoAlimento,
      [name]: value,
    }));
  };
  
  useEffect(() => {
    readAlimentos();
  }, []);


  const datosContexto = {
    // CRUD
    createAlimento,
    readAlimentos,
    updateAlimento,
    deleteAlimento,

    // Estados principales
    alimento,
    listadoAlimentos,
    errorAlimento,

    // Filtro y orden
    filtrarAlimentos,
    ordenarAlimentos,

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

    // Formulario
    actualizarAlimentoEditado,
    actualizarNuevoAlimento,

    // Vista final (filtrada y ordenada)
    alimentosVisibles,

    // Modo admin
    admin,
    alternarAdmin,
  };

  return (
    <contextoAlimentos.Provider value={datosContexto}>
      {children}
    </contextoAlimentos.Provider>
  );
};

export default AlimentosContexto;
export { contextoAlimentos };