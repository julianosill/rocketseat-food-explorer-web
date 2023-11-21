import PropTypes from 'prop-types'

import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { useAuth } from '../../hooks/auth.useAuth'
import { imageUrl } from '../../services/api'
import { formatToPrice } from '../../utils/formatters'

import { FiHeart } from 'react-icons/fi'
import { FaHeart } from 'react-icons/fa'
import { PiPencilSimple } from 'react-icons/pi'

import { Stepper } from '../../components/Stepper'
import { Button } from '../../components/Button'

import * as S from './styles'

export function ProductCard({ product }) {
  const { isAdmin } = useAuth()
  const [amount, setAmount] = useState(1)

  const totalPrice = formatToPrice(amount * product.price)
  const navigate = useNavigate()

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
      <Link to={`/produto/${product.id}`}>
        <img src={`${imageUrl}/${product.image}`} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.description}</p>
      </Link>
      <S.Price>{totalPrice}</S.Price>

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

      <S.CardAction>
        {isAdmin ? (
          <button
            onClick={() => navigate(`/admin/produto/${product.id}`)}
            title="Editar produto"
          >
            <PiPencilSimple />
          </button>
        ) : (
          <button>
            <FiHeart />
            {/* <FaHeart /> */}
          </button>
        )}
      </S.CardAction>
    </S.Container>
  )
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
}
