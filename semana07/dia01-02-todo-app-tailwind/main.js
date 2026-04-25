const taskInput = document.querySelector('.task__input')
const taskClear = document.querySelector('.task__clear')
const taskList = document.querySelector('.task__list')

// TODO: Al presionar el botón enter en la caja de texto capturar el texto y añadirlo al ul(.task__list)

taskInput.addEventListener('keydown', function(event) {
  
  if (event.key === 'Enter') {
    console.log(event.key)
  }
})