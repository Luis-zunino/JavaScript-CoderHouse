/*
https://www.danielprimo.io/blog/leaflet-una-alternativa-gratis-a-google-maps
*/

var map = L.map("map").setView([-32.70693340531241, -55.98485369606557], 7);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

for (let viaje of viajes) {
  const texto = buscado.value.toLowerCase();
  let destino = viaje.nombre.toLowerCase();
  L.marker([viaje.cordX, viaje.cordY])
    .addTo(map)
    .bindPopup(
      `<img src="ASSETS/IMG/DESTINOS/unnamed(${viaje.img}).jpg">
        <div> 
          <h1>${viaje.nombre}</h1>
          <span>
              <p>Departamento: ${viaje.departamento}</p>
              <p>${viaje.info}</p> 
          </span>
        </div>`
    )
    .openPopup();
}
