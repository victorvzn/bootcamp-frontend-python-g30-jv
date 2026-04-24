// Funciones por declaración

// Funciones sin parámetros

function nomreDeLaFunción() { // Estamos declarando la función
  console.log('Hola a todos G30!')
}

nomreDeLaFunción()

// Funciones con parámetros por defecto con retorno y en múltiples líneas

function calcularSiEsMayorDe18(edad) {
  if (edad > 18) {
    return 'Es mayor de edad'
  } else {
    return 'Es menor de edad'
  }
}

console.log(calcularSiEsMayorDe18()) 
console.log(calcularSiEsMayorDe18(25))