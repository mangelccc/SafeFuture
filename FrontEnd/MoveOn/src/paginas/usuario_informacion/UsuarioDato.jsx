import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

// UsuarioDato.jsx
const DatoUsuario = ({ label, sublabel, campo, usuario, campoEditable, cambiarDato, guardarDato, cancelarDato }) => {
  const esEditable = campoEditable && campoEditable.campo === campo;

  return (
    <article className="sm:w-2/3 mx-8 mb-8 border border-gold text-white" data-key={campo}>
      <div className="bg-black3 py-4 px-8 font-bold text-xl flex justify-between">
        <p>{label}</p>
        <FontAwesomeIcon
          className="icon-pencil hover:text-turq transition duration-300 ease-in-out cursor-pointer hover:scale-110"
          icon={faPenToSquare}
          onClick={() => cambiarDato({ target: { name: campo, value: usuario[campo] } })}
        />
      </div>

      <div className="bg-black2 py-4 px-8 flex hsm:flex-col hsm:gap-2 sm:justify-between">
        <span>{sublabel}</span>

        <span className="sm:self-end flex gap-4 flex-wrap">
          {esEditable ? (
            <>
              {campo === "sexo" ? (
                <select
                  name={campo}
                  value={campoEditable.valor}
                  onChange={cambiarDato}
                  className="ml-4 hsm:ml-0 text-black px-2 py-1 rounded"
                >
                  <option value="" disabled>Selecciona sexo</option>
                  <option value="hombre">Hombre</option>
                  <option value="mujer">Mujer</option>
                </select>
              ) : campo === "contrasena" ? (
                <input
                  type="password"
                  name={campo}
                  placeholder="Nueva contraseña"
                  value={campoEditable.valor}
                  onChange={cambiarDato}
                  className="ml-4 hsm:ml-0 text-black px-2 py-1 rounded"
                />
              ) : (
                <input
                  type="text"
                  name={campo}
                  value={campoEditable.valor}
                  onChange={cambiarDato}
                  className="ml-4 hsm:ml-0 text-black px-2 py-1 rounded"
                />
              )}
              <button
                onClick={guardarDato}
                className="px-2 py-1 bg-gold text-black rounded"
              >
                Guardar
              </button>
              <button
                onClick={cancelarDato}
                className="px-2 py-1 bg-red-600 text-white rounded"
              >
                Cancelar
              </button>
            </>
          ) : (
            campo === "contrasena"
              ? (usuario[campo] = "••••••••••••")
              : (usuario[campo] ?? `${sublabel} no encontrado`)
          )}
        </span>
      </div>
    </article>
  );
};

export default DatoUsuario;
