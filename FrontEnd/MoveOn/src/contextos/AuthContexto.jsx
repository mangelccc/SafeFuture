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
  const falseBool = false;

  const [datosSesion, setDatosSesion] = useState(datosSesionInicial);
  const [usuario, setUsuario] = useState(usuarioInicial);
  const [errorUsuario, setErrorUsuario] = useState(usuarioInicial);
  const [sesionIniciada, setSesionIniciada] = useState(falseBool);
  const [olvidoContrasena, setOlvidoContrasena] = useState(falseBool);
  const [panelDerechoActivo, setPanelDerechoActivo] = useState(falseBool);
  const [cargando, setCargando] = useState(falseBool);

  const navegar = useNavigate();

  const crearCuenta = async () => {
    setErrorUsuario(usuarioInicial);
    const errores = validarRegistro(datosSesion, "registro");

    if (Object.keys(errores).length > 0) {
      setErrorUsuario(errores);
      return;
    }

    if (!cargando) {
      try {
        setCargando(true);
        const nuevoUsuario = {
          id_usuario: crypto.randomUUID(),
          nombre: datosSesion.nombre,
          correo: datosSesion.email,
          contrasena: datosSesion.password,
          edad: Number(datosSesion.edad),
          sexo: datosSesion.sexo,
          rol: datosSesion.rol || "Usuario"
        };

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
            showConfirmButton: falseBool,
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
          setErrorUsuario(usuarioInicial);
          setDatosSesion(datosSesionInicial);
        }
      } catch (error) {
        setErrorUsuario({fetch: "Este email ya existe."});
      } finally {
        setCargando(falseBool);
      }
    }
  };



  const iniciarSesion = async () => {
    setErrorUsuario(usuarioInicial);

    const errores = validarRegistro(datosSesion, "login");

    if (Object.keys(errores).length > 0) {
      setErrorUsuario(errores);
      return;
    }
    if (!cargando) {
      setCargando(true);
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
            showConfirmButton: falseBool,
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
      } finally {
        setCargando(falseBool);
      }
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
    setSesionIniciada(falseBool);
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
    setErrorUsuario(usuarioInicial);
  };

  // Función no implementada
  const recuperarContrasena = async () => {
    setErrorUsuario("Funcionalidad no implementada.");
  };

  const muestraRegistroClick = (booleano) => {
    setPanelDerechoActivo(booleano);
    setErrorUsuario(usuarioInicial);
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
    muestraRegistroClick,
    cargando,
  };

  return (
    <contextoAuth.Provider value={datosContexto}>
      {children}
    </contextoAuth.Provider>
  );
};

export default AuthContexto;
export { contextoAuth };
