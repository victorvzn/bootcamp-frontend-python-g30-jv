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

let numero = 4

if (numero % 2 === 0) {
  console.log('Es par')
}

let nota = 17

if (nota >= 13) {
  console.log('Aprobado')
} else {
  console.log('Desaprobado')
}

let heroe = 'Spiderman'

if (heroe === 'Batman') {
  console.log('Hola soy Bruce')
} else if (heroe === 'Spiderman') {
  console.log('Hola soy Peter')
} else if (heroe === 'Ironman') {
  console.log('Hola soy Tony')
} else {
  console.log('No soy un heroe 😉')
}

// TODO: Investiguen la estructura switch

// 9. ESTRUCTURAS REPETITIVAS (FOR, WHILE, DO WHILE)

// for (Sirve para repetir una o varias instrucciones)

// Ejercicio: imprimir en consola los numeros del 0 a 9

// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)

for (let i = 0; i < 10; i++) {
  console.log(i)
}

// while

let j = 0

while (j < 10) {
  console.log('while', j)

  // j = j + 1
  j++
}

// do while

let k = 0

do {

  console.log('do while', k)

  k = k + 1
  // k++
} while (k < 10)

// EJERCICIOS

// 1. Definir las variables para hallar el área de un triángulo. Base = 10, Altura = 5.

// 2. Dado un número, mostrar "par y mayor a 10", "par y menor o igual a 10", "Impar"

// 3. Dado un número entero, escribe un programa que:
// - Muestre "fizzbuzz" si el número es divisible entre 3 y 5.
// - Muestre "fizz" si el número es divisible solo entre 3.
// - Muestre "buzz" si el número es divisible solo entre 5.
// - En cualquier otro caso, debe mostrar el mismo número.

// 10. Funciones

// Una función es un bloque de código reutilizable que hace una tarea.

// ENTRADA -> [ LÓGICA ] -> SALIDA CON EL RESULTADO

// Función básica

function saludar() {
  console.log('Hola funciones!')
}

saludar() // Ejecutar la función

// Funciones con parámetros

function saludoConNombre(nombre) {
  console.log("Hola " + nombre)
}

saludoConNombre('Victor')

// Funciones que retornan valores

function sumar(a, b) {
  const suma = a + b

  return suma // Devuelve solo el resultado de lo que se opere
}

console.log(sumar(2, 3))

let resultado = sumar(5, 8)
console.log(resultado + 100)

// Ejercicios:

function esPar(numero) {
  return numero % 2 === 0 // Boolean
}

console.log(esPar(4)) // true
console.log(esPar(7)) // false

// 1. Crear una función que reciba un número y devuelva el doble de ese número por consola
// 2. Crear una función que reciba dos números y devuelva el mayor por consola
// 3. Reutilizar el ejercicio de fizzBuzz usando funciones de tal forma que puedan llamarlo de la siguiente manera. Ej. fizzBuzz(15) -> fizzbuzz

// 11. Cadena de texto

// Propiedad .length

console.log("Hola".length) // 4

// Acceder a caracteres, cada letra tiene una posición (empieza en 0)

let miNombre = 'Victor'

console.log(miNombre[0]) // V
console.log(miNombre[1]) // i
console.log(miNombre[2]) // c

// Métodos importantes

console.log(miNombre.toLowerCase()) // victor
console.log(miNombre.toUpperCase()) // VICTOR
console.log(miNombre.includes("ict")) // true

// EJERCICIOS:

// 1. Dado un string, crear una función llamada evaluarTexto que devuelva: "Largo" si tiene más de 10 caracteres y "Corto" si tiene 10 o menos.
// 2. Dado un string, crear una función llamada invertirTexto que devuelve el texto invertido. Ej. hola -> aloh
