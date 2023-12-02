import { Link } from 'react-router-dom'

import { FaRegFaceGrinBeamSweat } from 'react-icons/fa6'

import { useFavorite } from '../../hooks/favorite.useFavorite'
import { imageUrl } from '../../services/api'

import { Loading } from '../../components/Loading'
import { PageTitle } from '../../components/PageTitle'
import { Empty } from '../../components/Empty'
import * as S from './styles'

export function Favorites() {
  const { isLoadingFavs, favorites, removeFromFavorites } = useFavorite()

  return (
    <>
      <S.Header>
        <PageTitle text="Meus favoritos" />
      </S.Header>

      {isLoadingFavs && <Loading text="Carregando sua lista de favoritos" />}

      {favorites.length > 0 && (
        <S.List>
          {favorites.map(product => (
            <S.Item key={product.id}>
              <img src={`${imageUrl}/${product.image}`} alt={product.name} />
              <S.ItemContent>
                <Link to={`/produto/${product.id}`}>
                  <S.ItemName>{product.name}</S.ItemName>
                </Link>
                <button onClick={() => removeFromFavorites(product)}>
                  Remover dos Favoritos
                </button>
              </S.ItemContent>
            </S.Item>
          ))}
        </S.List>
      )}

      {!isLoadingFavs && !favorites.length && (
        <Empty>
          <Empty.Icon icon={FaRegFaceGrinBeamSweat} />
          <Empty.Content>
            <Empty.Title text="Sua lista de favoritos está vazia" />
            <Empty.Message>
              Selecione itens deliciosos do nosso menu{' '}
              {<Link to="/">clicando aqui</Link>}.
            </Empty.Message>
          </Empty.Content>
        </Empty>
      )}
    </>
  )
}
