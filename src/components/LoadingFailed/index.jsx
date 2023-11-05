import PropTypes from 'prop-types'

import { TbFaceIdError } from 'react-icons/tb'

import { handleFailedMessage } from '../../services/handlers'

import * as S from './styles'

export function LoadingFailed({ error }) {
  return (
    <S.Container>
      <TbFaceIdError />
      <p>{handleFailedMessage(error.message)}</p>
    </S.Container>
  )
}

LoadingFailed.propTypes = {
  error: PropTypes.object.isRequired,
}
