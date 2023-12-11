import PropTypes from 'prop-types'

import * as S from './styles'

export function InputLabel({ text, ...props }) {
  return <S.Label {...props}>{text}</S.Label>
}

InputLabel.propTypes = {
  text: PropTypes.string.isRequired,
}
