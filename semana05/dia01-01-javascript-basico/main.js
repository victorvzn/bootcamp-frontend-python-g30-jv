// La siguiente líne imprime en la consola del navegador el texto Hola Javascript

console.log('¡Hola Javascript!')

// 1. COMENTARIOS, Javascript ignora estas líneas y sirve para explicar el código.

// Esto es un comentario de una línea

/*
  Esto es un comentario
  de 
  varias
  líneas
*/

// 2. TIPOS DE DATOS

// Primitivos básicos:

// 2.1. Number (números)

// Ejemplos: 123, 34.89, -67, 0

console.log(20)
console.log(typeof 20) // number
console.log(123)
console.log(34.89)
console.log(typeof 34.89) // number
console.log(-67)
console.log(typeof -67) // number

// 2.2. String (texto)

console.log("Victor")
console.log(typeof "Victor") // string
console.log('Villazón')
console.log('a')

// 2.3. Boolean (verdadero o falso)

console.log(true)
console.log(false)

// 2.4. undefined, no tiene valor aún

let x // Estoy declarando una variable
console.log(x) // undefined

// 2.5. null, intencionalmente está vacío

let nombre = null

console.log(nombre)

// Ejercicio, verificar que tipo de dato devuelven las siguientes líneas

console.log(typeof 10) // number
console.log(typeof "hola") // string
console.log(typeof true) // boolean
console.log(typeof undefined) // undefined
console.log(typeof null) // object 😵 ❌ <-  Esto es un error(bug) de JS

// 3. Variables (Guardar datos)

// const (no cambia)

const pi = 3.141599

console.log(pi)

// NO puede ser reasignada

// pi = 4.9888 // ❌ <- Uncaught TypeError: Assignment to constant variable.

// let (puede cambiar)

let edad = 20

console.log(edad)

edad = 25

console.log(edad)

// 4. Operadores matemáticas

console.log(1 + 3)
console.log(6 - 5)
console.log(2 * 8)
console.log(2 / 8)
console.log(10 / 2)
console.log(7 % 2)
console.log(3 ** 2)
console.log(Math.pow(3, 2))

// Ejercicio: Dadas dos variables, a con valor 10 y b con valor 3. Realiza una opreación que permita obtener el residuo de la división entre a y b. Luego muestra el resultado en consola.

const a = 10
const b = 3

const residuo = a % b

console.log(residuo) // 1

// 5. Comparaciones

// Igualdad débil

console.log(1 == "1") // true (solo compara valor)

// Igualdad estricta (RECOMENDACIón: Usar siempre)

console.log(1 === "1") // false (compara valor y tipo de dato)

// 6. Operadores lógicos (AND, OR, NEGACIÓN)

console.log(true && false) // false
console.log(true || false) // true
console.log(!true) // false

// 7. Concatenación (unir textos)

let nombre2 = "Victor"
let edad2 = 39

console.log("Hola" + nombre2) // HolaVictor
console.log("Hola " + nombre2) // Hola Victor
console.log("Hola " + nombre2 + ", tienes " + edad2 + " años") // Hola Victor, tienes 39 años

// Mejor forma de concatenar (template strings) - backtick (alt gr + })
console.log(`Hola ${nombre2}, tienes ${edad2} años.`)

// 8. Condicionales (if)

