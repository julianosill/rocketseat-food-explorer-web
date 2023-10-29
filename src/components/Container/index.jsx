import PropTypes from 'prop-types'
import * as S from './styles'

export function Container({ children }) {
  return <S.Container>{children}</S.Container>
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
}
