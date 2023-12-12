import { createContext, useContext } from 'react'

export const ProductCardContext = createContext()

export function useProductCardContext() {
  const context = useContext(ProductCardContext)

  if (!context) {
    throw new Error(
      'ProductCard.* component must be rendered as child of ProductCard.'
    )
  }
  return context
}
