import { useState } from "react"

const App = () => {
  const [peso, setPeso] = useState(80)
  const [altura, setAltura] = useState(80)

  const handlePeso = (event) => {
    setPeso(event.target.value)
  }

  return (
    <section className="w-[400px] bg-slate-200 p-4 mt-8 mx-auto rounded-md">
      <h1 className="text-3xl text-sky-600 text-center font-bold">IMC APP</h1>

      <div className="pt-4">
        <p>Peso: {peso} kg</p>
        <input
          type="range"
          min="50"
          max="200"
          onChange={handlePeso}
          value={peso}
        />
      </div>

      <div>
        <p>Altura: 0cm</p>
        <input
          type="range"
          min="50"
          max="200"
        />
      </div>

      <p className="font-bold">Tu IMC es 0</p>

      <p className="font-bold text-2xl">Estado de IMC: 0</p>
    </section>
  )
}

export default App