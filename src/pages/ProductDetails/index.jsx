import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { api } from '../../services/api'

import { HiOutlineChevronLeft } from 'react-icons/hi'

import { Loading } from '../../components/Loading'
import { LoadingFailed } from '../../components/LoadingFailed'
import { ProductInfo } from '../../components/ProductInfo'
import * as S from './styles'

export function ProductDetails() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loadingProduct, setLoadingProduct] = useState(false)
  const [requestFailed, setRequestFailed] = useState(null)

  const navigate = useNavigate()

  useEffect(() => {
    async function getProduct() {
      setLoadingProduct(true)
      await api
        .get(`/products/${id}`, { withCredentials: true })
        .then(response => {
          setProduct(response.data)
          setRequestFailed(null)
        })
        .catch(error => {
          console.log(error)
          let errorMessage = 'error'
          if (error.response) {
            errorMessage = error.response.data.message || 'error'
          }
          setRequestFailed(errorMessage)
        })
        .finally(() => setLoadingProduct(false))
    }
    getProduct()
  }, [id])

  return (
    <S.Container>
      <S.BackButton onClick={() => navigate(-1)}>
        <HiOutlineChevronLeft /> voltar
      </S.BackButton>
      {loadingProduct && (
        <Loading text="Carregando deliciosas informações..." />
      )}
      {requestFailed && <LoadingFailed message={requestFailed} />}
      {product && <ProductInfo product={product} />}
    </S.Container>
  )
}
