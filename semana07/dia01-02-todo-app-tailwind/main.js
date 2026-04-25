const taskInput = document.querySelector('.task__input')
const taskClear = document.querySelector('.task__clear')
const taskList = document.querySelector('.task__list')

// TODO: Al presionar el botón enter en la caja de texto capturar el texto y añadirlo al ul(.task__list)

let tasks = [
  {
    title: 'Estudiar Javascript',
    completed: true
  },
  {
    title: 'Salir al receso a las 9:00pm',
    completed: false
  },
  {
    title: 'Realizar el reto del fin de semana',
    completed: false
  }
]

taskInput.addEventListener('keydown', function(event) {
  
  if (event.key === 'Enter') {
    // console.log(event.key)
    const newTask = {
      title: event.target.value,
      completed: false
    }

    console.log(newTask)

    tasks.push(newTask)

    renderTasks(tasks)

    taskInput.value = ''
  }
})

function renderTasks(tasks = []) {
  let lista = ''

  tasks.forEach(function(task) {
    lista = lista + `
      <li class="">
        <input
          type="checkbox"
        />
        <div>
          ${task.title}
        </div>
        <button>
          Borrar
        </button>
      </li>
    `
  })

  console.log(lista)

  taskList.innerHTML = lista

  // taskList.innerHTML = '<h1>Hola desde <strong>renderTasks</strong></h1>'
}

renderTasks(tasks)