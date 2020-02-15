// Crear un programa que ofrezca a elegir entre 3 marcas distintas para un producto. //Phillips, Samsung o Sonny"
// Una vez elegida la marca debe ofrecer elegir entre dos modelos distintos de la marca. 
// Finalmente debe mostrar el producto elegido. Cada marca debe tener modelos distintos a los de otras marcas (no pueden tener el mismo nombre). P. ej: Philip 3000, Philip 5000, Sony XA, Sony X100, etc.

const marca = prompt("Está por elegir la marca de su Smart TV '50. Puede optar por \nPhilip \nSamsung \nSonny");//Phillips, Samsung o Sonny"
let modelo ="";

if (marca === "Philip") {
    modelo = prompt("Tiene disponible el modelo: Philip 2100 o el Philip Plus"); 
   if (modelo === "Philip 2100" ) {
    alert(`El modelo elegido cuesta $5689` );
   }
     else{
        alert(`El modelo elegido cuesta $6760` );
        }
    }
if (marca === "Samsung") {
    modelo = prompt("Tiene disponible el modelo: Samsung 2100 o el Samsung Plus"); 
    if (modelo === "Samsung 2100" ) {
    alert(`El modelo elegido cuesta $5689` );
    }
        else{
        alert(`El modelo elegido cuesta $6760` );
        }
    }
if (marca === "Sonny") {
    modelo = prompt("Tiene disponible el modelo: Sonny 2100 o el Sonny Plus"); 
   if (modelo === "Sonny 2100" ) {
    alert(`El modelo elegido cuesta $5689` );
   }
     else{
        alert(`El modelo elegido cuesta $6760` );
        }
    }