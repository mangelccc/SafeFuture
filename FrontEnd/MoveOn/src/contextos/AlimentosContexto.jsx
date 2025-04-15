// src/contextos/AlimentosContexto.jsx
import React, { createContext, useState, useEffect } from "react";

import { validarCreacionAlimento } from "../bibliotecas/biblioteca.js";

const contextoAlimentos = createContext();

const AlimentosContexto = ({ children }) => {
  /*** VALORES INICIALES ***/
  const cadenaVacia = "";
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
  // Estado del buscador
  const [busqueda, setBusqueda] = useState('');

  const buscarAlimento = (busqueda) =>{
    setBusqueda(busqueda);
  }

  // Estados generales
  const [listadoAlimentos, setListadoAlimentos] = useState(listaInicial);
  const [errorAlimento, setErrorAlimento] = useState(cadenaVacia);
  const [alimentosSeleccionados, setAlimentosSeleccionados] = useState([]);

  // Estados para los filtros
  const [filtros, setFiltros] = useState({
    categoria: '',
    minCarbohidratos: 0,
    maxCarbohidratos: 100,
    minProteinas: 0,
    maxProteinas: 100,
});

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


  /***********************************/
  /***        FUNCIONES CRUD       ***/
  /***********************************/

  const guardarAlimentosEnDietaPersonalizada = async (id) => {
    try {
        // Preparar el array que enviarás. En este ejemplo se envía solo id_alimento y cantidad.
        const payload = {
            id_dieta: id, // El id de la dieta (extraído de useParams)
            alimentos: alimentosSeleccionados.map(({ id_alimento, cantidad }) => ({
                id_alimento,
                cantidad,
            })),
        };

        const response = await fetch("http://localhost:8089/api/alimento-dieta/multiples", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Error al guardar cambios.");
        }

        const data = await response.json();
        // Puedes mostrar un mensaje de éxito, por ejemplo con alert o en un estado propio
        alert("¡Cambios guardados correctamente!");
        console.log(data);
    } catch (error) {
        console.error("Error al guardar cambios:", error);
        alert("Error: " + error.message);
    }
};


  /*****************************************************************/
  /***       FUNCIONES DE EDICIÓN (iniciar, cancelar, guardar)    ***/
  /*****************************************************************/


  /*****************************************************************/
  /***             FILTRO Y ORDEN DE LOS ALIMENTOS                ***/
  /*****************************************************************/

  const seleccionarAlimento = (alimento, idDiet) => {

    setAlimentosSeleccionados((prevSeleccionados) => {
        const existe = prevSeleccionados.find(item => item.id_alimento === alimento.id_alimento);
        if (existe) {
            // Si ya existe, se actualiza la cantidad
            return prevSeleccionados.map(item =>
                item.id_alimento === alimento.id_alimento
                    ? { ...item, cantidad: item.cantidad + 1 }
                    : item
            );
        } else {
            // Si no existe, se agrega como nuevo
            return [...prevSeleccionados, { ...alimento, cantidad: 1, id_dieta: idDiet }];
        }
    });
};

const aumentarCantidad = (idAlimento) => {
  setAlimentosSeleccionados((prev) =>
      prev.map((item) =>
          item.id_alimento === idAlimento
              ? { ...item, cantidad: item.cantidad + 1 }
              : item
      )
  );
};

const disminuirCantidad = (idAlimento) => {
  setAlimentosSeleccionados((prev) =>
      prev
          .map((item) => {
              if (item.id_alimento === idAlimento) {
                  if (item.cantidad === 1) {
                      return null; // marcar para eliminar
                  }
                  return { ...item, cantidad: item.cantidad - 1 };
              }
              return item;
          })
          .filter((item) => item !== null) // eliminar los null
  );
};

const actualizarFiltro = (campo, valor) => {
  setFiltros((prev) => ({...prev, [campo]: valor,}));
};

const alimentosFiltrados = listadoAlimentos.filter((alimento) => {
  return (
      alimento.nombre.toLowerCase().includes(busqueda.toLowerCase()) &&
      (filtros.categoria ? alimento.categoria === filtros.categoria : true) &&
      alimento.carbohidratos >= filtros.minCarbohidratos &&
      alimento.carbohidratos <= filtros.maxCarbohidratos &&
      alimento.proteinas >= filtros.minProteinas &&
      alimento.proteinas <= filtros.maxProteinas
  );
});

const eliminarAlimento = (idAlimento) => {
  setAlimentosSeleccionados((prev) =>
      prev.filter((item) => item.id_alimento !== idAlimento)
  );
};


  /*****************************************************************/
  /***         MANEJO DEL FORMULARIO (CREACIÓN / EDICIÓN) SOLO ADMINS  ***/
  /*****************************************************************/

  //!----------------------------------------------------------------

  useEffect(() => {
    getAlimentos();
  }, []);

  // Definición del objeto que se proveerá en el contexto
  const datosContexto = {
    // CRUD

    getAlimentos,
    listadoAlimentos,
    guardarAlimentosEnDietaPersonalizada,
    filtros,
    busqueda,
    buscarAlimento,
    alimentosFiltrados,
    actualizarFiltro,
    // Estados alimento
    seleccionarAlimento,
    alimentosSeleccionados,
    aumentarCantidad,
    disminuirCantidad,
    eliminarAlimento,
    
    errorAlimento,

  };

  return (
    <contextoAlimentos.Provider value={datosContexto}>
      {children}
    </contextoAlimentos.Provider>
  );
};

export default AlimentosContexto;
export { contextoAlimentos };
