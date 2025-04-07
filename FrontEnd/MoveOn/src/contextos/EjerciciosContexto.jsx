import React, { createContext, useState, useEffect } from 'react';
import { validarDatoEjercicio } from '../bibliotecas/biblioteca.js';

const ContextoEjercicios = createContext();

const EjerciciosContexto = ({ children }) => {
  // Variables iniciales
  const ejerciciosIniciales = [];
  const ejercicioInicial = {
    nombre: '',
    descripcion: '',
    imagen_url: '',
    video_url: '',
    grupo_muscular: '',
  };
  const errorEjercicioInicial = "";

  // Estados usando las variables iniciales
  const [ejercicio, setEjercicio] = useState(ejercicioInicial);
  const [ejercicios, setEjercicios] = useState(ejerciciosIniciales);
  const [ejerciciosFiltrados, setEjerciciosFiltrados] = useState(ejerciciosIniciales);
  const [errorEjercicio, setErrorEjercicio] = useState(errorEjercicioInicial);

  const apiUrl = 'http://localhost:8089/api/ejercicios';
  const readEjercicios = () => {
    return fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // Se asume que la respuesta tiene la propiedad "ejercicios"
        setEjercicios(data.ejercicios);
        setEjerciciosFiltrados(data.ejercicios)
      })
      .catch(error => {
        console.error(`Se ha producido un error: ${error.message}`);
        setErrorEjercicio(`Se ha producido un error: ${error.message}`);
      });
  }

  // Obtención de datos al montar el componente
  useEffect(() => {
    readEjercicios(apiUrl);
  }, [apiUrl]);

  // Función para crear un nuevo ejercicio (POST)
  const createEjercicio = (nuevoEjercicio) => {
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(nuevoEjercicio)
    })
      .then(response => response.json())
      .then(data => {
        // Se asume que la respuesta devuelve el ejercicio creado en la propiedad "ejercicio"
        const ejercicioCreado = data.ejercicio || data;
        setEjercicios([...ejercicios, ejercicioCreado]);
        // Reseteamos el estado del ejercicio actual a su estado inicial
        setEjercicio(ejercicioInicial);
      })
      .catch(error => {
        setErrorEjercicio(`Error al crear el ejercicio: ${error.message}`);
      });
  };

  // Función para actualizar un ejercicio (PUT)
  const updateEjercicio = (id, updatedData) => {
    fetch(`${apiUrl}/${id}`, {
      method: 'PUT', // o 'PATCH' según la implementación de la API.
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedData)
    })
      .then(response => response.json())
      .then(data => {
        // Se asume que la respuesta devuelve el ejercicio actualizado en la propiedad "ejercicio"
        const ejercicioActualizado = data.ejercicio || data;
        setEjercicios(
          ejercicios.map(ejercicio => ejercicio.id_ejercicio === id ? ejercicioActualizado : ejercicio)
        );
      })
      .catch(error => {
        setErrorEjercicio(`Error al actualizar el ejercicio: ${error.message}`);
      });
  };

  // Función para eliminar un ejercicio (DELETE)
  const deleteEjercicio = (id) => {
    fetch(`${apiUrl}/${id}`, {method: 'DELETE'})
      .then(response => {
        // Se actualiza el estado filtrando el ejercicio eliminado
        setEjercicios(ejercicios.filter(ejercicio => ejercicio.id_ejercicio !== id));
      })
      .catch(error => {
        setErrorEjercicio(`Error al eliminar el ejercicio: ${error.message}`);
      });
  };

  // Función para filtrar los ejercicios por buscador actual.
  const filtrarEjercicios = (filtro) => {
    const ejerciciosFiltradosReturn = 
      ejercicios
        .filter(ejercicio => 
        ejercicio.nombre
                .toLowerCase()
                .startsWith(filtro.toLowerCase())
      );
      
    filtro === "" ? 
    setEjerciciosFiltrados(ejercicios) : 
    setEjerciciosFiltrados(ejerciciosFiltradosReturn);
  }

  const actualizarDato = (e) => {
    // Se obtienen los datos necesarios de evento que lanza esta función: el input.
    const { name, value } = e.target;
    // Se asigna al estado.
    setEjercicio({ ...ejercicio, [name]: value });
  };

  // Función para validar el formulario.
  const validarFormularioEjercicio = (evento) => {
    // Se accede al elemento <form> que contiene el listado de todos sus elementos (elements).
    const formulario = evento.target.form;
    // Array vacío para guardar todos los errores del formulario.
    let erroresListado = [];
  
    // Se recorre el formulario comprobando cada elemento.
    for (let i = 0; i < formulario.elements.length; i++) {
      const elemento = formulario.elements[i];
      // Validamos solo los campos relevantes (que tengan atributo 'name')
      if (elemento.name) {
        // Validar dato devuelve un array con los errores de ese elemento.
        let erroresElemento = validarDatoEjercicio(elemento);
        // Se comprueba si hay errores o no (aplicando un estilo).
        erroresElemento.length !== 0
          ? elemento.classList.add("error")
          : elemento.classList.remove("error");
        // Se añaden los errores (si existen) de cada elemento a erroresListado.
        erroresListado = [...erroresListado, ...erroresElemento];
      }
    }
  
    // Se cambia el valor el estado por los errores producidos.
    setErrorEjercicio(erroresListado);
  
    // Se devuelve un booleano para poder realizar una acción tras la comprobación.
    // Si no hay errores se devuelve true.
    return erroresListado.length === 0;
  };


  const datosContexto = {
    ejercicio,
    ejercicios,
    ejerciciosFiltrados,
    errorEjercicio,
    createEjercicio,
    readEjercicios,
    updateEjercicio,
    deleteEjercicio,
    filtrarEjercicios,
    actualizarDato,
    validarFormularioEjercicio
  };

  return (
    <ContextoEjercicios.Provider value={datosContexto}>
      {children}
    </ContextoEjercicios.Provider>
  );
};

export default EjerciciosContexto;
export { ContextoEjercicios };
