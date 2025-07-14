const prompt = require("prompt-sync")();

let monto = parseFloat(prompt("Ingresa el monto en COP: "));
let moneda = prompt("Moneda destino (USD o EUR): ").toUpperCase();

let tasa;

if (moneda === "USD") {
    tasa = 0.00026;
} else if (moneda === "EUR") {
    tasa = 0.00024;
} else {
    tasa = null;
}

if (tasa !== null) {
    let convertido = monto * tasa;
    console.log("Monto en " + moneda + ": " + convertido.toFixed(2));
} else {
    console.log("Moneda no válida");
}