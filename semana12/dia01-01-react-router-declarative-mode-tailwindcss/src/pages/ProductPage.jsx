import { useEffect, useState } from "react"
import { useParams } from "react-router"

import { getProduct } from '../services/products'

const ProductPage = () => {
  const { id } = useParams()

  const [product, setProduct] = useState()

  // TODO: Imprimir los datos del producto(ej. title, descripción, price, thumbnail 7 y marca) en el return de este producto

  useEffect(() => {
    getProduct(id)
      .then(data => setProduct(data))
  }, [])

  return (
    <main>

      <h1>Product detail #{id}</h1>

      <ul>
        <li>{product?.title}</li>
        <li>{product?.description}</li>
        <li>S/ {product?.price}</li>
        <li>{product?.brand}</li>
        <li><img src={product?.thumbnail} /></li>
      </ul>

      <pre>{JSON.stringify(product, null, 2)}</pre>
    </main>
  )
}

export default ProductPage