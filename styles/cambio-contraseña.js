// Hacer un programa que permita cambiar la contraseña de usuario. Para eso tiene que responder las tres preguntas de seguridad. Si las tres preguntas son respondidas correctamente, tiene que pedir por la nueva contraseña y luego mostrar un mensaje que fue cambiada. En caso de que al menos alguna pregunta fue respondida incorrectamente debe mostrar un mensaje advirtiéndolo. Definir de antemano (hardcodear) preguntas y respuestas.

alert("Vamos a comenzar el proceso de validación de su cuenta");
let pregunta1 = prompt("¿Cuál es el segundo nombre de su madre?");


if (pregunta1 === "Magdalena") {
    alert("Respuesta correcta, seguimos con la pregunta N°2");
     pregunta2 = Number(prompt("Año de nacimiento de su padre"));
}  else {
    alert("No hemos podido identificarlo");
}
if (pregunta2 === 1955) {
    alert("Respuesta correcta, falta la última pregunta");
    pregunta3 = prompt("¿Cuál es el nombre de mascota?");
}   else {
    alert("No hemos podido identificarlo");
} 
if (pregunta3 === "James") {
    alert("Felicidades: puede ingresar al sistema.");
    prompt("Ingrese su nuevo user ");
    prompt("Ingrese su pass:");
    prompt("Repita su pass:");
    alert("Su contraseña fue cambiada exitosamente");
}   else {
    alert("No hemos podido identificarlo");
}  


