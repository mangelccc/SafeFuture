import React, { createContext, useState, useEffect } from 'react';

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
  const [errorEjercicio, setErrorEjercicio] = useState(errorEjercicioInicial);

  const apiUrl = 'http://localhost:8089/api/ejercicios';

  // Obtención de datos al montar el componente
  useEffect(() => {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // Se asume que la respuesta tiene la propiedad "ejercicios"
        setEjercicios(data.ejercicios);
      })
      .catch(error => {
        console.error(`Se ha producido un error: ${error.message}`);
        setErrorEjercicio(`Se ha producido un error: ${error.message}`);
      });
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
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al crear el ejercicio');
        }
        return response.json();
      })
      .then(data => {
        // Se asume que la respuesta devuelve el ejercicio creado en la propiedad "ejercicio"
        const ejercicioCreado = data.ejercicio || data;
        setEjercicios([...ejercicios, ejercicioCreado]);
        // Reseteamos el estado del ejercicio actual a su estado inicial
        resetEjercicio();
      })
      .catch(error => {
        console.error("Error al crear el ejercicio:", error);
        setErrorEjercicio("Error al crear el ejercicio");
      });
  };

  // Función para actualizar un ejercicio (PUT)
  const updateEjercicio = (id, updatedData) => {
    fetch(`${apiUrl}/${id}`, {
      method: 'PUT', // o 'PATCH' según la implementación de la API
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedData)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al actualizar el ejercicio');
        }
        return response.json();
      })
      .then(data => {
        // Se asume que la respuesta devuelve el ejercicio actualizado en la propiedad "ejercicio"
        const ejercicioActualizado = data.ejercicio || data;
        setEjercicios(
          ejercicios.map(ejercicio => ejercicio.id_ejercicio === id ? ejercicioActualizado : ejercicio)
        );
      })
      .catch(error => {
        console.error("Error al actualizar el ejercicio:", error);
        setErrorEjercicio("Error al actualizar el ejercicio");
      });
  };

  // Función para eliminar un ejercicio (DELETE)
  const deleteEjercicio = (id) => {
    fetch(`${apiUrl}/${id}`, {
      method: 'DELETE'
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al eliminar el ejercicio');
        }
        // Se actualiza el estado filtrando el ejercicio eliminado
        setEjercicios(ejercicios.filter(ejercicio => ejercicio.id_ejercicio !== id));
      })
      .catch(error => {
        console.error(`Error al eliminar el ejercicio: ${error.message}`);
        setErrorEjercicio("Error al eliminar el ejercicio");
      });
  };


  const datosContexto = {
    ejercicio,
    ejercicios,
    errorEjercicio,
    createEjercicio,
    updateEjercicio,
    deleteEjercicio,
  };

  return (
    <ContextoEjercicios.Provider value={datosContexto}>
      {children}
    </ContextoEjercicios.Provider>
  );
};

export default EjerciciosContexto;
export { ContextoEjercicios };
