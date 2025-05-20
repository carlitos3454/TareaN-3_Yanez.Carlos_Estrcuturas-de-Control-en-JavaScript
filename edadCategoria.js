function ejecutarEdadCategoria() {
    let edad = parseInt(prompt("Ingresa tu edad:"));
    let mensaje = "";
//Funcion js para definir una edad en torno a un valor establecido para cada criterio como niño,adolescente y adulto mayor

    if (isNaN(edad)) {
        mensaje = "Por favor ingresa un número válido.";
    } else if (edad < 0) {
        mensaje = "Edad no válida";
    } else if (edad <= 12) {
        mensaje = "Niño";
    } else if (edad <= 17) {
        mensaje = "Adolescente";
    } else if (edad <= 59) {
        mensaje = "Adulto";
    } else {
        mensaje = "Adulto mayor";
    }

    console.log(mensaje); // Aquí se muestra el mensaje en la consola
}