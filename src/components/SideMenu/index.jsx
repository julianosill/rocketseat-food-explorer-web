import { useNavigate } from 'react-router-dom'
import { TfiClose } from 'react-icons/tfi'

import { useAuth } from '../../hooks/auth.useAuth'
import { useStateProvider } from '../../hooks/components.useStateProvider'

import { Container } from '../Container'
import { Search } from '../Search'
import { Footer } from '../Footer'
import * as S from './styles'

export function SideMenu() {
  const { isAdmin, signOut } = useAuth()
  const { menuIsOpen, setMenuIsOpen } = useStateProvider()
  const navigate = useNavigate()

  function handleNavigate(path) {
    navigate(path)
    return setMenuIsOpen(false)
  }

  return (
    <S.Wrapper data-menu-is-open={menuIsOpen}>
      <S.Header>
        <Container>
          <S.CloseMenu onClick={() => setMenuIsOpen(false)}>
            <TfiClose /> Menu
          </S.CloseMenu>
        </Container>
      </S.Header>
      <S.Content>
        <Container>
          <Search id="side-search" />
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
