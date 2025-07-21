
const arreglo = [1,2,3,4,]; // Array inicial

// Spread operator para agregar elemento
let arreglo2 = [...arreglo, 5];

// Map para modificar elementos
// Aquí se multiplica cada elemento por 2
let arreglo3 = arreglo2.map(function (numero) {
    return numero * 2;
});

console.log(arreglo);   // [1,2,3,4]
console.log(arreglo2);  // [1,2,3,4,5]
console.log(arreglo3);  // [2,4,6,8,10]