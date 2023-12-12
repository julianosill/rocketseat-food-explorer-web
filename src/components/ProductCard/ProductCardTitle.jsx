import { Link } from 'react-router-dom'

import { useProductCardContext } from './ProductCardContext'

import * as S from './styles'

export function ProductCardTitle() {
  const { product } = useProductCardContext()
  return (
    <Link to={`/produto/${product.id}`}>
      <S.Title>{product.name}</S.Title>
    </Link>
  )
}
