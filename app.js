let ingresarNum = Number(prompt("Ingresa un número del 1 al 10: "));

for (let i = 0; i <= 10; i++) {
    if(ingresarNum <= 10) {        
        console.log(ingresarNum + " X " + i + " = " + ingresarNum * i);
    } else {
        alert("¡Ingreso un número mayor al solicitado!");
        break;        
    }
}