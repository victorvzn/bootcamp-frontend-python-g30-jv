// TODO: Obtener la referencia a los elementos con las clases 'task__input', 'task__add', 'task__list'. Deben imprimirlos en la consola.

const taskInput = document.querySelector('.task__input')
const taskAdd = document.querySelector('.task__add')
const taskList = document.querySelector('.task__list')

taskAdd.addEventListener('click', function(event) {
  // Se ejecutará cuando hagamos click en el botón "Añadir tarea"
  console.log('click!', taskInput.value)

  // Crear elementos dinamicamente
  // const boton = document.createElement('button')
  // boton.textContent = 'Este es mi botón'
  // document.body.appendChild(boton)

  const li = document.createElement('li')
  const button = document.createElement('button')

  li.textContent = taskInput.value

  button.textContent = 'Borrar'

  li.appendChild(button)

  taskList.appendChild(li)

  taskInput.value = ''
})

taskList.addEventListener('click', function(event) {
  if (event.target.tagName === 'BUTTON') {
    event.target.parentElement.remove()
  }
})