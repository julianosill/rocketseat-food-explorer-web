import PropTypes from 'prop-types'

import logo from '../../assets/logos/logo.svg'
import logoAdmin from '../../assets/logos/logoAdmin.svg'
import logoFooter from '../../assets/logos/logoFooter.svg'

import { Container } from './styles'

export function Logo({ admin, footer }) {
  const altText = 'Food Explorer'

  if (footer) {
    return <Container src={logoFooter} alt={altText} />
  }

  if (admin) {
    return <Container src={logoAdmin} alt={altText} />
  }

  return <Container src={logo} alt={altText} />
}

Logo.propTypes = {
  admin: PropTypes.bool,
  footer: PropTypes.bool,
}
