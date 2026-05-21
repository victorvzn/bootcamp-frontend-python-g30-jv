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
    <main>
      <h1>Calculadora con React</h1>

      <section>
        <input id="inputDisplay" readonly value={numeroActual} />

        <div class="botones">
          <button class="button" onClick={handleButton}>+</button>
          <button class="button" onClick={handleButton}>-</button>
          <button class="button" onClick={handleButton}>*</button>

          <button class="button" onClick={handleButton}>7</button>
          <button class="button" onClick={handleButton}>8</button>
          <button class="button" onClick={handleButton}>9</button>
          <button class="button" onClick={handleButton}>4</button>
          <button class="button" onClick={handleButton}>5</button>
          <button class="button" onClick={handleButton}>6</button>
          <button class="button" onClick={handleButton}>1</button>
          <button class="button" onClick={handleButton}>2</button>
          <button class="button" onClick={handleButton}>3</button>
          <button class="button" onClick={handleButton}>0</button>
          
          <button class="button" onClick={handleButton}>CE</button>
          <button class="button" onClick={handleButton}>=</button>
        </div>
      </section>
    </main>
  )
}

export default App