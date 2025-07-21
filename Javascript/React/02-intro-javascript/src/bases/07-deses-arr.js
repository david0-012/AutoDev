const marcas = ["Suzuki", "Yamaha", "Pulsar"];// Arreglo de marcas

// Desestructuración de arreglos
const [,,m3] = marcas; //Con "," se omiten elementos
console.log(m3);  

//Funcion flecha
const retornaArreglo = () =>
    ["ABC", 123];

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);
 
// Funcion flecha que retorna un arrglo con otra función
const useState = (valor) =>
    [valor, () => { console.log("Hola Mundo") }];

// Desestructuración del arreglo retornado por useState
const [nombre, setNombre] = useState("Suzuki"); // Se asigna el primer elemento a "nombre" y el segundo a "setNombre"

console.log(nombre);
setNombre(); // Llama a la función que imprime "Hola Mundo"