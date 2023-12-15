import PropTypes from 'prop-types'

import * as S from './styles'

export function ProductItemButton({ text, onClick }) {
  return <S.Button onClick={onClick}>{text}</S.Button>
}

ProductItemButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
}
