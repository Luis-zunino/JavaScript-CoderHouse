/*Listar Departamentos*/
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
/*eligo donde lo voy a imprimir*/
let depa = document.getElementById("depa");

for (let i = 0; i < depas.length; i++) {
  depa.innerHTML += `<option id="${i}"><span>${depas[i]}</span></option>`;
}

/*Tipos de lugares*/
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

//AJAX
$.ajax({
  url: "ASSETS/JS/arraydeviajes.json",
  method: "GET",
  dataType: "JSON",
  success: function (result, status, jqXHR) {
    //console.log("1111", result);

    cargarCardViajes(result);
    buscador(result);
    
  },
  error: function (jqXHR, status, error) {},
});

document.querySelector("#buscador").addEventListener("keyup", () => {
  buscador(a);
});

function buscador(a) {
  const texto = document.querySelector("#buscador").value;

  console.log("2222", a);

  const nombresFiltrados = a.filter((nombre) => {
    return nombre.nombre.toUpperCase().indexOf(texto.toUpperCase()) !== -1;
  });
}

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

//menu lateral
$(document).ready(function () {
  $(".menu").click(function () {
    $(".keep").toggleClass(".width");
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
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {}).addTo(
      map
    );
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
//cargarMapa(viajes)

$(document).on("click", ".secciones", mostrarHTML);
document.getElementsByClassName("yellow");
document.getElementsByClassName("red");
document.getElementsByClassName("green");

function mostrarHTML(e) {
  console.log(e.value.classlist);
  console.log("hice click");
}
//mostrarHTML();
