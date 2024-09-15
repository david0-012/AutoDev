// forEach es un método que nos permite recorrer un array y ejecutar una función por cada elemento del array.
const colores = ['Rojo', 'Verde', 'Azul'];
function aggIndice(color, indice) {
    console.log(`${indice} => ${color}`);
}
colores.forEach(aggIndice); // 0 => Rojo, 1 => Verde, 2 => Azul

const marcas = ['Nike', 'Adidas', 'Puma'];
marcas.forEach(function(marca, indice) {
    console.log(`${indice} => ${marca}`); // 0 => Nike, 1 => Adidas, 2 => Puma
});

marcas.forEach((marca, indice, arrayOriginal) => { // forEach por defecto establece 3 parámetros: el elemento, el índice y el array original.
    console.log(`${indice} => ${marca} del arreglo [${arrayOriginal}]`);
});