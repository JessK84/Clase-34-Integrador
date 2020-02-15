// Crear un programa que pregunte por características de un departamento, y dependiendo de las opciones defina qué tan recomendado es un departamento para alquilar. Preguntar por 3 o 4 características (ubicación, antigüedad, costo, etc). Cada característica debería tener al menos 3 opciones posibles para elegir. Al final, debe mostrar un mensaje indicando cuánto se recomienda (usar al menos 4 niveles de recomendación posible).

let ubicacion = prompt(`Comenzamos el proceso de elección de la propiedad de tus sueños. La ubicación del departamento a elegir (ingrese el número de referencia):
1 -Céntrica
2 -Residencial
3 -Barrios periféricos e inseguros
4 -Barrios periféricos y seguros (barrio cerrados)
5 -A 15 minutos del centro`);

let antigüedad = prompt(`La antigüeda del departamento a elegir (ingrese el número de referencia):
1 -A estrenar
2 -De 0 a 5 años
3 -De 6 a 10 años
4 -De 11  a 20 años
5 -De más de 20 años`);
let ambientes = prompt(`Cantidad de ambeintes (ingrese el número de referencia):
1 -Monoambiente
2 -2 ambientes
3- 2 ambientes con balcón integrado
4 -3 ambientes
5 -3 ambientes y terraza propia
`);


if (ubicacion === "1" || ubicacion === "2" || ubicacion === "5" && antigüedad === "1" || antigüedad === "2" && ambientes === "1" || ambientes === "2") {
    alert("El departaento es recomendable tanto por la ubicación, céntrica o zonas residenciales, la atiguedad del mismo y dado el tamaño es ideal para 1 o 2 personas")
}
else if (ubicacion === "4"  && antigüedad === "3" || antigüedad === "4" && ambientes === "5" || ambientes === "2") {
    alert("Al ser una propiedad en zona residencial es recomendable, el entorno verde, la tranquilidad de un barrio cerrado. La antiguedad es lo único que asusta, pero trabajamos con departamentos totalemente remodelados y rediseñados para ofrecerle el mejor confort. ")
}
else if (ubicacion === "3"  && antigüedad === "5" && ambientes === "5" || ambientes === "4") {
    alert("Es una porpiedad vieja y en una zona insegura, pero a un costo excepcional ")
} else {
    nuevaBusqueda = confirm("La opción ingresada no tiene comentarios, ¿desea comenzar nuevamente el proceso de búsqueda?")
}
ubicacion = prompt(`Comenzamos el proceso de elección de la propiedad de tus sueños. La ubicación del departamento a elegir (ingrese el número de referencia):
1 -Céntrica
2 -Residencial
3 -Barrios periféricos e inseguros
4 -Barrios periféricos y seguros (barrio cerrados)
5 -A 15 minutos del centro`);

antigüedad = prompt(`La antigüeda del departamento a elegir (ingrese el número de referencia):
1 -A estrenar
2 -De 0 a 5 años
3 -De 6 a 10 años
4 -De 11  a 20 años
5 -De más de 20 años`);
ambientes = prompt(`Cantidad de ambeintes (ingrese el número de referencia):
1 -Monoambiente
2 -2 ambientes
3- 2 ambientes con balcón integrado
4 -3 ambientes
5 -3 ambientes y terraza propia
`);
if (ubicacion === "1" || ubicacion === "2" || ubicacion === "5" && antigüedad === "1" || antigüedad === "2" && ambientes === "1" || ambientes === "2") {
    alert("El departaento es recomendable tanto por la ubicación, céntrica o zonas residenciales, la atiguedad del mismo y dado el tamaño es ideal para 1 o 2 personas")
}
else if (ubicacion === "4"  && antigüedad === "3" || antigüedad === "4" && ambientes === "5" || ambientes === "2") {
    alert("Al ser una propiedad en zona residencial es recomendable, el entorno verde, la tranquilidad de un barrio cerrado. La antiguedad es lo único que asusta, pero trabajamos con departamentos totalemente remodelados y rediseñados para ofrecerle el mejor confort. ")
}
else if (ubicacion === "3"  && antigüedad === "5" && ambientes === "5" || ambientes === "4") {
    alert("Es una porpiedad vieja y en una zona insegura, pero a un costo excepcional ")
} else {
    nuevaBusqueda === false && alert("Gracias por confiar en nosotros, lo esperamos nuevamente")
}