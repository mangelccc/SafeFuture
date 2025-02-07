import React from "react";

const AlimentoListado = ({ alimentosLista, sumarAlimento, restarAlimento }) => {
  // Manejador único para todos los clics dentro del contenedor
  const manejarClic = (e) => {
    // Encuentra el elemento padre más cercano con la clase "alimento-seleccionado"
    const alimentoElemento = e.target.closest(".alimento-seleccionado");

    // Si no encuentra el contenedor del alimento, salir
    if (!alimentoElemento) return;

    // Extraer el ID desde el atributo dataset del contenedor padre
    const id = alimentoElemento.dataset.id;

    // Verifica si se hizo clic en el botón de sumar
    if (e.target.classList.contains("btn-sumar")) {
      sumarAlimento(id);
    }

    // Verifica si se hizo clic en el botón de restar
    if (e.target.classList.contains("btn-restar")) {
      restarAlimento(id);
    }
  };

  return (
    // Div contenedor donde se centralizan los eventos
    <div onClick={manejarClic}>
      {alimentosLista.length > 0 ? (
        alimentosLista.map((alimento) => (
          // Se usa dataset.id en el contenedor en lugar de ponerlo en cada botón
          <div key={alimento.id} className="alimento-seleccionado" data-id={alimento.id}>
            <img src={alimento.imagen_url} alt={alimento.nombre} />
            <p>{alimento.nombre}</p>
            <p>{alimento.peso_kg} KG</p>
            <p>{alimento.precio_euros} $</p>
            <div className="alimento-seleccionado-botones">
              {/* Los botones ahora no tienen data-id, solo clases */}
              <button className="btn-sumar">+</button>
              <button className="btn-restar">-</button>
              {alimento.quantity}
            </div>
          </div>
        ))
      ) : (
        <p>No hay alimentos en la lista.</p>
      )}
    </div>
  );
};

export default AlimentoListado;
