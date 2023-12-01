import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { FiLogOut, FiSearch } from 'react-icons/fi'
import { PiReceipt } from 'react-icons/pi'
import { SlMenu } from 'react-icons/sl'

import { useAuth } from '../../hooks/auth.useAuth'
import { useCart } from '../../hooks/cart.useCart'

import { useStateProvider } from '../../hooks/components.useStateProvider'

import { Container } from '../Container'
import { Logo } from '../Logo'
import { InputSearch } from '../InputSearch'
import { Button } from '../Button'
import { SideMenu } from '../SideMenu'
import * as S from './styles'

export function Header() {
  const { isAdmin, signOut } = useAuth()
  const { cart } = useCart()
  const { setMenuIsOpen } = useStateProvider()
  const [expandedSearch, setExpandedSearch] = useState(false)

  const cartItems = cart.length > 0 ? cart.length : null
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
              <Logo admin={isAdmin} header />
            </Link>
          </S.Brand>
          <S.Search className="mobile-hide">
            <InputSearch
              id="search"
              label="Pesquisar"
              icon={FiSearch}
              onFocus={() => setExpandedSearch(true)}
              onBlur={() => setExpandedSearch(false)}
              placeholder="Busque por pratos ou ingredientes"
            />
          </S.Search>
          <S.TextButtons data-hide={expandedSearch}>
            <button onClick={() => navigate('/favoritos')}>
              Meus favoritos
            </button>
            {isAdmin ? (
              <button onClick={() => navigate('/admin/adicionar')}>
                Novo produto
              </button>
            ) : (
              <button onClick={() => navigate('/historico')}>
                Histórico de pedidos
              </button>
            )}
          </S.TextButtons>
          <S.Order>
            {!isAdmin && (
              <Button icon={PiReceipt} onClick={() => navigate('/pedido')}>
                <span className="mobile-hide">
                  Pedido {cartItems && `(${cartItems})`}
                </span>
                {cartItems && <S.Badge>{cartItems}</S.Badge>}
              </Button>
            )}
            {isAdmin && (
              <Button
                icon={PiReceipt}
                onClick={() => navigate('/admin/pedidos')}
              >
                <span className="mobile-hide">
                  Pedidos {cartItems && `(${cartItems})`}
                </span>
                {cartItems && <S.Badge>{cartItems}</S.Badge>}
              </Button>
            )}
          </S.Order>
          <S.Logout onClick={signOut}>
            <FiLogOut />
          </S.Logout>
        </Container>
      </S.Header>
    </>
  )
}
