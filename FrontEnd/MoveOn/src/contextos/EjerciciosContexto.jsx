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
  const errorEjercicioInicial = {};

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
    fetch(`${apiUrl}/${id}`, { method: 'DELETE' })
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
    const formulario = evento.target.form;
    const erroresPorCampo = {};

    // Recorremos cada elemento del formulario
    for (let i = 0; i < formulario.elements.length; i++) {
      const elemento = formulario.elements[i];
      if (elemento.name) {
        let erroresElemento = validarDatoEjercicio(elemento);
        if (erroresElemento.length !== 0) {
          elemento.classList.add("error");
          erroresPorCampo[elemento.name] = erroresElemento;
        } else {
          elemento.classList.remove("error");
        }
      }
    }
    setErrorEjercicio(erroresPorCampo);
    // Retorna true si no hay errores
    return Object.keys(erroresPorCampo).length === 0;
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
