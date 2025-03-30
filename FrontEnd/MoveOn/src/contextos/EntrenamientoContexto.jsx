import React, {createContext,useEffect,useState} from 'react';

const ContextoEntrenamiento = createContext();

const EntrenamientoContexto = ({children}) => {

    // Variables iniciales
    const entrenamientosIniciales = [];
    const entrenamientoInicial = {
      nombre: '',
      descripcion: ''
    };
    const errorEntrenamientoInicial = "";
    const apiUrl = 'http://localhost:8089/api/rutinas';

    // Estados usando las variables iniciales
    const [entrenamiento, setEntrenamiento] = useState(entrenamientoInicial);
    const [entrenamientos, setEntrenamientos] = useState(entrenamientosIniciales);
    const [entrenamientosFiltrados, setEntrenamientosFiltrados] = useState(entrenamientosIniciales);
    const [errorEntrenamiento, setErrorEntrenamiento] = useState(errorEntrenamientoInicial);

    //crud

    const readEntrenamientos = () => {
    return fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setEntrenamientos(data.rutinas);
        setEntrenamientosFiltrados(data.rutinas)
      })
      .catch(error => {
        console.error(`Se ha producido un error: ${error.message}`);
        setErrorEntrenamiento(`Se ha producido un error: ${error.message}`);
      });
    }
    useEffect(() => {
        readEntrenamientos(apiUrl);
        }
    , [apiUrl]);

    const createEntrenamiento = (nuevoEntrenamiento) => {
        fetch(apiUrl, {
            headers: { "Content-Type": "application/json" },
            method: "POST",
            body: JSON.stringify(nuevoEntrenamiento),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al crear el entrenamiento');
            }
            return response.json();
        })
        .then(data => {
            const entrenamientoCreado = data.rutina || data;
            setEntrenamientos([...entrenamientos, entrenamientoCreado]);
            setEntrenamiento(entrenamientoInicial);
        })  
    }

    const datosContexto = {
        entrenamiento,
        entrenamientos,
        entrenamientosFiltrados,
        errorEntrenamiento,
        readEntrenamientos,
        createEntrenamiento
    };


  return (
    <ContextoEntrenamiento.Provider value={datosContexto}>
        {children}
    </ContextoEntrenamiento.Provider>
  )
}

export default EntrenamientoContexto;
export {ContextoEntrenamiento};
