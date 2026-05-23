import { useState } from "react"

const App = () => {
  const [peso, setPeso] = useState(80)
  const [altura, setAltura] = useState(180)

  const handlePeso = (event) => {
    setPeso(event.target.value)
  }

  const handleAltura = (event) => {
    setAltura(event.target.value)
  }

  const imc = peso / ((altura / 100) ** 2)

  const imcDecimal = imc.toFixed(2)

  const imcResultado = () => {
    let resultado = ''

    if (imc < 18.5) {
      resultado = 'Baja'
    } else if (imc > 18.5 && imc <= 24.9) {
      resultado = 'Normal'
    } else if (imc > 25 && imc <= 29.9) {
      resultado = 'Sobrepeso'
    } else if (imc > 30) {
      resultado = 'Obeso'
    } else {
      resultado = 'Datos incorrectos'
    }

    return resultado
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
        <p>Altura: {altura} cm</p>
        <input
          type="range"
          min="50"
          max="200"
          onChange={handleAltura}
          value={altura}
        />
      </div>

      <p className="font-bold">Tu IMC es {imcDecimal}</p>

      <p className="font-bold text-2xl">Estado de IMC: {imcResultado()}</p>
    </section>
  )
}

export default App