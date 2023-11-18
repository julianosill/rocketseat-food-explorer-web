import PropTypes from 'prop-types'

import * as S from './styles'

export function Label({ children, ...props }) {
  return <S.Container {...props}>{children}</S.Container>
}

Label.propTypes = {
  children: PropTypes.node.isRequired,
}
