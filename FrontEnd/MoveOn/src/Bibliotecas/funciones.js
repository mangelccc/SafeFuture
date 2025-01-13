const generarNombreAleatorio = () => {
  // Listas de nombres y apellidos
  let nombres = [
    "Juan",
    "María",
    "Carlos",
    "Ana",
    "Luis",
    "Laura",
    "Pedro",
    "Carmen",
  ];

  // Devolver un nombre aleatorio
  return nombres[Math.floor(Math.random() * nombres.length)];
};

const generarApellidosAleatorio = () => {
  // Listas de apellidos
  let apellidos = [
    "Gómez",
    "Pérez",
    "Rodríguez",
    "López",
    "Martínez",
    "González",
    "Sánchez",
    "Fernández",
  ];

  // Devolver un apellido aleatorio
  return apellidos[Math.floor(Math.random() * apellidos.length)];
};

const generarVerduraAleatorio = () => {
  // Listas de verduras
  let verduras = [
    "Acelga",
    "Ajo",
    "Apio",
    "Berro",
    "Berenjena",
    "Calabaza",
    "Cebolla",
    "Coliflor",
    "Chayote",
    "Chícharo",
    "Col",
    "Colifrol",
    "Chile poblano",
    "Ejote",
    "Elote",
    "Espinaca",
    "Jitomate",
    "Lechuga",
    "Pepino",
    "Rábano",
    "Nopales",
    "Verdolagas",
    "Tomate",
    "Zanahoria",
  ];

  // Devolver una verdura aleatoria
  return verduras[Math.floor(Math.random() * verduras.length)];
};

const generarFrutaAleatorio = () => {
  // Listas de frutas
  var frutas = [
    "Manzana",
    "Plátano",
    "Fresa",
    "Uva",
    "Kiwi",
    "Naranja",
    "Mango",
    "Pera",
    "Cereza",
    "Sandía",
    "Piña",
    "Melón",
    "Limón",
    "Coco",
    "Granada",
    "Mandarina",
    "Fruta de la pasión",
    "Frambuesa",
    "Papaya",
    "Melocotón",
  ];

  // Devolver una fruta aleatoria
  return frutas[Math.floor(Math.random() * frutas.length)];
};

const generarUuidAleatorio = () => {
  return crypto.randomUUID();
};

// Función para generar un número aleatorio.
const generarNumeroAleatorio = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export {
  generarNombreAleatorio,
  generarApellidosAleatorio,
  generarVerduraAleatorio,
  generarUuidAleatorio,
  generarNumeroAleatorio,
  generarFrutaAleatorio,
};
