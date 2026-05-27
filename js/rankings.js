let datosRanking = [
    { juego: "Elden Ring", porcentaje: 90, icono: '../img/Icono_EldenRing.png' },
    { juego: "Baldur's Gate 3", porcentaje: 75, icono: '../img/Icono_BaldurGate.png' },
    { juego: "Zelda: TotK", porcentaje: 60, icono: '../img/Icono_Zelda.png' },
    { juego: "Cyberpunk 2077", porcentaje: 45, icono: '../img/Icono_CyberPunk.png' }
];

//Las barras crecen desde 0 al cargar la pagina
function animarBarras() {
    let barras = document.querySelectorAll('.barra');
    for (let i = 0; i < barras.length; i++) {
        let anchuraFinal = parseInt(barras[i].style.width);
        barras[i].style.width = '0%';
        let valor = 0;
        let barra = barras[i];
        let animacion = setInterval(function () {
            valor++;
            barra.style.width = valor + '%';
            if (valor >= anchuraFinal) clearInterval(animacion);
        }, 15);
    }
}

//Ordena los juegos por porcentaje y muestra el podio Top 3
function mostrarPodio() {
    // Ordenamos manualmente de mayor a menor porcentaje
    let ordenados = [];
    let copia = datosRanking.slice();
    for (let i = 0; i < 3; i++) {
        let maxIdx = 0;
        for (let j = 1; j < copia.length; j++) {
            if (copia[j].porcentaje > copia[maxIdx].porcentaje) {
                maxIdx = j;
            }
        }
        ordenados.push(copia[maxIdx]);
        copia.splice(maxIdx, 1);
    }

    for (let i = 0; i < 3; i++) {
        let pos = i + 1;
        document.getElementById('podio-img-' + pos).src = ordenados[i].icono;
        document.getElementById('podio-nombre-' + pos).textContent = ordenados[i].juego;
        document.getElementById('podio-pct-' + pos).textContent = ordenados[i].porcentaje + ' / 100';
    }
}

let trailers = {
    elden: 'https://www.youtube.com/embed/sC9abcLLQpI',
    bg3: 'https://www.youtube.com/embed/imS3PeHRBXE',
    zelda: 'https://www.youtube.com/embed/gp9aY09li1s',
    cyber: 'https://www.youtube.com/embed/D4aUFSYs8GA'
};

let nombresJuego = {
    elden: 'Elden Ring',
    bg3: "Baldur's Gate 3",
    zelda: 'Zelda: Tears of the Kingdom',
    cyber: 'Cyberpunk 2077'
};

//Carga el trailer del juego seleccionado al lado del formulario
function mostrarTrailer() {
    let select = document.getElementById('juego');
    if (!select || select.value === '') return;
    document.getElementById('iframe-trailer').src = trailers[select.value] + '?rel=0';
    document.getElementById('video-titulo-trailer').textContent = nombresJuego[select.value];
    document.getElementById('video-trailer').style.display = 'block';
}

function procesarVoto() {
    let select = document.getElementById('juego');
    if (!select || select.value === '') {
        alert('Por favor, selecciona un juego primero.');
        return;
    }
    localStorage.setItem('voto_usuario', select.value);
    document.getElementById('resultado-voto').innerHTML =
        '✅ ¡Gracias! Has votado por <strong style="color:#52b1f3">' + nombresJuego[select.value] + '</strong>.';
    mostrarTrailer();
}

function enviarComentario() {
    let textarea = document.getElementById('comentario');
    if (!textarea || textarea.value.trim() === '') {
        alert('Por favor, escribe un comentario primero.');
        return;
    }
    let guardado = localStorage.getItem('comentarios_portal');
    let comentarios = [];
    if (guardado !== null) {
        comentarios = JSON.parse(guardado);
    }
    comentarios.push(textarea.value.trim());
    localStorage.setItem('comentarios_portal', JSON.stringify(comentarios));
    document.getElementById('resultado-comentario').textContent = '✅ Comentario enviado. ¡Gracias!';
    mostrarComentarios();
    textarea.value = '';
}

function mostrarComentarios() {
    let lista = document.getElementById('lista-comentarios');
    if (!lista) return;
    let guardado = localStorage.getItem('comentarios_portal');
    let comentarios = [];
    if (guardado !== null) {
        comentarios = JSON.parse(guardado);
    }
    lista.innerHTML = '';
    for (let i = comentarios.length - 1; i >= 0; i--) {
        let item = document.createElement('p');
        item.classList.add('comentario-guardado');
        item.textContent = '💬 ' + comentarios[i];
        lista.appendChild(item);
    }
}

window.addEventListener('load', function () {
    animarBarras();
    mostrarPodio();
    mostrarComentarios();
    //Si el usuario ya votó antes, recuperamos su elección
    let votoGuardado = localStorage.getItem('voto_usuario');
    if (votoGuardado) {
        let select = document.getElementById('juego');
        if (select) {
            select.value = votoGuardado;
            mostrarTrailer();
        }
    }
});