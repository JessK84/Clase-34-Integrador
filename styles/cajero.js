// Crear un programa que muestre el dinero inicial, y que permita retirar dinero hasta 3 veces preguntando cuánto se desea retirar, y mostrando el dinero restante a continuación. Si se intenta retirar más dinero del disponible, o no cuenta con dinero disponible, debe mostrar un mensaje alertándolo e impedir seguir retirando.

alert(`Ud. dispone de $2746`);

let dineroInicial = 2746;
let retiro = Number(prompt("¿Cuánto dinero desea retirar?")); // 746

let saldo = dineroInicial - retiro; // 2746 - 746 = 2000


if (dineroInicial > retiro) {
    alert(`Su saldo es $${saldo}`); // 2000
}   else if ( retiro > dineroInicial){
    alert(`Ud no dispone de saldo suficiente`);
}
retiro = Number(prompt("¿Cuánto dinero desea retirar?"));

if (saldo > retiro){ // retiro 1000
    alert(`Su saldo es $${saldo - retiro}`); // 2000 - 1000 = 1000
    saldo = saldo - retiro; // 1000
}   else {
    alert(`Ud no dispone de saldo suficiente`);
}
retiro = Number(prompt("¿Cuánto dinero desea retirar?"));

if (saldo > retiro) {
    alert(`Su saldo es $${saldo - retiro}`);
}   else  {
    alert(`Ud no dispone de saldo suficiente`);
}