import PropTypes from 'prop-types'

import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import * as S from './styles'

export function Loading({ text }) {
  return (
    <S.Container>
      <AiOutlineLoading3Quarters />
      <p>{text}</p>
    </S.Container>
  )
}

Loading.propTypes = {
  text: PropTypes.string.isRequired,
}
