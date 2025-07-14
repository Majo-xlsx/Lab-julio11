const prompt = require("prompt-sync")();

let entrada = prompt("Ingresa las notas separadas por comas: ");
let partes = entrada.split(",");
let notas = [];
let suma = 0;

for (let i = 0; i < partes.length; i++) {
  let numero = parseFloat(partes[i].trim());
  notas.push(numero);
  suma += numero;
}

let promedio = suma / notas.length;
console.log("Promedio: " + promedio.toFixed(2));