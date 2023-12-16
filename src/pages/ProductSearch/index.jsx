import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

import { HiOutlineChevronLeft } from 'react-icons/hi'

import { api } from '../../services/api'
import { handleFilterByCategory } from '../../utils/handlers'

import { Loading } from '../../components/Loading'
import { ProductSlider } from '../../components/ProductSlider'
import * as S from './styles'

export function ProductSearch() {
  const [searchParams] = useSearchParams()
  const [products, setProducts] = useState(null)
  const [isLoadingProducts, setIsLoadingProducts] = useState(false)
  const [requestFailed, setRequestFailed] = useState(null)

  const searchQuery = searchParams.get('pesquisa') || ''
  const navigate = useNavigate()

  useEffect(() => {
    async function getProducts() {
      setIsLoadingProducts(true)
      setRequestFailed(null)
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
          console.log(error)
          let errorMessage = 'error'
          if (error.response) {
            errorMessage = error.response.data.message || 'error'
          }
          setRequestFailed(errorMessage)
        })
        .finally(() => setIsLoadingProducts(false))
    }
    getProducts()
  }, [searchQuery])

  return (
    <>
      <S.Header>
        <S.BackButton onClick={() => navigate(-1)}>
          <HiOutlineChevronLeft /> voltar
        </S.BackButton>

        <S.Title>
          {searchQuery
            ? `Exibindo resultados de busca por: ${searchQuery}`
            : 'Estes são todos os produtos disponíveis em nosso catálogo.'}
        </S.Title>
      </S.Header>

      {isLoadingProducts && (
        <Loading text="Carregando deliciosas informações..." />
      )}

      {products?.dishes.length > 0 && (
        <S.Category>
          <h2>Refeições</h2>
          <ProductSlider data={products.dishes} />
        </S.Category>
      )}

      {products?.desserts.length > 0 && (
        <S.Category>
          <h2>Sobremesas</h2>
          <ProductSlider data={products.desserts} />
        </S.Category>
      )}

      {products?.drinks.length > 0 && (
        <S.Category>
          <h2>Bebidas</h2>
          <ProductSlider data={products.drinks} />
        </S.Category>
      )}
    </>
  )
}
