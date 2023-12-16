import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { HiOutlineChevronLeft } from 'react-icons/hi'

import * as S from './styles'

export function BackButton({ size }) {
  const navigate = useNavigate()

  return (
    <S.Button size={size} onClick={() => navigate(-1)}>
      <HiOutlineChevronLeft /> voltar
    </S.Button>
  )
}

BackButton.propTypes = {
  size: PropTypes.oneOf(['sm']),
}
