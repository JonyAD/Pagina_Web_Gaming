let estadisticas = [
    { id: 'stat-juegos', objetivo: 5, sufijo: '' },
    { id: 'stat-partidas', objetivo: 1284, sufijo: '' },
    { id: 'stat-horas', objetivo: 436, sufijo: 'h' },
    { id: 'stat-usuarios', objetivo: 248, sufijo: '' }
];

//Cada contador sube desde 0 hasta su valor real al cargar el inicio
function animarContadores() {
    for (let i = 0; i < estadisticas.length; i++) {
        let dato = estadisticas[i];
        let elemento = document.getElementById(dato.id);
        let valor = 0;
        let paso = 5;

        let animacion = setInterval(function () {
            valor += paso;
            if (valor >= dato.objetivo) {
                valor = dato.objetivo;
                clearInterval(animacion);
            }
            elemento.textContent = valor + dato.sufijo;
        }, 25);
    }
}

window.addEventListener('load', animarContadores);