// -------------------------------------------------------------------------------------------------------------------------------------------------------------------

function letterFinder(word, match) {
    var condition1 = typeof(word) == 'string' && word.length >= 2;
    var condition2 = typeof(match) == 'string' && match.length == 1;
    if(condition1 && condition2){
        for(var i = 0; i < word.length; i++) {
            if(word[i] == match) {
                console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        }
    }else{
        console.log('Please pass correct arguments to the function')
    }
}
letterFinder(1,2)
letterFinder('cat','c')

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------

//* Funciones de Primera Clase
// Las funciones de primera clase son funciones que pueden ser asignadas a variables, pasar a otras funciones guardar en una variable, devolver de otras funciones

function addTwoNums(a, b) { //? Funcion de orden superior, acepta otras funciones como argumentos
    console.log(a + b)
}

function randomNum() { //? Funcion no pura, devuelve un valor diferente cada vez que se llama
    return Math.floor((Math.random() * 10) + 1); // numero ramdom multiplicado por 10 y sumado 1 se redondeara hacia abajo
}
function specificNum() { return 42 }; //? Funcion pura, siempre devuelve el mismo valor

var useRandom = true;

var getNumber;

if(useRandom) { // Si useRandom es true
    getNumber = randomNum // Se asigna el resultado de la funcion randomNum a getNumber
} else { // Si useRandom es false
    getNumber = specificNum // Se asigna el resultado de la funcion specificNum a getNumber
}

addTwoNums(getNumber(), getNumber()) // Se llama a la funcion addTwoNums y se le pasan dos numeros obtenidos de getNumber para sumarlos

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------
