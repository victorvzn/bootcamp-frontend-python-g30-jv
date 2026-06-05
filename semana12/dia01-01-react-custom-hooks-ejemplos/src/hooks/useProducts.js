import { useEffect, useState } from "react"

import { fetchProducts } from "../services/products"

export const useProducts = () => {
  // TODO: Agregar un estado "cargando" para que muestre un mensaje mientras la data está cargando

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
