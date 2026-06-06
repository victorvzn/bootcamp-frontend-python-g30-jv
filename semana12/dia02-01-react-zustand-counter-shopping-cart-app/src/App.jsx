import { useEffect } from "react"
import Counter from "./components/Counter"
import { useState } from "react"
import ProductList from "./components/ProductList"
import ShoppingCart from "./components/ShoppingCart"

const App = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://dummyjson.com/products')

      return await response.json()
    }

    fetchProducts()
      .then(data => setProducts(data.products))
  }, [])


  return (
    <main className="flex flex-col gap-8 p-4">

      <section className="flex gap-2">
        <ProductList products={products} />

        <ShoppingCart />
      </section>
      
      <section className="flex flex-col gap-4">
        <Counter />
        <Counter />
      </section>
    </main>
  )
}

export default App