import PropTypes from 'prop-types'

import * as S from './styles'

export function FormError({ text }) {
  return <S.Error>{text}</S.Error>
}

FormError.propTypes = {
  text: PropTypes.string.isRequired,
}
