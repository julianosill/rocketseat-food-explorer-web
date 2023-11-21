import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { FiLogOut, FiSearch } from 'react-icons/fi'
import { PiReceipt } from 'react-icons/pi'
import { SlMenu } from 'react-icons/sl'

import { useAuth } from '../../hooks/auth.useAuth'

import { Container } from '../Container'
import { Logo } from '../Logo'
import { InputSearch } from '../InputSearch'
import { Button } from '../Button'
import { SideMenu } from '../SideMenu'
import * as S from './styles'

export function Header() {
  const { isAdmin, signOut, cart } = useAuth()
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [expandedSearch, setExpandedSearch] = useState(false)

  const navigate = useNavigate()

  return (
    <>
      <SideMenu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />
      <S.Header>
        <Container>
          <S.MenuButton onClick={() => setMenuIsOpen(true)}>
            <SlMenu />
          </S.MenuButton>
          <S.Brand>
            <Link to="/">
              <Logo admin={isAdmin} />
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
                  Pedido {cart && `(${cart})`}
                </span>
                {cart && <S.Badge>{cart}</S.Badge>}
              </Button>
            )}
            {isAdmin && (
              <Button
                icon={PiReceipt}
                onClick={() => navigate('/admin/pedidos')}
              >
                <span className="mobile-hide">
                  Pedidos {cart && `(${cart})`}
                </span>
                {cart && <S.Badge>{cart}</S.Badge>}
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
