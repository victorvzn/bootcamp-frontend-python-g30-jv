// TODO: 01 - Crear una función que nos permita consultar los datos de la pokeapi.co

const fetchPokemons = async () => {
  const API_URL = 'https://pokeapi.co/api/v2/pokemon'

  const response = await fetch(API_URL) // Devuelve una promesa

  const data = (await response).json() // Devuelve una promesa

  return data
}

// TODO: 02 - Crear una función que nos permita renderizar(imprimir) los pokemons en la página

fetchPokemons()
  .then(data => {
    console.log(data)
  })