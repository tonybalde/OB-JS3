resultado = 1;
var i = 1;

while (i <= 10){
    
    resultado = resultado * i;
    i++;

    if (i > 10){
        break;
    }
}

console.log("El factorial de 10 es: " + resultado);