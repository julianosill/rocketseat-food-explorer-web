import PropTypes from 'prop-types'
import { Container } from './styles'

export function Wrapper({ children }) {
  return <Container>{children}</Container>
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
}
