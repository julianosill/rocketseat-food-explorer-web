import { Link, useNavigate } from 'react-router-dom'
import { FiLogOut } from 'react-icons/fi'
import { PiReceipt } from 'react-icons/pi'
import { SlMenu } from 'react-icons/sl'

import { useAuth } from '../../hooks/auth.useAuth'
import { useCart } from '../../hooks/cart.useCart'
import { useStateProvider } from '../../hooks/components.useStateProvider'

import { SideMenu } from '../SideMenu'
import { Container } from '../Container'
import { Logo } from '../Logo'
import { Search } from '../Search'
import { Button } from '../Button'
import * as S from './styles'

export function Header() {
  const { setMenuIsOpen } = useStateProvider()
  const { isAdmin, signOut } = useAuth()
  const { cart } = useCart()

  const badgeNumber = !isAdmin && cart?.length > 0 ? cart.length : null
  const navigate = useNavigate()

  return (
    <>
      <SideMenu />
      <S.Header>
        <Container>
          <S.MenuButton onClick={() => setMenuIsOpen(true)}>
            <SlMenu />
          </S.MenuButton>

          <S.Brand>
            <Link to="/">
              <Logo admin={isAdmin} place="header" />
            </Link>
          </S.Brand>

          <S.Search className="mobile-hide">
            <Search id="main-search" />
          </S.Search>

          <S.TextButtons>
            <button onClick={() => navigate('/favoritos')}>
              Meus favoritos
            </button>
            {isAdmin ? (
              <button onClick={() => navigate('/admin/adicionar')}>
                Novo produto
              </button>
            ) : (
              <button onClick={() => navigate('/pedidos')}>
                Histórico de pedidos
              </button>
            )}
          </S.TextButtons>

          <S.Order>
            <Button
              icon={PiReceipt}
              onClick={() => {
                isAdmin ? navigate('/pedidos') : navigate('/meupedido')
              }}
            >
              <span className="mobile-hide">
                Pedidos {badgeNumber && `(${badgeNumber})`}
              </span>
              {badgeNumber && <S.Badge>{badgeNumber}</S.Badge>}
            </Button>
          </S.Order>

          <S.Logout
            title="Sair da conta"
            onClick={() => {
              signOut()
              navigate('/')
            }}
          >
            <FiLogOut />
          </S.Logout>
        </Container>
      </S.Header>
    </>
  )
}
