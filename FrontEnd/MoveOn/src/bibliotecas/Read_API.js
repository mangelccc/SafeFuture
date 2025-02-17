const obtenerDatosApi = (url) => {
    return fetch(url)
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error(`HTTP error! status: ${respuesta.status}`);
        }
        return respuesta.json();
      })
      .then((datos) => {
        return datos;
      })
      .catch((error) => {
        console.error(`Error: ${error.message}`);
        return { error: `Error al obtener datos: ${error.message}` };
      });
  };
  
  export { obtenerDatosApi };
  