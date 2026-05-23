import { useState } from "react"

const App = () => {
  const DEFAULT_TAREAS = [
    {
      id: '1',
      titulo: 'Aprender Javascript',
      completado: true
    },
    {
      id: '2',
      titulo: 'Aprender CSS',
      completado: true
    },
    {
      id: '3',
      titulo: 'Aprender React.js + Tailwind CSS',
      completado: false
    }
  ]

  const [tareas, setTareas] = useState(DEFAULT_TAREAS)
  const [input, setInput] =  useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    // 01 - Crear una nueva tarea en el estado tareas

    const nuevaTarea = {
      id: crypto.randomUUID(),
      titulo: input,
      completado: false
    }

    console.log({nuevaTarea})

    setTareas([...tareas, nuevaTarea])

    setInput('')
  }

  const tareasCompletadas = tareas.filter(tarea => tarea.completado)

  const handleLimpiarTareasCompletadas = () => {
    // TODO: 1. Limpiar las tareas compleatadas usando el estado tareas
    console.log('Completando tareas...')
    const tareasSinCompletar = tareas.filter(tarea => tarea.completado === false)

    setTareas(tareasSinCompletar)
  }

  const handleRemoverTarea = (id) => {
    // TODO: 2. Remover la tarea seleccionado por su id acualizando el estado tareas
    console.log('Removiendo tarea con el id', id)
  }

  return (
    <main className="flex flex-col items-center gap-4">
      <h1 className="text-xl text-center">Todo App + React + TailwindCSS</h1>

      <form
        className="flex gap-2 w-full px-4"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="border p-1 w-full"
          placeholder="¿Qué quieres hacer?"
          onChange={(event) => setInput(event.target.value)}
          value={input}
        />
        <input
          type="submit"
          value="Añadir"
          className="bg-blue-400 p-2"
        />
      </form>

      <section className="flex justify-between items-center gap-4 px-4 w-full">
        <span>
          {tareasCompletadas.length} de {tareas.length} completadas
        </span>

        <button
          className="bg-green-400 p-2"
          onClick={handleLimpiarTareasCompletadas}
        >
          Limpiar completadas
        </button>
      </section>

      <ul className="flex flex-col gap-2 p-4 w-full">
        {tareas.map(tarea => {
          return (
            <li className="flex justify-between" key={tarea.id}>
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  checked={tarea.completado}
                />

                {/* TODO: 3. Tachar el título de la tarea si es completado. La clase line-though solo debe añadirse al className si tarea.compleatado es true */}

                <span className="w-full">
                  {tarea.titulo}
                </span>
              </div>

              <button
                className="cursor-pointer"
                onClick={() => handleRemoverTarea(tarea.id)}
              >
                ❌
              </button>
            </li>
          )
        })}
      </ul>

      <pre>{JSON.stringify(tareas, null, 2)}</pre>
    </main>
  )
}

export default App