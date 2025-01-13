import React, { useState, useContext } from "react";
import "./CrearCuenta.css";
import { contextoUsuario } from "../../contextos/ProvedorUsuarios.jsx"; // Importar el contexto

const CrearCuenta = () => {
  const { enviarDatos, error, loading } = useContext(contextoUsuario); // Usar el contexto
  const [formData, setFormData] = useState({
    dni: "",
    nombre: "",
    apellidos: "",
    email: "",
    password: "",
    direccion: "",
    fecha_nacimiento: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCrearCuenta = async () => {
    const { dni, nombre, apellidos, email, password, direccion, fecha_nacimiento } = formData;
    if (dni && nombre && apellidos && email && password && direccion && fecha_nacimiento) {
      const respuesta = await enviarDatos(formData); // Enviar los datos al servidor
      if (respuesta) {
        alert("Cuenta creada con éxito.");
        setFormData({
          dni: "",
          nombre: "",
          apellidos: "",
          email: "",
          password: "",
          direccion: "",
          fecha_nacimiento: "",
        });
      }
    } else {
      alert("Por favor, complete todos los campos.");
    }
  };

  return (
    <div className="cuentaUsuario">
      <h2>Crea una nueva cuenta</h2>
      <label htmlFor="dni">DNI</label>
      <input
        type="text"
        name="dni"
        id="createdni"
        placeholder="Su DNI."
        value={formData.dni}
        onChange={handleChange}
      /><br />
      <label htmlFor="nombre">Nombre</label>
      <input
        type="text"
        name="nombre"
        id="createnombre"
        placeholder="Su nombre."
        value={formData.nombre}
        onChange={handleChange}
      /><br />
      <label htmlFor="apellidos">Apellidos</label>
      <input
        type="text"
        name="apellidos"
        id="createapellidos"
        placeholder="Sus apellidos."
        value={formData.apellidos}
        onChange={handleChange}
      /><br />
      <label htmlFor="email">Correo electrónico</label>
      <input
        type="email"
        name="email"
        id="createemail"
        placeholder="Su correo electrónico."
        value={formData.email}
        onChange={handleChange}
      /><br />
      <label htmlFor="password">Contraseña</label>
      <input
        type="password"
        name="password"
        id="createpassword"
        placeholder="Su contraseña."
        value={formData.password}
        onChange={handleChange}
      /><br />
      <label htmlFor="direccion">Dirección</label>
      <input
        type="text"
        name="direccion"
        id="createdireccion"
        placeholder="Su dirección."
        value={formData.direccion}
        onChange={handleChange}
      /><br />
      <label htmlFor="fecha_nacimiento">Fecha de nacimiento</label>
      <input
        type="date"
        name="fecha_nacimiento"
        id="createfechaNacimiento"
        value={formData.fecha_nacimiento}
        onChange={handleChange}
      />
      <button className="botonSesion" onClick={handleCrearCuenta}>
        Crear cuenta
      </button>

      {loading && <p>Enviando datos...</p>}
    </div>
  );
};

export default CrearCuenta;
