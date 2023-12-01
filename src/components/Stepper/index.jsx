import PropTypes from 'prop-types'

import { FiMinus, FiPlus } from 'react-icons/fi'

import * as S from './styles'

export function Stepper({ inProductCard, quantity, increase, decrease }) {
  return (
    <S.Container $inproductcard={inProductCard}>
      <button
        onClick={decrease}
        disabled={quantity <= 1}
        title="Diminuir quantidade"
      >
        <FiMinus />
      </button>
      <span>{quantity < 10 ? `0${quantity}` : quantity}</span>
      <button onClick={increase} title="Aumentar quantidade">
        <FiPlus />
      </button>
    </S.Container>
  )
}

Stepper.propTypes = {
  inProductCard: PropTypes.bool,
  quantity: PropTypes.number.isRequired,
  increase: PropTypes.func.isRequired,
  decrease: PropTypes.func.isRequired,
}
