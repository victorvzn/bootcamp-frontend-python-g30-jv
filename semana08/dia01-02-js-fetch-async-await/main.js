const url = 'https://jsonplaceholder.typicode.com/users'

// fetch(url)
//   .then(respuesta => respuesta.json())
//   .then(data => {
//     console.log(data)
//   })
//   .catch(error => {
//     console.log(error)
//   })

const fetchUserSinRetorno = async () => {
  const response = await fetch(url)

  const data = await response.json()

  console.log(data)
}

// fetchUserSinRetorno()

const fetchUsersConRetorno = async () => { // Retorna un promesa (Promise)
  const response = await fetch(url)

  return await response.json()
}

// fetchUsersConRetorno() // Retorna una promesa
//   .then(users => console.log(users))

const fetchUsersConManejoDeErrores = async () => {
  try {
    const response = await fetch(url)

    console.log(response.status) // 200

    if (response.status === 404) {
      console.log('Tuvimos problemas para cargar el recurso users')
      // return
      throw new Error('ERROR HTTP:' + response.status)
    }

    return await response.json()
  } catch (error) { // Manejamos errores inesperados como ausencia de internet
    console.log(error)
  }
}

fetchUsersConManejoDeErrores()
  .then(users => {
    console.log(users)
  })