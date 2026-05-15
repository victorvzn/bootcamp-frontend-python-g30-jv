// TODO: Devolver todas las películas del enpoint http://localhost:3000

const API_URL = 'http://localhost:3000/movies'

const fetchMovies = async () => {
  const response = await fetch(API_URL) // Esperar l respuesta del servidor (asincrona)

  return await response.json() // Esperara a la conversionde JSON a Objeto JS (asincrona)
}

// TODO: Renderizar las peliculas usando la plantilla del tbody

const renderMovies = (movies = []) => {
  const elMovieList = document.querySelector('.movies__list')

  let html = ''

  movies.forEach(movie => {
    html += `
    <tr>
      <td>${movie.id}</td>
      <td>
        <img src="${movie.image}" alt="" width="100" height="150">
      </td>
      <td>
        <strong>${movie.name}</strong>
        <div>
          <strong>Estreno:</strong> ${movie.release}
        </div>
        <div>
          <strong>Resumen:</strong> ${movie.summary}
        </div>
      </td>
      <td>
        <div>
          <button>✏</button>
          <button>❌</button>
        </div>
      </td>
    </tr>
    `
  })

  elMovieList.innerHTML = html
}

fetchMovies()
  .then(data => {
    renderMovies(data)
  })