import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { api } from '../../services/api'

import { HiOutlineChevronLeft } from 'react-icons/hi'

import { Loading } from '../../components/Loading'
import { LoadingFailed } from '../../components/LoadingFailed'
import { ProductDetailsCard } from '../../components/ProductDetailsCard'

import * as S from './styles'

export function Details() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [isLoadingProduct, setIsLoadingProduct] = useState(false)
  const [requestFailed, setRequestFailed] = useState(null)

  const navigate = useNavigate()

  useEffect(() => {
    async function getProduct() {
      setIsLoadingProduct(true)
      await api
        .get(`/products/${id}`)
        .then(response => {
          setProduct(response.data)
          setRequestFailed(null)
        })
        .catch(error => {
          console.log(error)
          if (error.response.data) {
            setRequestFailed(error.response.data)
          }
          setProduct(null)
        })
        .finally(() => setIsLoadingProduct(false))
    }
    getProduct()
  }, [id])

  return (
    <S.Container>
      <S.BackButton onClick={() => navigate(-1)}>
        <HiOutlineChevronLeft /> voltar
      </S.BackButton>
      {isLoadingProduct && (
        <Loading text="Carregando deliciosas informações..." />
      )}
      {product && <ProductDetailsCard product={product} />}
      {requestFailed && <LoadingFailed error={requestFailed} />}
    </S.Container>
  )
}
