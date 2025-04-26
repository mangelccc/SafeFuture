import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const DatoUsuario = ({ label, sublabel, campo, usuario, campoEditable, handleChange, handleGuardar }) => {
  return (
    <article className="sm:w-2/3 mx-8 mb-8 border border-gold text-white" data-key={campo}>
      <div className="bg-black3 py-4 px-8 font-bold text-xl flex justify-between">
        <p>{label}</p>
        <FontAwesomeIcon
          className="icon-pencil hover:text-turq transition duration-300 ease-in-out cursor-pointer hover:scale-110"
          icon={faPenToSquare}
        />
      </div>

      <div className="bg-black2 py-4 px-8 grid grid-cols-3">
        <span className="col-start-1">{sublabel}</span>

        <span className="col-start-2">
          {campoEditable && campoEditable.campo === campo ? (
            <>
              <input
                type="text"
                value={campoEditable.valor}
                onChange={handleChange}
                className="text-black px-2 py-1 rounded"
              />
              <button
                onClick={handleGuardar}
                className="ml-2 px-2 py-1 bg-gold text-black rounded"
              >
                Guardar
              </button>
            </>
          ) : (
            campo === "contrasena"
              ? (usuario?.[campo] ? "* * * * * * * * * * *" : "Contraseña no encontrada")
              : (usuario?.[campo] || `${sublabel} no encontrado`)
          )}
        </span>
      </div>
    </article>
  );
};

export default DatoUsuario;
