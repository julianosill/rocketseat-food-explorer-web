import PropTypes from 'prop-types'

import * as S from './styles'

export function InputError({ text }) {
  return <S.Error>{text}</S.Error>
}

InputError.propTypes = {
  text: PropTypes.string.isRequired,
}
