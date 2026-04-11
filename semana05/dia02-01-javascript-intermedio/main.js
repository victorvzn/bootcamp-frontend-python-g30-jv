// console.log('Hola JS')

// TIPOS DE DATOS PRIMITIVOS (Number, String, Boolean, null, undefined)

// TIPOS DE DATOS NO PRIMITIVOS (Arrays, Objects)

// ARRAYS

// Un arreglo pueden contener elementos de cualquier tipo de dato: cadena, numeros, boolean, null, arrays, objetos, etc.)

// DECLARACIÓN

const arregloVacio = []
let listaDeNumeros = [25, 36, 89, 15.60]
const listaDeValores = [1, 2, 3, 'Victor', 'Villazón', 'Código', true, null, undefined]

console.log(arregloVacio)
console.log(listaDeNumeros)
console.log(listaDeValores)

// Lectura de los elementos de un arreglo

console.log(listaDeValores[0]) // 1
console.log(listaDeValores[3]) // Victor
console.log(listaDeValores[5]) // Codigo
console.log(listaDeValores[6]) // true

// Escritura en un arreglo

listaDeValores[3] = 'Renzo'
listaDeValores[7] = 9876

console.log(listaDeValores)

// Object.freeze(listaDeValores)
// listaDeValores[8] = 'Hola a todos'
// console.log(listaDeValores)

// Insertar nuevos elementos en un arreglo al final (push)

const listaDeNombres = ['Guillermo', 'Renzo', 'Herson']

console.log(listaDeNombres)

listaDeNombres.push('Victor')
listaDeNombres.push('Julio')

console.log(listaDeNombres)

// Remover elementos del final de un arreglo (pop)

listaDeNombres.pop()
listaDeNombres.pop()
listaDeNombres.pop()

console.log(listaDeNombres)

// 