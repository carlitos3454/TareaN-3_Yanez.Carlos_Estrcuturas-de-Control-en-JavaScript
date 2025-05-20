function ejecutarTablasSeleccionadas() {
    //Se define a traves del uso de la consola con funciones if y for 
    // las tablas relacionadas a traves de sistemas par o impar.
    let tipo = prompt("¿Quieres ver las tablas de multiplicar de números pares o impares? (Escribe 'pares' o 'impares')");

    if (!tipo) {
        console.log("No ingresaste una opción.");
        return;
    }

    tipo = tipo.toLowerCase().trim();
    let salida = "";

    if (tipo === "pares") {
        for (let i = 2; i <= 10; i += 2) {
            salida += `Tabla del ${i}\n`;
            for (let j = 1; j <= 10; j++) {
                salida += `${i} x ${j} = ${i * j}\n`;
            }
            salida += "------------\n";
        }
    } else if (tipo === "impares") {
        for (let i = 1; i <= 9; i += 2) {
            salida += `Tabla del ${i}\n`;
            for (let j = 1; j <= 10; j++) {
                salida += `${i} x ${j} = ${i * j}\n`;
            }
            salida += "------------\n";
        }
    } else {
        salida = "Opción no válida. Escribe 'pares' o 'impares'.";
    }

    console.log(salida); // Mostrar el resultado en la consola
}