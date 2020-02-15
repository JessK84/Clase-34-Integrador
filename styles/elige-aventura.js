// Crear un programa que simule un juego de "Elige tu propia aventura". Debe describir un escenario y presentar opciones disponibles para actuar. Luego, a partir de la opción elegida, repetir el proceso hasta llegar a un final. El juego debe tener 1 escenario inicial con 3 opciones posibles, cada opción debe llevar a un nuevo escenario (distinto de los demás) con 3 opciones disponibles también. Estas opciones deben llevar a un final (por lo tanto hay 9 finales posibles).

let cuento = prompt("Había una vez una dulce niña que quería mucho a su madre y a su abuela. Un día la abuela de Caperucita, que vivía en el bosque, enfermó y la madre le pidió que le llevara una cesta con una torta... \n¿Qué crees que hizo Caperucita? \n1.No hizo caso a lo que la mamá pidió y decidió marcharrse de la casa esa tarde \n2. Caperucita aceptó encantada \n3. Muy astuta le hizo creer a su madre que llevaría a cabo el encargo");
let opciones = "";

if (cuento === "1") {
    opciones = prompt("Luego de marcharse de la casa, sin obedecir ella fue: \nA. A tomar vino al bosque con sus amigas \nB. Se puso a ver Netflix con el zorro \nC. Se quedó dormida en el bosque hasta el amanecer");
    if (opciones ==="a") {
        alert("...le encanta el vino tinto");
}   else if (opciones === "b") {
        alert("...se miró todas las temporadas de Vikingos");
}   else {
    alert("...cuando llego a la casa la madre estaba muy enojada");
    }
}
if (cuento === "2") {
    opciones = prompt("Luego de aceptar el encargo de su madre: \nA. Tuvo un camino hacia casas de su abuelita muy tranquilo \nB. A mitad de camino fue asaltada por el zorro y su pandilla \nC. Le robaron el celular");
    if (opciones === "A" || opciones ==="a") {
        alert("...llegó y pudo ayudar a su abuelita")
}   else if (opciones === "B" || opciones === "b") {
        alert("...luego del episodio, llego a casa de la abuelita y comenzó a planear la venganza")
}   else {
    alert("...y no puedo encontrar la casa de la abuelita, dado que perdió la dirección guardad en el móvil")
    }
}
if (cuento === "3") {
    opciones = prompt("Luego de mentirle a su madre: \nA. Se escondió en el bosque hasta la noche \nB. Se puso a organizar un baile \nC. Se fue a visitar al novio que hacía mucho que no lo veía");
    if (opciones === "A" || opciones ==="a") {
        alert("...fue atacada por una pandilla de mosquitos")
}   else if (opciones === "B" || opciones === "b") {
        alert("... al que nadie fue, porque su madre suspendió por estar castigada")
}   else {
    alert("... al llegar el no estaba en casa")
    }
}