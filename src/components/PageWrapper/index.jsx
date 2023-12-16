import PropTypes from 'prop-types'
import { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { SideMenu } from '../SideMenu'
import { Header } from '../Header'
import { Container } from '../Container'
import { Footer } from '../Footer'
import * as S from './styles'

export function PageWrapper({ page }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  return (
    <S.Wrapper>
      <SideMenu menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
      <Header setMenuIsOpen={setMenuIsOpen} />
      <S.Content>
        <S.Main>
          <Container>{page}</Container>
        </S.Main>
        <Footer />
      </S.Content>
      <ToastContainer
        theme="dark"
        autoClose={2500}
        style={{ fontSize: '1.6rem', lineHeight: '1.25' }}
      />
    </S.Wrapper>
  )
}

PageWrapper.propTypes = {
  page: PropTypes.node.isRequired,
}
