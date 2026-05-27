//Muestra la hora actual en el header y la actualiza cada segundo
function actualizarReloj() {
    let ahora = new Date();
    let horas = ahora.getHours();
    let minutos = ahora.getMinutes();
    let segundos = ahora.getSeconds();

    if (horas < 10) horas = '0' + horas;
    if (minutos < 10) minutos = '0' + minutos;
    if (segundos < 10) segundos = '0' + segundos;
    
    document.getElementById('reloj').textContent = horas + ':' + minutos + ':' + segundos;
}

actualizarReloj();
setInterval(actualizarReloj, 1000);