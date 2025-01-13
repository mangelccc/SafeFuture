// Funciones para los evento onClick de los botones.
const anadirElementoInner = (referencia) => {
  // 1.- Se añade el código en innerHTML a través de su referencia.
  referencia.current.innerHTML += "<li>Nuevo elemento desde innerHTML.</li>";
};

const anadirElementoCrear = (referencia) => {
  // 1.- Se crea el nodo del tipo element (<p>).
  let li = document.createElement("li");
  // 2.- Se crea el nodo tipo texto.
  let texto = document.createTextNode("Nuevo elemento desde createElement.");
  // 3.- Se introduce el nodo texto en el nodo element.
  li.appendChild(texto);
  // 4.- Se añade el nodo element a través de su referencia.
  referencia.current.appendChild(li);
};

const borrarListado = (referencia) => {
  // Se cambia el valor del contenido del listado a cadena vacía (se borra).
  referencia.current.innerHTML = "";
};

const ponerAzul = (referenciaVDOM) => {
  // Se recibe la referencia VDOM como parámetro.
  referenciaVDOM.current.classList.toggle("azul");
};

export { anadirElementoCrear, anadirElementoInner, borrarListado, ponerAzul };
