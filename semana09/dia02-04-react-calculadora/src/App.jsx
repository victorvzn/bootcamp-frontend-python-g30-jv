import { useState } from "react"

const App = () => {
  const operaciones = ['+', '-', '*']
  const numeros = [
    '7', '8', '9',
    '4', '5', '6',
    '1', '2', '3',
    '0',
  ]
  const acciones = ['CE', '=']

  // numeroActual
  // operador
  // operando

  const [numeroActual, setNumeroActual] = useState('0')
  const [operador, setOperador] = useState('')
  const [operando, setOperando] = useState('')

  const handleButton = (event) => {
    console.log('Hice click!', event.target)

    const buttonText = event.target.textContent

    if (operaciones.includes(buttonText)) {
      setOperador(buttonText)
      setOperando(Number(numeroActual))
      setNumeroActual('0')
    } else if (buttonText === '=') {
      if (operador === '+') {
        setNumeroActual(Number(operando) + Number(numeroActual))
      }
      if (operador === '-') {
        setNumeroActual(Number(operando) - Number(numeroActual))
      }
      if (operador === '*') {
        setNumeroActual(Number(operando) * Number(numeroActual))
      }
    } else if (buttonText === 'CE') {
      setNumeroActual('0')
      setOperador('')
      setOperando('')
    } else {
      setNumeroActual(Number(numeroActual + buttonText))
    }
  }

  return (
    <main className="bg-blue-400 w-85 mx-auto mt-8 p-4 rounded-md shadow-md">
      <h1 className="text-2xl font-bold text-center mb-4">
        Calculadora con React
      </h1>

      <section className="flex flex-col gap-4">
        <input
          className="border p-2 text-right text-3xl font-bold rounded-md bg-slate-50"
          id="inputDisplay"
          readOnly
          value={numeroActual}
        />

        <div className="grid grid-cols-3 gap-4">
          {operaciones.map(operacion => {
            return (
              <button
                className="bg-red-400 p-2 rounded-md hover:bg-red-500 duration-300 text-black text-xl font-bold"
                onClick={handleButton}
                key={operacion}
              >
                {operacion}
              </button>
            )
          })}

          {numeros.map(numero => {
            return (
              <button
                className="bg-amber-400 p-2 rounded-md hover:bg-amber-500 duration-300 text-black text-xl font-bold"
                onClick={handleButton}
                key={numero}
              >
                {numero}
              </button>
            )
          })}
          
          {acciones.map(accion => {
            return (
              <button
                className="bg-green-400 p-2 rounded-md hover:bg-green-500 duration-300 text-black text-xl font-bold"
                onClick={handleButton}
                key={accion}
              >
                {accion}
              </button>
            )
          })}
        </div>
      </section>
    </main>
  )
}

export default App