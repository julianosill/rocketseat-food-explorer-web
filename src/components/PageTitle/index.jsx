import PropTypes from 'prop-types'

import * as S from './styles'

export function PageTitle({ children }) {
  return <S.Container>{children}</S.Container>
}

PageTitle.propTypes = {
  children: PropTypes.node.isRequired,
}
