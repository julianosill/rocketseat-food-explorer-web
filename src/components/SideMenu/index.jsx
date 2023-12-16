import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { TfiClose } from 'react-icons/tfi'

import { useAuth } from '../../hooks/auth.useAuth'

import { Container } from '../Container'
import { Search } from '../Search'
import { Footer } from '../Footer'
import * as S from './styles'

export function SideMenu({ menuIsOpen, setMenuIsOpen }) {
  const { isAdmin, signOut } = useAuth()
  const navigate = useNavigate()

  function handleNavigate(path) {
    navigate(path)
    return setMenuIsOpen(false)
  }

  function closeSideMenu() {
    return setMenuIsOpen(false)
  }

  return (
    <S.Wrapper data-menu-is-open={menuIsOpen}>
      <S.Header>
        <Container>
          <S.CloseMenu onClick={closeSideMenu}>
            <TfiClose /> Menu
          </S.CloseMenu>
        </Container>
      </S.Header>
      <S.Content>
        <Container>
          <Search id="side-search" onSearch={closeSideMenu} />
          <S.Menu data-menu-is-open={menuIsOpen}>
            {isAdmin && (
              <button onClick={() => handleNavigate('/admin/adicionar')}>
                Novo produto
              </button>
            )}
            <button onClick={() => handleNavigate('/favoritos')}>
              Meus favoritos
            </button>
            {!isAdmin && (
              <button onClick={() => handleNavigate('/pedidos')}>
                Histórico de pedidos
              </button>
            )}
            <button
              onClick={() => {
                signOut()
                navigate('/')
              }}
            >
              Sair
            </button>
          </S.Menu>
        </Container>
      </S.Content>
      <Footer />
    </S.Wrapper>
  )
}

SideMenu.propTypes = {
  menuIsOpen: PropTypes.bool.isRequired,
  setMenuIsOpen: PropTypes.func.isRequired,
}
