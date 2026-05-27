let aportes = [
    { usuario: "EldenFan89", mensaje: "¡Completé Elden Ring al 100%!" },
    { usuario: "RPGMaster_77", mensaje: "BG3 sigue siendo increíble a las 200h." },
    { usuario: "LinkFan", mensaje: "El final de Zelda TotK me dejó sin palabras." },
    { usuario: "NightCityV", mensaje: "Phantom Liberty es la mejor expansión." },
    { usuario: "SoulsPlayer", mensaje: "¿Alguien para coop en Elden Ring hoy?" },
    { usuario: "TableTopGamer", mensaje: "Partida épica en BG3 esta tarde." },
    { usuario: "GamerCanario", mensaje: "Zelda en Switch 2 tiene rendimiento brutal." },
    { usuario: "V_NightCity", mensaje: "Night City nunca duerme. ¡Top!" }
];

let indiceComunidad = 0;

function actualizarFeed() {
    let feed = document.getElementById('feed-nav');
    if (!feed) return;

    let aporte = aportes[indiceComunidad];
    let nuevoAporte = document.createElement('p');
    nuevoAporte.classList.add('nav-feed-item');
    nuevoAporte.innerHTML = '<span class="usuario-nav">' + aporte.usuario + '</span>: ' + aporte.mensaje;

    feed.appendChild(nuevoAporte);

    // Si hay mas de 3 mensajes, borramos el primero
    let items = feed.querySelectorAll('.nav-feed-item');
    if (items.length > 3) {
        items[0].remove();
    }

    indiceComunidad = (indiceComunidad + 1) % aportes.length;
}

actualizarFeed();
setInterval(actualizarFeed, 3000);