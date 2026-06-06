import { useEffect, useState } from "react"
import { Link, useParams, useNavigate } from "react-router"

import { getProduct } from '../services/products'

const ProductPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [product, setProduct] = useState()

  // TODO: Imprimir los datos del producto(ej. title, descripción, price, thumbnail 7 y marca) en el return de este producto

  useEffect(() => {
    getProduct(id)
      .then(data => setProduct(data))
  }, [])

  const handleBackProductsPage = () => {
    navigate('/products')
  }

  return (
    <main>
      <Link to='/products'>Regresar al listado de productos</Link>

      <button onClick={handleBackProductsPage}>Regresar al listado de productos</button>

      <h1 className="text-xl font-bold">Product detail #{id}</h1>

      <ul>
        <li className="font-bold">{product?.title}</li>
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