// TODO: Listar los productos de la siguiente rest api: https://dummyjson.com/products. Usando un useState, useEffect.

import { useEffect, useState } from "react"

import { fetchProducts } from "../services/products"

const ProductList = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    console.log('Me ejecuto solo la primera vez')
    fetchProducts()
      .then(data => setProducts(data.products))
  }, [])


  return (
    <div>
      <h2>Product list</h2>

      <ul>
        {products.map(product => {
          return (
            <li>
              <h4>{product.title}</h4>
              <p>{product.description}</p>
              <img src={product.thumbnail} />
            </li>
          )
        })}
      </ul>

      {/* <pre>{JSON.stringify(products, null, 2)}</pre> */}
    </div>
  )
}

export default ProductList