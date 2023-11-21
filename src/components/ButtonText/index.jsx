import PropTypes from 'prop-types'

import * as S from './styles'

export function ButtonText({ text, ...props }) {
  return <S.Container {...props}>{text}</S.Container>
}

ButtonText.propTypes = {
  text: PropTypes.string,
}
