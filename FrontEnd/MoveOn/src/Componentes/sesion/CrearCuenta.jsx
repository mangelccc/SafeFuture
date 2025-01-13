import React, { useState } from "react";
import "./CrearCuenta.css";

const CrearCuenta = () => {
  const [formData, setFormData] = useState({
    dni: "",
    nombre: "",
    apellidos: "",
    email: "",
    password: "",
    direccion: "",
    fecha_nacimiento: "",
  });

  const [usuarios, setUsuarios] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCrearCuenta = () => {
    const { dni, nombre, apellidos, email, password, direccion, fecha_nacimiento } = formData;
    if (dni && nombre && apellidos && email && password && direccion && fecha_nacimiento) {
      setUsuarios([...usuarios, formData]); // Agregar al array de usuarios
      setFormData({
        dni: "",
        nombre: "",
        apellidos: "",
        email: "",
        password: "",
        direccion: "",
        fecha_nacimiento: "",
      }); // Limpiar los inputs
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

      {/* Mostrar los usuarios creados */}
      <div className="usuariosCreados">
        <h3>Usuarios creados:</h3>
        {usuarios.length === 0 ? (
          <p>No hay usuarios creados aún.</p>
        ) : (
          <ul>
            {usuarios.map((usuario, index) => (
              <li key={index}>
                <strong>DNI:</strong> {usuario.dni} <br />
                <strong>Nombre:</strong> {usuario.nombre} <br />
                <strong>Apellidos:</strong> {usuario.apellidos} <br />
                <strong>Email:</strong> {usuario.email} <br />
                <strong>Contraseña:</strong> {usuario.password} <br />
                <strong>Dirección:</strong> {usuario.direccion} <br />
                <strong>Fecha de nacimiento:</strong> {usuario.fecha_nacimiento}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CrearCuenta;
