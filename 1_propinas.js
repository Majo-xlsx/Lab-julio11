const prompt = require("prompt-sync")();

function calcularPropina(total, porcentaje) {
    let propina = total * (porcentaje / 100);
    return total + propina;
}

let total = parseFloat(prompt("Total de la cuenta: "));
let porcentaje = parseFloat(prompt("Porcentaje de propina: "));
console.log("Total a pagar: $" + calcularPropina(total, porcentaje).toFixed(2));