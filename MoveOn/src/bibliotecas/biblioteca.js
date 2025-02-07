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
// Manejador único para todos los clics dentro del contenedor
const manejarClicAlimentoListado = (e) => {
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


export { calcularMacronutrientes,precioPorKilo, manejarClicAlimentoListado };