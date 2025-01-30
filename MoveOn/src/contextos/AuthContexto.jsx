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

  const crearCuenta = async () => {
    try {
      const { data, error } = await supabaseConexion.auth.signUp({
        email: datosSesion.email,
        password: datosSesion.password,
      });

      if (error) {
        throw error;
      } else {
        setErrorUsuario(
            "Confirma tu cuenta en tu correo."
          );
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
        setSesionIniciada(true);
      }
    } catch (error) {
        setErrorUsuario(error.message);
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
          navegar("/");
          setSesionIniciada(true);
          obtenerUsuario();
        } else {
          /* navegar("/Usuario"); */
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