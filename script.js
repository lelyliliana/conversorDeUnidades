// Función principal que se ejecuta cuando el usuario hace clic en "Convertir"
function convertir() {
    // Obtenemos el valor introducido por el usuario
    let valor = parseFloat(document.getElementById('valor').value);

    // Obtenemos el tipo de conversión seleccionada en el menú desplegable
    let tipoConversion = document.getElementById('tipoConversion').value;

    // Variable donde almacenaremos el resultado
    let resultado = 0;

    // Condicionales para realizar la conversión dependiendo del tipo seleccionado
    if (tipoConversion === 'mToKm') {
        // Convertir metros a kilómetros
        resultado = valor / 1000;
        mostrarResultado(`${valor} metros son ${resultado} kilómetros`);
    } else if (tipoConversion === 'kmToM') {
        // Convertir kilómetros a metros
        resultado = valor * 1000;
        mostrarResultado(`${valor} kilómetros son ${resultado} metros`);
    } else if (tipoConversion === 'cToF') {
        // Convertir grados Celsius a Fahrenheit
        resultado = (valor * 9/5) + 32;
        mostrarResultado(`${valor}°C son ${resultado}°F`);
    } else if (tipoConversion === 'fToC') {
        // Convertir grados Fahrenheit a Celsius
        resultado = (valor - 32) * 5/9;
        mostrarResultado(`${valor}°F son ${resultado}°C`);
    } else {
        mostrarResultado('Selección de conversión no válida');
    }
}

// Función para mostrar el resultado en el div correspondiente
function mostrarResultado(mensaje) {
    // Asignamos el mensaje generado al div con id "resultado"
    document.getElementById('resultado').innerHTML = mensaje;
}

