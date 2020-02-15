// Crear un programa que pida por un mes y devuelva la cantidad de días que ese mes tiene.

const mes = prompt("Elija un mes del año");

if (mes === "enero" || mes === "marzo" || mes === "mayo" || mes ===  "julio" || mes === "agosto" || mes ===  "octubre" || mes ===  "diciembre") {
 alert(`Su mes tiene 31 días`);
} 
    else if (mes === "febrero") {
    alert(`Su mes tiene 28 o 29 días dependiendo si es año biciesto`);
}   else {
    alert(`Su mes tiene 30 días`);
} 