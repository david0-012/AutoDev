/* El operador spread (...) toma los elementos de un array, objeto u otro iterable
 y los expande o distribuye en otro lugar. Se usa para descomponer elementos, 
 como al combinar arrays, copiar objetos o pasar elementos individuales de un array como argumentos. */

//* Usar el operador spread para combinar dos arrays o dos objetos
const frutas = ['manzana', 'pera', 'naranja'];
const verduras = ['zanahoria', 'espinaca', 'lechuga'];
const alimentos = [...frutas, ...verduras]; // Esta es la forma de unir dos arrays
console.log(alimentos); // ['manzana', 'pera', 'naranja', 'zanahoria', 'espinaca', 'lechuga']

const carro = { puertas: 2}
const moto = { ruedas: 2}
const vehiculo = {...carro, ...moto}; // Esta es la forma de unir dos objetos
console.log(vehiculo); // {puertas: 2, ruedas: 2}

//* Usar el operador spread para agregar fácilmente uno o más miembros a una matriz existente sin usar push()
let marcas = ['Toyota', 'Honda', 'Ford'];
marcas = [...marcas, 'Nissan', 'Chevrolet'];
console.log(marcas); // ['Toyota', 'Honda', 'Ford', 'Nissan', 'Chevrolet']

//* Convertir una cadena en una matriz
const nombre = 'Juan';
const nombreArray = [...nombre];
console.log(nombreArray); // ['J', 'u', 'a', 'n']

//* Copiar una matriz
const original = [1, 2, 3];
const copia = [...original];
console.log(copia); // [1, 2, 3]

//* Copiar un objeto
const originalObj = { nombre: 'Juan', edad: 30 };
const copiaObj = { ...originalObj };
console.log(copiaObj); // {nombre: 'Juan', edad: 30}