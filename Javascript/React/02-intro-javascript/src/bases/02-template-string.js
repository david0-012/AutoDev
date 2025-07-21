const nombre = 'Juan';
const apellido = 'Casallas';
const nombreCompleto=`${nombre} ${apellido}`

console.log(nombreCompleto);

function getSaludo(nombre) {
    return `Hola ${nombre}` // Template String
}

function getDespido(nombre) {
    return "Chao " + nombre; // Concatención
}

console.log(`Este un texto: ${getSaludo(nombre)}`); // Template String
console.log("Este un texto: " + getDespido(nombre)); // Concatención