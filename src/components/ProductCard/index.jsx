import PropTypes from 'prop-types'

import { useState } from 'react'
import { Link } from 'react-router-dom'

import { useAuth } from '../../hooks/auth.useAuth'
import { imageBaseUrl } from '../../services/api'
import { priceFormatter } from '../../services/formatters'

import { FiHeart } from 'react-icons/fi'
import { FaHeart } from 'react-icons/fa'
import { PiPencilSimple } from 'react-icons/pi'

import { Stepper } from '../../components/Stepper'
import { Button } from '../../components/Button'

import * as S from './styles'

export function ProductCard({ product }) {
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
    <S.Container $isAdmin={isAdmin}>
      <S.CardAction>
        {isAdmin ? (
          <button>
            <PiPencilSimple />
          </button>
        ) : (
          <button>
            <FiHeart />
            {/* <FaHeart /> */}
          </button>
        )}
      </S.CardAction>

      <img src={`${imageBaseUrl}/${product.image}`} alt={product.name} />
      <Link to={`/produto/${product.id}`}>
        <h3>{product.name}</h3>
      </Link>
      <p>{product.description}</p>
      <S.Price>{priceFormatter(totalPrice)}</S.Price>

      {!isAdmin && (
        <S.Actions>
          <Stepper
            inProductCard
            amount={amount}
            setAmount={setAmount}
            increase={handleIncreaseAmount}
            decrease={handleDecreaseAmount}
          />
          <Button>incluir</Button>
        </S.Actions>
      )}
    </S.Container>
  )
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
}
