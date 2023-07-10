// Función para calcular el tiempo de descarga
function calcularTiempoDescarga() {
    // Obtener los valores del formulario
    var fileSize = parseFloat(document.getElementById("fileSize").value);
    var fileSizeUnit = document.getElementById("fileSizeUnit").value;
    var internetSpeed = parseFloat(document.getElementById("internetSpeed").value);
    var internetSpeedUnit = document.getElementById("internetSpeedUnit").value;

    // Verificar si falta algún valor o es igual a cero
    if (isNaN(fileSize) || fileSize === 0 || isNaN(internetSpeed) || internetSpeed === 0) {
        // Limpiar el resultado
        var resultElement = document.getElementById("result");
        resultElement.textContent = "";
        alert("No hay un valor valido");
        return;
    }

    // Convertir el tamaño del archivo a bytes
    if (fileSizeUnit === "KB") {
        fileSize *= 1024;
    } else if (fileSizeUnit === "MB") {
        fileSize *= 1024 * 1024;
    } else if (fileSizeUnit === "GB") {
        fileSize *= 1024 * 1024 * 1024;
    }

    // Convertir la velocidad de internet a bits por segundo
    if (internetSpeedUnit === "Kbps") {
        internetSpeed *= 1024;
    } else if (internetSpeedUnit === "Mbps") {
        internetSpeed *= 1024 * 1024;
    } else if (internetSpeedUnit === "Gbps") {
        internetSpeed *= 1024 * 1024 * 1024;
    }

    // Calcular el tiempo de descarga en segundos
    var downloadTime = fileSize * 8 / internetSpeed;

    // Convertir el tiempo de descarga a horas, minutos y segundos
    var hours = Math.floor(downloadTime / 3600);
    var minutes = Math.floor((downloadTime % 3600) / 60);
    var seconds = Math.floor(downloadTime % 60);

    // Mostrar el resultado
    var resultElement = document.getElementById("result");
    resultElement.textContent = "Tiempo de descarga: " + hours + "h " + minutes + "m " + seconds + "s";
}

// Asignar el evento click al botón de calcular
var calculateButton = document.getElementById("calculateButton");
calculateButton.addEventListener("click", calcularTiempoDescarga);
