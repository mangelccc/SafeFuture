// src/contextos/AuthContexto.jsx
import React, { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { validarRegistro, validarCampoUsuario } from "../bibliotecas/biblioteca.js";
import { API_URL } from "../bibliotecas/config.js";
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
  const cadenaVacia = "";

  const [datosSesion, setDatosSesion] = useState(datosSesionInicial);
  const [usuario, setUsuario] = useState(usuarioInicial);
  const [errorUsuario, setErrorUsuario] = useState(usuarioInicial);
  const [campoEditable, setCampoEditable] = useState(usuarioInicial);
  const [errorCampo, setErrorCampo] = useState(cadenaVacia);
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

        const response = await fetch(`${API_URL}/usuarios`, {
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

        const response = await fetch(`${API_URL}/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            correo: datosSesion.email,
            contrasena: datosSesion.password,
          }),
        });

        const data = await response.json();

        if (response.status === 401) {
          throw new Error("Email o contraseña incorrectos.");
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
        
        setErrorUsuario({unauthorized: "Email o contraseña incorrectos."});
      } finally {
        setCargando(falseBool);
      }
    }
  };


  const editarDatoUsuario = async (evento) => {
    const clic = evento.target.tagName;
    if (clic === "path" || clic === "svg") {
      const clave = evento.target.closest("article").dataset.key;
      const valor = usuario[clave]; 

      setCampoEditable({ campo: clave, valor: valor }); //Cuando se le da clic al icono del nombre = {nombre: 'Gloria Pepe'} 
      
    }
  }


  const guardarDatoParcialUsuario = async () => {
    try {
       const response = await fetch(`${API_URL}/usuarios/${usuario.id_usuario}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ [campoEditable.campo]: campoEditable.valor }),
       });
       if (response.ok) {
          Swal.fire("Actualizado", "El campo fue actualizado con éxito", "success");
          // Aquí actualizas el estado del usuario con los nuevos valores
       }
    } catch (error) {
       Swal.fire("Error", "No se pudo actualizar el campo", "error");
    }
    setCampoEditable(usuarioInicial);
    setUsuario((campos) => {
   const nuevosCampos = {
     ...campos,
     [campoEditable.campo]: campoEditable.valor
   };
   localStorage.setItem('usuario', JSON.stringify(nuevosCampos));
   return nuevosCampos;
});
    
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
    navegar("/usuario");
  };

  // Actualiza los datos del formulario (nombre, email, password, etc.)
  const actualizarDato = (e) => {
    setDatosSesion({
      ...datosSesion,
      [e.target.name]: e.target.value
    });
  };

  const cambiarDato = (event) => {
    setCampoEditable(prev => ({
        ...prev,
        valor: event.target.value
    }));
};

const guardarDato = () => {
    const error = validarCampoUsuario(campoEditable.campo, campoEditable.valor);
    if (!error) {
        guardarDatoParcialUsuario();
    } else{
        setErrorCampo(error);
    }
    
};

const limpiarErrorCampo = () => {
    setErrorCampo(cadenaVacia);
  }

const cancelarDato = () => {
    setCampoEditable(null);
  };

  const volverInicioSesionClick = (booleano) => {
    setOlvidoContrasena(booleano);
    setDatosSesion(datosSesionInicial);
    setErrorUsuario(usuarioInicial);
  };

  //! Función no implementada
  const recuperarContrasena = async () => {
    setErrorUsuario("Funcionalidad no implementada.");
  };

  const muestraRegistroClick = (booleano) => {
    setPanelDerechoActivo(booleano);
    setDatosSesion(datosSesionInicial);
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
    editarDatoUsuario,
    volverInicioSesionClick,
    panelDerechoActivo,
    muestraRegistroClick,
    cargando,

    campoEditable,
    setCampoEditable,
    cambiarDato,
    guardarDato,
    cancelarDato,
    errorCampo,
    limpiarErrorCampo,
    guardarDatoParcialUsuario
  };

  return (
    <contextoAuth.Provider value={datosContexto}>
      {children}
    </contextoAuth.Provider>
  );
};

export default AuthContexto;
export { contextoAuth };
