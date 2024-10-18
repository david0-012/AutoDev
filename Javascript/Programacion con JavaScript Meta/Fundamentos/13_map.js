/* map es un método que crea un nuevo arreglo aplicando una función
 a cada uno de los elementos de un arreglo existente. No modifica el arreglo original, sino que devuelve un nuevo arreglo con los resultados de esa función.*/

 const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
 const numeroPorDos = numeros.map(function(numero) {
        return numero * 2; // [2, 4, 6, 8, 10, 12, 14, 16, 18]    
 });
console.log(numeros);
console.log(numeroPorDos);

new Map();// Constructor de Map
let marcas = new Map();
marcas.set('marca1', 'Nike');
marcas.set('marca2', 'Adidas');
marcas.set('marca3', 'Puma');
marcas.set('marca4', 'Reebok');
console.log(marcas);

console.log(marcas.get('marca1'));