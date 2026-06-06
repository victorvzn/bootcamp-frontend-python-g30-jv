export const fetchProducts = async () => {
  const response = await fetch('https://dummyjson.com/products?delay=2000')

  return await response.json()
}

export const getProduct = async (id) => {
  const response = await fetch(`https://dummyjson.com/products/${id}`)
  // const response = await fetch('https://dummyjson.com/products/' + id) // ❌ No es seguro

  return await response.json()
}