import PropTypes from 'prop-types'

import * as S from './styles'

export function InputRoot({ children, ...props }) {
  return <S.Container {...props}>{children}</S.Container>
}

InputRoot.propTypes = {
  children: PropTypes.node.isRequired,
}
