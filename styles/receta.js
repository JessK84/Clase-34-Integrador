// Crear un programa que pregunte por separado si tiene 5 ingredientes. Según los ingredientes que tenga, mostrar un mensaje con todas las comidas que puede cocinar. Debe haber opciones para 5, 4, 3 y 2 ingredientes. Para cada cantidad, debe haber al menos 2 comidas/recetas posibles (excepto para la de 5). Se deben mostrar todas las posibles, incluyendo las que requieran menos ingredientes que las que se tienen (por ejemplo, si se tienen 4 ingredientes, se pueden hacer las de 3 y 2). Si no hay ninguna que pueda hacerse también debe mostrarse un mensaje.

const tieneHuevo = confirm('Tiene huevos?');
const tieneManteca = confirm('Tiene manteca?');
const tienePapa = confirm('Tiene papa?');
const tieneQueso = confirm('Tiene queso?');
const tieneCarne = confirm('Tiene carne?');

// 5 ingredientes
const superRejunte = tienePapa && tieneCarne && tieneHuevo && tieneManteca && tieneQueso;

// 4 ingredientes
const carneConPureYHuevo = tienePapa && tieneCarne && tieneHuevo && tieneManteca;
const carneConPureYQueso = tienePapa && tieneCarne && tieneManteca && tieneQueso;

// 3 ingredientes
const tortillaDePapa = tieneHuevo && tienePapa && tieneQueso;
const carneConPure = tienePapa && tieneCarne && tieneManteca;

// 2 ingredientes
const omelette = tieneHuevo && tieneQueso;
const pastelDePapa = tienePapa && tieneCarne;

const puedeRecetas =
  superRejunte || carneConPureYQueso || carneConPureYHuevo || tortillaDePapa || carneConPure || omelette || pastelDePapa;

let recetas = '';

if (superRejunte) {
  recetas += '- super rejunte\n';
}

if (carneConPureYHuevo) {
  recetas += '- carne con pure y huevo\n';
}

if (carneConPureYQueso) {
  recetas += '- carne con pure y quese\n';
}

if (carneConPure) {
  recetas += '- carne con pure\n';
}

if (tortillaDePapa) {
  recetas += '- tortilla de papa\n';
}

if (omelette) {
  recetas += '- omelette\n';
}

if (pastelDePapa) {
  recetas += '- pastel de papa\n';
} 

if (puedeRecetas) {
  alert(`Recetas que puede cocinar: 
  ${recetas}`);
} else {
  alert('Pida un delivery');
}