import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { HiOutlineChevronLeft } from 'react-icons/hi'

import { api } from '../../services/api'

import { PageTitle } from '../../components/PageTitle'
import { FormProduct } from '../../components/FormProduct'
import { LoadingFailed } from '../../components/LoadingFailed'
import * as S from './styles'

export function ProductUpdate() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    async function getProduct() {
      await api
        .get(`/products/${id}`)
        .then(response => {
          setProduct(response.data)
        })
        .catch(error => {
          console.error(error)
          if (error.response) {
            setError(error.response.data.message)
          }
        })
    }
    getProduct()
  }, [id])

  return (
    <>
      <S.BackButton onClick={() => navigate(-1)}>
        <HiOutlineChevronLeft /> voltar
      </S.BackButton>

      {product ? (
        <>
          <S.Header>
            <PageTitle text="Editar produto" />
          </S.Header>
          <FormProduct data={product} />
        </>
      ) : (
        <LoadingFailed message={error} />
      )}
    </>
  )
}
