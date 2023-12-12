import { useCart } from '../../hooks/cart.useCart'
import { useProductCardContext } from './ProductCardContext'

import { Stepper } from '../Stepper'
import { Button } from '../Button'
import * as S from './styles'

export function ProductCardActions() {
  const { addToCart } = useCart()
  const { product, quantity, setQuantity } = useProductCardContext()

  function handleIncreaseQuantity() {
    setQuantity(prev => prev + 1)
    return
  }

  function handleDecreaseQuantity() {
    if (quantity > 1) {
      setQuantity(prev => prev - 1)
    }
    return
  }

  function handleAddToCart() {
    addToCart(product, quantity)
    setQuantity(1)
    return
  }

  return (
    <S.Actions>
      <Stepper
        inProductCard
        quantity={quantity}
        setQuantity={setQuantity}
        increase={handleIncreaseQuantity}
        decrease={handleDecreaseQuantity}
      />
      <Button onClick={handleAddToCart}>incluir</Button>
    </S.Actions>
  )
}
