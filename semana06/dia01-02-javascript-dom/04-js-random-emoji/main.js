console.log(Math.random() * 3) // 0 <= número aleatorio < 3
console.log(Math.floor(Math.random() * 3)) // Nos quedamos con la parte entera usando floor

const emojiList = ['🍕','🍔','🍟','🌭','🍿','😁','🤣','😂','😀','🤗','😎','😣','🙄','😯','🥰','😗','😲','🤑','😤','🤪','😵','🤢','🤬','😱','💀','👾','🤧','🤡','💀','👽','💩']

const elemento = document.querySelector('section')

const indiceAleatorio = Math.floor(Math.random() * emojiList.length)

elemento.textContent = emojiList[indiceAleatorio]

// TODO: Al hacer click en boton 'Generar emoji' actualiza el section de la página con un nuevo emoji