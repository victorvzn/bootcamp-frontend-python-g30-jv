import { useParams } from "react-router"

import { getProduct } from '../services/products'

const ProductPage = () => {
  const { id } = useParams()

  // TODO: Imprimir los datos del producto(ej. title, descripción, price, thumbnail 7 y marca) en el return de este producto

  return (
    <div>ProductPage {id}</div>
  )
}

export default ProductPage