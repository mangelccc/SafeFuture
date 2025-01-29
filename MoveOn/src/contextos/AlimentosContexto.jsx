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
    // Se intenta borrar el elemento.
    try {
      const { data, error } = await supabaseConexion
        .from("Feos")
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
  };

  return (
    <contextoAlimentos.Provider value={datosContexto}>
      {children}
    </contextoAlimentos.Provider>
  );
};

export default AlimentosContexto;
export { contextoAlimentos };