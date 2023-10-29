import { useState } from 'react'

import { HiOutlineChevronLeft } from 'react-icons/hi'
import { PiReceipt } from 'react-icons/pi'

import { Wrapper } from '../../components/Wrapper'
import { Main } from '../../components/Main'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Stepper } from '../../components/Stepper'
import { Button } from '../../components/Button'
import * as S from './styles'

const product = {
  image: 'https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg',
  name: 'Salada Ravanello',
  description:
    'Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.',
  ingredients: ['alface', 'cebola', 'pão naan', 'pepino'],
  price: 25.25,
}

function priceFormatter(amount) {
  const price = amount.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
  return price
}

export function Details() {
  const [amount, setAmount] = useState(1)
  const totalPrice = priceFormatter(amount * product.price)

  function handleIncrease() {
    setAmount(prev => prev + 1)
  }

  function handleDecrease() {
    if (amount > 1) {
      setAmount(prev => prev - 1)
    }
  }

  return (
    <>
      <Wrapper>
        <Header />
        <Main>
          <S.Details>
            <S.Breadcrumbs>
              <HiOutlineChevronLeft /> voltar
            </S.Breadcrumbs>
            <S.Content>
              <img src={product.image} alt={product.name} />
              <S.Infos>
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                {product.ingredients && (
                  <S.Tags>
                    {product.ingredients.map(tag => (
                      <li key={tag}>
                        <button>{tag}</button>
                      </li>
                    ))}
                  </S.Tags>
                )}
                <S.Actions>
                  <Stepper
                    amount={amount}
                    increase={handleIncrease}
                    decrease={handleDecrease}
                  />
                  <Button>
                    <PiReceipt /> incluir ∙ {totalPrice}
                  </Button>
                </S.Actions>
              </S.Infos>
            </S.Content>
          </S.Details>
        </Main>
        <Footer />
      </Wrapper>
    </>
  )
}
