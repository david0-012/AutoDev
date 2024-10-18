// literal del objeto: {}.
// literal de la matriz: []

//* Creación de objetos
// var table = {
//     legs: 3,
//     color: "brown",
//     priceUSD: 100,
// }
// console.log(table);
// console.log(table.color);

//* Notación de puntos
// var house2 = {};
// house2.rooms = 4;
// house2.color = "pink";
// house2.priceUSD = 12345;
// console.log(house2);

//* Combinacion
// var carro = {
//     marca: "Toyota",
//     modelo: "Corolla"
// }
// carro.color = "rojo";
// carro.precioUSD = 20000;
// console.log(carro);

//* Objetos literales y la notación de corchetes
// var house2 = {};
// house2["rooms"] = 4;
// house2['color']= "pink";
// house2["price USD"] = 12345; //Permite espacios en las propiedades
// console.log(house2);

//* Manipulación y Acceso a Propiedades de Objetos
// var arrOfKeys = ['speed', 'altitude', 'color', 'price'];
// var drone = {
//     speed: 100,
//     id: 1210,
//     altitude: 200,
//     color: "red"
// }
// for (var i = 0; i < arrOfKeys.length; i++) {
//     console.log(drone[arrOfKeys[i]])
// }

//* Matrices como Objetos
// .push() - Agrega un nuevo elemento al final de la matriz
// .pop() - Elimina el último elemento de la matriz

// function arrayBuilder(one, two, three) {
//     var arr = [];
//     arr.push(one);
//     arr.push(two);
//     arr.push(three);
//     console.log(arr);
//     //return(arr);
// }

// arrayBuilder('carro', 'camioneta', 'moto');

// var simpleArray = arrayBuilder('lapiz', 'esfero', 'borrador');
// console.log(simpleArray);

var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);
car.turnTheKey = function() {
    console.log("The engine is running")
}
car.lightsOn = function() {
    console.log("The lights are on.")
}
console.log(car);
car.turnTheKey();
car.lightsOn()