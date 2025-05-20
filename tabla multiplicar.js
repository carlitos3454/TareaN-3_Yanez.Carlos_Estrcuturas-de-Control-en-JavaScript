function ejecutarTablaMultiplicar() {
    // Defini el uso de if y ciclos for para establecer la estutructura de las tablas de multiplicar.

    let numeroTexto = prompt("Escribe un número para ver su tabla de multiplicar:");

    if (numeroTexto === null || numeroTexto.trim() === "") {
        console.log("No ingresaste un número.");
        return;
    }

    let numero = parseInt(numeroTexto);

    if (isNaN(numero)) {
        console.log("Entrada no válida. Ingresa un número.");
        return;
    }

    let salida = `Tabla del ${numero}\n`;
    for (let i = 1; i <= 12; i++) {
        salida += `${numero} x ${i} = ${numero * i}\n`;
    }

    console.log(salida); // Mostrar toda la tabla en la consola
}