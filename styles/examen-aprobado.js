// Crear un programa que pida al usuario ingresar la nota un examen y mostrar en un mensaje si el examen está aprobado, si debe recuperar o es un aplazo. Si la nota es mayor a 7 aprueba, si es mayor a 4 recupera y si es menor a 4 es un aplazo.

const nota = Number(prompt("Ingrese la nota del examen"));

if (nota >= 7 && nota <= 10) {
    alert("Está aprobado");
}
if (nota <= 7 && nota >= 4) {
    alert("Está reprobado");
}
if (nota <= 4 && nota >= 0) {
    alert("Está aplazado");
}