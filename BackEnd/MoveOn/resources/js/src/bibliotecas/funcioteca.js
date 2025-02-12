import anyadir from "../imagenes/anyadir-productos.png";
import borrar from "../imagenes/borrar-lista.png";
import ver from "../imagenes/ver-lista.png";
import coche from "../imagenes/coche.png";
import huellas from "../imagenes/huellas.png";

const generarUuidAleatorio = () => {
  return crypto.randomUUID();
};

// Función para generar un número aleatorio.
const generarNumeroAleatorio = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// Función para calcular el promedio de una propiedad en un array de objetos.
function calcularPromedio(array, propiedad) {
  let promedio = array.length && array.every(item => !isNaN(item[propiedad])) // Para comprobar si el valor también es numérico.
    ? (array.reduce((acc, item) => acc + item[propiedad], 0) / array.length).toFixed(2) // Redondeo a dos decimales el total.
    : "La propiedad indicada no tiene valor numérico"; // Si la propiedad no es un número devuelvo el mensaje.
  return promedio;
}

// Función específica para filtrar por nombre, precio o peso.
function filtrarProductos(array, propiedad, valor) {
  if (!['nombre', 'precio', 'peso'].includes(propiedad)) {
    throw new Error("Propiedad no válida.");
  }

  return array.filter((item) =>
    propiedad === 'nombre'
      ? item[propiedad].toLowerCase().includes(valor.toLowerCase())
      : item[propiedad] <= valor
  );
}


function ordenarProductos(array, propiedad, orden = 'asc') {
  if (!array.length) return []; // No ordeno si el array está vacío.

  // Creo una copia del array original.
  const arrayCopia = [...array];

  return arrayCopia.sort((a, b) => {
    if (a[propiedad] < b[propiedad]) return orden === 'asc' ? -1 : 1;
    if (a[propiedad] > b[propiedad]) return orden === 'asc' ? 1 : -1;
    return 0;
  });
}

// Función que valida los valores de los input del formulario de productos.
const validarDato = (elemento) => {
  // Elemento target desestructurado.
  const { name, value } = elemento;
  // Variable para almacenar los posibles errores de cada elemento.
  let erroresElemento = [];

  // Comprobaciones para cada uno de los elementos del formulario.
  switch (name) {
    case "nombre":
      // Comprobación por si no hay nada escrito.
      if (!value.length) {
        erroresElemento = [...erroresElemento, `El campo ${name} no tiene valores.`];
      }
      // Comprobación de los requisitos del campo.
      if (!/.{2,}/.test(value)) {
        erroresElemento = [
          ...erroresElemento,
          `El nombre debe contener al menos 2 caracteres.`,
        ];
      }
      break;
    case "peso":
      if (!value.length) {
        erroresElemento = [...erroresElemento, `El campo ${name} no tiene valores.`];
      }
      if (!/^\d+([.]\d{1,2})?$/.test(value)) {
        erroresElemento = [
          ...erroresElemento,
          `El peso debe tener mínimo un caracter numérico y como mucho dos decimales (Con un punto).`,
        ];
      }
      break;
    case "precio":
      if (!value.length) {
        erroresElemento = [...erroresElemento, `El campo ${name} no tiene valores.`];
      }
      if (!/^\d+([.]\d{1,2})?$/.test(value)) {
        erroresElemento = [
          ...erroresElemento,
          `El precio debe tener mínimo un caracter numérico y como mucho dos decimales (Con un punto).`,
        ];
      }
      break;
    case "descripcion":
      if (!value.length) {
        erroresElemento = [...erroresElemento, `El campo ${name} no tiene valores.`];
      }
      if (!/.{10,}/.test(value)) {
        erroresElemento = [
          ...erroresElemento,
          `La descripción debe tener mínimo 10 caracteres.`,
        ];
      }
      break;
  }
  // Devolvemos el listado de errores.
  return erroresElemento;
};

const validarNombre = (elemento) => {
  // Elemento target desestructurado.
  const { name, value } = elemento;
  // Variable para almacenar los posibles errores de cada elemento.
  let erroresElemento = [];

  // Comprobación por si no hay nada escrito en el value.
  if (!value.length) {
    erroresElemento = [...erroresElemento, `El nombre de la lista no tiene valores.`];
  }
  // Comprobación de los requisitos del campo.
  if (!/.{3,}/.test(value)) {
    erroresElemento = [
      ...erroresElemento,
      `El nombre de la lista debe contener al menos 3 caracteres.`,
    ];
  }

  // Devolvemos el listado de errores.
  return erroresElemento;
};

const generarRecomendacion = (boleano) => {
  // Array con 6 frases
  const frases = [
    "Coge el coche si no quieres dejarte la vida con las bolsas.",
    "Coge el coche, te pones la música a tope y vas a por la compra.",
    "Coge el coche, también tiene aire acondicionado, ¿necesitas más razones?",
    "Coge el coche si quieres conservar tus dedos, la sangre no te fluirá.",

    "Ve andando y así ves el ambiente y te da el aire.",
    "Ve andando, es la mejor forma de justificar ese chocolate extra.",
    "Ve andando y olvídate de los atascos... y de buscar aparcamiento.",
    "Ve andando y te quitas unos kilitos de más, gordo, digo feo.",
  ];

  // Selecciono las frases convenientes según sea true o false (A pie o en coche).
  const seleccionadas = boleano ? frases.slice(0, 4) : frases.slice(4);

  // Elegir una frase al azar de las seleccionadas
  const recomendacion = seleccionadas[Math.floor(Math.random() * seleccionadas.length)];

  return recomendacion;
};


const formatearFechaSB = (fechaString) => {
  if (!fechaString) return null;

  // Dividimos la fecha y la hora por la "T"
  const [fecha, tiempo] = fechaString.split("T");

  // Extraemos los componentes del tiempo sin los decimales
  const tiempoSinDecimales = tiempo.split(".")[0];

  // Extraemos los componentes de la fecha
  const [year, month, day] = fecha.split("-");

  // Formateamos en el orden deseado
  return `${day}-${month}-${year} ${tiempoSinDecimales}`;
};

const cargarImagenes = () => {
  return {
    anyadir,
    borrar,
    ver,
    coche,
    huellas,
  };
};

export {
  generarUuidAleatorio,
  generarNumeroAleatorio,
  calcularPromedio,
  filtrarProductos,
  ordenarProductos,
  validarDato,
  validarNombre,
  generarRecomendacion,
  formatearFechaSB,
  cargarImagenes
};
