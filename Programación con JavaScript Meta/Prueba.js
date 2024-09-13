function Icecream(flavor) {
    this.flavor = flavor;
    this.meltIt = function() {
        console.log(`The ${this.flavor} icecream has melted`);
    }
}

let kiwiIcecream = new Icecream("kiwi");
let appleIcecream = new Icecream("apple");

// Llamadas al método meltIt para verificar que funciona
kiwiIcecream.meltIt(); // Debería imprimir "The kiwi icecream has melted"
appleIcecream.meltIt(); // Debería imprimir "The apple icecream has melted"