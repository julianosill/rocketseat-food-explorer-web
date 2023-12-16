import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MdOutlineNoFood } from 'react-icons/md'

import { api } from '../../services/api'
import { handleFailedMessage } from '../../utils/handlers'

import { Loading } from '../../components/Loading'
import { BackButton } from '../../components/BackButton'
import { PageTitle } from '../../components/PageTitle'
import { FormProduct } from '../../components/FormProduct'
import { Empty } from '../../components/Empty'
import * as S from './styles'

export function ProductUpdate() {
  const { id } = useParams()
  const [isLoading, setIsLoading] = useState(false)
  const [product, setProduct] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    async function getProduct() {
      setIsLoading(true)
      await api
        .get(`/products/${id}`, { withCredentials: true })
        .then(response => {
          setProduct(response.data)
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
      <BackButton size="sm" />
      {product ? (
        <>
          <S.Header>
            <PageTitle>Editar produto</PageTitle>
          </S.Header>
          <FormProduct data={product} />
        </>
      ) : (
        <S.EmptyContainer>
          <Empty.Root orientation="vertical">
            <Empty.Icon icon={MdOutlineNoFood} />
            <Empty.Content>
              <Empty.Title text={error} />
            </Empty.Content>
          </Empty.Root>
        </S.EmptyContainer>
      )}
    </S.Container>
  )
}
