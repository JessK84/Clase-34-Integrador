// Crear un programa que pregunte al usuario paso por paso qué opciones desea elegir para armar su pedido. En caso de que no se elija una opción válida en cualquier paso debe mostrar un mensaje alertando que el pedido saldrá incompleto. Mostrar al final un mensaje con el pedido resultante. Debe preguntar:
// Tipo de pan: blanco, negro, integral
// Ingrediente 1: tomate, lechuga, pimiento
// Ingrediente 2: cebolla, aceituna, pepino
// Aderezos: mostaza, mayonesa, picante
// Gaseosa: Coca Cola, Pepsi, Sprite


const pan = prompt("Elija el tipo de pan: blanco, negro o integral");
let mensaje = "Su sandiwich tiene: ";

if (pan === "negro" || pan === "blanco" || pan === "integral"){
    alert(mensaje + `pan ` + pan);
} else {
    alert("La opción ingresada no es válida, su pedido saldrá incompleto");
}
const ingredientes = prompt("Elija los ingredientes que desea añadir: tomate, lechuga o pimiento");
if (ingredientes === "tomate" ||ingredientes === "lechuga" || ingredientes === "pimiento" ) {
    alert(mensaje + ingredientes)
} else {
    alert("La opción ingresada no es válida, su pedido saldrá incompleto");
}
const ingredientes2 = prompt("Elija los ingredientes que desea añadir: cebolla, aceitunas o pepino");
if (ingredientes2 === "pepino" || ingredientes2 === "aceitunas" || ingredientes2 === "cebolla") {
    alert(mensaje + ingredientes2)
} else {
    alert("La opción ingresada no es válida, su pedido saldrá incompleto");
}
const aderezos = prompt("Elija los aderezos que desea añadir: mostaza, mayonesa o picante ");
if (aderezos === "picante" || aderezos === "mayonesa" || aderezos === "mostaza") {
    alert(mensaje + aderezos);
} else {
    alert("La opción ingresada no es válida, su pedido saldrá incompleto");
}
const gaseosa = prompt("Elija la gaseosa para acompañar su menú: Coca Cola, Pepsi o Sprite");
if (gaseosa === "Coca Cola" || gaseosa === "Sprite" || gaseosa === "Pepsi") {
    alert(mensaje + gaseosa);
    alert(mensaje + `pan` + pan  + ingredientes   + ingredientes2 + aderezos   + gaseosa);
}