let numeroActual = '0'
let operador = '' // +, -, *, /, etc
let operando = '' // Es cualquier número

// const inputElemento = document.getElementById('inputDisplay')
// console.log({inputElemento})

// Consultando un elemento a la vez
const inputElemento = document.querySelector('#inputDisplay')
// Consultando múltiples elementos a la vez (esto devuelve un arreglo con las coincidencias)
const buttons = document.querySelectorAll('.button')

console.log(buttons)

buttons.forEach(function(button) {
  // console.log(button.textContent)

  button.addEventListener('click', function(event) {
    // console.log('click!', button.textContent)
    // console.log(event)
    const botonTexto = event.target.textContent

    // TODO: Terminar las operacions de resta y multiplicación de la calculadora

    if (botonTexto === '+' || botonTexto === '-' || botonTexto === '*') {
      // PASO 2. Evaluamos el operador seleccionado
      operador = botonTexto
      operando = Number(numeroActual) // Guardamos temporalment el número actual
      numeroActual = 0
    } else if (botonTexto === '='){
      // PASO 3. Cuando presionamos el botón '='
      // Aquí realizamos las operaciones en base al número actual y al operando
      if (operador === '+') {
        numeroActual = Number(operando) + Number(numeroActual)
      } else if (operador === '-') {
        numeroActual = Number(operando) - Number(numeroActual)
      } else if (operador === '*') {
        numeroActual = Number(operando) * Number(numeroActual)
      }
    } else if (botonTexto === 'CE') {
      // PASO 4. Cuando presionamos el botón 'CE'
      // Limpiamos operando, operador y el numeroActual(input)
      numeroActual = '0'
      operador = ''
      operando = ''
    } else {
      // PASO 1. Evaluar cuando presionamos algún número
      numeroActual = Number(numeroActual + botonTexto) // Concatenamos numero actual y botonTexto
    }

    inputElemento.value = numeroActual
    // inputElemento.value = new Intl.NumberFormat().format(numeroActual)
  })
})

// const number = 3500;

// console.log(new Intl.NumberFormat().format(number));