// Función para calcular macronutrientes
const calcularMacronutrientes = ({ peso, altura, edad, sexo, actividad, objetivo }) => {
  let tmb;

  if (sexo === 'masculino') {
    tmb = 10 * peso + 6.25 * altura - 5 * edad + 5;
  } else {
    tmb = 10 * peso + 6.25 * altura - 5 * edad - 161;
  }

  // Factores de actividad
  const factoresActividad = {
    sedentario: 1.2,
    ligero: 1.375,
    moderado: 1.55,
    activo: 1.725,
    muy_activo: 1.9
  };

  const caloriasMantenimiento = tmb * (factoresActividad[actividad] || 1.2);
  let caloriasObjetivo;

  if (objetivo === 'perder_peso') {
    caloriasObjetivo = caloriasMantenimiento - 500;
  } else if (objetivo === 'ganar_musculo') {
    caloriasObjetivo = caloriasMantenimiento + 500;
  } else {
    caloriasObjetivo = caloriasMantenimiento;
  }

  // División de macronutrientes
  const proteinas = peso * 2;
  const grasas = (caloriasObjetivo * 0.25) / 9;
  const carbohidratos = (caloriasObjetivo - (proteinas * 4 + grasas * 9)) / 4;

  return { caloriasObjetivo, proteinas, grasas, carbohidratos };
};



const precioPorKilo = (pesoKg, precioEuros) => {
  return parseFloat((precioEuros / pesoKg).toFixed(2));
};

const validarCreacionAlimento = (alimento) => {
  if (!alimento.nombre || alimento.nombre === "") {
    return "El nombre es obligatorio.";
  }
  if (!alimento.imagen_url || alimento.imagen_url === "") {
    return "La URL de la imagen es obligatoria.";
  }
  if (!alimento.descripcion || alimento.descripcion === "") {
    return "La descripción es obligatoria.";
  }
  if (!alimento.categoria || alimento.categoria === "") {
    return "La categoría es obligatoria.";
  }
  if (alimento.peso_kg <= 0) {
    return "El peso debe ser mayor que 0.";
  }
  if (alimento.precio_euros <= 0) {
    return "El precio debe ser mayor que 0.";
  }
  if (!alimento.codigo_barras || alimento.codigo_barras === "") {
    return "El código de barras es obligatorio.";
  }
  if (
    alimento.hidratos < 0 ||
    alimento.grasas < 0 ||
    alimento.proteinas < 0 ||
    alimento.calorias < 0
  ) {
    return "Los valores nutricionales no pueden ser negativos.";
  }
  return null; // Si no hay errores, devuelve null
};

const obtenerAlimentosVisibles = (listado, filtro, orden) => {
  return listado
    .filter((alimento) =>
      filtro
        ? alimento.nombre.toLowerCase().startsWith(filtro.toLowerCase())
        : true
    )
    .sort((a, b) => {
      if (!orden) return 0;
      if (orden === "nombre") {
        return a.nombre.localeCompare(b.nombre, "es", { sensitivity: "base" });
      }
      if (orden === "peso") {
        return a.peso_kg - b.peso_kg;
      }
      if (orden === "precio") {
        return a.precio_euros - b.precio_euros;
      }
      return 0;
    });
};
const validarCrearLista = (nombreLista, alimentosLista, usuario) => {
  if (!nombreLista || nombreLista.trim() === "") {
    throw new Error("El nombre de la lista es obligatorio.");
  }
  if (!alimentosLista || alimentosLista.length === 0) {
    throw new Error("Debes seleccionar al menos un alimento.");
  }
  if (!usuario?.id) {
    throw new Error("No se encontró el usuario autenticado.");
  }
};


const validarRegistro = (datos) => {
  let errores = [];

  // Validar el nombre: debe existir y tener más de 3 caracteres (después de eliminar espacios).
  if (!datos.nombre || datos.nombre.trim().length <= 3) {
    errores = [...errores, "El nombre debe contener más de 3 caracteres"];
  }

  // Validar el email: debe tener un formato de email válido.
  if (
    !datos.email ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(datos.email)
  ) {
    errores = [...errores, "El email no tiene un formato válido"];
  }

  // Validar la contraseña: debe tener al menos 8 caracteres.
  if (!datos.password || datos.password.length < 8) {
    errores = [...errores, "La contraseña debe tener al menos 8 caracteres"];
  }

  // Validar la contraseña: Debe contener al menos una letra mayúscula.
  if (!datos.password || !/[A-Z]/.test(datos.password)) {
    errores = [
      ...errores,
      "La contraseña debe contener al menos una letra mayúscula",
    ];
  }

  // Validar la edad: debe ser un número mayor que 0.
  if (!datos.edad || isNaN(datos.edad) || Number(datos.edad) <= 0) {
    errores = [...errores, "Debe ingresar una edad válida"];
  }

  // Validar el sexo: debe ser "hombre" o "mujer".
  if (
    !datos.sexo ||
    !["hombre", "mujer"].includes(datos.sexo.toLowerCase())
  ) {
    errores = [...errores, "Debe seleccionar un sexo válido"];
  }

  // Devolver los errores formateados en una cadena, o una cadena vacía si no hay errores.
  return errores.length && `Errores encontrados:\n${errores.map(e => ` ${e}`).toString()}`;
};

// Devolver los errores ya formateados como una cadena de texto
/* return errores.length && `Errores encontrados:\n${errores.map(e => ` ${e}`).toString()}`; */

//!DIETAS DEBAJO

const validarCamposDieta = (elemento) => {
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
      if (!/.{3,}/.test(value)) {
        erroresElemento = [
          ...erroresElemento,
          `El nombre debe contener al menos 3 caracteres.`,
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

  }
  // Devolvemos el listado de errores.
  return erroresElemento;
};


export {
  validarRegistro, calcularMacronutrientes, precioPorKilo, validarCreacionAlimento, obtenerAlimentosVisibles, validarCrearLista,
  validarCamposDieta
};