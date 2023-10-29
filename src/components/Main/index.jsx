import PropTypes from 'prop-types'
import { Container } from './styles'

export function Main({ children }) {
  return <Container>{children}</Container>
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
}
