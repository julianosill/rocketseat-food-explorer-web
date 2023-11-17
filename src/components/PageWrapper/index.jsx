import PropTypes from 'prop-types'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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
      <ToastContainer
        theme="dark"
        autoClose={3000}
        style={{ fontSize: '1.6rem' }}
      />
    </S.Container>
  )
}

PageWrapper.propTypes = {
  page: PropTypes.node.isRequired,
}
