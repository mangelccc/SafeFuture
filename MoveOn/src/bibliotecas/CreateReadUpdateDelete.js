import { supabaseConexion } from "../config/supabase.js";

export const obtenerProductos = async () => {
  const { data, error } = await supabaseConexion.from("productos").select("*");
  if (error) throw new Error(error.message);
  return data;
};

export const insertarProducto = async (producto) => {
  const { data, error } = await supabaseConexion.from("productos").insert(producto);
  if (error) throw new Error(error.message);
  return data;
};

export const actualizarProducto = async (id, productoActualizado) => {
  const { data, error } = await supabaseConexion
    .from("productos")
    .update(productoActualizado)
    .eq("id", id);
  if (error) throw new Error(error.message);
  return data;
};

export const eliminarProducto = async (id) => {
  const { data, error } = await supabaseConexion.from("productos").delete().eq("id", id);
  if (error) throw new Error(error.message);
  return data;
};
