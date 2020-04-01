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

let color1 = Math.round(Math.random() * 3);
let color2 = Math.round(Math.random() * 3);
let color3 = Math.round(Math.random() * 3);
let color4 = Math.round(Math.random() * 3);
let color5 = Math.round(Math.random() * 3);

if (color1 === 0) {
    color1 = "rojo"
} else if (color1 === 1) {
    color1 = "azul"
} else if (color1 === 2) {
    color1 = "amarillo"
} else if (color1 === 3) {
    color1 = "verde"
}

if (color2 === 0) {
    color2 = "rojo"
} else if (color2 === 1) {
    color2 = "azul"
} else if (color2 === 2) {
    color2 = "amarillo"
} else if (color2 === 3) {
    color2 = "verde"
}

if (color3 === 0) {
    color3 = "rojo"
} else if (color3 === 1) {
    color3 = "azul"
} else if (color3 === 2) {
    color3 = "amarillo"
} else if (color3 === 3) {
    color3 = "verde"
}

if (color4 === 0) {
    color4 = "rojo"
} else if (color4 === 1) {
    color4 = "azul"
} else if (color4 === 2) {
    color4 = "amarillo"
} else if (color4 === 3) {
    color4 = "verde"
}

if (color5 === 0) {
    color5 = "rojo"
} else if (color5 === 1) {
    color5 = "azul"
} else if (color5 === 2) {
    color5 = "amarillo"
} else if (color5 === 3) {
    color5 = "verde"
}


alert (`Simón dice: ${color1}, ${color2}, ${color3}, ${color4}, ${color5}.`)

const primerColor = prompt(`Ingrese el primer color:`)
const segundoColor = prompt(`Ingrese el segundo color:`)
const tercerColor = prompt(`Ingrese el tercer color:`)
const cuartoColor = prompt(`Ingrese el cuarto color:`)
const quintoColor = prompt(`Ingrese el quinto color:`)

if ((color1 === primerColor) && (color2 === segundoColor) && (color3 === tercerColor) && (color4 === cuartoColor) && (color5 === quintoColor)){
    alert(`¡Ganaste!`)
} else {
    alert(`Perdiste.`)
}