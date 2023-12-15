import { useProductItemContext } from './ProductItemContext'
import { formatToPrice } from '../../utils/formatters'

import * as S from './styles'

export function ProductItemPrice() {
  const { product } = useProductItemContext()
  return (
    <S.Price>
      <div>
        <strong>Preço: </strong> {formatToPrice(product.price)}
      </div>
      {product.quantity > 1 && (
        <>
          <S.Divider />
          <div>
            <strong>Subtotal: </strong>
            {formatToPrice(product.quantity * product.price)}
          </div>
        </>
      )}
    </S.Price>
  )
}
