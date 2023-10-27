import PropTypes from 'prop-types'

import { Container } from './styles'

export function ButtonText({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>
}

ButtonText.propTypes = {
  children: PropTypes.node,
}
