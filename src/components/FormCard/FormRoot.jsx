import PropTypes from 'prop-types'

import * as S from './styles'

export function FormRoot({ children }) {
  return <S.Container>{children}</S.Container>
}

FormRoot.propTypes = {
  children: PropTypes.node.isRequired,
}
