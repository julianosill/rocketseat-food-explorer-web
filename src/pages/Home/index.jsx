import { useEffect, useState } from 'react'

import { api } from '../../services/api'
import { handleFilterByCategory } from '../../utils/handlers'

import headerImage from '../../assets/header.png'
import { Loading } from '../../components/Loading'
import { ProductSlider } from '../../components/ProductSlider'
import * as S from './styles'

export function Home() {
  const [products, setProducts] = useState(null)
  const [isLoadingProducts, setIsLoadingProducts] = useState(false)
  const [requestFailed, setRequestFailed] = useState(null)

  useEffect(() => {
    async function getProducts() {
      setIsLoadingProducts(true)
      setRequestFailed(null)
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
