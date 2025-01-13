import { createClient } from "@supabase/supabase-js";

/**
 * Antes de empezar hay que instalar las biliotecas de Supabase
 * a través del siguiente comando en el terminal:
 *  npm install @supabase/supabase-js
 */

/**
 * Es recomendable utilizar las variables de entorno para
 * los datos de la conexión. Esto se hace a través del fichero
 * .env.local situado en la carpeta raíz del proyecto (no del código, no en /src).
 */

/**
 * NO ES POSIBLE OCULTAR LA INFORMACIÓN AL CLIENTE.
 * Pero sí es posible no propagar información sensible a
 * otros desarrolladores evitando que se suba a GitHub.
 * Para ello se utiliza el fichero .gitignore
 * (comentar si es necesario propagar ese dato).
 */

/**
 * Se crea el componente encargado de gestionar la
 * base de datos con las variables de entorno
 * del fichero .env.local.
 *
 * Hay que recordar que estos valores se obtienen del servidor.
 *
 * Este objeto posee métodos para la gestión de la base de datos
 * como la conexión, el CRUD o la administración de usuarios,
 * entre otros.
 */

 const supabaseConexion = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
); 

export { supabaseConexion };
