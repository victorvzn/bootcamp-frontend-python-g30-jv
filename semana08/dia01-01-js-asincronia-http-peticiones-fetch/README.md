# Asincronía

### Asincronía en Javascript

JS no espera a que algo lento termine sino que continua su ejecución y espera que se termine en un segundo plano

```js
console.log('Empezando mi programa')

setTimeout(() => {
  console.log('Esta línea tardará 2 segundos o 2000ms')
}, 2000) // 2000ms <> 2 seg

console.log('Fin de mi programa')
```

## API

