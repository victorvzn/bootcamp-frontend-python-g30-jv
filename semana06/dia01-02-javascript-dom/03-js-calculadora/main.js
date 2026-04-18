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

    numeroActual = Number(numeroActual + botonTexto)

    inputElemento.value = numeroActual
  })
})