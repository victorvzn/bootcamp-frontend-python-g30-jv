export const fetchProducts = async () => {
  const response = await fetch('https://dummyjson.com/products')

  return await response.json()
}