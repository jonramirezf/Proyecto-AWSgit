// Referencias a elementos del DOM
var linkLeerMas = document.getElementById("linkLeerMas");
var textoExtendido = document.getElementById("textoExtendido");

var botonImagen = document.getElementById("botonImagen");
var contenedorImagen = document.getElementById("contenedorImagen");

var formServicio = document.getElementById("formServicio");
var cuerpoTabla = document.getElementById("cuerpoTabla");
var mensajeServicio = document.getElementById("mensajeServicio");

// 1) Funcionalidad "Leer más..."
linkLeerMas.addEventListener("click", function (evento) {
    evento.preventDefault();

    if (textoExtendido.classList.contains("oculto")) {
        textoExtendido.classList.remove("oculto");
        linkLeerMas.textContent = "Leer menos";
    } else {
        textoExtendido.classList.add("oculto");
        linkLeerMas.textContent = "Leer más...";
    }
});

// 2) Efecto mostrar/ocultar la imagen de la sección
botonImagen.addEventListener("click", function () {

    if (contenedorImagen.style.display === "none") {
        contenedorImagen.style.display = "block";
        botonImagen.textContent = "Ocultar imagen";
    } else {
        contenedorImagen.style.display = "none";
        botonImagen.textContent = "Mostrar imagen";
    }
});

// 3) Incorporar un nuevo elemento en la tabla de servicios
formServicio.addEventListener("submit", function (evento) {
    evento.preventDefault();

    var nombreServicio = document.getElementById("nombreServicio").value.trim();
    var descServicio = document.getElementById("descServicio").value.trim();

    if (nombreServicio === "" || descServicio === "") {
        mensajeServicio.textContent = "Debe ingresar nombre y descripción del servicio.";
        mensajeServicio.className = "error";
        return;
    }

    var nuevaFila = document.createElement("tr");

    var celdaNombre = document.createElement("td");
    celdaNombre.textContent = nombreServicio;

    var celdaDesc = document.createElement("td");
    celdaDesc.textContent = descServicio;

    nuevaFila.appendChild(celdaNombre);
    nuevaFila.appendChild(celdaDesc);

    cuerpoTabla.appendChild(nuevaFila);

    mensajeServicio.textContent = "Servicio agregado correctamente.";
    mensajeServicio.className = "exito";

    formServicio.reset();
});
