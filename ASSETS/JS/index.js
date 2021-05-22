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