import { useNavigate } from 'react-router-dom'

import { FiHeart } from 'react-icons/fi'
import { FaHeart } from 'react-icons/fa'
import { PiPencilSimple } from 'react-icons/pi'

import { useAuth } from '../../hooks/auth.useAuth'
import { useFavorite } from '../../hooks/favorite.useFavorite'
import { useProductCardContext } from './ProductCardContext'

import * as S from './styles'

export function ProductCardBookmark() {
  const { isAdmin } = useAuth()
  const { favorites, addToFavorites, removeFromFavorites } = useFavorite()
  const { product } = useProductCardContext()

  const isFavorited = favorites.find(item => item.id === product.id)
  const navigate = useNavigate()

  function handleFavorite() {
    isFavorited ? removeFromFavorites(product) : addToFavorites(product)
  }

  return (
    <S.Bookmark>
      {isAdmin && (
        <S.BookmarkButton
          onClick={() => navigate(`/admin/produto/${product.id}`)}
        >
          <PiPencilSimple />
        </S.BookmarkButton>
      )}
      {!isAdmin && (
        <S.BookmarkButton onClick={handleFavorite} $favorited={isFavorited}>
          {isFavorited ? <FaHeart /> : <FiHeart />}
        </S.BookmarkButton>
      )}
    </S.Bookmark>
  )
}
