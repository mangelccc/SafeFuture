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

    const readEntrenamientos = async () => {
    return await fetch(apiUrl)
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

    const createEntrenamiento = async (nuevoEntrenamiento) => {
        await fetch(apiUrl, {
            headers: { "Content-Type": "application/json" },
            method: "POST",
            body: JSON.stringify(nuevoEntrenamiento),
        })
        .then(response => {return response.json()})
        .then(data => {
            const entrenamientoCreado = data.rutina;
            setEntrenamientos([...entrenamientos, entrenamientoCreado]);
            setEntrenamiento(entrenamientoInicial);
        })
        .catch(error => {
            setErrorEntrenamiento(`Se ha producido un error: ${error.message}`);
        });  
    }

    const deleteEntrenamiento = async (id) => {
      await fetch(`${apiUrl}/${id}`,{
          method: "DELETE"
      })
      .then(response => response.json())  
      .then(data => {
        setEntrenamientos(entrenamientos.filter(e => e.id_rutina !== id));
        setEntrenamientosFiltrados(entrenamientos.filter(e => e.id_rutina !== id));
        console.log(`Se ha eliminado el entrenamiento con id: ${id}`);
      })    
      .catch(error => {
          setErrorEntrenamiento(`Se ha producido un error: ${error.message}`);
      });
    }
    const actualizarDatoEntrenamiento = (evento) => {
      const { name, value } = evento.target;
      setEntrenamiento({ ...entrenamiento, [name]: value });
    };


    const datosContexto = {
        entrenamiento,
        entrenamientos,
        entrenamientosFiltrados,
        errorEntrenamiento,
        readEntrenamientos,
        createEntrenamiento,
        deleteEntrenamiento,
    };


  return (
    <ContextoEntrenamiento.Provider value={datosContexto}>
        {children}
    </ContextoEntrenamiento.Provider>
  )
}

export default EntrenamientoContexto;
export {ContextoEntrenamiento};
