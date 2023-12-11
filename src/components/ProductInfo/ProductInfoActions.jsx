import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PiReceipt } from 'react-icons/pi'

import { useAuth } from '../../hooks/auth.useAuth'
import { useCart } from '../../hooks/cart.useCart'
import { useProductInfoContext } from './ProductInfoContext'
import { formatToPrice } from '../../utils/formatters'

import { Stepper } from '../Stepper'
import { Button } from '../Button'
import * as S from './styles'

export function ProductInfoActions() {
  const { product } = useProductInfoContext()
  const { isAdmin } = useAuth()
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)
  const totalPrice = formatToPrice(quantity * product.price)

  const navigate = useNavigate()

  function handleIncreaseQuantity() {
    setQuantity(prev => prev + 1)
  }

  function handleDecreaseQuantity() {
    if (quantity > 1) {
      setQuantity(prev => prev - 1)
    }
  }

  function handleAddToCart() {
    addToCart(product, quantity)
    setQuantity(1)
  }

  return (
    <S.Actions>
      {isAdmin ? (
        <Button onClick={() => navigate(`/admin/produto/${product.id}`)}>
          Editar prato
        </Button>
      ) : (
        <>
          <Stepper
            quantity={quantity}
            increase={handleIncreaseQuantity}
            decrease={handleDecreaseQuantity}
          />
          <Button onClick={handleAddToCart}>
            <PiReceipt /> incluir ∙ {totalPrice}
          </Button>
        </>
      )}
    </S.Actions>
  )
}
