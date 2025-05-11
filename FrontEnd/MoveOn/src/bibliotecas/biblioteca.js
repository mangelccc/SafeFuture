// Función para calcular macronutrientes
const calcularMacronutrientes = ({ peso, altura, edad, sexo, actividad, objetivo }) => {
  let tmb;

  if (sexo === 'hombre') {
    tmb = 10 * peso + 6.25 * altura - 5 * edad + 5;
  } else {
    tmb = 10 * peso + 6.25 * altura - 5 * edad - 161;
  }

  // Factores de actividad
  const factoresActividad = {
    Sedentario: 1.2,
    Ligero: 1.375,
    Moderado: 1.55,
    Activo: 1.725,
    Muy_activo: 1.9
  };

  const caloriasMantenimiento = tmb * (factoresActividad[actividad] || 1.2);
  let caloriasObjetivo;

  if (objetivo === 'Perder') {
    caloriasObjetivo = caloriasMantenimiento - 500;
  } else if (objetivo === 'Ganar') {
    caloriasObjetivo = caloriasMantenimiento + 500;
  } else {
    caloriasObjetivo = caloriasMantenimiento;
  }

  // División de macronutrientes
  const proteinas = peso * 2;
  const grasas = Math.round((caloriasObjetivo * 0.25) / 9 * 100) / 100;
  const carbohidratos = Math.max(0, Math.round(((caloriasObjetivo - (proteinas * 4 + grasas * 9)) / 4) * 100) / 100);

  return {
    caloriasObjetivo: Math.round(caloriasObjetivo),
    proteinas: Math.round(proteinas),
    grasas,
    carbohidratos: Math.round(carbohidratos)
  };
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


const validarRegistro = (datos, tipo = "registro") => {
  const errores = {};

  // Validar el email
  if (!datos.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(datos.email)) {
    errores.email = "El email no tiene un formato válido.";
  }

  // Validar la contraseña
  if (!datos.password) {
    errores.password = "La contraseña es obligatoria.";
  } else {
    if (datos.password.length < 8) {
      errores.password = "La contraseña debe tener al menos 8 caracteres.";
    } else if (!/[A-Z]/.test(datos.password)) {
      errores.password = "La contraseña debe contener al menos una letra mayúscula.";
    }
  }

  if (tipo === "registro") {
    // Validar el nombre
    if (!datos.nombre || datos.nombre.trim().length <= 3) {
      errores.nombre = "El nombre debe contener más de 3 caracteres.";
    }

    // Validar la edad
    if (!datos.edad || isNaN(datos.edad) || Number(datos.edad) < 18 || Number(datos.edad) > 64) {
      errores.edad = "Debe ingresar una edad válida entre 18 y 64 años.";
    }

    // Validar el sexo
    if (!datos.sexo || !["hombre", "mujer"].includes(datos.sexo.toLowerCase())) {
      errores.sexo = "Debe seleccionar un sexo válido.";
    }
  }
  return errores;
};


const validarCampoUsuario = (campo, valor) => {
  let error = "";

  switch (campo) {
    case "nombre":
      if (!valor || valor.trim().length <= 3) {
        error = "El nombre debe contener más de 3 caracteres.";
      }
      break;

    case "correo":
      if (!valor || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor)) {
        error = "El correo no tiene un formato válido.";
      }
      break;

    case "contrasena":
      if (!valor) {
        error = "La contraseña es obligatoria.";
      } else if (valor.length < 8) {
        error = "La contraseña debe tener al menos 8 caracteres.";
      }
      break;

    case "edad":
      if (!valor || isNaN(valor) || Number(valor) < 18 || Number(valor) > 64) {
        error = "Debe ingresar una edad válida entre 18 y 64 años.";
      }
      break;

    case "sexo":
      if (!valor || !["hombre", "mujer"].includes(valor.toLowerCase())) {
        error = "Debe seleccionar un sexo válido.";
      }
      break;

    default:
      break;
  }

  return error;
};

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

const validarDatoEjercicio = (elemento) => {
  const { name, value } = elemento;
  let erroresElemento = [];

  if (name === "nombre") {
    if (!value.length) {
      erroresElemento = [
        ...erroresElemento,
        `El campo ${name} debe tener un valor.`,
      ];
    }
    if (value.length > 100) {
      erroresElemento = [
        ...erroresElemento,
        `El campo ${name} no puede superar los 100 caracteres.`,
      ];
    }
  }

  if (name === "descripcion") {
    if (!value.length) {
      erroresElemento = [
        ...erroresElemento,
        `El campo ${name} debe tener un valor.`,
      ];
    }
    if (value.length > 65535) {
      erroresElemento = [
        ...erroresElemento,
        `La descripción es demasiado larga.`,
      ];
    }
  }

  if (name === "imagen_url") {
    if (value.length > 255) {
      erroresElemento = [
        ...erroresElemento,
        `La URL de la imagen no puede superar los 255 caracteres.`,
      ];
    }
    if (value && !/^https?:\/\/.+/.test(value)) {
      erroresElemento = [
        ...erroresElemento,
        `La URL de la imagen no es válida.`,
      ];
    }
  }

  if (name === "video_url") {
    if (value.length > 255) {
      erroresElemento = [
        ...erroresElemento,
        `La URL del video no puede superar los 255 caracteres.`,
      ];
    }
    if (value && !/^https?:\/\/.+/.test(value)) {
      erroresElemento = [
        ...erroresElemento,
        `La URL del video no es válida.`,
      ];
    }
  }

  if (name === "grupo_muscular") {
    if (!value) { // En el select, el valor vacío es "" que es falsy.
      erroresElemento = [
        ...erroresElemento,
        `Debes seleccionar un grupo muscular.`,
      ];
    }
    if (value.length > 100) {
      erroresElemento = [
        ...erroresElemento,
        `El campo grupo muscular no puede superar los 100 caracteres.`,
      ];
    }
  }
  console.log(erroresElemento);

  return erroresElemento;
};


//Validar el siguiente formulario para la dieta personalizada al usuario

const validarFormularioData = (formularioData) => {
  const errores = {};

  // Validar el campo peso
  if (!formularioData.peso) {
    errores.peso = "El peso es obligatorio.";
  } else if (parseFloat(formularioData.peso) < 30 || parseFloat(formularioData.peso) > 300) {
    errores.peso = "El peso debe estar entre 30 y 300 kg.";
  }

  // Validar el campo altura
  if (!formularioData.altura) {
    errores.altura = "La altura es obligatoria.";
  } else if (parseFloat(formularioData.altura) < 0.5 || parseFloat(formularioData.altura) > 2.5) {
    errores.altura = "La altura debe estar entre 0.50 y 2.50 m.";
  }

  // Validar el select de actividad
  if (!formularioData.actividad) {
    errores.actividad = "Debes seleccionar un nivel de actividad.";
  }

  // Validar el select de objetivo
  if (!formularioData.objetivo) {
    errores.objetivo = "Debes seleccionar un objetivo.";
  }

  return errores;
}


// Cálculo de macronutrientes acumulados
const calcularMacrosAcumulados = (alimentosSeleccionados) => {
  return alimentosSeleccionados.reduce(
    (acc, item) => {
      acc.proteinas += parseFloat(item.proteinas) * item.cantidad;
      acc.carbohidratos += parseFloat(item.carbohidratos) * item.cantidad;
      acc.grasas += parseFloat(item.grasas) * item.cantidad;
      acc.calorias += parseFloat(item.calorias) * item.cantidad;
      return acc;
    },
    { proteinas: 0, carbohidratos: 0, grasas: 0, calorias: 0 }
  );
};

// Comparar valores con objetivo para colorear
const compararConObjetivos = (valor, objetivo) => {
  const diff = Math.abs(valor - objetivo);
  if (diff <= objetivo * 0.1) return "green";
  if (diff <= objetivo * 0.2) return "orange";
  return "red";
};

const calcularDuracion = (createdAt, updatedAt) => {
  const inicio = new Date(createdAt);
  const fin    = new Date(updatedAt);
  const diffMs = fin - inicio; 

  const dias     = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const horas    = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos  = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diffMs % (1000 * 60)) / 1000);

  return `${dias}d ${horas}h ${minutos}m ${segundos}s`;
};


const camposUsuario = [
  { campo: "nombre", label: "Nombre personal", sublabel: "Nombre" },
  { campo: "correo", label: "Correo electrónico", sublabel: "Correo" },
  { campo: "contrasena", label: "Contraseña", sublabel: "Contraseña" },
  { campo: "edad", label: "Edad", sublabel: "Edad" },
  { campo: "sexo", label: "Sexo", sublabel: "Sexo" }
];

const benefits = [
  { title: '20 minutos', description: 'Tu ritmo cardíaco vuelve a la normalidad.' },
  { title: '24 horas', description: 'Mejora la función pulmonar y la presión arterial.' },
  { title: '1 año', description: 'El riesgo de enfermedad cardíaca se reduce a la mitad.' },
  { title: '5 años', description: 'El riesgo de accidente cerebrovascular es similar al de un no fumador.' },
];

const tips = [
  'Establece una fecha para dejarlo y cúmplela.',
  'Busca apoyo: familiares, amigos o grupos de ayuda.',
  'Identifica y evita los desencadenantes.',
  'Utiliza técnicas de distracción (ejercicio, hobbies).',
  'Considera reemplazos de nicotina o asesoramiento profesional.',
];

export {
  validarRegistro, calcularMacronutrientes, precioPorKilo, validarCreacionAlimento, obtenerAlimentosVisibles, validarCrearLista,
  validarCamposDieta, validarDatoEjercicio, validarFormularioData, calcularMacrosAcumulados, compararConObjetivos, validarCampoUsuario,
  camposUsuario, benefits, tips, calcularDuracion
};