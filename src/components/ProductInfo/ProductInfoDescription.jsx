import { useProductInfoContext } from './ProductInfoContext'

import * as S from './styles'

export function ProductInfoDescription() {
  const { product } = useProductInfoContext()
  return <S.Description>{product.description}</S.Description>
}
