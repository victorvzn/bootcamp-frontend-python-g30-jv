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

