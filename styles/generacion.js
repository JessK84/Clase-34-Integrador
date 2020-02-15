// Crear un programa que pida al usuario ingresar su año de nacimiento y mostrar en un mensaje a que generación pertenece (baby boomer, gen y, millenial, centennial, o ninguna de ellas).

const anio = Number(prompt("Ingrese su año de nacimiento"));

if (anio >= 1920 && anio <= 1945 ) {
    alert("Ud pertenece a la generación BUILDER");
} else if (anio >= 1946 && anio <= 1960) {
    alert("Ud pertenece a la generación BABY BOOMERS");
} else if (anio >= 1961  && anio <= 1980) {
    alert("Ud pertenece a la generación GENERACIÓN X");
} else if (anio >= 1981 && anio <= 1995) {
    alert("Ud pertenece a la generación GENERACIÓN Y");
}  else {
    alert("Ud es lo mejor que hay, no hay forma de clasificarlo");
}
