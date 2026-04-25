// LOCAL STORAGE

// Es una forma de guardar datos en el navegador
// LS es para guardar solo cadenas de texto
// Límite: ~5MB

// Guardar datos
localStorage.setItem('nombre', 'Victor')

// Obtener datos
console.log(localStorage.getItem('nombre'))
console.log(localStorage.getItem('ejemplo'))

// Eliminar un dato
localStorage.removeItem('nombre')

// Limpiar todo
localStorage.clear()

// Guardar objetos o arreglos

// Tenemos que convertirlos a cadenas de texto

const user = { name: 'Victor', age: 39 }

// Guardar objeto

localStorage.setItem('user', user) // [object Object]
localStorage.setItem('user', JSON.stringify(user)) // [object Object]

// Obtener objeto
const user2 = JSON.parse(localStorage.getItem('user'))

console.log(user2.name, user2.age)