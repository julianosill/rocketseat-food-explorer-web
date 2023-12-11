import PropTypes from 'prop-types'

import * as S from './styles'

export function InputButton({ icon: Icon, ...props }) {
  return <S.Button {...props}>{<Icon />}</S.Button>
}

InputButton.propTypes = {
  icon: PropTypes.func.isRequired,
}
