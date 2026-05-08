// OBJETIVO: Consultar información en formato JSON desde un servicio web y su URL

const url = 'https://jsonplaceholder.typicode.com/posts'

console.log(fetch(url)) // Promise {<pending>} -> Devuelve una promesa (Promise)

// Estados de una promesa -> pending, fulfilled(OK) y rejected (Falló)

fetch(url)
  .then(response => response.json()) // Se ejecuta cuando la respuesta llegó correctamente y además convertimos la respuesta a un objeto JS
  .then(data => {
    console.log(data) // Aquí podemos usar el objeto JS
    console.log(data[0])
    console.log(data[0].title)
  })