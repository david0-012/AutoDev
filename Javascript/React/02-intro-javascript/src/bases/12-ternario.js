const activo = true; // Variable de estado

// FORMA TRADICIONAL: Usando if-else
// let mensaje = '';
// if (activo) {
//     mensaje = ("activo")
// }else{
//     mensaje = ("inactivo");
// }

// OPERADOR TERNARIO: Forma abreviada de if-else
// Sintaxis: condición ? valor_si_true : valor_si_false
const mensaje2 = (activo) ? 'activo' : 'inactivo'; // 'activo'
const mensaje = (!activo) ? 'activo' : 'inactivo'; // 'inactivo' (negación)

// Operador AND lógico como alternativa
// const mensaje = activo && 'activo';

console.log(mensaje); // 'inactivo'
console.log(mensaje2); // 'activo'