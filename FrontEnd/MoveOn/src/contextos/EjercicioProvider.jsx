import React, { createContext, useState, useEffect } from 'react';

export const EjercicioContext = createContext();

export const EjercicioProvider = ({ children }) => {
  const [ejercicios, setEjercicios] = useState([]);
  const apiUrl = 'http://localhost:8089/api/ejercicios';

  // Función para obtener todos los ejercicios
  const fetchEjercicios = async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setEjercicios(data);
    } catch (error) {
      console.error("Error al obtener los ejercicios:", error);
    }
  };

  // Función para crear un nuevo ejercicio
  const createEjercicio = async (ejercicio) => {
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(ejercicio)
      });
      if (!response.ok) {
        throw new Error('Error al crear el ejercicio');
      }
      const newEjercicio = await response.json();
      // Agregamos el nuevo ejercicio al estado
      setEjercicios([...ejercicios, newEjercicio]);
    } catch (error) {
      console.error("Error al crear el ejercicio:", error);
    }
  };

  // Función para actualizar un ejercicio (si se requiere)
  const updateEjercicio = async (id, updatedData) => {
    try {
      const response = await fetch(`${apiUrl}/${id}`, {
        method: 'PUT', // o 'PATCH' según la implementación de la API
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedData)
      });
      if (!response.ok) {
        throw new Error('Error al actualizar el ejercicio');
      }
      const updatedEjercicio = await response.json();
      setEjercicios(ejercicios.map(ej => ej.id_ejercicio === id ? updatedEjercicio : ej));
    } catch (error) {
      console.error("Error al actualizar el ejercicio:", error);
    }
  };

  // Función para eliminar un ejercicio
  const deleteEjercicio = async (id) => {
    try {
      const response = await fetch(`${apiUrl}/${id}`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error('Error al eliminar el ejercicio');
      }
      // Eliminamos el ejercicio del estado
      setEjercicios(ejercicios.filter(ej => ej.id_ejercicio !== id));
    } catch (error) {
      console.error("Error al eliminar el ejercicio:", error);
    }
  };

  // Se obtiene la lista de ejercicios al montar el componente
  useEffect(() => {
    fetchEjercicios();
  }, []);

  return (
    <EjercicioContext.Provider value={{
      ejercicios,
      fetchEjercicios,
      createEjercicio,
      updateEjercicio,
      deleteEjercicio
    }}>
      {children}
    </EjercicioContext.Provider>
  );
};
