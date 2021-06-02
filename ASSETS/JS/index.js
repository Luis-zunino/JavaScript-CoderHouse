const nombreUsuario = prompt("Por favor ingresar su nombre:");
const tiempo = prompt(
  `¡Bienvenido ${nombreUsuario} al auomatizador de viajes! Elige el tiempo que deseas hospedarte`
).toUpperCase();
console.log("El usuario a ingresado la información")


if (tiempo > 0 && tiempo < 5) {
    alert(`Muy bien ${nombreUsuario} has elegido hospedarte ${tiempo} días`);

} else if (tiempo > 5 && tiempo <= 7) {
    alert(`Muy bien ${nombreUsuario} has elegido hospedarte ${tiempo} días`);

} else {
    alert(`Muy bien ${nombreUsuario} has elegido hospedarte ${tiempo} días`);

}

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
  for (let i in depas) {
      //lo imprimo
    depa.innerHTML += `<option id="${i}">${depas[i]}</option>`;
  }
  //Tipos de lugares
  let tipo = [
    "--Elige una opción--",
    "Espacios Verdes",
    "Playas",
    "Aguas Termales",
    "Ciudades",
  ];
  let tipos = document.getElementById("tipos");
  
  for(let i in tipo){
    tipos.innerHTML += `<option id="${i}">${tipo[i]}</option>`;
  
  }
  
  
  