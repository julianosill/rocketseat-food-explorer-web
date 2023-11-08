import { useEffect, useState } from 'react'

import { api } from '../../services/api'
import { filterByCategory } from '../../services/handlers'

import { Title } from '../../components/Title'
import { Loading } from '../../components/Loading'
import { LoadingFailed } from '../../components/LoadingFailed'
import { ProductSlider } from '../../components/ProductSlider'

import headerImage from '../../assets/header.png'
import * as S from './styles'

export function Products() {
  const [products, setProducts] = useState(null)
  const [isLoadingProducts, setIsLoadingProducts] = useState(false)
  const [requestFailed, setRequestFailed] = useState(null)

  useEffect(() => {
    async function getProducts() {
      setIsLoadingProducts(true)
      setRequestFailed(null)
      await api
        .get('/products')
        .then(response => {
          setProducts({
            meals: filterByCategory('Refeições', response.data),
            desserts: filterByCategory('Sobremesas', response.data),
            drinks: filterByCategory('Bebidas', response.data),
          })
        })
        .catch(error => {
          console.log(error)
          let errorMessage = 'error'
          if (error.response) {
            errorMessage = error.response.data.message
          }
          setRequestFailed(errorMessage)
        })
        .finally(() => setIsLoadingProducts(false))
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

      {isLoadingProducts && (
        <Loading text="Carregando deliciosas informações..." />
      )}

      {requestFailed && <LoadingFailed message={requestFailed} />}

      {products?.meals.length > 0 && (
        <S.Category>
          <Title text="Refeições" />
          <ProductSlider data={products.meals} />
        </S.Category>
      )}

      {products?.desserts.length > 0 && (
        <S.Category>
          <Title text="Sobremesas" />
          <ProductSlider data={products.desserts} />
        </S.Category>
      )}

      {products?.drinks.length > 0 && (
        <S.Category>
          <Title text="Bebidas" />
          <ProductSlider data={products.drinks} />
        </S.Category>
      )}
    </>
  )
}
