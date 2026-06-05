import { useEffect, useState } from "react"

import { fetchProducts } from "../services/products"

export const useProducts = () => {
  const [products, setProducts] = useState([])
  
  useEffect(() => {
    console.log('Me ejecuto solo la primera vez')
    fetchProducts()
      .then(data => setProducts(data.products))
  }, [])

  return {
    products
  }
}
