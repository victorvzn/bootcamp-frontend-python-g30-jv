import { create } from 'zustand'

export const useCounterStore = create(
  () => ({
    // Estado inicial
    count: 99,
    // Acciones
    increment: () => {
      console.log('incrementando++')
    },
    decrement: () => {
      console.log('decrementando--')
    }
  })
)