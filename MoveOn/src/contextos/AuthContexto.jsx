import React, { useState, useEffect, createContext } from "react";
import { supabaseConexion } from "../bibliotecas/config.js";
import { useNavigate } from "react-router-dom";

const contextoAuth = createContext();


const AuthContexto = ({ children }) => {
  const datosSesionInicial = {
    email: "",
    password: "",
  };
  const usuarioInicial = {};
  const errorUsuarioInicial = "";
  const navegar = useNavigate();

  const [datosSesion, setDatosSesion] = useState(datosSesionInicial);
  const [usuario, setUsuario] = useState(usuarioInicial);
  const [errorUsuario, setErrorUsuario] = useState(errorUsuarioInicial);
  const [sesionIniciada, setSesionIniciada] = useState(false);

  // Dentro de AuthContexto.jsx
  const crearCuenta = async () => {
    // Limpiar cualquier error previo
    setErrorUsuario("");
  
    // Validar que la contraseña tenga al menos 8 caracteres
    if (datosSesion.password.length < 8) {
      setErrorUsuario("La contraseña debe tener al menos 8 caracteres.");
      return; // Se detiene la ejecución si no cumple
    }
  
    // Validar que la contraseña contenga al menos una letra mayúscula
    if (!/[A-Z]/.test(datosSesion.password)) {
      setErrorUsuario("La contraseña debe contener al menos una letra mayúscula.");
      return; // Se detiene la ejecución si no cumple
    }
  
    try {
      const { data, error } = await supabaseConexion.auth.signUp({
        email: datosSesion.email,
        password: datosSesion.password,
      });
  
      if (error) {
        // Si hay un error, se lanza para atraparlo en el bloque catch
        throw error;
      } else {
        // Tanto si el correo es nuevo como si ya estaba registrado,
        // Supabase responde con este mensaje para evitar revelar información sensible.
        setErrorUsuario("Confirma tu cuenta en tu correo.");
      }
    } catch (error) {
      setErrorUsuario(error.message);
    }
  };
  


  const [navegacionRealizada, setNavegacionRealizada] = useState(false);

  const iniciarSesion = async () => {
    setErrorUsuario(errorUsuarioInicial);
    try {
      const { data, error } = await supabaseConexion.auth.signInWithPassword({
        email: datosSesion.email,
        password: datosSesion.password,
      });

      if (error) {
        throw error;
      } else {
        // Solo navegamos si aún no lo hemos hecho
        if (!navegacionRealizada) {
          navegar("/");
          setNavegacionRealizada(true);
        }
        setSesionIniciada(true);
      }
    } catch (error) {
      let mensaje = error.message;
      if (mensaje.toLowerCase().includes("invalid login credentials")) {
        mensaje = "Error: Por favor verifique su correo y contraseña.";
      }
      if (mensaje.toLowerCase().includes("confirm")) {
        mensaje = "Por favor, confirmar tu cuenta en tu correo.";
      }
      setErrorUsuario(mensaje);
    }
  };


  const cerrarSesion = async () => {
    try {
      await supabaseConexion.auth.signOut();
      setSesionIniciada(false);
    } catch (error) {
      setErrorUsuario(error.message);
    }
  };

  const obtenerUsuario = async () => {
    try {
      const { data, error } = await supabaseConexion.auth.getUser();
      if (error) {
        throw error;
      }
      setUsuario(data.user);
    } catch (error) {
      setErrorUsuario(error.message);
    }
  };

  const actualizarDato = (e) => {
    setDatosSesion({
      ...datosSesion,
      [e.target.name]: e.target.value,
  });
  };

  //Componente para recuperar contrasena.

  const olvidoContrasenaInicial = false;
  const [olvidoContrasena, setOlvidoContrasena] = useState(olvidoContrasenaInicial);

  const volverInicioSesionClick = (boleano) => {
      setOlvidoContrasena(boleano);
      setErrorUsuario(errorUsuarioInicial);
  }

  const recuperarContrasena = async () => {
    setErrorUsuario(errorUsuarioInicial);
    try {
      const { data, error } = await supabaseConexion.auth.resetPasswordForEmail(datosSesion.email, {
        redirectTo: "http://localhost:5173/",
      });
      if (error) {
        throw error;
      } else {
        setErrorUsuario("Le enviavos un correo para que reinicie su contrasena.");
      }
    } catch (error) {
      setErrorUsuario(error.message);
    }
  };

  // Componente Superpuetos.
    const panelDerechoActivoInicial = false;
    const [panelDerechoActivo, setPanelDerechoActivo] = useState(panelDerechoActivoInicial);
  
    const muestraRegistroClick = (boleano) => {
      setPanelDerechoActivo(boleano);
      setErrorUsuario(errorUsuarioInicial);
    };

  useEffect(() => {
    const suscripcion = supabaseConexion.auth.onAuthStateChange(
      (e, session) => {
        if (session) {
          setSesionIniciada(true);
          obtenerUsuario();
        } else {
          navegar("/Usuario"); 
          setSesionIniciada(false);
        }
      }
    );
  }, []);

  const datosContexto = {
    errorUsuario,
    setErrorUsuario,
    crearCuenta,
    iniciarSesion,
    cerrarSesion,
    obtenerUsuario,
    actualizarDato,
    usuario,
    recuperarContrasena,
    volverInicioSesionClick,
    olvidoContrasena,
    sesionIniciada,
    muestraRegistroClick,
    panelDerechoActivo,
  };

  return (
    <contextoAuth.Provider value={datosContexto}>
      {children}
    </contextoAuth.Provider>
  );
};

export default AuthContexto;
export { contextoAuth };