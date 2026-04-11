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

// Insertar un elemento en un posición determinada

listaDeNombres.splice(0, 0, 'CÓDIGO')
listaDeNombres.splice(2, 0, 'TECSUP')

console.log(listaDeNombres)

// Eliminar un elemento en una posición determinada

listaDeNombres.splice(2, 1)

console.log(listaDeNombres)

// Obtener el tamaño de nuestro arreglo

console.log(listaDeNombres.length) // 3
console.log('bienvenido'.length)   // 10

// Obtener el último elemento del arreglo

console.log(listaDeNombres[3 - 1])
console.log(listaDeNombres[listaDeNombres.length - 1]) // Renzo
console.log(listaDeNombres.at(0))  // CÓDIGO
console.log(listaDeNombres.at(-1)) // Renzo
console.log(listaDeNombres.at(-2)) // Guillermo

// TODO: Otras funciones: slice (Investiguen)

// MÉTODOS DE ARREGLOS

// Método INCLUDES, nos indica si el valor que se pasa como parámetro se encuentra en el arreglo y siempre devuelve un boolean(true o false)

const lenguajes = ['javascript', 'php', 'python', 'C', 'c++', 'java', 'python']

console.log(lenguajes.includes('java')) // true
console.log(lenguajes.includes('cobol')) // false

// Método FILTER, nos ayuda a ubicar un elemento dentro de un arreglo usando condición y devuelve un nuevo arreglo con lo que encontró

const resultado = lenguajes.filter(function(item) {
  // return item === 'java'
  // return item === 'python'
  // return item.includes('c') || item.includes('C')
  return item.toLowerCase().includes('c')
})

console.log(resultado) // ['javascript', 'C', 'c++']

// Método MAP, evalue un arreglo, lo modifica y hay que pasarle una función. Nos devuelve un arreglo modificado. Siempre devuelve un nuevo arreglo.

console.log(lenguajes)

const nombreConTitulo = lenguajes.map(function(lenguaje) {
  // Lógica
  // return 'hola'
  return '*' + lenguaje + '*'
})

console.log(nombreConTitulo)

// Método SORT, nos ayuda a ordenar un arreglo de elementos. Muta(cambia) el arreglo original. Usar toSorted() en lugar de sort como recomendación.

// const ordenandoLenguajes = lenguajes.sort() // Sort muta el arreglo original
const ordenandoLenguajes = lenguajes.toSorted()

console.log(ordenandoLenguajes)
console.log(lenguajes)

// Método FOREACH, nos ayuda a recorrer un arreglo sin tener ningun retorno de datos

// for(let i = 0; i < 10; i++) {
//   console.log(i)
// }

