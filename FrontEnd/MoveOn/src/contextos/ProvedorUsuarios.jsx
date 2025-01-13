import React, { createContext, useState } from "react";

// Crear el contexto
const contextoUsuario = createContext();

// Proveedor del contexto
const ProveedorUsuario = ({ children }) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Función para enviar datos a la API
  const enviarDatos = async (usuario) => {
    setLoading(true);
    try {
      // Muestra el objeto JSON que se enviará
      console.log("Datos que se enviarán:", JSON.stringify(usuario));
      
      const response = await fetch("http://localhost/api/usuarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(usuario), // Convertir el objeto usuario en un JSON
      });
      
      if (!response.ok) {
        throw new Error("Error al enviar los datos.");
      }
      
      const data = await response.json();
      console.log("Respuesta de la API:", data);
      setLoading(false);
      return data; // Devuelve la respuesta de la API
    } catch (err) {
      setError(`Hubo un problema: ${err.message}`);
      setLoading(false);
    }
  };
  

  const datosContexto = {
    enviarDatos,
    error,
    loading,
  };

  return (
    <contextoUsuario.Provider value={datosContexto}>
      {children}
    </contextoUsuario.Provider>
  );
};

export default ProveedorUsuario;
export { contextoUsuario };
