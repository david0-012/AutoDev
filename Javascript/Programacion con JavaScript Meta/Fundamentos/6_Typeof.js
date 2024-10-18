// Ejemplos de typeof

// Tipo de un número
let numero = 42;
console.log(typeof numero); // "number"

// Tipo de una cadena de texto
let texto = "Hola, mundo!";
console.log(typeof texto); // "string"

// Tipo de un booleano
let booleano = true;
console.log(typeof booleano); // "boolean"

// Tipo de un objeto
let objeto = { nombre: "Juan", edad: 30 };
console.log(typeof objeto); // "object"

// Tipo de un arreglo (array)
let arreglo = [1, 2, 3];
console.log(typeof arreglo); // "object"

// Tipo de una función
function saludar() {
    console.log("Hola!");
}
console.log(typeof saludar); // "function"

// Tipo de undefined
let indefinido;
console.log(typeof indefinido); // "undefined"

// Tipo de null
let nulo = null;
console.log(typeof nulo); // "object" (esto es un comportamiento histórico de JavaScript)

// Tipo de un símbolo
let simbolo = Symbol("simbolo");
console.log(typeof simbolo); // "symbol"

// Tipo de BigInt
let bigInt = 1234567890123456789012345678901234567890n;
console.log(typeof bigInt); // "bigint"