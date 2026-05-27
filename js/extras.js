//Boton volver arriba: aparece al bajar mas de 200px
window.addEventListener('scroll', function () {
    let btn = document.getElementById('btn-top');
    if (window.scrollY > 200) {
        btn.style.display = 'block';
    } else {
        btn.style.display = 'none';
    }
});

function volverArriba() {
    window.scrollTo(0, 0);
}

//Contador de visitas guardado en localStorage
window.addEventListener('load', function () {
    let visitas = localStorage.getItem('visitas_portal');
    if (visitas === null) {
        visitas = 1;
    } else {
        visitas = parseInt(visitas) + 1;
    }
    localStorage.setItem('visitas_portal', visitas);
    let el = document.getElementById('contador-visitas');
    if (el) el.textContent = visitas;
});

//Slideshow del aside: cambia el juego destacado cada 3 segundos
let rutaImg = window.location.pathname.includes('/htmls/') ? '../img/' : './img/'; //Operacion ternaria, como en Java si se cumple usa el primero, sino el otro

let juegosSlideshow = [
    { nombre: 'Elden Ring', img: rutaImg + 'Icono_EldenRing_Redondo.png', desc: 'RPG de mundo abierto y acción' },
    { nombre: "Baldur's Gate 3", img: rutaImg + 'Icono_BaldurGate_Redondo.png', desc: 'El mejor RPG por turnos del año' },
    { nombre: 'Zelda: TotK', img: rutaImg + 'Icono_Zelda_Redondo.png', desc: 'Aventura en el mundo de Hyrule' },
    { nombre: 'Cyberpunk 2077', img: rutaImg + 'Icono_CyberPunk_Redondo.png', desc: 'Acción en la ciudad del futuro' }
];

let indiceSlideshow = 0;

function actualizarSlideshow() {
    let img = document.getElementById('aside-img');
    let nombre = document.getElementById('aside-nombre');
    let desc = document.getElementById('aside-desc');
    if (!img) return;

    let juego = juegosSlideshow[indiceSlideshow];
    img.style.opacity = '0';

    setTimeout(function () {
        img.src = juego.img;
        nombre.textContent = juego.nombre;
        desc.textContent = juego.desc;
        img.style.opacity = '1';
    }, 400);

    indiceSlideshow = (indiceSlideshow + 1) % juegosSlideshow.length;
}

window.addEventListener('load', function () {
    if (document.getElementById('aside-img')) {
        actualizarSlideshow();
        setInterval(actualizarSlideshow, 3000);
    }
});