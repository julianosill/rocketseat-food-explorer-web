import PropTypes from 'prop-types'

import * as S from './styles'

export function PageTitle({ text }) {
  return <S.Container>{text}</S.Container>
}

PageTitle.propTypes = {
  text: PropTypes.string.isRequired,
}
