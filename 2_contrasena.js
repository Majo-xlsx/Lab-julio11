const prompt = require("prompt-sync")();

function validarContraseña(contrasena) {
    return (
        contrasena.length >= 8 && /[A-Z]/.test(contrasena) && /[0-9]/.test(contrasena)
    );
}

let contrasena = prompt("Ingresa una contraseña: ");
console.log(validarContraseña(contrasena) ? "Contraseña válida" : "Contraseña inválida");