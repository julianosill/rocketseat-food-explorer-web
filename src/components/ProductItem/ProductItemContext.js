import { createContext, useContext } from 'react'

export const ProductItemContext = createContext()

export function useProductItemContext() {
  const context = useContext(ProductItemContext)

  if (!context) {
    throw new Error(
      'ProductItem.* component must be rendered as child of ProductItem.'
    )
  }
  return context
}
