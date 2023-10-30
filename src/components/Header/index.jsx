import { useState } from 'react'

import { FiLogOut, FiSearch } from 'react-icons/fi'
import { PiReceipt } from 'react-icons/pi'
import { SlMenu } from 'react-icons/sl'

import { Container } from '../Container'
import { Logo } from '../Logo'
import * as S from './styles'

export function Header() {
  const [isAdmin, setIsAdmin] = useState(false)
  const [cart, setCart] = useState(null)

  return (
    <S.Header>
      <Container>
        <S.MenuButton>
          <SlMenu />
        </S.MenuButton>
        <S.Brand>
          <Logo admin={isAdmin} />
        </S.Brand>
        <S.Search>
          <S.Label htmlFor="search">
            <span className=" sr-only">Pesquisar</span>
            <FiSearch />
          </S.Label>
          <input
            id="search"
            type="text"
            placeholder="Busque por pratos ou ingredientes"
          />
        </S.Search>
        <S.Order>
          <PiReceipt />
          <span>Meu pedido (0)</span>
          {cart && <S.Badge>{cart}</S.Badge>}
        </S.Order>
        <S.Logout>
          <FiLogOut />
        </S.Logout>
      </Container>
    </S.Header>
  )
}
