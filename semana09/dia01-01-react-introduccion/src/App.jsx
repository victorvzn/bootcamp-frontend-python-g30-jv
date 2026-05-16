// 01 - Componente base usando function

function Welcome() {
  return <h1>Bienvenidos a React.js!</h1>
}

export default Welcome

// Qué es un componente?
// * Es una función, devuelve JSX, todo componente en su nombre empieza con mayúscula.

// Partes de un componente:
// 1. Imports (Si los hay)
// 2. Lógica (variables, hooks, functions)
// 3. Return -> JSX
// 4. Export ( Nos sirve para crear un módulo)

// Reglas básicas de un componente
// * UN solo elemento padre

// ESM (ECMAScript Modules)
// Es una forma moderna de importar archivos, exportar archivos, compartir códifo entre archivos
// Gracias a esto podemos dividir el proyecto en partes pequeñas y organzadas.

import frutas from './modules.js' // Estamos trayendo la constante frutas desde otro archivo

console.log(frutas) // (3) ['manzanas', 'plátanos', 'peras']

import { curso } from './modules.js'

console.log(curso) // {name: 'Algoritmos', nota: 20}