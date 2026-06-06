import { create } from 'zustand'

export const useCartStore = create(
  (set, get) => ({
    // Estado inicial
    cart: [
      // { id: 1, title: 'PRoducto 1', qty: 1},
      // { id: 2, title: 'PRoducto 2', qty: 3}
    ],
    // Actions
    addToCart: (newProduct) => {
      console.log('agregando product al carrito', newProduct)

      // ¿Qué pasa si ya existe el nuevo producto en el carrito de compras?

      // Esta línea se ejecuta cuando el producto es nuevo en el carrito de compras
      set(state => ({
        cart: [...state.cart, { ...newProduct, qty: 1 }]
      }))
    },
    clearCart: () => {
      set(() => ({ cart: [] }))
    },
    removeFromCart: (productId) => {
      // TODO: Remover el producto usando el id que tenemos en el parámetro de la función
    }
  })
)