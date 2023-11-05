import PropTypes from 'prop-types'

import * as S from './styles'

export function Title({ text }) {
  return <S.Container>{text}</S.Container>
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
}
