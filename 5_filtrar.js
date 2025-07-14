const prompt = require("prompt-sync")();

const usuarios = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Luis", edad: 17 },
    { nombre: "Carlos", edad: 30 }
];

function filtrarUsuarios(usuarios, edadMinima) {
    return usuarios.filter(u => u.edad >= edadMinima);
}

let edadMinima = parseInt(prompt("Edad mínima: "));
let filtrados = filtrarUsuarios(usuarios, edadMinima);
console.log("Usuarios que cumplen con la edad:");
console.log(filtrados);