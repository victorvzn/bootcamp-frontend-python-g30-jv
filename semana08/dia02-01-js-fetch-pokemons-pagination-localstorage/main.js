const LIMIT = 6

let page = 1
let count = 0

// DONE: 01 - Crear una función que nos permita consultar los datos de la pokeapi.co

const fetchPokemons = async (page = 1) => {
  const OFFSET = (page - 1) * LIMIT

  // const API_URL = `https://pokeapi.co/api/v2/pokemon'
  const API_URL = `https://pokeapi.co/api/v2/pokemon?offset=${OFFSET}&limit=${LIMIT}`

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

  const totalPages = Math.ceil(count / LIMIT)

  document.querySelector('#currentPage').textContent = `${page} de ${totalPages}`
}

// TODO: Implementar los botones: anterior, primero y último.

const nextPageButton = document.querySelector('#nextPage')

nextPageButton.addEventListener('click', async () => {
  console.log('Next click')

  page = page + 1

  const dataPokemons = await fetchPokemons(page)

  console.log(dataPokemons)

  renderPokemons(dataPokemons.results)
})

fetchPokemons()
  .then(data => {
    console.log(data)

    count = data.count

    renderPokemons(data.results)
  })