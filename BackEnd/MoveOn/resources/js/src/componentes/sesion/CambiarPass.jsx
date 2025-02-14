import React from "react";
import useContexto from '../../hooks/useContexto.jsx'
import Errores from "../Errores.jsx";

const CambiarPass = () => {
  const { errorUsuario, cambiarContrasenya, actualizarContrasenya } = useContexto("sesion");
  

  return (
    <div className="cambiarContrasena">
      <h2>Restablecer contraseña</h2>
      <p>Introduce tu nueva contraseña para actualizarla.</p>

      <label htmlFor="nuevaContrasenya">Nueva contraseña</label>
      <input
        type="password"
        name="nuevaContrasenya"
        id="nuevaContrasenya"
        placeholder="Nueva contraseña"
        onChange={(e) => cambiarContrasenya(e.target.value)} /* Utilizo el evento para asignar el valor del input al setter del password. */
      />

      <button
        className="botonActualizar"
        onClick={(e) => {
          actualizarContrasenya()
        }}
      >
        Actualizar contraseña
      </button>

      {errorUsuario && <Errores>{errorUsuario}</Errores>}
    </div>
  );
};

export default CambiarPass;
