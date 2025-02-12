import React, { useState, useEffect, createContext } from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import { supabaseConexion } from "../conexionSupabase/supabase.js";
import Swal from 'sweetalert2';

const contextoSesion = createContext();

const ProveedorSesion = ({ children }) => {

  /* Valores iniciales para los estados. */
  const datosSesionInicial = {
    email: "",
    password: "",
  }
  const usuarioInicial = {};
  const errorUsuarioInicial = "";
  const sesionIniciadaInicial = false;

  // Hook para la navegación programática, así redirecciono al usuario cuando lo vea conveniente.
  const navegar = useNavigate();

  /* Hook que voy a utilizar para reiniciar los posibles errores que hayan al cambiar entre páginas. */
  const cambioDeRuta = useLocation();

  /* Estados necesarios para el contexto. */
  const [datosSesion, setDatosSesion] = useState(datosSesionInicial);
  const [usuario, setUsuario] = useState(usuarioInicial);
  const [errorUsuario, setErrorUsuario] = useState(errorUsuarioInicial);
  // Estado para controlar el inicio de sesión.
  const [sesionIniciada, setSesionIniciada] = useState(sesionIniciadaInicial);
  // Estado para la nueva contraseña que podrá elegir el usuario al restablecerla.
  const [nuevaContrasenya, setNuevaContrasenya] = useState(errorUsuarioInicial);
  //Función para exportar setNuevaContrasenya fuera del contexto.
  const cambiarContrasenya = (nuevaContrasenya) => {
    setNuevaContrasenya(nuevaContrasenya);
  };


  /* Función para crear cuenta mediante email y contraseña.  */
  const crearCuenta = async () => {
    try {
      const { email, password } = datosSesion;

      /* Por si el usuario es idiota y no completa los campos. */
      if (!email || !password) {
        throw new Error("Por favor, completa todos los campos.");
      }

      // Crear cuenta en Supabase
      const { data, error } = await supabaseConexion.auth.signUp({
        email,
        password,
      });

      if (error) {
        throw error;
      }

      Swal.fire({
        title: "¡Cuenta creada exitosamente!",
        text: "Revisa tu correo electrónico para iniciar sesión.",
        icon: 'success',
        confirmButtonText: 'Aceptar',
        showConfirmButton: true
      })
      setErrorUsuario(errorUsuarioInicial);

    } catch (error) {
      setErrorUsuario(error.message);
    }
  };


  /* Función para cerrar la sesión actual de un usuario.*/

  const cerrarSesion = async () => {
    try {
      // Para cerrar la sesión en el servidor de Supabase.
      await supabaseConexion.auth.signOut();
      // Establezco el usuario a su estado inicial, a 0.
      setUsuario(usuarioInicial);
      // Redirijo al usuario a la página de inicio.
      navegar("/login");
      // Y borro los datos de su sesión.
      setDatosSesion(datosSesionInicial);

    } catch (error) {
      setErrorUsuario(error.message);
    }
  };


  /* Función para obtener los datos del usuario/a que ha iniciado la sesión y actualizar el estado. */
  const obtenerUsuario = async () => {
    try {
      // Obtenemos los datos del usuario autenticado, he asignado unos alias para que sea más fácil de entender.
      const { data: datosSesion, error: errorSesion } = await supabaseConexion.auth.getUser();

      /* Comprobación de errores. */
      if (errorSesion || !datosSesion) {
        throw new Error("Ha habido un error en con la sesión.");
      }

      // Actualizamos el estado de usuario con los datos obtenidos.
      setUsuario(datosSesion.user);
      // Y limpiamos los posibles errores que se le hayan mostrado al usuario.
      setErrorUsuario(errorUsuarioInicial);
      
    } catch (error) {
      setErrorUsuario(error.message);
    }
  };


  /* Para iniciar la sesión del usuario. */
  const iniciarSesion = async () => {
    try {
      /* Desestructuro las claves de la sesión. */
      const { email, password } = datosSesion;
      
      /* Comprobación por si el usuario es idiota. */
      if (!email || !password) {
        throw new Error("Por favor, completa todos los campos.");
      }

      // Para iniciar sesión en el servidor de supabase con el email.
      const { data: datosUsuario, error } = await supabaseConexion.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        throw new Error("Credenciales de inicio de sesión inválidas.");
      }

      setUsuario(datosUsuario.user); // Para establecer el estado de usuario con los datos obtenidos
      confirmacion();
      navegar("/"); // Redirigirlo a la página principal una vez haya iniciado sesión.
      setErrorUsuario(errorUsuarioInicial); // Y borrar los posibles errores que se le hayan mostrado al usuario.
      
    } catch (error) {
      setErrorUsuario(error.message);
    }
  };

  /* Mensaje de confirmación al usuario. */
  const confirmacion = () => {
    Swal.fire({
      title: 'Sesión iniciada.',
      icon: 'success',
      confirmButtonText: 'Aceptar',
      timer: 1500,
      showConfirmButton: false
    });
  }

  /* Función para hacer lo que dice, no hace falta explicarlo. */
  const restablecerContrasena = async () => {
    try {
      
      const { email } = datosSesion;
      /* Por si el usuario no escribe, le informamos. */
      if (!email) {
        throw new Error("Por favor, introduce tu correo electrónico.");
      }
      
      /* Recopilo el correo del usuario y especifico la URL de redireccionamiento para cuando le de clic al botón de restablecer contraseña en su correo. */
      const { data, error } = await supabaseConexion.auth.resetPasswordForEmail(email, {
        redirectTo: 'http://localhost:5173/cambiar-passwd',
      })

      if (error) {
        throw error;
      }

      Swal.fire({
        title: "¡Revisa tu correo!",
        text: "Te hemos enviado un email con las instrucciones para restablecer tu contraseña. Si no lo encuentras, revisa la carpeta de spam o correos no deseados.",
        icon: 'info',
        confirmButtonText: 'Aceptar',
        showConfirmButton: true
      })

      /* Si ha colocado bien su email, le informamos. */
      setErrorUsuario("Revisa tu correo electrónico para restablecer la contraseña.");
      navegar("/login"); // Y lo redirigimos a la página de inicio de sesión.
    } catch (error) {
      setErrorUsuario(error.message);
    }
  };
  
  /* Función para cambiar la constraseña del usuario a una nueva. */
  const actualizarContrasenya = async () => {
    try {
      /* Por si el usuario no introduce nada. */
      if (!nuevaContrasenya) {
        throw new Error("Por favor, introduce una nueva contraseña.");
      }

      /* Recopilamos la nueva contraseña del usuario y llamamos a updateUser para actualizar su contraseña. */
      const { error } = await supabaseConexion.auth.updateUser({
        password: nuevaContrasenya,
      });

      if (error) {
        throw error;
      }

      /* Le informamos si todo ha salido bien. */
      setErrorUsuario("¡Contraseña actualizada con éxito!");
      /* Y en 3 segundos lo redirijo al inicio y borro el mensaje. */
      setTimeout(() => {
        navegar("/");
        setErrorUsuario(errorUsuarioInicial);
      }, 3000);
    
    } catch (error) {
      setErrorUsuario(error.message);
    }
  };

  /* Función para actualizar los datos de un formulario al estado "datosSesion".*/
  const actualizarDato = (evento) => {
    const { name, value } = evento.target;
    setDatosSesion({ ...datosSesion, [name]: value });
  };

  useEffect(() => {
    const suscripcion = supabaseConexion.auth.onAuthStateChange(
      (event, session) => {
        /* Si existe la sesión, establezco el estado a true para saber que la sesión esta iniciada. */
        if (session) {
          /* Obtenemos los datos del usuario que ha iniciado sesión. */
          obtenerUsuario();
          setSesionIniciada(true);
        } else {
          // Si no hay sesión, establezco el estado a false.
          setSesionIniciada(false);
        }
      }
    );

  }, []); /* Para que se ejecute una sola vez, al cargar la página. */

 /* Para establecer el estado de errores a 0, al navegar por el sitio web. */
    useEffect(() => {
      if (errorUsuario.length) { 
          setErrorUsuario(errorUsuarioInicial);
      }
  }, [cambioDeRuta.pathname]) //pathname es la ruta actual, lo cual se comprueba siempre. Si hay errores, los dejo en 0.

  const datosAExportar = {
    crearCuenta,
    actualizarDato,
    errorUsuario,
    obtenerUsuario,
    iniciarSesion,
    usuario,
    cerrarSesion,
    sesionIniciada,
    restablecerContrasena,
    nuevaContrasenya,
    cambiarContrasenya,
    actualizarContrasenya
  };

  return (
    <contextoSesion.Provider value={datosAExportar}>
      {children}
    </contextoSesion.Provider>
  )
}

export default ProveedorSesion;
export { contextoSesion };