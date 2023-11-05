import PropTypes from 'prop-types'

import * as S from './styles'

export function Button({ children, ...rest }) {
  return <S.Container {...rest}>{children}</S.Container>
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
}
