// Crear un programa que muestre una adivinanza (entre 4 o 5 posibles) al azar, y permita al usuario ingresar la respuesta. Mostrarle un mensaje indicándole si acertó o no.


// DEFINO LAS ADIVINANZAS
const adivinanza1 = (`Si la dejamos se pasa, si la vendemos se pesa \n¿Qué es?`)
const adivinanza2 =(`Dos señoras, todas con medias y sin zapatos \n¿ De qué hablamos?`)
const adivinanza3 =(`Fui por él, y nunca lo traje \n¿ De qué hablamos?`)
const adivinanza4 =(`Todos pasan por mí, y yo no paso por nadie. Todos preguntan por mí, y yo no pregunto por nadie \n¿ De qué hablamos?`)
const adivinanza5 =(`¿Dónde hay ríos pero no hay agua, ciudades pero no casas, bosques y bo árboles?`)

// ESTABLEZCO EL MATCH ALEATORIO
const juegoPc= Math.ceil(Math.random() * 5);

// SE JUEGA Y DEFINE SI GANÓ O NO
if (juegoPc === 1) {
    let respuesta1 = prompt(adivinanza1)
    if (respuesta1 ==="uva" || respuesta1 === "la uva") {
        alert(`Acertaste \nSos muy capo`)
    } else {
        alert(`Perdiste gil! \nEra "la uva"`)
    }
} else if (juegoPc === 2) {
    let respuesta2= prompt(adivinanza2)
    if (respuesta2 === "las horas" || respuesta2 === "horas") {
        alert(`Acertaste \nSos muy capo`)
    } else {
        alert(`Perdiste gil! \nEra "las horas"`)
    }
} else if (juegoPc === 3) {
    let respuesta3 = prompt(adivinanza3)
    if (respuesta3 === "el camino" || respuesta3 === "camino") {
        alert(`Acertaste \nSos muy capo`)
    } else {
        alert(`Perdiste gil! \nEra "el camino"`)
    }
}  else if (juegoPc === 4) {
    let respuesta4 = prompt(adivinanza4)
    if (respuesta4 === "la calle" || respuesta4 === "calle") {
        alert(`Acertaste \nSos muy capo`)
    } else {
        alert(`Perdiste gil! \nEra "la calle"`)
    }
}  else  {
    let respuesta5 = prompt(adivinanza5)
    if (respuesta5 === "el mapa" || respuesta5 === "mapa") {
        alert(`Acertaste \nSos muy capo`)
    } else {
        alert(`Perdiste gil! \nEra "el mapa"`)
    }
} 