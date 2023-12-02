import { useContext } from 'react'
import { FavoriteContext } from './favorite.favoriteProvider'

export function useFavorite() {
  const context = useContext(FavoriteContext)
  return context
}
