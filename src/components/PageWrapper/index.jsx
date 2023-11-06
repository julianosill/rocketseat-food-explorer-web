import PropTypes from 'prop-types'

import { Header } from '../Header'
import { Container } from '../Container'
import { Footer } from '../Footer'

import * as S from './styles'

export function PageWrapper({ page }) {
  return (
    <S.Container>
      <Header />
      <S.Main>
        <Container>{page}</Container>
      </S.Main>
      <Footer />
    </S.Container>
  )
}

PageWrapper.propTypes = {
  page: PropTypes.node.isRequired,
}
