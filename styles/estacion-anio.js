// Crear un programa que pregunte por el día, el mes, y el hemisferio (norte/sur) y devuelva la estación del año correspondiente

const dia = prompt("Ingrese el día del mes sobre el que quiere realizar el cálculo");
let mes = prompt("Ingrese el mes del año sobre el que quiere realizar el cálculo");

let hemisferio="";

if (mes === "enero" || mes === "febrero" ||mes === "marzo" )  {
    hemisferio = prompt("Ingrese el hemisferios donde se encuentra") 
    if (hemisferio === "sur") {
    alert("Estás en verano");
}       else {
        alert(`Por estar en el hemisferio norte estás en invierno. Llevá gorro y guantes`);
    }
} 
if ( mes === "abril" || mes === "mayo" || mes === "junio") {
    hemisferio = prompt("Ingrese el hemisferios donde se encuentra") 
    if (hemisferio === "sur") {
    alert("Estás en otoño");
}       else {
        alert(`Estas en primavera.`);
    }
}
if ( mes === "julio" || mes === "agosto" || mes === "septiembre") {
    hemisferio = prompt("Ingrese el hemisferios donde se encuentra") 
    if (hemisferio ==="sur"){
        alert(`Estas en verano.`)
    } else {
        alert(`Estas en invierno.`)
    }
} 
if (mes === "octubre" || mes === "noviembre" || mes === "diciembre"){
    hemisferio = prompt("Ingrese el hemisferios donde se encuentra") 
   if (hemisferio === "sur") {
    alert("Estás en primavera");
}       else {
        alert("Estás en otoño");
    }
}

