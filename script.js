function mostrarOferta() {
  const ofertas = [
    "🔥 50% OFF en carnes",
    "🥛 2x1 en lácteos",
    "🍎 30% descuento en frutas",
    "🥖 Promo especial en panadería",
    "🛒 Descuento exclusivo en compras online"
  ];

  const random = Math.floor(Math.random() * ofertas.length);
  document.getElementById("oferta-texto").textContent = ofertas[random];
}

/* Evitar que el form recargue la página */
document.querySelector("form").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Mensaje enviado (simulado)");
});