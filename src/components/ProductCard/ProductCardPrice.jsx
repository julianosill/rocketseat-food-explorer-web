import { useProductCardContext } from './ProductCardContext'
import { formatToPrice } from '../../utils/formatters'

import * as S from './styles'

export function ProductCardPrice() {
  const { product, quantity } = useProductCardContext()
  const totalPrice = formatToPrice(quantity * product.price)

  return <S.Price>{totalPrice}</S.Price>
}
