import React, { createContext, useState, useEffect } from "react";
import { obtenerDatos } from "../bibliotecas/funciones_datos.js";

/************ Cear un contexto global
 * Dará acceso a un conjunto de componentes hijos a todo
 * lo contenido en el contexto ya sean variables, estados o funciones.
 *
 * Será necesario hacer tres cosas:
 *    ->  crear el contexto con la función createContext
 *        y dotarlo de contenido a compartir,
 *    ->  crea un proveedor (componente) que se
 *        encargará de compartir la información y
 *    ->  utilizar useContext para usar el contexto
 *        en aquellos componentes que lo necesiten.
 *
 */

/** Se crea el contexto con el método createContext()
 * Es necesario que sea de ámbito global, por lo
 * que debe declararse fuera del componente.
 */

const contextoPlanetas = createContext();

const ProveedorPlanetas = ({ children }) => {
  const url = "https://swapi.py4e.com/api/planets/";
  const planetasInciciales = [];
  const errorInicial = "";
  const planetaInicial = "";
  const [planetas, setPlanetas] = useState(planetasInciciales);
  const [errores, setErrores] = useState(errorInicial);
  const [planeta, setPlaneta] = useState(planetaInicial);

  const traerPlanetas = async () => {
    // --> Inicia un ámbito asíncrono.
    try {
      const datos = await obtenerDatos(url);
      setPlanetas(datos.results);
    } catch (error) {
      setErrores(`Se ha producido un error en la galaxia: ${error.message}`);
    }
  }; // --> Finaliza un ámbito asíncrono.

  // Función para manejar el estado planeta.
  const mostrarInformacion = (evento) => {
    // Se ejecuta sólo si se ha pulsado sobre una etiqueta H4.
    if (evento.target.tagName === "H4") {
      // Se filtra el estado a través de un identificador.
      const planetaFiltrado = planetas.filter((p) => {
        return p.name === evento.target.id;
      });
      // Se cormpueban los datos y se modifica el estado planeta.
      planetaFiltrado.length
        ? setPlaneta(planetaFiltrado[0]) // Asigno la primera posición del array que es un objeto JSON.
        : "No se ha encontrado planeta con ese nombre en la galazia.";
    }
  };

  const feo = "Hola desde un contexto.";
  //¿Qué es lo que va a compartir el contexto? Un obejto de cosas.
  const datosaExportar = {
    feo,
    planetas,
    errores,
    planeta,
    mostrarInformacion,
  };

  useEffect(() => {
    traerPlanetas();
  }, []);

  return (
    /** Se devuelven los hijos del componente dentro del proovedor
     * que se ha creado. Todos ellos tendrán acceso al objeto
     * datosaExportar.
     * */
    <contextoPlanetas.Provider value={datosaExportar}>
      {children}
    </contextoPlanetas.Provider>
  );
};
// Se exporta el componente por defecto (como siempre).
export default ProveedorPlanetas;
// Se exporta el contexto para ser usado por los componentes hijos.
export { contextoPlanetas };
