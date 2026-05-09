// DONE: 01 - Crear una función que nos permita consultar los datos de la pokeapi.co

const fetchPokemons = async () => {
  const API_URL = 'https://pokeapi.co/api/v2/pokemon'

  const response = await fetch(API_URL) // Devuelve una promesa

  const data = await response.json() // Devuelve una promesa

  // TODO: Agregar el id a cada pokemon dentro del arreglo results para usarlo en la imagen del pokemon

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
      <article class="pokemon-item">
        <h2>${pokemon.name}</h2>
        <img src="${pokemon.image}" width="80" height="80" />
        <div>
          <button>
            <img src="images/icon-star.svg" />
          </button>
          <button>
            <img src="images/icon-edit.svg" />
          </button>
        </div>
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