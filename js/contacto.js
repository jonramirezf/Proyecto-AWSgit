// Referencias a elementos del DOM
var formContacto = document.getElementById("formContacto");

var campoNombre = document.getElementById("nombre");
var campoCorreo = document.getElementById("correo");
var campoMensaje = document.getElementById("mensaje");

var errorNombre = document.getElementById("errorNombre");
var errorCorreo = document.getElementById("errorCorreo");
var errorMensaje = document.getElementById("errorMensaje");

var mensajeEstado = document.getElementById("mensajeEstado");

// Función 1: valida el nombre
function validarNombre() {

    var valor = campoNombre.value.trim();

    if (valor === "") {
        errorNombre.textContent = "El nombre es obligatorio.";
        return false;
    }

    if (valor.length < 3) {
        errorNombre.textContent = "El nombre debe tener al menos 3 caracteres.";
        return false;
    }

    errorNombre.textContent = "";
    return true;
}

// Función 2: valida el correo con una expresión regular
function validarCorreo() {

    var valor = campoCorreo.value.trim();
    var patron = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

    if (valor === "") {
        errorCorreo.textContent = "El correo es obligatorio.";
        return false;
    }

    if (!patron.test(valor)) {
        errorCorreo.textContent = "Ingrese un correo válido (ej: nombre@dominio.com).";
        return false;
    }

    errorCorreo.textContent = "";
    return true;
}

// Función 3: valida el mensaje
function validarMensaje() {

    var valor = campoMensaje.value.trim();

    if (valor === "") {
        errorMensaje.textContent = "El mensaje es obligatorio.";
        return false;
    }

    if (valor.length < 10) {
        errorMensaje.textContent = "El mensaje debe tener al menos 10 caracteres.";
        return false;
    }

    errorMensaje.textContent = "";
    return true;
}

// Validación en tiempo real al salir de cada campo (evento blur)
campoNombre.addEventListener("blur", validarNombre);
campoCorreo.addEventListener("blur", validarCorreo);
campoMensaje.addEventListener("blur", validarMensaje);

// Validación completa al enviar el formulario
formContacto.addEventListener("submit", function (evento) {
    evento.preventDefault();

    var nombreOk = validarNombre();
    var correoOk = validarCorreo();
    var mensajeOk = validarMensaje();

    if (nombreOk && correoOk && mensajeOk) {
        mensajeEstado.textContent = "Mensaje enviado correctamente. Gracias por contactarnos.";
        mensajeEstado.className = "exito";
        formContacto.reset();
    } else {
        mensajeEstado.textContent = "Por favor corrija los errores del formulario.";
        mensajeEstado.className = "error";
    }
});
