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


export { calcularMacronutrientes,precioPorKilo };