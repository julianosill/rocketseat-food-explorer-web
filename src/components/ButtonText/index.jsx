import PropTypes from 'prop-types'

import * as S from './styles'

export function ButtonText({ children, ...rest }) {
  return <S.Container {...rest}>{children}</S.Container>
}

ButtonText.propTypes = {
  children: PropTypes.node,
}
