/* filter es un método que nos permite filtrar elementos de un array, 
devolviendo un nuevo array con los elementos que cumplan con la condición que le pasemos.*/
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numerosFiltados=numeros.filter(function(numero) {
    return numero > 5; // [6, 7, 8, 9]
});
console.log(numeros);
console.log(numerosFiltados);