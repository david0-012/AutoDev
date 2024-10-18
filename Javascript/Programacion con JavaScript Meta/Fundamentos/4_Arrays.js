// var matriz = [1,2,3,4,5,6,7,8,9,10];
// console.log(matriz[9]);

//* FUNCION CON MATRIZ
// function rmatriz(matri_z) {
//     for (var i = 0; i < matri_z.length; i++) {
//         console.log("Espacio ",i+1, "----- > ", matri_z[i])
//     }
// }
// rmatriz(matriz);

//* FUNCION CON MATRIZ Y FOR
// busca todas las posiciones en las que aparece una letra específica (match) dentro de una palabra (word).
function letterFinder (word,match){
    for (var i = 0; i < word.length; i++){
        if (word[i] == match){
            console.log('Found the', match, 'at', i);
        }
        else{
            console.log('---No match found at', i)
        }
    }
}
letterFinder("Contaminacion", "o");