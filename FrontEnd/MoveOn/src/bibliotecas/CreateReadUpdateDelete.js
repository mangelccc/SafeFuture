import { supabaseConexion } from "./config.js";

const obtenerAlimento = async () => {
  const { data, error } = await supabaseConexion.from("alimentos").select("*");
  if (error) throw new Error(error.message);
  return data;
};

const insertarAlimento = async (producto) => {
  const { data, error } = await supabaseConexion.from("alimentos").insert(producto);
  if (error) throw new Error(error.message);
  return data;
};

const actualizarAlimento = async (id, productoActualizado) => {
  const { data, error } = await supabaseConexion
    .from("alimentos")
    .update(productoActualizado)
    .eq("id", id);
  if (error) throw new Error(error.message);
  return data;
};

const eliminarAlimento= async (id) => {
  const { data, error } = await supabaseConexion.from("alimentos").delete().eq("id", id);
  if (error) throw new Error(error.message);
  return data;
};

export { obtenerAlimento, insertarAlimento, actualizarAlimento, eliminarAlimento };
