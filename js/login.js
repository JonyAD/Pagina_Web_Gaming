let usuarioCorrecto = "jonathan";
let passwordCorrecta = "estoesunacontraseña";

function iniciarSesion() {
    let usuario = document.getElementById('input-usuario').value;
    let password = document.getElementById('input-password').value;

    if (usuario === usuarioCorrecto && password === passwordCorrecta) {
        localStorage.setItem('usuario_logueado', usuario);
        mostrarPerfil();
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}

function mostrarPerfil() {
    document.getElementById('formulario-login').style.display = 'none';
    document.getElementById('perfil-completo').style.display = 'block';
    document.getElementById('nombre-bienvenida').textContent = '¡Bienvenido, Jonathan!';

    //Cambiamos el avatar al icono de Elden Ring cuando el usuario entra
    let avatar = document.getElementById('avatar-img');
    if (avatar) {
        let ruta = avatar.getAttribute('src').replace('Icono_Persona.png', 'Icono_Perfil.png');
        document.getElementById('avatar-img-logueado').src = ruta;
    }
}

function cerrarSesion() {
    localStorage.removeItem('usuario_logueado');
    document.getElementById('formulario-login').style.display = 'block';
    document.getElementById('perfil-completo').style.display = 'none';
    document.getElementById('input-usuario').value = '';
    document.getElementById('input-password').value = '';
}

//Al cargar comprobamos si ya habia sesion guardada
window.addEventListener('load', function () {
    if (localStorage.getItem('usuario_logueado')) {
        mostrarPerfil();
    }
});