// Simón dice

// Crear un programa que muestre una secuencia de 5 nombres de colores en orden aleatorio. Los colores posibles son 4: rojo, verde, azul y amarillo. Pedir luego ingresar 5 colores uno por uno, y mostrar al finalizar si acertó la secuencia.
// // Ejemplo
// Simón dice: rojo, rojo, azul, verde, amarillo.

// Ingrese el primer color: rojo
// Ingrese el primer color: rojo
// Ingrese el primer color: azul
// Ingrese el primer color: verde
// Ingrese el primer color: amarillo

// Felicitaciones! Has ganado!

// const colores = prompt("Simón dice: azul, verde, amarillo, azul, verde.\nVamos a probar tu memoria.\n¿Estás listo?");



const random =  Math.ceil(Math.random() * 5);
const colores = 1 === "rojo" && 2 === "azul" && 3 === "verde" && 4 === "amarillo";


 prompt("Simón dice: " + (random === colores));
// let mensaje = ("Los colores son:  " + random);

// if ( colores === "si"){
//     color1= prompt("Vamos a probar tu memoria, decime cual es el color 1");
//     if (color1 !== "azul") {
//         alert("Lo siento no podemos continuar")
//     }
// } 
// if (color1 === "azul" ){
//     alert("Acertaste, vas bien")
//     color2 = prompt("Vamos a probar tu memoria, decime cual es el color 2");
// }
// if (color2 === "verde" ) {
//     alert("Acertaste, vas bien")
//     color3 = prompt("Vamos a probar tu memoria, decime cual es el color 3");
//  if (color2 !== "verde"){
//     alert("Lo siento no podemos continuar") 
// }
// }
// if (color3 === "amarillo" ) {
//     alert("Acertaste, vas bien")
//     color4 = prompt("Vamos a probar tu memoria, decime cual es el color 4");
// } else {
//     alert("Lo siento no podemos continuar");
// }
// if (color4 === "azul" ) {
//     alert("Acertaste, vas bien")
//     color5 = prompt("Vamos a probar tu memoria, decime cual es el color 5");
// } else {
//     alert("Lo siento no podemos continuar")
// }
// if (color5 === "verde" ) {
//     alert("Si llegaste hasta acá es por acertaste todo");
//     alert(mensaje + color1 + color2 + color3 + color4 + color5);
// } else {
//     alert("Lo siento no podemos continuar")
   
// }
