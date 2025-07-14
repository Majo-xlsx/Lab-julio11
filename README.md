# Laboratorio - JavaScript Básico

## Temas:
- Variables y tipos de datos
- Funciones
- Condicionales (if/else)
- Bucles (for, while)
- Arrays y métodos básicos

---

## Ejercicios

### 1. Calculadora de Propinas [`1_propinas.js`]
Una app para calcular propinas en restaurantes.  
Crea una función `calcularPropina(total, porcentaje)` que reciba el total de la cuenta y el porcentaje de propina, y retorne el monto final a pagar (total + propina).

---

### 2. Validar Contraseña [`2_contrasena.js`]
Formulario de registro.  
Crea una función `validarContraseña(contraseña)` que retorne `true` si:
- Tiene al menos 8 caracteres
- Incluye un número
- Incluye una mayúscula

---

### 3. Buscar Producto en Inventario [`3_producto.js`]
Sistema de gestión de inventario.  
Crea una función `buscarProducto(nombre, inventario)` que retorne el producto si existe, o `null` si no.  
El inventario debe estar predefinido:

```js
const inventario = [
  { nombre: "Camisa", precio: 20 },
  { nombre: "Zapatos", precio: 50 }
];
```

---

### 4. Calcular Promedio de Notas [`4_notas.js`]
Plataforma educativa.  
Crea una función `calcularPromedio(notas)` que reciba un array de notas dado por el usuario (separadas por comas) y retorne el promedio (redondeado a 2 decimales).

---

### 5. Filtrar Usuarios por Edad [`5_filtrar.js`]
Red social.  
Dado un array de usuarios (`[{ nombre: "Ana", edad: 25 }, ...]`), crea una función `filtrarUsuarios(usuarios, edadMinima)` que retorne los usuarios que cumplen con la edad mínima, la cual será dada por el usuario.

---

### 6. Contador de Palabras [`6_contar.js`]
Editor de texto.  
Crea una función `contarPalabras(texto)` que retorne el número de palabras en un string (separadas por espacios).

---

### 7. Simulador de Cajero Automático [`7_cajero.js`]
App bancaria.  
Crea una función `retirarDinero(saldo, monto)` que:
- Pide al usuario su saldo actual y el monto a retirar
- Muestra el nuevo saldo o "Fondos insuficientes"

---

### 8. Cambio de Moneda [`8_cambio.js`]
App de viajes.  
Crea una función `convertirMoneda(monto, monedaDestino)` que convierta de pesos a **USD** o **EUR**.  
Pide al usuario el monto en COP y la moneda con la que desea hacer la conversión.