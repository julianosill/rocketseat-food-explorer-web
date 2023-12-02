import PropTypes from 'prop-types'

import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { useAuth } from '../../hooks/auth.useAuth'
import { useCart } from '../../hooks/cart.useCart'
import { useFavorite } from '../../hooks/favorite.useFavorite'
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
  const { addToCart } = useCart()
  const { favorites, addToFavorites, removeFromFavorites } = useFavorite()
  const [quantity, setQuantity] = useState(1)

  const totalPrice = formatToPrice(quantity * product.price)
  const isFavorited = favorites.some(item => item.id === product.id)
  const navigate = useNavigate()

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

  function handleFavorite() {
    isFavorited ? removeFromFavorites(product) : addToFavorites(product)
    return
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
            quantity={quantity}
            setQuantity={setQuantity}
            increase={handleIncreaseQuantity}
            decrease={handleDecreaseQuantity}
          />
          <Button onClick={handleAddToCart}>incluir</Button>
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
          <button onClick={handleFavorite}>
            {isFavorited ? <FaHeart /> : <FiHeart />}
          </button>
        )}
      </S.CardAction>
    </S.Container>
  )
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
}
