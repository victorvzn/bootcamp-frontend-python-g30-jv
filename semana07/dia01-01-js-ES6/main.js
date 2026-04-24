// Funciones por declaración

// Funciones sin parámetros

function nomreDeLaFunción() { // Estamos declarando la función
  console.log('Hola a todos G30!')
}

nomreDeLaFunción()

// Funciones con parámetros por defecto con retorno y en múltiples líneas

function calcularSiEsMayorDe18(edad = 1) {
  console.log(edad) // undefined si no pasamos el parámetro
  console.log(undefined > 18) // false
  if (edad > 18) {
    return 'Es mayor de edad'
  } else {
    return 'Es menor de edad'
  }
}

console.log(calcularSiEsMayorDe18()) 
console.log(calcularSiEsMayorDe18(25))

// ARROW FUNCTIONS (Funciones flecha) =>

// Funciones sin parámetros en una línea

// function imprimiendoSaludo1() {
//   console.log('Hola a todos nuevemente - sin arrow functions')
// }

// imprimiendoSaludo1()

const imprimiendoSaludo2 = () => console.log('Hola a todos nuevamente')

imprimiendoSaludo2()

// Funcones con parámetros en un línea

const suma = (numero1, numero2) => numero1 + numero2

console.log(suma(2, 5))

// Arrow functions con parámetros por defecto con retorno y en múltiples líneas

const saludoEnMayusculas = (nombre = 'Anónimo') => {
  const nombreEnMayusculas = nombre.toUpperCase()

  return 'Hola ' + nombreEnMayusculas + '!'
}

console.log(saludoEnMayusculas())
console.log(saludoEnMayusculas('Teffo'))
