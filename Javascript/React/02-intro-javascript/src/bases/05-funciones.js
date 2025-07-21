// Función tradicional
const saludar = function (nombre){
    return `Hola, ${nombre}`;
}

// Funcion flecha con llaves
const saludar2 = (nombre) =>{
    return `Hola, ${nombre}`;
}

// Funcion flecha simplificada (return implícito)
const saludar3 = (nombre) => `Hola, ${nombre}`;

console.log(saludar("Juan"));    // "Hola, Juan"
console.log(saludar2("David"));  // "Hola, David"
console.log(saludar3("Lucas"));  // "Hola, Lucas"

// Función que retorna objeto
// Los paréntesis son necesarios para retornar un objeto
const getUser = () => ({
    uid: "123ABC",
    username: "DavidCasallas",
})

const user = getUser();
console.log(user); // {uid: "123ABC", username: "DavidCasallas"}

// Función parametrizada que retorna objeto
const getUsuarioActivo = (nombre) => ({
    uid: "ABC123",
    username: nombre,
})

const usuarioActivo = getUsuarioActivo("David");
console.log(usuarioActivo); // {uid: "ABC123", username: "David"}