import { useNavigate } from 'react-router-dom'

import { TfiClose } from 'react-icons/tfi'
import { FiSearch } from 'react-icons/fi'

import { useAuth } from '../../hooks/auth.useAuth'
import { useStateProvider } from '../../hooks/components.useStateProvider'

import { Container } from '../Container'
import { InputSearch } from '../InputSearch'
import * as S from './styles'

export function SideMenu() {
  const { isAdmin, signOut } = useAuth()
  const { menuIsOpen, setMenuIsOpen } = useStateProvider()
  const navigate = useNavigate()

  return (
    <S.Wrapper data-menu-is-open={menuIsOpen}>
      <S.Header>
        <Container>
          <S.CloseMenu onClick={() => setMenuIsOpen(false)}>
            <TfiClose /> Menu
          </S.CloseMenu>
        </Container>
      </S.Header>
      <Container>
        <S.Search>
          <InputSearch
            id="search"
            label="Pesquisar"
            icon={FiSearch}
            placeholder="Busque por pratos ou ingredientes"
          />
        </S.Search>
        <S.Menu>
          {isAdmin && (
            <button onClick={() => navigate('/admin/adicionar')}>
              Novo produto
            </button>
          )}
          <button onClick={() => navigate('/favoritos')}>Meus favoritos</button>
          {!isAdmin && (
            <button onClick={() => navigate('/historico')}>
              Histórico de pedidos
            </button>
          )}
          <button onClick={signOut}>Sair</button>
        </S.Menu>
      </Container>
    </S.Wrapper>
  )
}
