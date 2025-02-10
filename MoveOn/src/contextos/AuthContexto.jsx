// src/contextos/AuthContexto.jsx

import React, { useState, useEffect, createContext } from "react";
import { supabaseConexion } from "../bibliotecas/config.js";
import { useNavigate } from "react-router-dom";

/**
 * Este contexto maneja todo el proceso de autenticación:
 * registro, inicio/cierre de sesión, recuperación de contraseña, etc.
 * Además, expone los datos y estados necesarios para cualquier componente
 * que necesite información de autenticación.
 */
const contextoAuth = createContext();

const AuthContexto = ({ children }) => {
  /****************************************************/
  /***          VALORES Y ESTADOS INICIALES         ***/
  /****************************************************/
  const datosSesionInicial = {
    email: "",
    password: "",
  };
  const usuarioInicial = {};
  const errorUsuarioInicial = "";
  const olvidoContrasenaInicial = false;
  const panelDerechoActivoInicial = false;

  const [datosSesion, setDatosSesion] = useState(datosSesionInicial);
  const [usuario, setUsuario] = useState(usuarioInicial);
  const [errorUsuario, setErrorUsuario] = useState(errorUsuarioInicial);
  const [sesionIniciada, setSesionIniciada] = useState(false);
  const [olvidoContrasena, setOlvidoContrasena] = useState(olvidoContrasenaInicial);
  const [panelDerechoActivo, setPanelDerechoActivo] = useState(panelDerechoActivoInicial);

  const navegar = useNavigate();

  const crearCuenta = async () => {
    setErrorUsuario("");

    // Validaciones de la contraseña
    if (datosSesion.password.length < 8) {
      setErrorUsuario("La contraseña debe tener al menos 8 caracteres.");
      return;
    }
    if (!/[A-Z]/.test(datosSesion.password)) {
      setErrorUsuario("La contraseña debe contener al menos una letra mayúscula.");
      return;
    }

    try {
      const { data, error } = await supabaseConexion.auth.signUp({
        email: datosSesion.email,
        password: datosSesion.password,
      });

      if (error) {
        throw error;
      } else {
        setErrorUsuario("Confirma tu cuenta en tu correo.");
      }
    } catch (error) {
      setErrorUsuario(error.message);
    }
  };

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
        setErrorUsuario("Sesión iniciada con éxito.");

        // Solo navegamos si la ruta actual es "/Usuario", para enviarlo a "/"
        if (location.pathname === "/Usuario") {
          navegar("/");
        }
        setSesionIniciada(true);
      }
    } catch (error) {
      let mensaje = error.message;
      if (mensaje.toLowerCase().includes("invalid login credentials")) {
        mensaje = "Error: Por favor verifique su correo y contraseña.";
      }
      if (mensaje.toLowerCase().includes("confirm")) {
        mensaje = "Por favor, confirma tu cuenta mediante el correo.";
      }
      setErrorUsuario(mensaje);
    }
  };


  const cerrarSesion = async () => {
    try {
      setErrorUsuario("");
      await supabaseConexion.auth.signOut();
      setSesionIniciada(false);
      //Se que no se ve pero me puede servir para el proyecto.
      setErrorUsuario("Sesión cerrada exitosamente.");
    } catch (error) {
      setErrorUsuario(error.message);
    }
  };

  const obtenerUsuario = async () => {
    try {
      setErrorUsuario("");
      const { data, error } = await supabaseConexion.auth.getUser();
      if (error) throw error;
      setUsuario(data.user);
    } catch (error) {
      setErrorUsuario(error.message);
    }
  };

  /**
   * ActualizarDato se encarga de manejar cambios en el formulario de login/registro,
   * guardando los valores en datosSesion.
   */
  const actualizarDato = (e) => {
    setDatosSesion({
      ...datosSesion,
      [e.target.name]: e.target.value,
    });
  };

  const volverInicioSesionClick = (booleano) => {
    setOlvidoContrasena(booleano);
    setErrorUsuario(errorUsuarioInicial);
  };
  //No realice lo de nueva contrasena en mi pagina (Lo veras en el proyecto).
  const recuperarContrasena = async () => {
    setErrorUsuario(errorUsuarioInicial);
    try {
      const { data, error } = await supabaseConexion.auth.resetPasswordForEmail(
        datosSesion.email,
        {
          redirectTo: "http://localhost:5173/",
        }
      );
      if (error) {
        throw error;
      } else {
        setErrorUsuario("Le enviamos un correo para que reinicie su contraseña.");
      }
    } catch (error) {
      setErrorUsuario(error.message);
    }
  };

  const muestraRegistroClick = (booleano) => {
    setPanelDerechoActivo(booleano);
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
    return () => {
      suscripcion.data.subscription.unsubscribe();
    };
  }, []);


  const datosContexto = {
    // Manejo de mensajes (éxito/error)
    errorUsuario,

    // Registro e inicio de sesión
    crearCuenta,
    iniciarSesion,
    cerrarSesion,
    obtenerUsuario,

    // Manejo del formulario
    actualizarDato,
    datosSesion,

    // Usuario y estado de sesión
    usuario,
    sesionIniciada,

    // Recuperación de contraseña
    recuperarContrasena,
    olvidoContrasena,
    volverInicioSesionClick,

    // Cambio entre vistas de registro/login
    panelDerechoActivo,
    muestraRegistroClick,
  };

  return (
    <contextoAuth.Provider value={datosContexto}>
      {children}
    </contextoAuth.Provider>
  );
};

export default AuthContexto;
export { contextoAuth };