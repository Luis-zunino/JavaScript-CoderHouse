// const nombreUsuario = prompt("Por favor ingresar su nombre:");
// const tiempo = prompt(
//   `¡Bienvenido ${nombreUsuario} al auomatizador de viajes! Elige el tiempo que deseas hospedarte`
// ).toUpperCase();
// console.log("El usuario a ingresado la información")

// if (tiempo > 0 && tiempo <= 5) {
//     alert(`Muy bien ${nombreUsuario} has elegido hospedarte ${tiempo} días`);

// } else if (tiempo > 5 && tiempo <= 7) {
//     alert(`Muy bien ${nombreUsuario} has elegido hospedarte ${tiempo} días`);

// } else {
//     alert(`Muy bien ${nombreUsuario} has elegido hospedarte ${tiempo} días`);

// }

//Escucho cuando se hace click en el boton enviar y lo notifico con guardarnombre

document.getElementById("nombreboton").addEventListener("click", guardarnombre);

function guardarnombre() {
  //Guardo la informacion del imput en una variable
  let nombreUsuario = textonombre.value;
  //Creo un elemento H1
  let mostrar = document.createElement("h1");
  //Creo el mensaje que quiero mostrar
  let mostrartexto = document.createTextNode(
    `Bienvenido ${nombreUsuario} elige tu destino y nosotros por ti el camino!`
  );
  //Se lo adjudico como hijo al h1
  mostrar.appendChild(mostrartexto);

  //y vuelvo a adjudicar lo anterior como hijo al h1 que tengo como titulo
  let mensajeBienvenida = document.getElementById("formulario").appendChild(mostrar);

  // localStorage.setItem("User", nombreUsuario);
  // localStorage.setItem("Bienvenida", mensajeBienvenida);
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

for (let i = 0; i < depas.length; i++) {
  depa.innerHTML += `<option id="${i}">${depas[i]}</option>`;
}

// for (let i in depas) {
//     //sirve mas para objetos el for in
//   depa.innerHTML += `<option id="${i}">${depas[i]}</option>`;
// }

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
// for(let i in tipo){
//   tipos.innerHTML += `<option id="${i}">${tipo[i]}</option>`;

// }
