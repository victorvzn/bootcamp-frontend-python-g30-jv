const url = 'https://jsonplaceholder.typicode.com/users'

fetch(url)
  .then(respuesta => respuesta.json())
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.log(error)
  })