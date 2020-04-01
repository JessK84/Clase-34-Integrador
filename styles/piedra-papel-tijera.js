// Crear un programa que permita ingresar al jugador piedra, papel o tijera, genere de forma aleatoria la jugada de la computadora, y muestre en un mensaje quién ganó, con las jugadas respectivas.

const piedraPapelTijera =[`piedra`, `papel`, `tijera`]

let juegoPc= piedraPapelTijera[Math.round(Math.random() * (piedraPapelTijera.length - 1))];

jugador= prompt(`Ingrese piedra, papel o tijera`);

    if(jugador === "piedra" && juegoPc === "tijera") {
        alert(`Ganaste, yo elegí ${juegoPc}`)
        
    } else if(jugador === "piedra" && juegoPc === "papel") {
        alert(`Perdiste, yo elegí ${juegoPc}`)

    } else if(jugador === "papel" && juegoPc ===  "tijera") {
        alert(`Perdiste, yo elegí ${juegoPc}`)

    } else if(jugador === "papel" && juegoPc ===  "piedra") {
        alert(`Ganaste, yo elegí ${juegoPc}`)

    } else if(jugador === "tijera" && juegoPc ===  "piedra") {
        alert(`Perdiste, yo elegí ${juegoPc}`)
    
    } else if(jugador === "tijera" && juegoPc ===  "papel") {
        alert(`Ganaste, yo elegí ${juegoPc}`)
    } else {
        alert(`Elige una opción válida`)
    }