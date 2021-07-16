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