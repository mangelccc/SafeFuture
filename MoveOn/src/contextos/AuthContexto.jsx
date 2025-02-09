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

  const [datosSesion, setDatosSesion] = useState(datosSesionInicial);
  const [usuario, setUsuario] = useState(usuarioInicial);
  const [errorUsuario, setErrorUsuario] = useState(errorUsuarioInicial);
  const [sesionIniciada, setSesionIniciada] = useState(false);

  // Para redireccionar a distintas rutas
  const navegar = useNavigate();

  /****************************************************/
  /***     FUNCIONES DE REGISTRO E INICIO DE SESIÓN ***/
  /****************************************************/

  /**
   * Registrar (crear) una cuenta con email y password.
   * - Valida la contraseña (mínimo 8 caracteres, al menos 1 mayúscula).
   * - Si la validación pasa, intenta crear la cuenta en Supabase.
   * - Informa el resultado a través de setErrorUsuario.
   */
  const crearCuenta = async () => {
    // Limpiar cualquier mensaje previo
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
        // Si existe error, se lanza para que el catch lo capture
        throw error;
      } else {
        // Supabase no revela si el correo ya está registrado,
        // en cualquier caso pide confirmar la cuenta.
        setErrorUsuario("Confirma tu cuenta en tu correo.");
      }
    } catch (error) {
      setErrorUsuario(error.message);
    }
  };

  /**
   * Iniciar sesión con email y password.
   * - Si hay error, se muestra en setErrorUsuario.
   * - Si todo va bien, redirige al usuario según la ruta actual.
   */
  const iniciarSesion = async () => {
    // Limpiamos cualquier mensaje previo
    setErrorUsuario(errorUsuarioInicial);

    try {
      const { data, error } = await supabaseConexion.auth.signInWithPassword({
        email: datosSesion.email,
        password: datosSesion.password,
      });

      if (error) {
        throw error;
      } else {
        // Podríamos establecer un mensaje de éxito, si lo deseas:
        // setErrorUsuario("Sesión iniciada con éxito.");

        // Solo navegamos si la ruta actual es "/Usuario", para enviarlo a "/"
        if (location.pathname === "/Usuario") {
          navegar("/");
        }
        setSesionIniciada(true);
      }
    } catch (error) {
      // Ajustamos el mensaje de error para ser más explícito
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

  /**
   * Cerrar sesión:
   * - Hace signOut en Supabase.
   * - Cambia la bandera de sesión a false.
   * - Si ocurre un error, se muestra en setErrorUsuario.
   */
  const cerrarSesion = async () => {
    try {
      setErrorUsuario("");
      await supabaseConexion.auth.signOut();
      setSesionIniciada(false);
      // Podríamos poner un mensaje de éxito, si lo deseamos:
      // setErrorUsuario("Sesión cerrada exitosamente.");
    } catch (error) {
      setErrorUsuario(error.message);
    }
  };

  /**
   * Obtener el usuario actual, si existe sesión:
   * - Supabase provee getUser() para esto.
   * - Guarda la información del usuario en setUsuario.
   */
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

  /*************************************************************/
  /***    ESTADOS Y FUNCIONES PARA RECUPERACIÓN DE CONTRASEÑA ***/
  /*************************************************************/
  const olvidoContrasenaInicial = false;
  const [olvidoContrasena, setOlvidoContrasena] = useState(olvidoContrasenaInicial);

  /**
   * volverInicioSesionClick alterna la vista entre "recuperar contraseña"
   * y "pantalla de inicio de sesión".
   */
  const volverInicioSesionClick = (booleano) => {
    setOlvidoContrasena(booleano);
    setErrorUsuario(errorUsuarioInicial);
  };

  /**
   * recuperarContrasena envía un correo para resetear la contraseña.
   * - A través de Supabase (resetPasswordForEmail).
   * - Usa redirectTo para indicar a dónde redirigir tras resetear.
   */
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

  /*************************************************************/
  /***   ESTADOS Y FUNCIONES PARA TOGGLE DE REGISTRO/PANEL    ***/
  /*************************************************************/
  const panelDerechoActivoInicial = false;
  const [panelDerechoActivo, setPanelDerechoActivo] = useState(panelDerechoActivoInicial);

  /**
   * muestraRegistroClick alterna la UI entre
   * "panel de registro" y "panel de inicio de sesión".
   */
  const muestraRegistroClick = (booleano) => {
    setPanelDerechoActivo(booleano);
    setErrorUsuario(errorUsuarioInicial);
  };

  /*************************************************************/
  /***       LISTENER DE SUPABASE PARA CAMBIO DE SESIÓN       ***/
  /*************************************************************/
  useEffect(() => {
    // Se suscribe a los cambios de autenticación
    const suscripcion = supabaseConexion.auth.onAuthStateChange(
      (evento, session) => {
        if (session) {
          // Si existe sesión, la marcamos como iniciada y obtenemos datos del usuario
          setSesionIniciada(true);
          obtenerUsuario();
        } else {
          // Si la sesión no existe, enviamos al usuario a "/Usuario" (pantalla login)
          navegar("/Usuario");
          setSesionIniciada(false);
        }
      }
    );
    // En caso de necesitar limpiar la suscripción, retornamos la función de cleanup
    return () => {
      suscripcion.data.subscription.unsubscribe();
    };
  }, []);

  /*************************************************************/
  /***    OBJETO FINAL QUE SE PROVEE DESDE EL CONTEXTO        ***/
  /*************************************************************/
  const datosContexto = {
    // Manejo de mensajes (éxito/error)
    errorUsuario,
    setErrorUsuario,

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

    // Toggle entre vistas de registro/login
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