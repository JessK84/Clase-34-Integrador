// Una clienta nos pidió que hagamos un programa para su tienda online.
// arrow_down El flujo del programa debería ser el siguiente:

//    1. Mostrar un saludo de bienvenida y preguntar el nombre de la clienta
//    2. Mostrarle los productos en promoción (2 productos)
//    3. Preguntarle si quiere comprar el producto 1.
//       a. Si acepta preguntar cuántas unidades va a llevar
//    4. Preguntarle si quiere comprar el producto 2.
//       a. Si acepta preguntar cuántas unidades va a llevar
//   
//    6. Si lleva alguno, mostrar el detalle de la compra con:
//       - subtotales de cada producto (precio x cantidad) 
//       - total (suma de subtotales)
//    7. Preguntar si desea abonar con tarjeta de crédito
//       a. Si acepta preguntar en cuántas cuotas desea abonar
//         - Sólo puede pagar en 3, 6 o 12 cuotas
//         - Si ingresa un número equivocado, debe continuar el programa como si no utilizara tarjeta de crédito
//         - 3 cuotas tiene un interés de 5%, 6 de 10% y 12 de 25%
//    8. Mostrar el detalle de la compra con:
//       - subtotales de cada producto (precio x cantidad) 
//       - total (suma de subtotales)
//       - si abona con tarjeta, cantidad de cuotas y monto de cada cuota a pagar

// Saludo de bienvenida y preguntar el nombre de la clienta
let nombre = prompt("Bienvenida a Ada Lovelace, ¿cuál es su nombre?");
const tienda = "Ada Lovelace";
const precio2 = 1340;
const montoDescuento = 25*100;
let mensaje = "";
let precio1 = 12760;
const compra = "lavarropas";
const compra1 = "plancha";
let tarjeta = "";
let codigoDescuento ="Ada2020";

//    Mostrarle los productos en promoción (2 productos) // En este caso el cliente rechaza el producto1 y producto2 o, rechaza el producto1 y compra el prodcuto2
producto1 = prompt("Tenemos en promoción los siguientes productos: \n1. Lavarropas \n2. Plancha\n¿Desea llevar el lavarropas?");
if (producto1 === "no"){
    producto2 = prompt("¿Desea llevar la plancha?");
    if (producto2 === "no") {
    alert(`Gracias por su tiempo lo esperamos nuevamente en ${tienda}`+`\n${nombre}`);
}    if (producto2 === "si") {
    unidades = Number(prompt("¿Cuántas unidades?"));
    total = precio2 * unidades;
    alert(`El precio por unidad es$${precio2}.
    El precio total es: $${total}`);
    cuotas = Number(prompt("¿Va a con tarjerta de crédito? Puede hacerlo en:\n3 con un 5% de recargo \n6 con un 10% de recargo \n12 con un 25 % de recargo"));
}   if (cuotas === 3) {
        montoCuota = (total /3) * 1.05;
        alert(`El monto en 3 cuotas es: $${montoCuota}`)
    }   if (cuotas === 6) {
        montoCuota = (total /6) * 1.10;
        alert(`El monto en 6 cuotas es: $${montoCuota}`)
    }  else if (cuotas === 12) {
        montoCuota = (total /12) * 1.25;
        alert(`El monto en 12 cuotas es: $${montoCuota}`) 
        }   
    codigo = confirm(`Detalle de la compra: 
    -${unidades} ${compra}, por un monto total de $${total}.-
    -Abona con tarjeta de crédito en ${cuotas} cuotas.
    -El monto de la cuota es: ${montoCuota}
    ¿Tiene código de descuento?`);
    if  (codigo === true) {
        codigoDescuento = prompt("Ingrese el código del descuento");
    } if (codigoDescuento === "Ada2020") {
        descuento = total / 1.25;
        cuotasDescuento = descuento / cuotas;    // Código de descuento
        alert(`${nombre}`+`\nEl código ingresado es correcto: 
        -El monto total con el código de desuento aplicado es: $${descuento}
        -Abona con tarjeta de crédito en ${cuotas} cuotas.
        -El monto de la cuota es: ${cuotasDescuento}
        Gracias por elegir a ${tienda}`);
        } else {
            alert(`
            El código ingresado es incorrecto
            Gracias por su compra, lo esperamos nuevamente en
            ${tienda}`)
        }
    }
// En este caso el cliente rechaza el producto1 y producto2 o, compra el producto 1 y rechaza el producto2

if (producto1 === "si" ){
    unidades = Number(prompt("¿Cuántas unidades?"));
    total = precio1 * unidades;
    alert(`El precio por unidad es$${precio1}.-
    El es: $${total}.-`);
   producto2 = prompt("¿Desea llevar la plancha?"); 
    if (producto2 === "si" || producto2 === "no"){
    unidades1 = Number(prompt("¿Cuántas unidades?"));
    total1 = precio2 * unidades1;
    alert(`El precio por unidad es$${precio2}.
    El precio total es: $${total1}`);
    totalFinal = total + total1;
    alert(`El monto total de la compra es $${totalFinal}`);
    cuotas = Number(prompt("¿Va a pagar con tarjeta de crédito? \nPuede pagar en:\n3 con un 5% de recargo \n6 con un 10% de recargo \n12 con un 25 % de recargo"));//       - si abona con tarjeta, cantidad de cuotas y monto de cada cuota a pagar
}   if (cuotas === 3) {
        montoCuota = (total /3) * 1.05;
        alert(`El monto en 3 cuotas es: $${montoCuota}`)
    } else if (cuotas === 6) {
        montoCuota = (total /6) * 1.10;
        alert(`El monto en 6 cuotas es: $${montoCuota}`)
    } else if (cuotas === 12) {
        montoCuota = (total /12) * 1.25;
        alert(`El monto en 12 cuotas es: $${montoCuota}`) 
        }
    codigo = confirm(`Detalle de la compra: 
    -${unidades1} ${compra1}, por un monto total de $${total1}.-
    -${unidades} ${compra}, por un monto total de $${total}.-
    -El monto total es: $${totalFinal}.-
    -Abona con tarjeta de crédito en ${cuotas} cuotas.
    -El monto de la cuota es: ${montoCuota}
    ¿Tiene código de descuento?`);
     if  (codigo === true) {
    codigoDescuento = prompt("Ingrese el código del descuento");
    // Código de descuento
     if (codigoDescuento === "Ada2020") { 
    descuento = totalFinal / 1.25;
    cuotasDescuento = descuento / cuotas;
    alert(`${nombre}:`+`\nEl código ingresado es correcto: 
    -El monto total con desuento aplicado es: $${descuento}
    -Abona con tarjeta de crédito en ${cuotas} cuotas.
    -El monto de la cuota es: ${cuotasDescuento}
    Gracias por elegir a ${tienda}.
    `);
    } else {
        alert(`
        El código ingresado es incorrecto
        Gracias por su compra, lo esperamos nuevamente en
        ${tienda}`)
    }
     }
}


