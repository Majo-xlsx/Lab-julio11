const prompt = require("prompt-sync")();

const inventario = [
    { nombre: "Camisa", precio: 20 },
    { nombre: "Zapatos", precio: 50 }
];

function buscarProducto(nombre, inventario) {
    for (let producto of inventario) {
        if (producto.nombre.toLowerCase() === nombre.toLowerCase()) {
            return producto;
        }
    }
    return null;
}

let nombre = prompt("Producto a buscar: ");
let resultado = buscarProducto(nombre, inventario);
console.log(resultado ? resultado : "Producto no encontrado");