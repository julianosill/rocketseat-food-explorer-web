import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { ProductItemContext } from './ProductItemContext'
import { imageUrl } from '../../services/api'

import * as S from './styles'

export function ProductItemRoot({ product, children }) {
  return (
    <ProductItemContext.Provider value={{ product }}>
      <S.Container>
        <Link to={`/produto/${product.id}`}>
          <img src={`${imageUrl}/${product.image}`} alt={product.name} />
        </Link>
        <S.Content>{children}</S.Content>
      </S.Container>
    </ProductItemContext.Provider>
  )
}

ProductItemRoot.propTypes = {
  product: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
}
