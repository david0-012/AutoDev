const persona = {
    nombre: "David",
    apellido: "Casallas",
    edad: 21,
}

// console.table(persona);
console.log(persona);

const persona2 = {
    ...persona, // Copiar el objeto persona en otra posicion en memoria
}
persona2.nombre = "Lucas";

console.log(persona);
console.log(persona2);