import { Link } from 'react-router-dom'

import { useProductCardContext } from './ProductCardContext'
import { imageUrl } from '../../services/api'

import * as S from './styles'

export function ProductCardImage() {
  const { product } = useProductCardContext()
  return (
    <Link to={`/produto/${product.id}`}>
      <S.Image src={`${imageUrl}/${product.image}`} alt={product.name} />
    </Link>
  )
}
