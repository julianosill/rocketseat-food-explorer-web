import PropTypes from 'prop-types'

import { FiMinus, FiPlus } from 'react-icons/fi'

import { Container } from './styles'

export function Stepper({ amount, increase, decrease }) {
  return (
    <Container>
      <button onClick={decrease}>
        <FiMinus />
      </button>
      {amount < 10 ? `0${amount}` : amount}
      <button onClick={increase}>
        <FiPlus />
      </button>
    </Container>
  )
}

Stepper.propTypes = {
  amount: PropTypes.number.isRequired,
  increase: PropTypes.func.isRequired,
  decrease: PropTypes.func.isRequired,
}
