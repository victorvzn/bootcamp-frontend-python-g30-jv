import { Contador } from "./components/Contador"

const App = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center">
        React + Eventos + useState (Hook)
      </h1>

      {/* TODO: Crear un archivo llamado Contador.jsx. Y usarlo en App.jsx. Añadir dos botones y un span para crear nuestro contador.  */}
      <Contador />
      <Contador />
      <Contador />
    </div>
  )
}

export default App