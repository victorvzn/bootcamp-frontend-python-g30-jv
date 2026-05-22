const App = () => {
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
        <li className="flex justify-between">
          <div className="flex gap-2">
            <input
              type="checkbox"
            />

            <span className="w-full">
              Tarea 1
            </span>
          </div>

          <button
            className="cursor-pointer"
          >
            ❌
          </button>
        </li>
        <li className="flex justify-between">
          <div className="flex gap-2">
            <input
              type="checkbox"
            />

            <span className="w-full line-through">
              Tarea 1
            </span>
          </div>

          <button
            className="cursor-pointer"
          >
            ❌
          </button>
        </li>
      </ul>
    </main>
  )
}

export default App