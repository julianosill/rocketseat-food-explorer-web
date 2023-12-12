import { useProductCardContext } from './ProductCardContext'

import * as S from './styles'

export function ProductCardDescription() {
  const { product } = useProductCardContext()
  return (
    <S.Description className="mobile-hide">{product.description}</S.Description>
  )
}
