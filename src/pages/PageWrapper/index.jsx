import PropTypes from 'prop-types'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

import * as S from './styles'

export function PageWrapper({ page }) {
  return (
    <S.Container>
      <Header />
      <main>{page}</main>
      <Footer />
    </S.Container>
  )
}

PageWrapper.propTypes = {
  page: PropTypes.node.isRequired,
}
