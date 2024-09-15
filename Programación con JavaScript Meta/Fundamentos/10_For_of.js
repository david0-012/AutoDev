/*El bucle for of es una forma más sencilla 
de recorrer un array que el bucle for tradicional.*/
const colores = ['Rojo', 'Verde', 'Azul'];
for (var color of colores) {
    console.log(color); // Rojo, Verde, Azul
}

//* Metodos incorporados en los arrays
const carro = {
    velocidad: 100,
    color: 'Rojo',
    marca: 'Toyota'
}
//* Object.keys | Devuelve las claves de un objeto
console.log(Object.keys(carro)); // ['velocidad', 'color', 'marca'] 
//* Object.values | Devuelve los valores de un objeto
console.log(Object.values(carro)); // [100, 'Rojo', 'Toyota']
//* Object.entries | Devuelve las claves y valores de un objeto
console.log(Object.entries(carro)); // [['velocidad', 100], ['color', 'Rojo'], ['marca', 'Toyota']]

for (clave of Object.keys(carro)) { // Recorremos las claves del objeto
    console.log(clave, ":", carro[clave]); // Imprimimos la clave y el valor
}