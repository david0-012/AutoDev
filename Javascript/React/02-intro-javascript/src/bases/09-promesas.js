import { getHeroeById } from "./08-imp-exp.js";

// Ejemplo básico de Promesa
// const promesa = new Promise( (resolve, reject) => {
//     setTimeout( () => {
//         const p2 = getHeroeById(2);
//         resolve(p2);
//         // reject("No se encontro el héroe");
//     }, 2000)
// });

// promesa.then( (heroe) =>
//      console.log("Heroe,", heroe)
// ).catch(err => console.warn(err));

// Función que retorna una Promesa
// Simula operación asíncrona con setTimeout
const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const p1 = getHeroeById(id);
            if (p1) {
                resolve(p1); // Si encuentra el héroe
            } else {
                reject("No se encontró el héroe"); // Si no lo encuentra
            }
        }, 2000)
    })
}

// Uso con funcion flecha
getHeroeByIdAsync(2)
    .then(heroe => {console.log("Heroe:", heroe)}) // Héroe encontrado
    .catch(err => console.warn(err));

// Uso con función tradicional
getHeroeByIdAsync(4)
    .then(function(heroe) {
        console.log("Heroe:", heroe) // Héroe encontrado
    })
    .catch(err => console.warn(err));

// Uso simplificado (pasando directamente las funciones)
getHeroeByIdAsync(10)
    .then(console.log) // ID no existe, irá al catch
    .catch(console.warn);