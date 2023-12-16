import { Link } from 'react-router-dom'
import { IoHeartDislikeOutline } from 'react-icons/io5'

import { useFavorite } from '../../hooks/favorite.useFavorite'

import { Loading } from '../../components/Loading'
import { Empty } from '../../components/Empty'
import { PageTitle } from '../../components/PageTitle'
import { ProductItem } from '../../components/ProductItem'
import * as S from './styles'

export function Favorites() {
  const { isLoadingFavs, favorites, removeFromFavorites } = useFavorite()
  const hasFavorite = favorites?.length > 0

  if (isLoadingFavs) {
    return (
      <S.LoadingContainer>
        <Loading text="Carregando sua lista de favoritos" />
      </S.LoadingContainer>
    )
  }

  return (
    <>
      <S.Header>
        <PageTitle>Meus favoritos</PageTitle>
      </S.Header>

      {hasFavorite ? (
        <S.List>
          {favorites.map(product => (
            <ProductItem.Root key={product.id} product={product}>
              <ProductItem.Title />
              <ProductItem.Button
                text="Remover dos Favoritos"
                onClick={() => removeFromFavorites(product)}
              />
            </ProductItem.Root>
          ))}
        </S.List>
      ) : (
        <Empty.Root>
          <Empty.Icon icon={IoHeartDislikeOutline} />
          <Empty.Content>
            <Empty.Title text="Sua lista de favoritos está vazia" />
            <Empty.Message>
              Selecione itens do nosso delicioso menu{' '}
              {<Link to="/">clicando aqui</Link>}.
            </Empty.Message>
          </Empty.Content>
        </Empty.Root>
      )}
    </>
  )
}
