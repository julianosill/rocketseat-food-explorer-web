import PropTypes from 'prop-types'
import { useState } from 'react'

import { useAuth } from '../../hooks/auth.useAuth'
import { ProductCardContext } from './ProductCardContext'

import * as S from './styles'

export function ProductCardRoot({ product, children }) {
  const { isAdmin } = useAuth()
  const [quantity, setQuantity] = useState(1)

  return (
    <ProductCardContext.Provider value={{ product, quantity, setQuantity }}>
      <S.Container $admin={isAdmin}>{children}</S.Container>
    </ProductCardContext.Provider>
  )
}

ProductCardRoot.propTypes = {
  product: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
}
