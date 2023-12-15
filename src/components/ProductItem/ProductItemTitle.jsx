import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { useProductItemContext } from './ProductItemContext'

import * as S from './styles'

export function ProductItemTitle({ showQuantity = false }) {
  const { product } = useProductItemContext()
  return (
    <Link to={`/produto/${product.id}`}>
      <S.Title>
        {showQuantity && (
          <>
            {product.quantity}
            <span>x</span>
          </>
        )}
        {product.name}
      </S.Title>
    </Link>
  )
}

ProductItemTitle.propTypes = {
  showQuantity: PropTypes.bool,
}
