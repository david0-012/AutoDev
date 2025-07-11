const saludar = function (nombre){
    return `Hola, ${nombre}`;
}

const saludar2 = (nombre) =>{
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;

console.log(saludar("Juan"));
console.log(saludar2("David"));
console.log(saludar3("Lucas"));

const getUser = () => ({
    uid: "123ABC",
    username: "DavidCasallas",
})

const user = getUser();
console.log(user);

const getUsuarioActivo = (nombre) => ({
    uid: "ABC123",
    username: nombre,
})

const usuarioActivo = getUsuarioActivo("David");
console.log(usuarioActivo);