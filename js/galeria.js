let galeriaData = {
    eldenring: [
        {
            src: "https://cdna.artstation.com/p/assets/images/images/043/897/524/large/seed-seven-twodots-seedseven-eldenring-2.jpg?1638544022",
            titulo: "Elden Ring - Portada oficial", descripcion: "Aventura épica en mundo abierto con combates desafiantes."
        },
        {
            src: "https://mapasdeanime.com/cdn/shop/products/3_1024x1024@2x.png?v=1662484324",
            titulo: "Elden Ring - Las Tierras Intermedias", descripcion: "Un mundo abierto lleno de secretos y peligros para explorar."
        },
        {
            src: "https://media.printables.com/media/prints/725526/images/5682264_cc3f0523-90cf-4bda-8ed2-140ecfd155ec_706587a3-d86e-4e7f-88c9-037b680a6574/thumbs/inside/1280x960/jpg/malania2.webp",
            titulo: "Elden Ring - Malenia", descripcion: "Una de las mejores batallas del juego."
        }
    ],
    bg3: [
        {
            src: "https://objetos-xlk.estaticos-marca.com/uploads/2026/02/06/69859ee742c3a.jpeg",
            titulo: "Baldur's Gate 3 - Portada oficial", descripcion: "El mejor RPG por turnos del año."
        },
        {
            src: "https://i0.wp.com/www.pcmrace.com/wp-content/uploads/2023/06/fa8f8218-f459-18d0-e974-9a39d0661c9b.jpg?resize=750%2C400&ssl=1",
            titulo: "Baldur's Gate 3 - Ciudad de Baldur", descripcion: "Un mundo lleno de decisiones y consecuencias."
        },
        {
            src: "https://i.blogs.es/bd54a3/bg-3-campamento-portada/840_560.jpeg",
            titulo: "Baldur's Gate 3 - El campamento base", descripcion: "Donde se toman las grandes decisiones."
        }
    ],
    zelda: [
        {
            src: "https://media.es.wired.com/photos/6410e1551b4b83247453adc4/16:9/w_2560%2Cc_limit/the%2520legend%2520of%2520zelda%2520tears%2520of%2520the%2520kingdom%2520aumento%2520de%2520precio.jpg",
            titulo: "Zelda: Tears of the Kingdom - Portada", descripcion: "Hyrule desde los cielos hasta las profundidades."
        },
        {
            src: "https://i.blogs.es/5e943e/zelda-tears-of-the-kingdom-9/840_560.jpeg",
            titulo: "Zelda: TotK - Islas del cielo", descripcion: "Nuevas tierras sobre las nubes de Hyrule."
        },
        {
            src: "https://www.playcentral.de/wp-content/uploads/2023/05/Ultra-Hand-Zelda-Tears-of-the-Kingdom-Aufmacher.jpg",
            titulo: "Zelda: TotK - Mecanica Ultrahand", descripcion: "La mecánica de construcción que lo cambia todo en esta entrega."
        }
    ],
    cyberpunk: [
        {
            src: "https://fotografias-2.larazon.es/assets/videojuegos/2020/03/cyberpunk.jpg",
            titulo: "Cyberpunk 2077 - Portada oficial", descripcion: "Bienvenido a Night City."
        },
        {
            src: "https://static.cdprojektred.com/cms.cdprojektred.com/16x9_big/872822c5e50dc71f345416098d29fc3ae5cd26c1-1920x1080.jpg",
            titulo: "Cyberpunk 2077 - Night City", descripcion: "La ciudad que nunca duerme."
        },
        {
            src: "https://www.cyberpunk.net/build/images/phantom-liberty/CP77_Phantom_Liberty_KV_16x9_RGB_no_PhL-0a5aaaf8.jpg",
            titulo: "Cyberpunk 2077 - Phantom Liberty", descripcion: "La expansión que revitalizó el juego."
        }
    ]
};

let juegoActual = 'eldenring';
let indiceActual = 0;
let intervaloAuto = null;

function seleccionarJuego(juego) {
    juegoActual = juego;
    indiceActual = 0;
    detenerAuto();

    let botones = document.querySelectorAll('.btn-juego');
    for (let i = 0; i < botones.length; i++) {
        botones[i].classList.remove('activo');
    }
    document.getElementById('btn-' + juego).classList.add('activo');
    mostrarImagen();
}

function mostrarImagen() {
    let imagenes = galeriaData[juegoActual];
    document.getElementById('galeria-img').src = imagenes[indiceActual].src;
    document.getElementById('galeria-titulo').textContent = imagenes[indiceActual].titulo;
    document.getElementById('galeria-descripcion').textContent = imagenes[indiceActual].descripcion;
    document.getElementById('contador').textContent = (indiceActual + 1) + ' / ' + imagenes.length;
}

function siguienteImagen() {
    indiceActual = (indiceActual + 1) % galeriaData[juegoActual].length;
    mostrarImagen();
}

function anteriorImagen() {
    let total = galeriaData[juegoActual].length;
    if (indiceActual === 0) {
        indiceActual = total - 1;
    } else {
        indiceActual--;
    };
    mostrarImagen();
}

function iniciarAuto() {
    if (intervaloAuto !== null) return;
    intervaloAuto = setInterval(siguienteImagen, 3000);
    document.getElementById('btn-auto').textContent = '⏹ Detener Auto';
    document.getElementById('btn-auto').classList.add('btn-auto-on');
}

function detenerAuto() {
    clearInterval(intervaloAuto);
    intervaloAuto = null;
    let btnAuto = document.getElementById('btn-auto');
    if (btnAuto) {
        btnAuto.textContent = '▶ Pasar Automático';
        btnAuto.classList.remove('btn-auto-on');
    }
}

function toggleAuto() {
    if (intervaloAuto !== null) {
        detenerAuto();
    } else {
        iniciarAuto();
    }
}

window.addEventListener('load', function () {
    mostrarImagen();
    document.getElementById('btn-eldenring').classList.add('activo');
});