// Generar un número del 1 al 1000
const generarNumRand1000 = () => Math.floor(Math.random() * 1000) + 1;

// Para generar un color en hexadecimal aleatorio.
const generarColorHexa = () => {
    const letras = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
};

// Funciones creadas para poder compartir el contador.
let contadorIni = 0;
const incrementarCont = () => {
    contadorIni++;
};
const decrementarCont = () => {
    contadorIni--;
};
const obtenerCont = () => {
    return contadorIni;
};

//Devuelve un UUID aleatorio para identificar elementos.
const generarUuidAleatorio = () => {
    return crypto.randomUUID();
};

// Función para ocultar una clase.
const ocultarContenido = (referencia) => {
    referencia.current.classList.toggle("ocultar");
}

export {
    generarNumRand1000, generarColorHexa, incrementarCont, decrementarCont,
    obtenerCont, generarUuidAleatorio, ocultarContenido
}

