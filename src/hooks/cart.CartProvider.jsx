import PropTypes from 'prop-types'

import { createContext, useState } from 'react'
import { toast } from 'react-toastify'

export const CartContext = createContext({})

export function CartProvider({ children }) {
  const storageCart = JSON.parse(localStorage.getItem('@foodexplorer:cart'))
  const [cart, setCart] = useState(
    typeof storageCart === 'object' && storageCart?.length ? storageCart : []
  )

  function addToCart(product, quantity) {
    const hasProduct = cart.find(item => item.id === product.id)

    if (hasProduct) {
      const updatedCart = cart.map(item =>
        item.id === product.id
          ? { id: item.id, quantity: (item.quantity += quantity) }
          : item
      )
      setCart(updatedCart)
      updateStorageCart(updatedCart)
      return toast.success(
        `A quantidade de "${product.name}" foi atualizada no seu carrinho.`
      )
    }

    const cartWithNewProduct = [...cart, { id: product.id, quantity }]
    setCart(cartWithNewProduct)
    updateStorageCart(cartWithNewProduct)
    return toast.success(`"${product.name}" foi adicionado ao carrinho.`)
  }

  function removeFromCart(product) {
    const confirm = window.confirm(
      `Tem certeza que deseja remover "${product.name}"?`
    )
    if (confirm) {
      const filteredItems = cart.filter(item => item.id !== product.id)

      if (filteredItems.length === 0) {
        setCart(filteredItems)
        localStorage.removeItem('@foodexplorer:cart')
      } else {
        setCart(filteredItems)
        updateStorageCart(filteredItems)
      }

      return toast.success(`"${product.name}" foi removido do carrinho.`)
    }
  }

  function updateStorageCart(items) {
    localStorage.setItem('@foodexplorer:cart', JSON.stringify(items))
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
