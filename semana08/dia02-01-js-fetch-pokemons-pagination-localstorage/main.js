// DONE: 01 - Crear una función que nos permita consultar los datos de la pokeapi.co

const fetchPokemons = async () => {
  const API_URL = 'https://pokeapi.co/api/v2/pokemon'

  const response = await fetch(API_URL) // Devuelve una promesa

  const data = await response.json() // Devuelve una promesa

  // Obtener el id en base al campo url

  const dataResults = data.results.map(pokemon => {
    const id = pokemon.url.split('/').at(6)
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`

    return {
      ...pokemon,
      id,
      image
    }
  })

  return {
    ...data,
    results: dataResults
  }
}

// DONE: 02 - Crear una función que nos permita renderizar(imprimir) los pokemons en la página
const renderPokemons = (pokemons = []) => {
  const pokemonList = document.querySelector('#pokemonList')

  let elements = ''

  // DONE: Necesitamos renderizar el nombre del pokemon en una etiqueta article en el elemento section con id pokemonList

  // TODO: Necesitamos agrega una imagen a cada pokemon

  pokemons.forEach(pokemon => {
    elements += `
      <article>
        ${pokemon.name}
        <img src="${pokemon.image}" width="80" height="80" />
      </article>
    `
  })

  pokemonList.innerHTML = elements
}


fetchPokemons()
  .then(data => {
    console.log(data)
    renderPokemons(data.results)
  })