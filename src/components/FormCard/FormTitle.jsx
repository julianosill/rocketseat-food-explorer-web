import PropTypes from 'prop-types'

import * as S from './styles'

export function FormTitle({ text }) {
  return <S.Title>{text}</S.Title>
}

FormTitle.propTypes = {
  text: PropTypes.string.isRequired,
}
