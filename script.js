function mostrarMensaje() {
    alert("Bienvenido a la experiencia BMW 🚗");
}

function saludo() {
    let nombre = document.querySelector("input").value;

    if (nombre === "") {
        alert("Escribe tu nombre primero");
    } else {
        alert("Gracias por contactarte, " + nombre);
    }
}

