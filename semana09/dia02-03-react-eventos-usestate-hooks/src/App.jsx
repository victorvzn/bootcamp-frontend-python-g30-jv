const Contador = () => {
  return (
    <div className="bg-yellow-400 p-4 m-4">
      <h1 className="text-center text-2xl">Contador</h1>

      <div className="flex gap-4 justify-center">
        <button className="bg-blue-400 px-4 py-3 cursor-pointer hover:bg-blue-600">+1</button>
        <span className="bg-slate-400 px-8 py-3">0</span>
        <button className="bg-blue-400 px-4 py-3 cursor-pointer hover:bg-blue-600">-1</button>
      </div>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center">
        React + Eventos + useState (Hook)
      </h1>

      {/* TODO: Crear un archivo llamado Contador.jsx. Y usarlo en App.jsx. Añadir dos botones y un span para crear nuestro contador.  */}
      <Contador />
    </div>
  )
}

export default App