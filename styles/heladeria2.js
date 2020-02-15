// // Crear un programa que pregunte al usuario cuántos kilos de helado va a comprar y mostrar en un mensaje la cantidad de sabores disponibles según la opción elegida. Opciones:
// 1/4kg: 2 sabores.
// 1/2kg: 3 sabores.
// 3/4kg: 4 sabores.
// 1kg: 5 sabores.


let cantidad = (prompt("Ingrese la cantidad de kilos que desea llevar"));
let sabores = [" chocolate,  vainila,  dulce de leche,  granizado,  crema del cielo,  mandarina,  frutilla,  limón"];
let mensaje = "Su helado tiene: "

if (cantidad === "cuarto"){
    alert("Puede llevar 2 sabores");
    sabores = prompt("Puede elegir 2 de los siguientes sabores: " + sabores );;
    alert(mensaje + sabores)
}
if (cantidad === "medio"){
    alert("Puede llevar 3 sabores");
    sabores = prompt("Puede elegir 3 de los siguientes sabores: " + sabores );
    alert(mensaje + sabores)
}
if (cantidad === "3 cuartos") {
    alert("Puede llevar 4 sabores");
    sabores = prompt("Puede elegir 4 de los siguientes sabores: " + sabores );
    alert(mensaje + sabores)
}
if (cantidad === "1"){
    alert("Puede llevar 5 sabores");
    sabores = prompt("Puede elegir 5 de los siguientes sabores: " + sabores );
    alert(mensaje + sabores)
}


