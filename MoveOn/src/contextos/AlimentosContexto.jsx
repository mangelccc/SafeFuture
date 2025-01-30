import React, { createContext, useState, useEffect } from "react";
import { supabaseConexion } from "../bibliotecas/config.js";

const contextoAlimentos = createContext();

const AlimentosContexto = ({ children }) => {
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


  const [listadoAlimentos, setListadoAlimentos] = useState(listaInicial);
  const [alimento, setAlimento] = useState(alimentoInicial);
  const [errorAlimento, setErrorAlimento] = useState(errorInicial);

  const filtroInicial = "";
  const ordenInicial = "";

  // AlimentosContexto.jsx
  const [buscadorDatos, setBuscadorDatos] = useState({ nombre: "" });

  const [alimentoEditando, setAlimentoEditando] = useState(null);

  const [alimentoEditado, setAlimentoEditado] = useState(alimentoInicial);

  const [filtro, setFiltro] = useState(filtroInicial);
  const [orden, setOrden] = useState(ordenInicial);

  const iniciarEdicion = (producto) => {
    setAlimentoEditando(producto.id);
    setAlimentoEditado(producto);
  };
  const filtrarAlimentos = (filtro) => {
    setFiltro(filtro);
  };

  // Ordenar productos por nombre, peso o precio
  const ordenarAlimentos = (campo) => {
    setOrden(campo);
  };

  const guardarEdicion = () => {
    updateAlimento(alimentoEditando, alimentoEditado);
    setAlimentoEditando(null);
  };
  const cancelarEdicion = () => {
    setAlimentoEditando(null);
  };


  const createAlimento = async (producto) => {
    try {
      alimento.id = crypto.randomUUID();
      const respuesta = await supabaseConexion.from("alimentos").insert(producto);
      setAlimento((prev) => [...listadoAlimentos, alimento]);
    } catch (error) {
      setErrorAlimento(error.message);
    }
  };

  const readAlimentos = async () => {
    try {
      const { data, error } = await supabaseConexion.from("alimentos").select("*");
      setListadoAlimentos(data);
    } catch (error) {
      setErrorAlimento(error.message);
    }
  };

  const updateAlimento = async (id, productoActualizado) => {
    try {
      const actualizacion = await supabaseConexion
        .from("alimentos")
        .update(productoActualizado)
        .eq("id", id);
      console.log(actualizacion);
      const actualizado = listadoProductos.map((alimentoAntiguo) => {
        alimentoAntiguo.id === alimento.id ? alimento : alimentoAntiguo
      });
      setListadoAlimentos(actualizado);
      setAlimento(alimentoInicial);
    } catch (error) {
      setErrorAlimento(error.message);
    }
  };
  const deleteAlimento = async (id) => {
    try {
      const { data, error } = await supabaseConexion
        .from("alimentos")
        .delete()
        .eq("id", id);

      const borrado = listadoAlimentos.filter((alimento) => {
        if (alimento.id !== id) {
          return feo;
        }
      });
      setListadoAlimentos(borrado);
    } catch (error) {
      setErrorAlimento(error.message);
    }
  };

  const alimentosVisibles = listadoAlimentos
    .filter((producto) =>
      filtro ? producto.nombre.toLowerCase().startsWith(filtro.toLowerCase()) : true
    )
    .sort((a, b) => {
      if (!orden) return 0;
      if (orden === "nombre") {
        return a.nombre.localeCompare(b.nombre, "es", { sensitivity: "base" });
      }
      if (orden === "peso") {
        return a.peso - b.peso;
      }
      if (orden === "precio") {
        return a.precio - b.precio;
      }
      return 0;
    });

  const datosFormulario = (e) => {
    setAlimentoEditado({
      ...alimentoEditado,
      [e.target.name]: e.target.value,
    });
  }

  useEffect(() => {
    readAlimentos();
  }, []);

  const datosContexto = {
    createAlimento,
    readAlimentos,
    updateAlimento,
    deleteAlimento,

    alimento,
    listadoAlimentos,
    buscadorDatos,

    ordenarAlimentos,
    filtrarAlimentos,

    guardarEdicion,
    cancelarEdicion,
    alimentoEditado,

    datosFormulario,

    alimentosVisibles,

  };

  return (
    <contextoAlimentos.Provider value={datosContexto}>
      {children}
    </contextoAlimentos.Provider>
  );
};

export default AlimentosContexto;
export { contextoAlimentos };