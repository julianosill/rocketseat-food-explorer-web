import { useEffect, useState } from 'react'
import { MdOutlineNoFood } from 'react-icons/md'

import { api } from '../../services/api'
import { handleFilterByCategory } from '../../utils/handlers'
import { handleFailedMessage } from '../../utils/handlers'

import headerImage from '../../assets/header.png'
import { Loading } from '../../components/Loading'
import { ProductSlider } from '../../components/ProductSlider'
import { Empty } from '../../components/Empty'
import * as S from './styles'

export function Home() {
  const [products, setProducts] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    async function getProducts() {
      setIsLoading(true)
      await api
        .get('/products', { withCredentials: true })
        .then(response => {
          setProducts({
            dishes: handleFilterByCategory('Refeições', response.data),
            desserts: handleFilterByCategory('Sobremesas', response.data),
            drinks: handleFilterByCategory('Bebidas', response.data),
          })
        })
        .catch(error => {
          let errorMessage
          if (error.response) {
            errorMessage = error.response.data.message || null
          }
          setError(handleFailedMessage('product', errorMessage))
        })
        .finally(() => setIsLoading(false))
    }
    getProducts()
  }, [])

  return (
    <>
      <S.Header>
        <S.HeaderImage>
          <img
            src={headerImage}
            alt="Macarons, frutas e folhas espalhadas pelo ar"
          />
        </S.HeaderImage>
        <S.HeaderText>
          <h1>Sabores inigualáveis</h1>
          <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
        </S.HeaderText>
      </S.Header>

      {isLoading && (
        <S.LoadingContainer>
          <Loading text="Carregando um delicioso menu" />
        </S.LoadingContainer>
      )}

      {products?.dishes && (
        <S.Category>
          <h2>Refeições</h2>
          <ProductSlider data={products.dishes} />
        </S.Category>
      )}

      {products?.desserts && (
        <S.Category>
          <h2>Sobremesas</h2>
          <ProductSlider data={products.desserts} />
        </S.Category>
      )}

      {products?.drinks && (
        <S.Category>
          <h2>Bebidas</h2>
          <ProductSlider data={products.drinks} />
        </S.Category>
      )}

      {!products && (
        <S.EmptyContainer>
          <Empty.Root orientation="vertical">
            <Empty.Icon icon={MdOutlineNoFood} />
            <Empty.Content>
              <Empty.Title text={error} />
            </Empty.Content>
          </Empty.Root>
        </S.EmptyContainer>
      )}
    </>
  )
}
