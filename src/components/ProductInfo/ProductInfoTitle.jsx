import { useProductInfoContext } from './ProductInfoContext'

import * as S from './styles'

export function ProductInfoTitle() {
  const { product } = useProductInfoContext()
  return <S.Title>{product.name}</S.Title>
}
