import PropTypes from 'prop-types'

import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import * as S from './styles'

export function Loading({ orientation = 'vertical', text }) {
  return (
    <S.Container orientation={orientation}>
      <AiOutlineLoading3Quarters />
      <p>{text}</p>
    </S.Container>
  )
}

Loading.propTypes = {
  orientation: PropTypes.oneOf(['vertical', 'horizontal']),
  text: PropTypes.string.isRequired,
}
