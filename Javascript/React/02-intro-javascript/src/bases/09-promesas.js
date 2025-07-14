import { getHeroeById } from "./08-imp-exp.js";

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

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const p1 = getHeroeById(id);
            if (p1) {
                resolve(p1);
            } else {
                reject("No se encontró el héroe");
            }
        }, 2000)
    })
}
getHeroeByIdAsync(2)
    .then(heroe => {console.log("Heroe:", heroe)})
    .catch(err => console.warn(err));

getHeroeByIdAsync(4)
    .then(function(heroe) {
        console.log("Heroe:", heroe)
    })
    .catch(err => console.warn(err));

getHeroeByIdAsync(10)
    .then(console.log)
    .catch(console.warn);