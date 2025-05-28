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

const getEnlaceClase = (pathname, ruta) => {
  const base = "dark:text-white font-bold px-3 py-1 rounded-lg transition-colors duration-300 hover:bg-purple hover:text-white";
  const activa = pathname === ruta ? "bg-purple text-white" : "";
  return `${base} ${activa}`;
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

// Valida un campo individual
const validarDatoRutina = ({ name, value }) => {
  const errores = [];
  if (name === 'nombre') {
    if (!value.trim()) errores.push('El nombre de la rutina es obligatorio.');
    if (value.length > 100) errores.push('El nombre no puede exceder 100 caracteres.');
  }
  if (name === 'descripcion') {
    if (!value.trim()) errores.push('La descripción es obligatoria.');
    if (value.length > 65535) errores.push('La descripción es demasiado larga.');
  }
  return errores;
};

const faqs = [
    {
      question: '¿Cómo puedo registrarme?',
      answer: 'Para registrarte, haz clic en el icono del usuario y después dale al botón de "Registrate" en el panel de la derecha e introduce tus datos.',
      link: '/usuario',
      textLink: 'Registrate aquí',
    },
    {
      question: '¿Es gratuito el uso de la plataforma?',
      answer: 'Sí, el acceso básico es gratuito. Ofreceremos planes premium con funciones avanzadas más tarde.',
    },
    {
      question: '¿Cómo puedo contactar con soporte?',
      answer: `Puedes escribirnos a moveon@gmail.com o llamar al teléfono +34 697 631 285.`,
      link: 'mailto:moveon@gmail.com',
      textLink: 'moveon@gmail.com',
    },
    {
      question: '¿Cómo puedo recuperar mi contraseña?',
      answer: 'Puedes restablecer tu contraseña desde la pantalla de inicio de sesión haciendo clic en “¿Olvidaste tu contraseña?”. Te enviaremos un enlace al correo con instrucciones.',
      link: '/recuperar-passwd',
      textLink: 'Recupérala aquí',
    },
    {
      question: '¿Puedo cambiar mi correo electrónico una vez registrado?',
      answer: 'Sí, puedes cambiar tu correo electrónico desde tu perfil en la sección correo electrónico dándole al botón de editar.',
      link: '/usuario-informacion',
      textLink: 'Ir a mi perfil',
    },
    {
      question: '¿Cómo elimino mi cuenta?',
      answer: 'Puedes solicitar la eliminación de tu cuenta desde la configuración del perfil. Recuerda que esta acción es irreversible.',
      link: '/usuario-informacion',
      textLink: 'Eliminar cuenta',
    },
    {
      question: '¿Puedo usar la aplicación desde el móvil?',
      answer: 'Sí, la plataforma está completamente adaptada para dispositivos móviles. Puedes acceder desde cualquier navegador móvil.',
    }
  ];

// Ejemplo de datos. En producción, podríamos cargar esto desde una API.
const recommendedSites = [
  {
    category: 'Nutrición',
    sites: [
      { name: 'MyFitnessPal', url: 'https://www.myfitnesspal.com', description: 'Calcula calorías y lleva tu diario nutricional.' },
      { name: 'Yuka', url: 'https://yuka.io', description: 'Analiza los productos alimentarios y cosméticos.' }
    ]
  },
  {
    category: 'Ejercicio',
    sites: [
      { name: 'Nike Training Club', url: 'https://www.nike.com/ntc-app', description: 'Rutinas guiadas por entrenadores.' },
      { name: 'Strava', url: 'https://www.strava.com', description: 'Registra y comparte tus actividades deportivas.' }
    ]
  },
  {
    category: 'Salud Mental',
    sites: [
      { name: 'Headspace', url: 'https://www.headspace.com', description: 'Meditaciones y ejercicios de mindfulness.' },
      { name: 'Calm', url: 'https://www.calm.com', description: 'Historias para dormir y música relajante.' }
    ]
  },
  {
    category: 'Dejar de Fumar',
    sites: [
      { name: 'Smoke Free', url: 'https://smokefreeapp.com', description: 'App para dejar de fumar con seguimiento de progresos.' },
      { name: 'QuitNow!', url: 'https://quitnow.app', description: 'Comunidad y estadísticas para mantener la motivación.' }
    ]
  },
  {
    category: 'Viajes y Alojamiento',
    sites: [
      { name: 'Booking.com', url: 'https://www.booking.com', description: 'Reserva hoteles y alojamientos en todo el mundo.' },
      { name: 'Skyscanner', url: 'https://www.skyscanner.es', description: 'Busca vuelos baratos y compara precios.' }
    ]
  }
];

const videos = [
  // Suiza
  { country: 'Suiza', url: 'https://www.youtube.com/watch?v=6jqFShnp2Ho' },
  { country: 'Suiza', url: 'https://www.youtube.com/watch?v=ez9a7ITtMEk' },
  { country: 'Suiza', url: 'https://www.youtube.com/watch?v=CBTFnQTHg68' },

  // Irlanda
  { country: 'Irlanda', url: 'https://www.youtube.com/watch?v=X-GPBeVxTAk' },
  { country: 'Irlanda', url: 'https://www.youtube.com/watch?v=JEDDKPxlgkk' },
  { country: 'Irlanda', url: 'https://www.youtube.com/watch?v=rcOXKX0ubak' },

  // Australia
  { country: 'Australia', url: 'https://www.youtube.com/watch?v=q4uYbRE8rks' },
  { country: 'Australia', url: 'https://www.youtube.com/watch?v=sqRt11Hl8Qs' },
  { country: 'Australia', url: 'https://www.youtube.com/watch?v=8AdpTaZO9Ns' },

  // Alemania
  { country: 'Alemania', url: 'https://www.youtube.com/watch?v=vfJsEMuZqb0' },
  { country: 'Alemania', url: 'https://www.youtube.com/watch?v=m4XsK7qnGAQ' },
  { country: 'Alemania', url: 'https://www.youtube.com/watch?v=qxST_Mr8zPM' },

  // Canadá
  { country: 'Canada', url: 'https://www.youtube.com/watch?v=2keVvJetlw0' },
  { country: 'Canada', url: 'https://www.youtube.com/watch?v=dEZsY-u-nac' },
  { country: 'Canada', url: 'https://www.youtube.com/watch?v=XAzifdoVuos' },

  // Reino Unido
  { country: 'UK', url: 'https://www.youtube.com/watch?v=puhJ-gXgXwc' },
  { country: 'UK', url: 'https://www.youtube.com/watch?v=02Rdks1kzWU' },
  { country: 'UK', url: 'https://www.youtube.com/watch?v=AW4O4lyLJS8' },

  // Países Bajos
  { country: 'Paises Bajos', url: 'https://www.youtube.com/watch?v=bTiSb6tepwQ' },
  { country: 'Paises Bajos', url: 'https://www.youtube.com/watch?v=N3gNpT5gNt0' },
  { country: 'Paises Bajos', url: 'https://www.youtube.com/watch?v=HsU4METIWVQ' },

  // Noruega
  { country: 'Noruega', url: 'https://www.youtube.com/watch?v=3xsce5P8qYY' },
  { country: 'Noruega', url: 'https://www.youtube.com/watch?v=Uw2hv4fhA6s' },
  { country: 'Noruega', url: 'https://www.youtube.com/watch?v=zpyHc1QCHZw' },

  // Estados Unidos
  { country: 'EEUU', url: 'https://www.youtube.com/watch?v=wrYZyOIuink' },
  { country: 'EEUU', url: 'https://www.youtube.com/watch?v=QDjveFoyV0Q' },
  { country: 'EEUU', url: 'https://www.youtube.com/watch?v=NhKIvBj65VI' },

  // Islandia
  { country: 'Islandia', url: 'https://www.youtube.com/watch?v=ugCZETv0Ahc' },
  { country: 'Islandia', url: 'https://www.youtube.com/watch?v=SKyWpg7UsJ8' },
  { country: 'Islandia', url: 'https://www.youtube.com/watch?v=PjVc6orrlvE' },
];

const getVideoId = (url) => {
  const match = url.match(/(?:v=|\/)([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : '';
};



export {
  validarRegistro, calcularMacronutrientes, precioPorKilo, validarCreacionAlimento, obtenerAlimentosVisibles, validarCrearLista,
  validarCamposDieta, validarDatoEjercicio, validarFormularioData, calcularMacrosAcumulados, compararConObjetivos, validarCampoUsuario,
  camposUsuario, getEnlaceClase, benefits, tips, calcularDuracion,validarDatoRutina, faqs, recommendedSites, videos, getVideoId
};