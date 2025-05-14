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

  const datosResetPasswdInicial = {
    email: "",
    newPwd: "",
    confirmPwd: ""
  }

  const usuarioInicial = {};
  const falseBool = false;
  const cadenaVacia = "";

  const [datosSesion, setDatosSesion] = useState(datosSesionInicial);
  const [errorUsuario, setErrorUsuario] = useState(usuarioInicial);
  const [campoEditable, setCampoEditable] = useState(usuarioInicial);
  const [errorCampo, setErrorCampo] = useState(cadenaVacia);
  const [formResetPasswd, setFormResetPasswd] = useState(datosResetPasswdInicial);
  const [olvidoContrasena, setOlvidoContrasena] = useState(falseBool);
  const [idUsuarioTemp, setIdUsuarioTemp] = useState(null);
  const [emailValido, setEmailValido] = useState(false);
  const [errorCampoResetPasswd, SetErrorCampoResetPasswd] = useState(cadenaVacia);
  const [panelDerechoActivo, setPanelDerechoActivo] = useState(falseBool);
  const [cargando, setCargando] = useState(falseBool);
  /* Hecho para que si se actualiza accidentalmente la página se recuperé la sesión evitando redirecciones innecesarias. */
  const [sesionIniciada, setSesionIniciada] = useState(() => {
    return localStorage.getItem("sesionIniciada") === "true";
  });
  const [usuario, setUsuario] = useState(() => {
    const u = localStorage.getItem("usuario");
    return u ? JSON.parse(u) : {};
  });

  const navegar = useNavigate();

  const crearCuenta = async () => {
    setErrorUsuario(usuarioInicial);

    const erroresFront = validarRegistro(datosSesion, "registro");
    if (Object.keys(erroresFront).length > 0) {
      setErrorUsuario(erroresFront);
      return;
    }

    if (cargando) return;
    setCargando(true);

    try {
      // 2. Pre-check email en la API
      const checkRes = await fetch(
        `${API_URL}/usuarios/email-exists?correo=${encodeURIComponent(datosSesion.email)}`
      );
      const checkData = await checkRes.json();
      if (checkData.exists) {
        setErrorUsuario({ email: "Este correo ya existe." });
        return;
      }

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

      // posibles errores devueltos por el POST
      if (!response.ok) {
        const msg = data.errors?.correo?.[0] || data.message || "Error al crear la cuenta.";
        setErrorUsuario({ fetch: msg });
        return;
      }

      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "success",
        title: "Cuenta creada exitosamente.",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true
      });
      setDatosSesion(datosSesionInicial);
    } catch (e) {
      // Error de red o API caída
      setErrorUsuario({ fetch: "No se pudo conectar. Inténtalo de nuevo." });
    } finally {
      setCargando(false);
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
          console.log(data.usuario);
          setDatosSesion(datosSesionInicial);
          navegar("/");
        }
      } catch (error) {

        setErrorUsuario({ unauthorized: "Email o contraseña incorrectos." });
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

      setCampoEditable({
        campo: clave,
        valor: clave === 'contrasena' ? '' : valor
      });
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
    setUsuario((camposPrevios) => {
      if (campoEditable.campo === "contrasena") {
        return camposPrevios;
      }
      const nuevosCampos = {
        ...camposPrevios,
        [campoEditable.campo]: campoEditable.valor
      };
      localStorage.setItem('usuario', JSON.stringify(nuevosCampos));
      return nuevosCampos;
    });

  };

    const eliminarCuenta = async () => {
      const html = `
      <div className="text-center">
        <p>Esta acción no se puede revertir.</p><br>
        <p>Escribe: <u>estoy seguro de eliminarla</u></p>
        </div>`;
    const { value: confirmacion } = await Swal.fire({
      title: '¿Estás seguro?',
      html,
      input: 'text',
      inputPlaceholder: 'estoy seguro de eliminarla',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#d33',
    });

    if (confirmacion !== 'estoy seguro de eliminarla') {
      Swal.fire('Cancelado', 'No se escribió la frase de confirmación correctamente, ¡vuelve pronto!', 'info');
      return;
    }

    try {
      const response = await fetch(`${API_URL}/usuarios/${usuario.id_usuario}`, {
        method: "DELETE"
      });

      if (response.ok) {
        Swal.fire('Cuenta eliminada', 'Tu cuenta ha sido eliminada correctamente.', 'success');
        cerrarSesion();
      } else {
        Swal.fire('Error', 'No se pudo eliminar la cuenta.', 'error');
      }
    } catch (error) {
      Swal.fire('Error', 'Error de red al intentar eliminar la cuenta.', 'error');
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

  const guardarDato = async () => {
    const error = validarCampoUsuario(campoEditable.campo, campoEditable.valor);

    if (error) {
      setErrorCampo(error);
      return;
    }

    // Si estamos editando el correo, comprobamos primero en la API
    if (campoEditable.campo === 'correo') {
      try {
        const res = await fetch(
          `${API_URL}/usuarios/email-exists?correo=${encodeURIComponent(campoEditable.valor)}`
        );
        const { exists } = await res.json();
        if (exists) {
          setErrorCampo('Este correo ya está registrado.');
          return;
        }
      } catch (e) {
        setErrorCampo('No se pudo validar el correo. Inténtalo de nuevo.');
        return;
      }
    }

    // Si todo OK, seguimos con el guardado parcial
    guardarDatoParcialUsuario();
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

  const actualizarFormResetPasswd = (e) => {
    const { name, value } = e.target;
    setFormResetPasswd(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const reiniciarResetPasswd = () => {
    setFormResetPasswd(datosResetPasswdInicial);
    setEmailValido(false);
    setIdUsuarioTemp(null);
    SetErrorCampoResetPasswd(cadenaVacia)
  }

  const recuperarContrasena = async (e) => {
    e.preventDefault();
    SetErrorCampoResetPasswd(cadenaVacia);

    try {
      const res = await fetch(
        `${API_URL}/usuarios/email-exists?correo=${encodeURIComponent(formResetPasswd.email)}`
      );
      const data = await res.json();

      if (data.exists) {
        setIdUsuarioTemp(data.id_usuario);
        setEmailValido(true);
      } else {
        SetErrorCampoResetPasswd("El email no existe en nuestra base de datos.");
      }
    } catch (err) {
      console.error(err);
      SetErrorCampoResetPasswd("Error al verificar el email.");
    }
  };

  const guardarCambioDePasswd = async (e) => {
    e.preventDefault();
    SetErrorCampoResetPasswd(cadenaVacia);

    if (formResetPasswd.newPwd !== formResetPasswd.confirmPwd) {
      SetErrorCampoResetPasswd("Las contraseñas no coinciden.");
      return;
    } else if (formResetPasswd.newPwd.length < 8) {
      SetErrorCampoResetPasswd("La contraseña debe tener 8 caracteres mínimo.");
      return;
    }

    try {
      const response = await fetch(
        `${API_URL}/usuarios/${idUsuarioTemp}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ contrasena: formResetPasswd.newPwd })
        }
      );

      if (response.ok) {
        Swal.fire("Contraseña cambiada con éxito", "Ya puedes iniciar sesión con tu nueva contraseña", "success");
        reiniciarResetPasswd();
        navegar("/usuario");

      } else {
        throw new Error();
      }
    } catch (error) {
      SetErrorCampoResetPasswd("Error", "No se pudo actualizar la contraseña", "error");
    }
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
    eliminarCuenta,
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
    guardarDatoParcialUsuario,


    formResetPasswd,
    errorCampoResetPasswd,
    emailValido,
    actualizarFormResetPasswd,
    recuperarContrasena,
    guardarCambioDePasswd,
    reiniciarResetPasswd
  };

  return (
    <contextoAuth.Provider value={datosContexto}>
      {children}
    </contextoAuth.Provider>
  );
};

export default AuthContexto;
export { contextoAuth };
