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

  const [isAscNombre, setIsAscNombre] = useState(true);
  const [isAscPrecio, setIsAscPrecio] = useState(true);
  const [isAscPeso, setIsAscPeso] = useState(true);
  const [isAscCategoria, setIsAscCategoria] = useState(true);

  // AlimentosContexto.jsx
const [buscadorDatos, setBuscadorDatos] = useState({ nombre: "" });


  const createAlimento = async (producto) => {
    try {
      alimento.id = crypto.randomUUID();
      const respuesta  = await supabaseConexion.from("alimentos").insert(producto);
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
  
  const ordenarPorNombre = () => {
    const ordenado = [...listadoAlimentos].sort((a, b) =>
      isAscNombre
        ? a.nombre.localeCompare(b.nombre)
        : b.nombre.localeCompare(a.nombre)
    );
    setIsAscNombre(!isAscNombre);
    setListadoAlimentos(ordenado);
  };

  const ordenarPorPrecio = () => {
    const ordenado = [...listadoAlimentos].sort((a, b) =>
      isAscPrecio
        ? a.precio_euros - b.precio_euros 
        : b.precio_euros - a.precio_euros 
    );
    setIsAscPrecio(!isAscPrecio);
    setListadoAlimentos(ordenado);
  };

  const ordenarPorPeso = () => {
    const ordenado = [...listadoAlimentos].sort((a, b) =>
      isAscPeso
        ? a.peso_kg - b.peso_kg 
        : b.peso_kg - a.peso_kg 
    );
    setIsAscPeso(!isAscPeso);
    setListadoAlimentos(ordenado);
  };

  const ordenarPorCategoria = () => {
    const ordenado = [...listadoAlimentos].sort((a, b) =>
      isAscCategoria
        ? a.categoria.localeCompare(b.categoria)
        : b.categoria.localeCompare(a.categoria)
    );
    setIsAscCategoria(!isAscCategoria);
    setListadoAlimentos(ordenado);
  };

  const datosFormulario = (e) => {
    setBuscadorDatos({
      ...buscadorDatos,
      [e.target.name]: e.target.value,
  });
  }
  const filtrarAlimentos = () => {
    if (!buscadorDatos.nombre) return listadoAlimentos; // Si no hay búsqueda, devolver todos los alimentos
  
    return listadoAlimentos.filter((alimento) =>
      alimento.nombre.toLowerCase().includes(buscadorDatos.nombre.toLowerCase())
    );
  };
  
  

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

    ordenarPorNombre,
    ordenarPorPeso,
    ordenarPorPrecio,
    ordenarPorCategoria,
    datosFormulario,

  };

  return (
    <contextoAlimentos.Provider value={datosContexto}>
      {children}
    </contextoAlimentos.Provider>
  );
};

export default AlimentosContexto;
export { contextoAlimentos };