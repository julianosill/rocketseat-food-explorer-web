import { useContext } from 'react'
import { CartContext } from './cart.CartProvider'

export function useCart() {
  const context = useContext(CartContext)
  return context
}
