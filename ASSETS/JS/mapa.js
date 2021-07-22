//menu lateral
$(document).ready(function () {
  $(".menu").click(function () {
    $(".keep").toggleClass("width");
  });
});

//mapa
let map = L.map("map").setView([-32.70693340531241, -55.98485369606557], 7);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {}).addTo(
  map
);
//L.marker([elemento.cordX, elemento.cordY]).addTo(map).bindPopup().openPopup();


 function cargarMapa(viajes) {
   viajes.map((elemento) => {
     L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
     }).addTo(map)
     L.marker([elemento.cordX, elemento.cordY])
       .addTo(map)
       .bindPopup(
         `<img src="../ASSETS/IMG/DESTINOS/unnamed(${elemento.img}).jpg">
           <div>
             <h1>${elemento.nombre}</h1>
             <span>
                 <p>Departamento: ${elemento.departamento}</p>
                 <p>${elemento.info}</p>
             </span>
           </div>`
       )
       .openPopup();
   });
 }
 cargarMapa(viajes)












//clase profe=========================================================
/* Selectores */
const listaAgenda = document.querySelector("#viajes");
const tablagenda = document.querySelector(".green");
const btnVaciaragenda = document.querySelector("#vaciar-agenda");
let agenda = [];

/* Listeners */
listaAgenda.addEventListener("click", agregarDestinoALaAgenda);
//tableagenda.addEventListener("click", borrarProducto);
//btnVaciaragenda.addEventListener("click", vaciaragenda);
document.addEventListener("DOMContentLoaded", () => {
  if (JSON.parse(localStorage.getItem("agenda"))) {
    agenda = JSON.parse(localStorage.getItem("agenda"));
    insertaragendaHTML();
  }
});

function vaciaragenda() {
  agenda = [];
  insertaragendaHTML();
}

function borrarProducto(e) {
  e.preventDefault();

  if (e.target.classList.contains("borrar-destino")) {
    /* Opcion 1 */
    // const productoSeleccionado = e.target.parentElement.parentElement;
    // const productoId = e.target.getAttribute('data-id');

    // /* Borrar del HTML */
    // productoSeleccionado.remove();

    // /* Borrar de la variable agenda*/
    // agenda= agenda.filter(producto => producto.id !== productoId);

    // /* Actualizar el storage */
    // guardaragendaStorage();

    /* Opcion 2 */
    const productoId = e.target.getAttribute("data-id");
    agenda = agenda.filter((producto) => producto.id !== productoId);
    insertaragendaHTML();
  }
}

function agregarDestinoALaAgenda(e) {
  e.preventDefault();
  if (e.target.classList.contains("agendar")) {
    const cardDestino = e.target.parentElement;

    obtenerDatosDestino(cardDestino);
  }
}

function obtenerDatosDestino(cardDestino) {
  const destinoAgregado = {
    imagen: cardDestino.querySelector("img").src,
    nombre: cardDestino.querySelector("h1").textContent,
    departamento: cardDestino.querySelector("h3").textContent,
    info: cardDestino.querySelector("h4").textContent,
    cantidad: 1,
    id: cardDestino.querySelector("a").getAttribute("id"),
  };

  const existe = agenda.some((producto) => producto.id === destinoAgregado.id);
  console.log(existe);

  if (existe) {
    const productos = agenda.map((producto) => {
      if (producto.id === destinoAgregado.id) {
        // return producto;
        console.log("destino ya agregado");
      } else {
        // return producto;
        producto.cantidad++;
      }
      return producto;
    });
    /* Spread operator */
    agenda = [...productos];
  } else {
    // agenda.push(destinoAgregado);
    agenda = [...agenda, destinoAgregado];
  }

  insertaragendaHTML();
}


