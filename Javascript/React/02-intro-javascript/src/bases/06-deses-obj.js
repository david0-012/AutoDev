// Objeto inicial
const persona = {
    nombre: "Juan",
    edad: 21,
    clave: "IngeDev",
} 

const {nombre, edad, clave} = persona; // Desestructuración de objetos

console.log(nombre, edad, clave); // "Juan" 21 "IngeDev"

// Función con desestructuración en parámetros
// cargo tiene valor por defecto
const useContext = ({clave, nombre, edad, cargo = "Desarrollador"}) => {

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 18.1245,
            lng: -10.1245,
        },
    }
}

const integrante = useContext (persona);

console.log(integrante); // Objeto completo con propiedades transformadas

// Desestructuración anidada
// Se extrae lat y lng del objeto latlng
const {nombreClave, anios, latlng: {lat, lng}} = useContext(persona); // Desestructuración de objetos en función

console.log(nombreClave, anios); // "IngeDev" 21
console.log(lat, lng); // 18.1245 -10.1245


