import PropTypes from 'prop-types'
import { createContext, useEffect, useState } from 'react'

import { useAuth } from '../hooks/auth.useAuth'
import { api } from '../services/api'

export const FavoriteContext = createContext({})

export function FavoriteProvider({ children }) {
  const { user } = useAuth()
  const [favorites, setFavorites] = useState([])
  const [isLoadingFavs, setIsLoadingFavs] = useState(false)

  function addToFavorites(product) {
    const { id, name, image } = product

    const hasProduct = favorites.find(item => item.id === id)
    if (hasProduct) return

    const updatedFavorites = [...favorites, { id, name, image }]
    setFavorites(updatedFavorites)
    return updateStorageFavorites(updatedFavorites)
  }

  function removeFromFavorites(product) {
    const filteredFavorites = favorites.filter(item => item.id !== product.id)

    if (filteredFavorites.length === 0) {
      setFavorites(filteredFavorites)
      return localStorage.removeItem('@foodexplorer:favorites')
    }

    setFavorites(filteredFavorites)
    return updateStorageFavorites(filteredFavorites)
  }

  function updateStorageFavorites(products) {
    localStorage.setItem('@foodexplorer:favorites', JSON.stringify(products))
  }

  async function fetchFavorites(ids) {
    setIsLoadingFavs(true)
    await api
      .get(`/products?id=${ids}`, { withCredentials: true })
      .then(response => {
        setFavorites(response.data)
      })
      .catch(error => console.error(error))
      .finally(() => setIsLoadingFavs(false))
  }

  useEffect(() => {
    const storageFavorites = JSON.parse(
      localStorage.getItem('@foodexplorer:favorites')
    )

    const productsId = storageFavorites?.map(product => product.id)
    user && productsId?.length && fetchFavorites(productsId)
  }, [user])

  return (
    <FavoriteContext.Provider
      value={{
        isLoadingFavs,
        favorites,
        addToFavorites,
        removeFromFavorites,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  )
}

FavoriteProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
