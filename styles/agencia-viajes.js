//Hacer un programa que muestre al usuario una lista de destinos con precio por día por persona (ofrecer 3 promos con destinos y precios distintos). Preguntarle cuál desea elegir. Una vez hecho eso, preguntarle cuántas personas y cuántos días desea hospedarse. Mostrarle el precio final y preguntarle si quiere editar algún dato. Si quiere hacerlo, preguntarle cuál de ellos: destino, personas o días, permitirle ingresar un nuevo valor y mostrar un mensaje con las opciones y el precio actualizado.

alert("Bienvenidos a Jess's Agency. Estos son los paquetes que tenemos dispoble: \nMendoza: $3.500 \nPuerto Iguazú: $5.765 \nBariloche: $9.860 \nBuenos Aires: $3.900. \nLos precios son por noche y por persona");
let destino = prompt("¿Dónde desea viajar?");
destino === "Mendoza" === "Buenos Aires" === "Bariloche" === "Puerto Iguazu";


let noche = 0;
let personas = 0;


if (destino === "Mendoza"){
    alert("Excelente destino");
    personas = Number(prompt("¿Cuántas personas viajan?"));
    noches = Number(prompt("Cuántas noches piensan quedarse")); 
    mendoza = 3500;
    let total = (noches * mendoza) *personas;  
    let mensaje = (`Ud viaja a ${destino}: ${personas} personas por ${noches} noches.`);
    alert(mensaje + " Total del viaje " + total);  
}
if (destino === "Buenos Aires"){
    alert("Excelente destino");
    personas = Number(prompt("¿Cuántas personas viajan?"));
    noches = Number(prompt("Cuántas noches piensan quedarse")); 
    buenosAires = 3900;
    let total = (noches * buenosAires) *personas;  
    let mensaje = (`Ud viaja a ${destino}: ${personas} personas por ${noches} noches.`);
    alert(mensaje + " Total del viaje " + total);  
}
if (destino === "Puerto Iguazú"){
    alert("Excelente destino");
    personas = Number(prompt("¿Cuántas personas viajan?"));
    noches = Number(prompt("Cuántas noches piensan quedarse")); 
    puertoIguazu = 3900;
    let total = (noches * puertoIguazu) *personas;  
    let mensaje = (`Ud viaja a ${destino}: ${personas} personas por ${noches} noches.`);
    alert(mensaje + " Total del viaje " + total);  
}
if (destino === "Bariloche"){
    alert("Excelente destino");
    personas = Number(prompt("¿Cuántas personas viajan?"));
    noches = Number(prompt("Cuántas noches piensan quedarse")); 
    bariloche = 3900;
    let total = (noches * bariloche) *personas;  
    let mensaje = (`Ud viaja a ${destino}: ${personas} personas por ${noches} noches.`);
    alert(mensaje + " Total del viaje " + total);  
}
