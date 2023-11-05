import PropTypes from 'prop-types'

import { TbFaceIdError } from 'react-icons/tb'
import * as S from './styles'

export function LoadingFailed({ text }) {
  return (
    <S.Container>
      <TbFaceIdError />
      <p>{text}</p>
    </S.Container>
  )
}

LoadingFailed.propTypes = {
  text: PropTypes.string.isRequired,
}
