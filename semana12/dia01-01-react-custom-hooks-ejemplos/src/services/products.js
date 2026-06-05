export const fetchProducts = async () => {
  const response = await fetch('https://dummyjson.com/products?delay=1000')

  return await response.json()
}