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
})