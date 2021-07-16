//Listar Departamentos
let depas = [
  "--Departamento--",
  "Artigas",
  "Canelones",
  "Cerrolargo",
  "Colonia",
  "Durazno",
  "Flores",
  "Florida",
  "Lavalleja",
  "Maldonado",
  "Montevideo",
  "Paysandu",
  "Río Negro",
  "Rivera",
  "Rocha",
  "Salto",
  "San José",
  "Soriano",
  "Tacuarembo",
  "Treinta y Tres",
];
//eligo donde lo voy a imprimir
let depa = document.getElementById("depa");
//recorro todo el array

for (let i = 0; i < depas.length; i++) {
  depa.innerHTML += `<option id="${i}"><span>${depas[i]}</span></option>`;
}

//sirve mas para objetos el for in

//Tipos de lugares
let tipo = [
  "--Elige una opción--",
  "Espacios Verdes",
  "Playas",
  "Aguas Termales",
  "Ciudades",
];

let tipos = document.getElementById("tipos");
for (let i = 0; i < tipo.length; i++) {
  tipos.innerHTML += `<option id="${i}">${tipo[i]}</option>`;
}

//Menu laterla
$(document).ready(function () {
  $(".menu").click(function () {
    $(".keep").toggleClass("width");
  });
});
cargarNombres(viajes);

document.querySelector("#buscador").addEventListener("keyup", () => {
  const texto = document.querySelector("#buscador").value;
  const nombresFiltrados = viajes.filter((nombre) => {
    return nombre.nombre.toUpperCase().indexOf(texto.toUpperCase()) !== -1;
  });
  cargarNombres(nombresFiltrados);
  cargarMapa(nombresFiltrados);
});

function cargarNombres(viajes) {
  bubbleSort(viajes);
  document.getElementById("viajes").innerHTML = "";
  viajes.map((elemento) => {
    document.querySelector("#viajes").innerHTML += `
    <li class="opcionDestino">
      <img src="ASSETS/IMG/DESTINOS/unnamed(${elemento.img}).jpg">
      <div> 
        <h3>${elemento.nombre}</h3>
        <span class="contViaje">
            <h4>Departamento: ${elemento.departamento}</h4>
            <h4>${elemento.info}</h4> 
        </span>
      </div>
      <a href="VIEWS/mapa.html" id="${elemento.id}" class="agendar"><i class="far fa-calendar-check"></i><i class="far fa-calendar-times"></i></a>
      <p><i class="fas fa-map-marked-alt"></i></p>

    </li>
  `;
  });
  if (document.getElementById("viajes").innerHTML === "") {
    document.getElementById("viajes").innerHTML = `
      <h3 class="loSentimos">Lo sentimos no hemos encontrado el destino que nos indicas</h3>`;
  }
}

//Ordenar Arrays de objetos metodo burbuja.
function bubbleSort(a) {
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length - i - 1; j++) {
      if (a[j].departamento > a[j + 1].departamento) {
        let tmp = a[j];
        a[j] = a[j + 1];
        a[j + 1] = tmp;
      }
    }
  }
}

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

// function insertaragendaHTML() {
//   // borraragendaHTML();

//   agenda.forEach((producto) => {
//     document.getElementById("agendados").innerHTML = "";
//     /* Destructuring de objetos */
//     const { imagen, nombre, cantidad, id } = producto;
//     //==================================================
  
//     document.querySelector("#agendados").innerHTML += `
//       <li class="opcionDestino">
//         <img src="ASSETS/IMG/DESTINOS/unnamed(${producto.img}).jpg">
//         <div> 
//           <h1>${producto.nombre}</h1>
//           <span class="contViaje">
//               <h3>Departamento: ${producto.departamento}</h3>
//               <h4>${producto.info}</h4> 
//           </span>
//         </div>
//         <a href="VIEWS/mapa.html" id="${producto.id}" class="agendar">Agregar a la agenda</a>
//         <p>Ver en el Mapa</p>
  
//       </li>
//     `;
//   });

// }
