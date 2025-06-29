const nombre = 'David'; //Variable global
const apellido = 'Casallas'; //Variable global

let valorDado = 1; // Variable global
valorDado = 2; // Reasignación de la variable global

console.log(nombre, apellido, valorDado);

if (true) {
    let valorDado = 3; // Variable local de bloque
    const apellido = 'Parker'; // Variable local de bloque
    console.log(apellido, valorDado);
}
console.log(valorDado); 