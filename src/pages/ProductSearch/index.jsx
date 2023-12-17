import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { MdOutlineNoFood } from 'react-icons/md'

import { api } from '../../services/api'
import { handleFilterByCategory } from '../../utils/handlers'
import { handleFailedMessage } from '../../utils/handlers'

import { Loading } from '../../components/Loading'
import { BackButton } from '../../components/BackButton'
import { ProductSlider } from '../../components/ProductSlider'
import { Empty } from '../../components/Empty'
import * as S from './styles'

export function ProductSearch() {
  const [searchParams] = useSearchParams()
  const [products, setProducts] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const searchQuery = searchParams.get('pesquisa') || ''

  useEffect(() => {
    async function getProducts() {
      setIsLoading(true)
      setProducts(null)
      await api
        .get(`/products?search=${searchQuery}`, { withCredentials: true })
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
  }, [searchQuery])

  if (isLoading) {
    return (
      <S.LoadingContainer>
        <Loading text="Carregando resultado de busca" />
      </S.LoadingContainer>
    )
  }

  return (
    <>
      <S.Header>
        <BackButton />

        {searchQuery && (
          <S.Title>{`Exibindo resultado de busca por: ${searchQuery}`}</S.Title>
        )}
      </S.Header>

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
