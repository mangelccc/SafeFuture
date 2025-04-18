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
        id_usuario: crypto.randomUUID(),
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
        
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });
        Toast.fire({
          icon: "success",
          title: "Cuenta creada exitosamente."
        });

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

        Swal.fire({
          title: "Sesión iniciada",
          icon: 'success',
          
          confirmButtonText: 'Aceptar',
          showConfirmButton: false,
          timer: 1500
        })

        setUsuario(data.usuario);
        setSesionIniciada(true);
        localStorage.setItem("usuario", JSON.stringify(data.usuario));
        localStorage.setItem("sesionIniciada", "true");

        setDatosSesion(datosSesionInicial);
        navegar("/"); 
      }
    } catch (error) {
      setErrorUsuario(error.message);
    }
  };


  useEffect(() => {
    const usuarioGuardado = localStorage.getItem("usuario");
    const sesionGuardada = localStorage.getItem("sesionIniciada");
  
    if (usuarioGuardado && sesionGuardada === "true") {
      setUsuario(JSON.parse(usuarioGuardado));
      setSesionIniciada(true);
    }
  }, []);
  
  

  const cerrarSesion = () => {
    setUsuario(usuarioInicial);
    setSesionIniciada(false);
    localStorage.removeItem("usuario");
    localStorage.removeItem("sesionIniciada");
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
