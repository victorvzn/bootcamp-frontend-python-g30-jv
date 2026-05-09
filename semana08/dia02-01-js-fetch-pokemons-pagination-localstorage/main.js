// TODO: 01 - Crear una función que nos permita consultar los datos de la pokeapi.co

const fetchPokemons = async () => {
  const API_URL = 'https://pokeapi.co/api/v2/pokemon'

  const response = await fetch(API_URL) // Devuelve una promesa

  const data = await response.json() // Devuelve una promesa

  return data
}

// TODO: 02 - Crear una función que nos permita renderizar(imprimir) los pokemons en la página
const renderPokemons = (pokemons = []) => {
  const pokemonList = document.querySelector('#pokemonList')

  let elements = ''

  // TODO: Necesitamos renderizar el nombre del pokemon en una etiqueta article en el elemento section con id pokemonList
  pokemons.forEach(pokemon => {
    elements += `<article>${pokemon.name}</article>`
  })

  pokemonList.innerHTML = elements
}


fetchPokemons()
  .then(data => {
    console.log(data)
    renderPokemons(data)
  })