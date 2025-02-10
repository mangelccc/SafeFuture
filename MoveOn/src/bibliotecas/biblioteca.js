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
  


export { calcularMacronutrientes,precioPorKilo, validarCreacionAlimento,obtenerAlimentosVisibles,validarCrearLista };