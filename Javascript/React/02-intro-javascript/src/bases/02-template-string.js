const nombre = 'Juan';
const apellido = 'Casallas';

const nombreCompleto=`${nombre} ${apellido}`

console.log(nombreCompleto);

function getSaludo(nombre) {
    return `Hola ${nombre}`
}

console.log(`Este un texto: ${getSaludo(nombre)}`);