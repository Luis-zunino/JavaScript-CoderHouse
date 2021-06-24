const viajes = [
  {
    departamento: "Montevideo",
    id: 1,
    tipo: "ciudad",
    img: "2",
    nombre: "Montevideo",
    costo: 500,
    info: "Capital de Uruguay conocida por la Ciudad Vieja colonial y art deco, y playas como Pocitos.",
    cordX: -34.907528,
    cordY: -56.163532,
  },
  {
    departamento: "Maldonado",
    id: 2,
    tipo: "ciudad",
    img: "3",
    nombre: "Punta del Este",
    costo: 500,
    info: "Ciudad turística uruguaya conocida por la escultura “La Mano”, la playa Mansa y la isla Gorriti.",
    cordX: -34.93909470049689,
    cordY: -54.93399304868235,
  },
  {
    departamento: "Colonia",
    id: 3,
    tipo: "ciudad",
    img: "4",
    nombre: "Colonia del Sacramento",
    costo: 500,
    info: "Ciudad uruguaya frente al río con su Barrio Histórico bien conservado desde la época colonial",
    cordX: -34.47178211606984,
    cordY: -57.852083537530135,
  },
  {
    departamento: "Colonia",
    id: 4,
    tipo: "ciudad",
    img: "6",
    nombre: "Río de la Plata",
    costo: 500,
    info: "Estuario de los ríos Paraná y Uruguay",
    cordX: -34.907528,
    cordY: -56.163532,
  },
  {
    departamento: "Rocha",
    id: 5,
    tipo: "playa",
    img: "7",
    nombre: "Punta del Diablo",
    costo: 500,
    info: "Pueblo turístico uruguayo conocido por sus playas, el parque Santa Teresa y la conservación de tortugas.",
    cordX: -34.041883102587434,
    cordY: -53.547148931016814,
  },
  {
    departamento: "Maldonado",
    id: 6,
    tipo: "playa",
    img: "7",
    nombre: "Piriápolis",
    costo: 500,
    info: " Población costera de Uruguay con vistas desde el cerro de San Antonio y edificios de estilo Belle Époque.",
    cordX: -34.86473070007707,
    cordY: -55.272627183255885,
  },
  {
    departamento: "Durazno",
    id: 7,
    tipo: "ciudad",
    img: "8",
    nombre: "José Ignacio",
    costo: 500,
    info: "Complejo turístico playero elegante con áreas para surf, coctelerías y restaurantes modernos, además de vistas desde el faro de José Ignacio",
    cordX: -34.83611016828466,
    cordY: -54.64523441647295,
  },
  {
    departamento: "Salto",
    id: 8,
    tipo: "ciudad",
    img: "9",
    nombre: "Salto",
    costo: 500,
    info: "Ciudad uruguaya conocida por la animada calle Uruguay, el Teatro Larrañaga del siglo XIX y las aguas termales.",
    cordX: -31.38839761342913,
    cordY: -57.95672135677959,
  },
  {
    departamento: "Rocha",
    id: 9,
    tipo: "ciudad",
    img: "10",
    nombre: "La Paloma",
    costo: 500,
    info: "Pueblo costero de Uruguay junto al faro del cabo de Santa María, la bahía Grande y la reserva Laguna de Rocha.",
    cordX: -34.65614074324158,
    cordY: -54.18284188442711,
  },
  {
    departamento: "Rocha",
    id: 10,
    tipo: "ciudad",
    info: "Departamento del este de Uruguay con playas en la Punta del Diablo y tortugas marinas en La Coronilla.",
    img: "11",
    nombre: "Departamento de Rocha",
    costo: 500,
    cordX: -34.48117328722865,
    cordY: -54.332114085479716,
  },
  {
    departamento: "Maldonado",
    id: 11,
    tipo: "playa",
    img: "12",
    nombre: "La Pedrera",
    costo: 500,
    info: "Playa, surf y deportes acuáticos",
    cordX: -34.59026854598685,
    cordY: -54.12900862782401,
  },
  {
    departamento: "Colonia",
    id: 12,
    tipo: "playa",
    img: "13",
    nombre: "Carmelo",
    costo: 500,
    info: "Municipio uruguayo famoso por la Playa Seré, el Río de la Plata y la Rambla de los ituyentes",
    cordX: -33.99568310206379,
    cordY: -58.28631214491138,
  },
  {
    departamento: "Rocha",
    id: 13,
    tipo: "playa",
    img: "14",
    nombre: "Rocha",
    costo: 500,
    info: "Playa y parque",
    cordX: -34.907528,
    cordY: -56.163532,
  },
  {
    departamento: "Río Negro",
    id: 14,
    tipo: "ciudad",
    img: "15",
    nombre: "Fray Bentos",
    costo: 500,
    info: "Teatro, museo, historia, playa y río",
    cordX: -33.10427764233283,
    cordY: -58.300615582825785,
  },
  {
    departamento: "Rocha",
    id: 15,
    tipo: "ciudad",
    img: "16",
    nombre: "Chuy",
    costo: 500,
    info: "Parque acuático, playa, compras y parque",
    cordX: -33.692731571916376,
    cordY: -53.455248117460144,
  },
  {
    departamento: "Canelones",
    id: 16,
    tipo: "ciudad",
    img: "17",
    nombre: "Atlántida",
    costo: 500,
    info: "Playa, águila y jardín zoológico",
    cordX: -34.76954521292122,
    cordY: -55.76447964495242,
  },
  {
    departamento: "Rocha",
    id: 17,
    tipo: "ciudad",
    img: "18",
    nombre: "Barra de Valizas",
    costo: 500,
    info: "Playa",
    cordX: -34.907528,
    cordY: -56.163532,
  },
  {
    departamento: "Rocha",
    id: 18,
    tipo: "ciudad",
    img: "19",
    nombre: "Termas del Arapey",
    costo: 500,
    info: "Aguas termales y golf",
    cordX: -34.907528,
    cordY: -56.163532,
  },
  {
    departamento: "Rocha",
    id: 19,
    tipo: "ciudad",
    img: "20",
    nombre: "Garzón",
    costo: 500,
    info: "Pueblo uruguayo conocido por el restaurante El Garzón, la bodega Garzón y las playas de José Ignacio.",
    cordX: -34.907528,
    cordY: -56.163532,
  },
  {
    departamento: "Maldonado",
    id: 20,
    tipo: "playa",
    img: "21",
    nombre: "Maldonado",
    costo: 500,
    info: "Playa, museo e historia",
    cordX: -34.907528,
    cordY: -56.163532,
  },
  {
    departamento: "Lavalleja",
    id: 21,
    tipo: "playa",
    img: "22",
    nombre: "Minas",
    costo: 500,
    info: "Parque y naturaleza",
    cordX: -34.907528,
    cordY: -56.163532,
  },
  {
    departamento: "Rivera",
    id: 22,
    tipo: "ciudad",
    img: "23",
    nombre: "Rivera",
    costo: 500,
    info: "Casino, bodega, compras y vino",
    cordX: -34.907528,
    cordY: -56.163532,
  },
  {
    departamento: "Colonia",
    id: 23,
    tipo: "ciudad",
    img: "24",
    nombre: "Nueva Helvecia",
    costo: 500,
    info: "Historia, monumento y cata de vinos",
    cordX: -34.907528,
    cordY: -56.163532,
  },
  {
    departamento: "Rocha",
    id: 24,
    tipo: "ciudad",
    img: "25",
    nombre: "San Gregorio de Polanco",
    costo: 500,
    info: "Playa, pintura, arte y museo",
    cordX: -34.907528,
    cordY: -56.163532,
  },
  {
    departamento: "Tacuarembó",
    id: 25,
    tipo: "ciudad",
    img: "26",
    nombre: "Tacuarembó",
    costo: 500,
    info: "Museo, arte y naturaleza",
    cordX: -34.907528,
    cordY: -56.163532,
  },
  {
    departamento: "Maldonado",
    id: 26,
    tipo: "ciudad",
    img: "27",
    nombre: "Pan de Azúcar",
    costo: 500,
    info: "Turismo ecológico, parque e historia",
    cordX: -34.907528,
    cordY: -56.163532,
  },
  {
    departamento: "Lavalleja",
    id: 27,
    tipo: "ciudad",
    img: "28",
    nombre: "Villa Serrana",
    costo: 500,
    info: "Senderismo",
    cordX: -34.907528,
    cordY: -56.163532,
  },
  {
    departamento: "Maldonado",
    id: 28,
    tipo: "ciudad",
    img: "29",
    nombre: "Sauce de Portezuelo",
    costo: 500,
    info: "Playa",
    cordX: -34.907528,
    cordY: -56.163532,
  },
  {
    departamento: "Paysandú",
    id: 29,
    tipo: "ciudad",
    img: "30",
    nombre: "Paysandú",
    costo: 500,
    info: "Ciudad uruguaya con el museo histórico, esculturas en el cementerio de Paysandú y baños termales cercanos.",
    cordX: -34.907528,
    cordY: -56.163532,
  },
  {
    departamento: "Salto",
    id: 30,
    tipo: "ciudad",
    img: "31",
    nombre: "Termas del Dayman",
    costo: 500,
    info: "Aguas termales y parque acuático",
    cordX: -34.907528,
    cordY: -56.163532,
  },
  {
    departamento: "Canelones",
    id: 31,
    tipo: "ciudad",
    img: "32",
    nombre: "Canelones",
    costo: 500,
    info: "Bodega, playa, viña, vino y cata de vinos",
    cordX: -34.907528,
    cordY: -56.163532,
  },
  {
    departamento: "Maldonado",
    id: 32,
    tipo: "ciudad",
    img: "33",
    nombre: "Laguna Garzón",
    costo: 500,
    info: "Área protegida, kitesurf y windsurf",
    cordX: -34.907528,
    cordY: -56.163532,
  },
  {
    departamento: "Maldonado",
    id: 33,
    tipo: "ciudad",
    img: "34",
    nombre: "Manantiales",
    costo: 500,
    info: "Pueblo animado frente al mar, con surf en la playa Bikini, una intensa vida nocturna, y tiendas y restaurantes modernos.",
    cordX: -34.907528,
    cordY: -56.163532,
  },
  {
    departamento: "Durazno",
    id: 34,
    tipo: "ciudad",
    img: "35",
    nombre: "Durazno",
    costo: 500,
    info: "Jardín zoológico, monumento e historia",
    cordX: -34.907528,
    cordY: -56.163532,
  },
  {
    departamento: "Paysandú",
    id: 35,
    tipo: "ciudad",
    img: "36",
    nombre: "Paysandú",
    costo: 500,
    info: "Monumento, basílica y aguas termales",
    cordX: -34.907528,
    cordY: -56.163532,
  },
  {
    departamento: "San José",
    id: 36,
    tipo: "ciudad",
    img: "37",
    nombre: "San José de Mayo",
    costo: 500,
    info: "Catedral, museo e historia",
    cordX: -34.907528,
    cordY: -56.163532,
  },
  {
    departamento: "Treinta y Tres",
    id: 37,
    tipo: "ciudad",
    img: "38",
    nombre: "Treinta y Tres",
    costo: 500,
    info: "Naturaleza, río e historia",
    cordX: -34.907528,
    cordY: -56.163532,
  },
  {
    departamento: "Rocha",
    id: 38,
    tipo: "ciudad",
    img: "39",
    nombre: "Aguas Dulces",
    costo: 500,
    info: "Playa",
    cordX: -34.907528,
    cordY: -56.163532,
  },
  {
    departamento: "Maldonado",
    id: 39,
    tipo: "ciudad",
    img: "40",
    nombre: "Punta Colorada",
    costo: 500,
    info: "Playa y surf",
    cordX: -34.907528,
    cordY: -56.163532,
  },
  {
    departamento: "Artigas",
    id: 40,
    tipo: "ciudad",
    img: "41",
    nombre: "Artigas",
    costo: 500,
    info: "Minería, monumento y naturaleza",
    cordX: -34.907528,
    cordY: -56.163532,
  },
  {
    departamento: "Rocha",
    id: 41,
    tipo: "ciudad",
    img: "42",
    nombre: "Laguna de Rocha",
    costo: 500,
    info: "Área protegida, humedal y naturaleza",
    cordX: -34.907528,
    cordY: -56.163532,
  },
];
/*
https://www.youtube.com/watch?v=NduleX-AC74&ab_channel=Bluuweb%21
*/
//input donde escribe lo que quiere buscar
const buscado = document.querySelector("#buscador");
//boton asociado a lo que busco
const botonBuscador = document.querySelector("#botonBuscador");
//escucha al boton y lanza la funcion al hacer click
botonBuscador.addEventListener("click", filtro);
//escucho el input y lanza la funcion en tiempo real
buscado.addEventListener("keyup", filtro);

function filtro() {
  document.querySelector("#viajes").innerHTML = "";
  bubbleSort(viajes);

  for (let viaje of viajes) {
    const texto = buscado.value.toLowerCase();

    let destino = viaje.nombre.toLowerCase();
    /*
    indexOf va a buscar lo que contenga la vairiable texto que es lo que se esta buscando
   en ese momento en viaje.nombre
    */
    if (destino.indexOf(texto) !== -1) {
      document.querySelector("#viajes").innerHTML += `
        <li class="opcionDestino">
          <img src="ASSETS/IMG/DESTINOS/unnamed(${viaje.img}).jpg">
          <div> 
            <h1>${viaje.nombre}</h1>
            <span class="contViaje">
                <p>Departamento: ${viaje.departamento}</p>
                <p>${viaje.info}</p> 
            </span>
          </div>
          <p>Agregar a la agenda</p>
          <p>Ver en el Mapa</p>

        </li>
      `;
    }
  }
  //
  if (document.getElementById("viajes").innerHTML === "") {
    document.getElementById("viajes").innerHTML = `
      <h3 class="loSentimos">Lo sentimos no hemos encontrado el destino que nos indicas</h3>`;
  }
}
filtro();

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
