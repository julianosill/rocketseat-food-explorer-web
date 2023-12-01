import PropTypes from 'prop-types'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { PiReceipt } from 'react-icons/pi'

import { useAuth } from '../../hooks/auth.useAuth'
import { useCart } from '../../hooks/cart.useCart'
import { imageUrl } from '../../services/api'
import { formatToPrice } from '../../utils/formatters'

import { Stepper } from '../../components/Stepper'
import { Button } from '../../components/Button'
import * as S from './styles'

export function ProductDetailsCard({ product }) {
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
    <S.Container>
      <img src={`${imageUrl}/${product.image}`} alt={product.name} />
      <S.Details>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        {product.ingredients && (
          <S.Tags>
            {product.ingredients.map(tag => (
              <li key={tag}>
                <button onClick={() => navigate(`/produtos?pesquisa=${tag}`)}>
                  {tag}
                </button>
              </li>
            ))}
          </S.Tags>
        )}
        <S.Actions>
          {isAdmin && (
            <Button onClick={() => navigate(`/editar/${product.id}`)}>
              Editar prato
            </Button>
          )}
          {!isAdmin && (
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
      </S.Details>
    </S.Container>
  )
}

ProductDetailsCard.propTypes = {
  product: PropTypes.object.isRequired,
}
