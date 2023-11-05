import PropTypes from 'prop-types'

import { useState } from 'react'
import { useAuth } from '../../hooks/auth.useAuth'
import { imageBaseUrl } from '../../services/api'
import { priceFormatter } from '../../services/formatters'

import { PiReceipt } from 'react-icons/pi'

import { Stepper } from '../../components/Stepper'
import { Button } from '../../components/Button'

import * as S from './styles'

export function ProductDetailsCard({ product }) {
  const { isAdmin } = useAuth()
  const [amount, setAmount] = useState(1)
  const totalPrice = priceFormatter(amount * product.price)

  function handleIncreaseAmount() {
    setAmount(prev => prev + 1)
  }

  function handleDecreaseAmount() {
    if (amount > 1) {
      setAmount(prev => prev - 1)
    }
  }

  return (
    <S.Container>
      <img src={`${imageBaseUrl}/${product.image}`} alt={product.name} />
      <S.Details>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        {product.ingredients && (
          <S.Tags>
            {product.ingredients.map(tag => (
              <li key={tag}>
                <button>{tag}</button>
              </li>
            ))}
          </S.Tags>
        )}
        <S.Actions>
          {isAdmin && <Button>Editar prato</Button>}
          {!isAdmin && (
            <>
              <Stepper
                amount={amount}
                increase={handleIncreaseAmount}
                decrease={handleDecreaseAmount}
              />
              <Button>
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
