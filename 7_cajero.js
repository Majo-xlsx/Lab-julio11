const prompt = require("prompt-sync")();

function retirarDinero(saldo, monto) {
    if (monto > saldo) {
        return "Fondos insuficientes";
    }
    return "Nuevo saldo: $" + (saldo - monto);
}

let saldo = parseFloat(prompt("Ingresa tu saldo actual: "));
let monto = parseFloat(prompt("Monto a retirar: "));
console.log(retirarDinero(saldo, monto));