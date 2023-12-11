import PropTypes from 'prop-types'

import { imageUrl } from '../../services/api'
import { ProductInfoContext } from './ProductInfoContext'

import * as S from './styles'

export function ProductInfoRoot({ product, children }) {
  return (
    <ProductInfoContext.Provider value={{ product }}>
      <S.Container>
        <img src={`${imageUrl}/${product.image}`} alt={product.name} />
        <S.Details>{children}</S.Details>
      </S.Container>
    </ProductInfoContext.Provider>
  )
}

ProductInfoRoot.propTypes = {
  product: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
}
