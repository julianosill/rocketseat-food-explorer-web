import PropTypes from 'prop-types'

import { TbFaceIdError } from 'react-icons/tb'

import { handleFailedMessage } from '../../utils/handlers'
import * as S from './styles'

export function LoadingFailed({ message }) {
  return (
    <S.Container>
      <TbFaceIdError />
      <p>{handleFailedMessage(message)}</p>
    </S.Container>
  )
}

LoadingFailed.propTypes = {
  message: PropTypes.string,
}
