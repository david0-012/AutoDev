const persona = {
    nombre: "Juan",
    edad: 21,
    clave: "IngeDev",
}

const {nombre, edad, clave} = persona; // Desestructuración de objetos

console.log(nombre, edad, clave);


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

console.log(integrante);


const {nombreClave, anios, latlng: {lat, lng}} = useContext(persona); // Desestructuración de objetos en función

console.log(nombreClave, anios);
console.log(lat, lng);


