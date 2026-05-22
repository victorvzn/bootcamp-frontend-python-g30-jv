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

  return (
    <main className="flex flex-col items-center gap-4">
      <h1 className="text-xl text-center">Todo App + React + TailwindCSS</h1>

      <form className="flex gap-2 w-full px-4">
        <input
          type="text"
          className="border p-1 w-full"
          placeholder="¿Qué quieres hacer?"
        />
        <input
          type="submit"
          value="Añadir"
          className="bg-blue-400 p-2"
        />
      </form>

      <section className="flex justify-between items-center gap-4 px-4 w-full">
        <span>
          0 de 0 completadas
        </span>

        <button
          className="bg-green-400 p-2"
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

                <span className="w-full">
                  {tarea.titulo}
                </span>
              </div>

              <button
                className="cursor-pointer"
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