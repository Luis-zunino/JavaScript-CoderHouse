cargarNombres(viajes);
document.querySelector("#buscador").addEventListener("keyup", () => {
  const texto = document.querySelector("#buscador").value;
  const nombresFiltrados = viajes.filter((nombre) => {
    return nombre.nombre.toUpperCase().indexOf(texto.toUpperCase()) !== -1;
  });
  cargarNombres(nombresFiltrados);
  soyelMapa(nombresFiltrados);
  //console.log(nombresFiltrados);
});

function cargarNombres(viajes) {
  bubbleSort(viajes);

  document.querySelector("#viajes").innerHTML = "";
  viajes.map((elemento) => {
    document.querySelector("#viajes").innerHTML += `
    <li class="opcionDestino">
      <img src="ASSETS/IMG/DESTINOS/unnamed(${elemento.img}).jpg">
      <div> 
        <h1>${elemento.nombre}</h1>
        <span class="contViaje">
            <p>Departamento: ${elemento.departamento}</p>
            <p>${elemento.info}</p> 
        </span>
      </div>
      <p class="agendar">Agregar a la agenda</p>
      <p>Ver en el Mapa</p>

    </li>
  `;
  });
  if (document.getElementById("viajes").innerHTML === "") {
    document.getElementById("viajes").innerHTML = `
      <h3 class="loSentimos">Lo sentimos no hemos encontrado el destino que nos indicas</h3>`;
  }
}
let map = L.map("map").setView([-32.70693340531241, -55.98485369606557], 7);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  //attribution:
  // '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

//L.marker([elemento.cordX, elemento.cordY]).addTo(map).bindPopup().openPopup();

function soyelMapa(viajes) {
  viajes.map((elemento) => {
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      //attribution:
      // '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([elemento.cordX, elemento.cordY])
      .addTo(map)
      .bindPopup(
        `<img src="ASSETS/IMG/DESTINOS/unnamed(${elemento.img}).jpg">
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
//soyelMapa(viajes);

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
const tableagenda = document.querySelector("#lista-carrito tbody");
const btnVaciarCarrito = document.querySelector("#vaciar-carrito");
let agenda = [];

/* Listeners */
listaAgenda.addEventListener("click", agregarDestinoALaAgenda);
//tableCarrito.addEventListener("click", borrarProducto);
//btnVaciarCarrito.addEventListener("click", vaciarCarrito);
document.addEventListener("DOMContentLoaded", () => {
  if (JSON.parse(localStorage.getItem("carrito"))) {
    agenda = JSON.parse(localStorage.getItem("carrito"));
    insertarCarritoHTML();
  }
});

function vaciarCarrito() {
  agenda = [];
  insertarCarritoHTML();
}

function borrarProducto(e) {
  e.preventDefault();

  if (e.target.classList.contains("borrar-producto")) {
    /* Opcion 1 */
    // const productoSeleccionado = e.target.parentElement.parentElement;
    // const productoId = e.target.getAttribute('data-id');

    // /* Borrar del HTML */
    // productoSeleccionado.remove();

    // /* Borrar de la variable agenda*/
    // agenda= carrito.filter(producto => producto.id !== productoId);

    // /* Actualizar el storage */
    // guardarCarritoStorage();

    /* Opcion 2 */
    const productoId = e.target.getAttribute("data-id");
    agenda = carrito.filter((producto) => producto.id !== productoId);
    insertarCarritoHTML();
  }
}

function agregarDestinoALaAgenda(e) {
  e.preventDefault();

  if (e.target.classList.contains("agendar")) {
    const cardDestino = e.target.parentElement.parentElement;

    obtenerDatosProducto(cardDestino);
  }
}

function obtenerDatosProducto(cardDestino) {
  const productoAgregado = {
    imagen: cardDestino.querySelector("img").src,
    nombre: cardDestino.querySelector("h4").textContent,
    precio: cardDestino.querySelector(".precio span").textContent,
    cantidad: 1,
    id: cardDestino.querySelector("a").getAttribute("data-id"),
  };

  const existe = carrito.some(
    (producto) => producto.id === productoAgregado.id
  );

  if (existe) {
    const productos = carrito.map((producto) => {
      if (producto.id === productoAgregado.id) {
        producto.cantidad++;
        producto.precio = `$${
          Number(productoAgregado.precio.slice(1)) * producto.cantidad
        }`;
        // return producto;
      } else {
        // return producto;
      }
      return producto;
    });
    /* Spread operator */
    agenda = [...productos];
  } else {
    // carrito.push(productoAgregado);
    agenda = [...carrito, productoAgregado];
  }

  insertarCarritoHTML();
}

function insertarCarritoHTML() {
  borrarCarritoHTML();

  carrito.forEach((producto) => {
    /* Destructuring de objetos */
    const { imagen, nombre, precio, cantidad, id } = producto;

    const row = document.createElement("tr");
    row.innerHTML = `
		<td>
			<img src="${imagen}" width='100%'>
		</td>
		<td>${nombre}</td>
		<td>${precio}</td>
		<td>${cantidad}</td>
		<td>
			<a href="#" class="borrar-producto" data-id="${id}">X</a>
		</td>
		`;
    tableCarrito.appendChild(row);
  });
  guardarCarritoStorage();
}

function borrarCarritoHTML() {
  /* Forma "lenta" */
  // tableCarrito.innerHTML = '';

  /* Forma rapida */
  while (tableCarrito.firstChild) {
    tableCarrito.removeChild(tableCarrito.firstChild);
  }
}

function guardarCarritoStorage() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}
