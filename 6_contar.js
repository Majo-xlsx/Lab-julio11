const prompt = require("prompt-sync")();

function contarPalabras(texto) {
    let palabras = texto.trim().split(" ");
    return palabras.length;
}

let texto = prompt("Escribe una frase: ");
console.log("Número de palabras: " + contarPalabras(texto));