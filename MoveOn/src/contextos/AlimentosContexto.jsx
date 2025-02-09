// src/contextos/AlimentosContexto.jsx

import React, { createContext, useState, useEffect } from "react";
import { supabaseConexion } from "../bibliotecas/config.js";

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
  const [buscadorDatos, setBuscadorDatos] = useState({ nombre: "" });

  // Edición
  const [alimentoEditando, setAlimentoEditando] = useState(null);
  const [alimentoEditado, setAlimentoEditado] = useState(alimentoInicial);

  // Creación
  const [nuevoAlimento, setNuevoAlimento] = useState(alimentoInicial);

  // Modo Administrador
  const [admin, setAdmin] = useState(false);
  const alternarAdmin = () => {
    setAdmin((prevAdmin) => !prevAdmin);
  };

  /***********************************/
  /***        FUNCIONES CRUD       ***/
  /***********************************/

  // Crear un alimento
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
      setListadoAlimentos((prev) => [...prev, nuevoAlimento]);
      // Mensaje de éxito
      setErrorAlimento("Alimento creado con éxito.");
    } catch (error) {
      setErrorAlimento("Error al crear el alimento: " + error.message);
      // re-lanzamos si quieres manejarlo externamente
      throw error;
    }
  };

  // Leer todos los alimentos
  const readAlimentos = async () => {
    try {
      setErrorAlimento("");
      const { data, error } = await supabaseConexion
        .from("alimentos")
        .select("*");
      if (error) throw error;

      setListadoAlimentos(data);
      // Si quieres mostrar mensaje cada vez que se lea con éxito, descomenta:
      // setErrorAlimento("Alimentos leídos correctamente.");
    } catch (error) {
      setErrorAlimento("Error al leer los alimentos: " + error.message);
    }
  };

  // Actualizar un alimento (por su ID)
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

      // Mensaje de éxito
      setErrorAlimento("Alimento actualizado con éxito.");
    } catch (error) {
      setErrorAlimento("Error al actualizar el alimento: " + error.message);
      throw error;
    }
  };

  // Eliminar un alimento (por su ID)
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

      // Mensaje de éxito
      setErrorAlimento("Alimento eliminado con éxito.");
    } catch (error) {
      setErrorAlimento("Error al eliminar el alimento: " + error.message);
    }
  };

  /*****************************************************************/
  /***   FUNCIONES DE CREACIÓN (validaciones y luego createAlimento)   ***/
  /*****************************************************************/
  const guardarCreacion = async () => {
    setErrorAlimento("");
    // Validaciones de campos obligatorios y valores válidos
    if (!nuevoAlimento.nombre.trim()) {
      setErrorAlimento("El nombre es obligatorio.");
      return;
    }
    if (!nuevoAlimento.imagen_url.trim()) {
      setErrorAlimento("La URL de la imagen es obligatoria.");
      return;
    }
    if (!nuevoAlimento.descripcion.trim()) {
      setErrorAlimento("La descripción es obligatoria.");
      return;
    }
    if (!nuevoAlimento.categoria.trim()) {
      setErrorAlimento("La categoría es obligatoria.");
      return;
    }
    if (nuevoAlimento.peso_kg <= 0) {
      setErrorAlimento("El peso debe ser mayor que 0.");
      return;
    }
    if (nuevoAlimento.precio_euros <= 0) {
      setErrorAlimento("El precio debe ser mayor que 0.");
      return;
    }
    if (!nuevoAlimento.codigo_barras.trim()) {
      setErrorAlimento("El código de barras es obligatorio.");
      return;
    }
    // Validar que los valores nutricionales no sean negativos
    if (
      nuevoAlimento.hidratos < 0 ||
      nuevoAlimento.grasas < 0 ||
      nuevoAlimento.proteinas < 0 ||
      nuevoAlimento.calorias < 0
    ) {
      setErrorAlimento("Los valores nutricionales no pueden ser negativos.");
      return;
    }

    // Si todas las validaciones pasan, se procede a crear el alimento
    try {
      await createAlimento(nuevoAlimento);
      // Se resetea el formulario si todo fue bien
      setNuevoAlimento(alimentoInicial);
    } catch (error) {
      // En caso de error, createAlimento ya hará setErrorAlimento, pero
      // lo dejamos atrapado por si en un futuro quieres manejar algo extra.
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

  // Llamamos a updateAlimento y, si falla, lo atrapa su propio try/catch
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

  const alimentosVisibles = listadoAlimentos
    .filter((alimento) =>
      filtro
        ? alimento.nombre.toLowerCase().startsWith(filtro.toLowerCase())
        : true
    )
    .sort((a, b) => {
      if (!orden) return 0;
      if (orden === "nombre") {
        return a.nombre.localeCompare(b.nombre, "es", { sensitivity: "base" });
      }
      if (orden === "peso") {
        return a.peso_kg - b.peso_kg;
      }
      if (orden === "precio") {
        return a.precio_euros - b.precio_euros;
      }
      return 0;
    });

  /*****************************************************************/
  /***         MANEJO DEL FORMULARIO (CREACIÓN / EDICIÓN)         ***/
  /*****************************************************************/
  const datosFormulario = (e, tipo = "editado") => {
    const { name, value } = e.target;
    if (tipo === "editado") {
      setAlimentoEditado((prev) => ({
        ...prev,
        [name]: value,
      }));
    } else if (tipo === "nuevo") {
      setNuevoAlimento((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  /*****************************************************************/
  /***                 EFECTO AL MONTAR EL COMPONENTE             ***/
  /*****************************************************************/
  useEffect(() => {
    readAlimentos();
  }, []);

  /*****************************************************************/
  /***           DATOS QUE EXPONEMOS DESDE EL CONTEXTO            ***/
  /*****************************************************************/
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

    // Buscador (ejemplo, si lo usas en algún lado)
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
    datosFormulario,

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