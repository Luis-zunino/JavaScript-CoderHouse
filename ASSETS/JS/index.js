//selectores
document.querySelector("#buscador").addEventListener("keyup", buscador);
let depa = document.getElementById("depa");
let tipos = document.getElementById("tipos");
let map = L.map("map").setView([-32.70693340531241, -55.98485369606557], 7);
//Arrays
let viajes = [];
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
let tipo = [
  "--Elige una opción--",
  "Espacios Verdes",
  "Playas",
  "Aguas Termales",
  "Ciudades",
];

for (let i = 0; i < depas.length; i++) {
  depa.innerHTML += `<option id="${i}"><span>${depas[i]}</span></option>`;
}
for (let i = 0; i < tipo.length; i++) {
  tipos.innerHTML += `<option id="${i}">${tipo[i]}</option>`;
}

//Menu laterla
$(document).ready(function () {
  $(".menu").click(function () {
    $(".keep").toggleClass("width");
  });
});
//Simulacion de HTMLs
document.getElementById("aside").addEventListener("click", (e) => {
  let listaDestinos = $(".cajaResultados");
  let mapa = $(".cajaMapaInteractivo");
  let agenda = $("#agendados");
  let r = e.target.classList;

  if (r.contains("amarillo") || r.contains("yellow")) {
    removerClases();

    listaDestinos.addClass("mostrar");
    mapa.addClass("ocultar");
    agenda.addClass("ocultar");
  } else if (r.contains("rojo") || r.contains("red")) {
    removerClases();

    listaDestinos.addClass("ocultar");
    mapa.addClass("mostrar");
    agenda.addClass("ocultar");
  } else if (r.contains("verde") || r.contains("green")) {
    removerClases();

    listaDestinos.addClass("ocultar");
    mapa.addClass("ocultar");
    agenda.addClass("mostrar");
  }

  function removerClases() {
    listaDestinos.removeClass("mostrar");
    mapa.removeClass("mostrar");
    agenda.removeClass("mostrar");
  }
});

//AJAX
$.ajax({
  url: "ASSETS/JS/arraydeviajes.json",
  method: "GET",
  dataType: "JSON",
  success: function (result, status, jqXHR) {
    viajes = result;
    cargarCardViajes(viajes);
    cargarMapa(viajes);
  },
  error: function (jqXHR, status, error) {},
});

function buscador() {
  const texto = document.querySelector("#buscador").value;

  const nombresFiltrados = viajes.filter((viaje) => {
    return viaje.nombre.toUpperCase().indexOf(texto.toUpperCase()) !== -1;
  });
  cargarCardViajes(nombresFiltrados);
  cargarMapa(nombresFiltrados);
}
//Recorro el array que me trae el AJAX, le doy forma y lo imprimo
function cargarCardViajes(viajes) {
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
      <a class="agendar"><i  class="far fa-calendar-check"></i><i class="far fa-calendar-times"></i></a>
      <a><i class="fas fa-map-marked-alt"></i></a>
      <a id="${elemento.id}">Expandir</a>

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

//Mapa
function cargarMapa(viajes) {
  // let map = L.map("map").setView([-32.70693340531241, -55.98485369606557], 7);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);
  viajes.map((pin) => {
    L.marker([pin.cordX, pin.cordY])
      .addTo(map)
      .bindPopup(
        `<img src="../ASSETS/IMG/DESTINOS/unnamed(${pin.img}).jpg">
      <div>
      <h1>${pin.nombre}</h1>
      <span>
      <p>Departamento: ${pin.departamento}</p>
      <p>${pin.info}</p>
      </span>
      </div>`
      )
      .openPopup();
  });
}

//Generador de Cards individuales de los destinos
document
  .getElementById("viajes")
  .addEventListener("click", (e) => creadorIndividuales(e));

function creadorIndividuales(e) {
  let id = e.target.getAttribute("id");
  let x = e.target.parentElement;
  let h3 = x.getElementsByTagName("h3")[0].innerText;
  let departamento = x.getElementsByTagName("h4")[0].innerText;
  let info = x.getElementsByTagName("h4")[1].innerText;
  if (id) {
    document.getElementById("viajes").innerHTML = "";

    document.getElementById("viajes").innerHTML = `
  <li>
      
      <img src="ASSETS/IMG/DESTINOS/unnamed(${id}).jpg">
      <div> 
        <h3>${h3}</h3>
        <span class="contViaje">
          <h4>${departamento}</h4>
          <h4>${info}</h4> 
        </span>
      </div>
      <a class="agendar"><i class="far fa-calendar-check"></i><i class="far fa-calendar-times"></i></a>
      <a><i class="fas fa-map-marked-alt"></i></a>
  </li>
  `;
  }

}

document.getElementById("volver").addEventListener("click", volverResultados);
function volverResultados() {
  // let volver = document.getElementById("viajes");
  document.getElementById("viajes").innerHTML = "";
  cargarCardViajes(viajes);
}