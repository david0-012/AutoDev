import heroes, {owners} from "../data/heroes.js"; // Importa el array de héroes y los dueños

// console.log(owners);

// Funcion flecha para obtener un héroe por su ID
export const getHeroeById = (id) =>
    heroes.find(heroe => heroe.id === id); //find devuelve el primer elemento que cumple la condición

// console.log( getHeroeById(2));

// Funcion flecha para obtener héroes por su compañia
const getHeroesByOwner = (owner) =>
    heroes.filter(heroe => heroe.owner === owner); //filter devuelve un array con todos los elementos que cumplen la condición

// console.log(getHeroesByOwner('DC'));