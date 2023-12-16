import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { MdOutlineNoFood } from 'react-icons/md'

import { api } from '../../services/api'
import { handleFailedMessage } from '../../utils/handlers'

import { Loading } from '../../components/Loading'
import { BackButton } from '../../components/BackButton'
import { ProductInfo } from '../../components/ProductInfo'
import { Empty } from '../../components/Empty'
import * as S from './styles'

export function ProductDetails() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function getProduct() {
      setIsLoading(true)
      await api
        .get(`/products/${id}`, { withCredentials: true })
        .then(response => {
          setProduct(response.data)
          setError(null)
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
    getProduct()
  }, [id])

  if (isLoading) {
    return (
      <S.LoadingContainer>
        <Loading text="Carregando informações do produto" />
      </S.LoadingContainer>
    )
  }

  return (
    <S.Container>
      <BackButton />
      {product ? (
        <ProductInfo.Root product={product}>
          <ProductInfo.Title />
          <ProductInfo.Description />
          <ProductInfo.Tags />
          <ProductInfo.Actions />
        </ProductInfo.Root>
      ) : (
        <S.EmptyContainer>
          <Empty.Root orientation="vertical">
            <Empty.Icon icon={MdOutlineNoFood} />
            <Empty.Content>
              <Empty.Title text={error} />
              <Empty.Message>
                Confira outros produtos do nosso menu{' '}
                {<Link to="/">clicando aqui</Link>}.
              </Empty.Message>
            </Empty.Content>
          </Empty.Root>
        </S.EmptyContainer>
      )}
    </S.Container>
  )
}
