const nombreUsuario = prompt("Por favor ingresar su nombre:");
const lugar = prompt(
  `¡Bienvenido ${nombreUsuario} al auomatizador de viajes! Elige el tipo de destino: Playa/Campo/Ciudad`
).toUpperCase();
console.log("El usuario a ingresado la información")