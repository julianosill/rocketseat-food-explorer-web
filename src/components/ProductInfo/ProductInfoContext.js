import { createContext, useContext } from 'react'

export const ProductInfoContext = createContext()

export function useProductInfoContext() {
  const context = useContext(ProductInfoContext)

  if (!context) {
    throw new Error(
      'ProductInfo.* component must be rendered as child of ProductInfo.'
    )
  }
  return context
}
