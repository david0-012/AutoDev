/* rest es el operador de desestructuración que se utiliza para extraer 
los elementos restantes de un array o un objeto.*/

//* Función que suma todos los números pasados como argumentos
function sumar(...numeros) {// ...numeros recoge todos los argumentos pasados a la función
    let total = 0;
    for (let i = 0; i < numeros.length; i++) {
      total += numeros[i];
    }
    return total;
  }
  console.log(sumar(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11)); // 66
  console.log(sumar(5, 10)); // 15
  
//* Desestructuración de arrays
const numeros = [1, 2, 3, 4, 5];
const [primero, segundo, ...resto] = numeros;
console.log(primero); // 1
console.log(segundo); // 2
console.log(resto); // [3, 4, 5]

//* Desestructuración de objetos
const persona = { nombre: 'Juan', edad: 30, ciudad: 'Madrid', pais: 'España' };
const { nombre, ...demasInfo } = persona;
console.log(nombre); // Juan
console.log(demasInfo); // {edad: 30, ciudad: 'Madrid', pais: 'España'}

//* Concatenar strings
function concatenarStrings(...strings) {
    let resultado = '';
    for (let i = 0; i < strings.length; i++) {
      if (i > 0) {
        resultado += ' ';
      }
      resultado += strings[i];
    }
    return resultado;
  }
  console.log(concatenarStrings('Hola', 'mundo', 'JavaScript')); // 'Hola mundo JavaScript'
  