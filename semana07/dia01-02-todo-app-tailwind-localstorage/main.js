const taskInput = document.querySelector('.task__input')
const taskClear = document.querySelector('.task__clear')
const taskList = document.querySelector('.task__list')

// TODO: Al presionar el botón enter en la caja de texto capturar el texto y añadirlo al ul(.task__list)

let tasks = JSON.parse(localStorage.getItem('tasks')) || []

// let tasks = [
//   {
//     title: 'Estudiar Javascript',
//     completed: true
//   },
//   {
//     title: 'Salir al receso a las 9:00pm',
//     completed: false
//   },
//   {
//     title: 'Realizar el reto del fin de semana',
//     completed: false
//   }
// ]

function saveTasks(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

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

    saveTasks(tasks)
  }
})

// TODO: Añadir la lógica necesaria al botón "Limpiar tareas completadas" para que limpie las tareas completadas incluso debe actualizar el LS

function renderTasks(tasks = []) {
  // TODO: Añadir el contenido "No hay tareas registradas" si no hay tareas en el array tasks

  let lista = ''

  tasks.forEach(function(task, index) {
    lista = lista + `
      <li class="flex justify-center items-center gap-4 py-2">
        <input
          type="checkbox"
          ${task.completed ? 'checked' : '' }
          onchange="checkTask(${index})"
        />
        <div
          class="w-full ${task.completed ? 'line-through' : '' }"
        >
          ${task.title}
        </div>
        <button
          class="border border-red-700 font-medium px-3 py-1 text-red-700 rounded-lg hover:bg-red-700 hover:text-white duration-600"
          onclick="removeTask(${index})"
        >
          Borrar
        </button>
      </li>
    `
  })

  console.log(lista)

  taskList.innerHTML = lista

  // taskList.innerHTML = '<h1>Hola desde <strong>renderTasks</strong></h1>'
}

function removeTask(selectedIndex) {
  console.log(selectedIndex)

  // DONE: Remover el indice seleccionado del arreglo tasks y posteriormente actualizar la lista de tareas con la función renderTasks

  const modifiedTasks = tasks.filter(function(task, index) {
    return index != selectedIndex
  })

  tasks = modifiedTasks

  renderTasks(tasks)

  saveTasks(tasks)
}

function checkTask(selectedIndex) {
  // Devolver un objeto que tiene title y completed
  const taskSelected = { ...tasks[selectedIndex] }

  taskSelected.completed = !taskSelected.completed

  tasks[selectedIndex] = taskSelected

  renderTasks(tasks)

  saveTasks(tasks)
}

renderTasks(tasks)