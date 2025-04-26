// src/contextos/AlimentosContexto.jsx
import React, { createContext, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { validarCreacionAlimento } from "../bibliotecas/biblioteca.js";
import { API_URL } from "../bibliotecas/config.js";
import Swal from "sweetalert2";

const contextoAlimentos = createContext();

const AlimentosContexto = ({ children }) => {
  /*** VALORES INICIALES ***/
  const cadenaVacia = "";
  const listaInicial = [];
  const falso = false;
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
  const [isSaving, setIsSaving] = useState(falso);

  const navegar = useNavigate();
  const cambioDeRuta = useLocation();

  const buscarAlimento = (busqueda) => {
    setBusqueda(busqueda);
  }

  // Estados generales
  const [listadoAlimentos, setListadoAlimentos] = useState(listaInicial);
  const [errorAlimento, setErrorAlimento] = useState(cadenaVacia);
  const [alimentosSeleccionados, setAlimentosSeleccionados] = useState(listaInicial);
  const [listaAlimentosDieta, setlistaAlimentosDieta] = useState(listaInicial); //! No hace nada

  // Estados para los filtros
  const [filtros, setFiltros] = useState({
    categoria: '',
    minCarbohidratos: 0,
    maxCarbohidratos: 100,
    minProteinas: 0,
    maxProteinas: 100,
    minCalorias: 0,
    maxCalorias: 1000,
    minGrasas: 0,
    maxGrasas: 100,
  });

  // Función para obtener los alimentos desde la API
  const getAlimentos = async () => {
    try {
      setErrorAlimento(cadenaVacia);

      const response = await fetch(`${API_URL}/alimentos`, {
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
    if (!isSaving) {
      try {
        setIsSaving(true);
        console.log("Guardando dieta");
        const payload = {
          id_dieta: id, // El id de la dieta (extraído de useParams)
          alimentos: alimentosSeleccionados.map(({ id_alimento, cantidad }) => ({
            id_alimento,
            cantidad,
          })),
        };

        const response = await fetch(`${API_URL}/alimento-dieta/multiples`, {
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
        Swal.fire({
          title: "¡Cambios guardados correctamente!",
          icon: "success",
          timer: 1500,
          showConfirmButton: false
        });
        console.log(data);
        navegar(`/rutina/dietas/${id}/detalles`); 

      } catch (error) {
        setErrorAlimento("Error al guardar los alimentos en la dieta: " + error.message);
      } finally {
        setIsSaving(falso);
      }
    }
  };

      // Función para obtener los productos de la lista de compra. ListaActual es el ID de la lista. 
      const obtenerAlimentosDieta = async (idDieta) => {
        setAlimentosSeleccionados(listaInicial); // Reiniciar la lista de alimentos seleccionados
        try {
            /* Se realiza la consulta múltiple, teniendo en cuenta que la lista que buscamos coincida con el id pasado por parámetro. */
            const response = await fetch(`${API_URL}/alimento-dieta/${idDieta}`, {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                // Otros headers si es necesario, como tokens de autenticación
              }
            });
            const data = await response.json();
            console.log(data)
            if (!response.ok) {
                throw new Error("Error en la respuesta: " + response.statusText);
            }
            
            setAlimentosSeleccionados(data);
        } catch (error) {
            setErrorAlimento(error.message);
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
    setFiltros((prev) => ({ ...prev, [campo]: valor, }));
  };

  const alimentosFiltrados = listadoAlimentos.filter((alimento) => {
    return (
      alimento.nombre.toLowerCase().includes(busqueda.toLowerCase()) &&
      (filtros.categoria ? alimento.categoria === filtros.categoria : true) &&
      alimento.carbohidratos >= filtros.minCarbohidratos &&
      alimento.carbohidratos <= filtros.maxCarbohidratos &&
      alimento.proteinas >= filtros.minProteinas &&
      alimento.proteinas <= filtros.maxProteinas &&
      alimento.calorias >= filtros.minCalorias &&
      alimento.calorias <= filtros.maxCalorias &&
      alimento.grasas >= filtros.minGrasas &&
      alimento.grasas <= filtros.maxGrasas
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

   /* Para establecer el estado de errores a 0, al navegar por el sitio web. */
   useEffect(() => {
    if (errorAlimento.length) { 
        setErrorAlimento(cadenaVacia);
    }
}, [cambioDeRuta.pathname])

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
    listaAlimentosDieta,
    obtenerAlimentosDieta,

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
