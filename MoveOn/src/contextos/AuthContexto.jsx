// src/contextos/AuthContexto.jsx
import React, { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { validarRegistro } from "../bibliotecas/biblioteca.js";
import Swal from 'sweetalert2';

const contextoAuth = createContext();

const AuthContexto = ({ children }) => {
  // Se definen todas las propiedades del formulario
  const datosSesionInicial = {
    nombre: "",
    email: "",
    password: "",
    edad: "",
    sexo: "",
    rol: ""
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
    setErrorUsuario(errorUsuarioInicial);
    // Ejecutar la validación y obtener el mensaje de error ya formateado.
    const mensajeError = validarRegistro(datosSesion);
    
    if (mensajeError) {
      setErrorUsuario(mensajeError);
      return;
    }
  
    try {
      const nuevoUsuario = {
        nombre: datosSesion.nombre,
        correo: datosSesion.email,
        contrasena: datosSesion.password,
        edad: Number(datosSesion.edad),
        sexo: datosSesion.sexo,
        rol: datosSesion.rol || "Usuario" 
      };
      
      setErrorUsuario("Creando cuenta . . .")

      const response = await fetch("http://localhost:8089/api/usuarios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuevoUsuario),
        
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        setErrorUsuario(data.message || "Error al crear la cuenta.");
      } else {
        
        Swal.fire({
          title: "¡Cuenta creada exitosamente!",
          icon: 'success',
          confirmButtonText: 'Aceptar',
          showConfirmButton: false,
          timer: 1500
        })
        setErrorUsuario(errorUsuarioInicial);
        
        setDatosSesion(datosSesionInicial);
      }
    } catch (error) {
      setErrorUsuario(error.message);
    }
  };
  
  

  const iniciarSesion = async () => {
    setErrorUsuario(errorUsuarioInicial);
    try {
      
      const response = await fetch("http://localhost:8089/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          correo: datosSesion.email,
          contrasena: datosSesion.password,
        }),
      });
      
      const data = await response.json();
  
      if (!response.ok) {
        
        setErrorUsuario(data.message || "Error al iniciar sesión.");
      } else {
        setErrorUsuario("Sesión iniciada con éxito.");
        setUsuario(data.usuario);
        setSesionIniciada(true);
        // Resetea los datos del formulario a sus valores iniciales
        setDatosSesion(datosSesionInicial);
        navegar("/"); 
      }
    } catch (error) {
      setErrorUsuario(error.message);
    }
  };
  

  // Al cerrar sesión se limpian los estados y se redirige a "/usuario"
  const cerrarSesion = () => {
    setUsuario(usuarioInicial);
    setSesionIniciada(false);
    setErrorUsuario("Sesión cerrada exitosamente.");
    navegar("/Usuario");
  };

  // Actualiza los datos del formulario (nombre, email, password, etc.)
  const actualizarDato = (e) => {
    setDatosSesion({
      ...datosSesion,
      [e.target.name]: e.target.value
    });
  };

  const volverInicioSesionClick = (booleano) => {
    setOlvidoContrasena(booleano);
    setErrorUsuario(errorUsuarioInicial);
  };

  // Función no implementada
  const recuperarContrasena = async () => {
    setErrorUsuario("Funcionalidad no implementada.");
  };

  const muestraRegistroClick = (booleano) => {
    setPanelDerechoActivo(booleano);
    setErrorUsuario(errorUsuarioInicial);
  };

  useEffect(() => {
    // Aquí se pueden agregar efectos secundarios si es necesario
  }, []);

  const datosContexto = {
    errorUsuario,
    crearCuenta,
    iniciarSesion,
    cerrarSesion,
    actualizarDato,
    datosSesion,
    usuario,
    sesionIniciada,
    recuperarContrasena,
    olvidoContrasena,
    volverInicioSesionClick,
    panelDerechoActivo,
    muestraRegistroClick
  };

  return (
    <contextoAuth.Provider value={datosContexto}>
      {children}
    </contextoAuth.Provider>
  );
};

export default AuthContexto;
export { contextoAuth };
