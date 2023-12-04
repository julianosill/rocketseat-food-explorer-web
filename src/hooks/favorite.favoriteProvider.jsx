import PropTypes from 'prop-types'

import { createContext, useEffect, useState } from 'react'
import { api } from '../services/api'

export const FavoriteContext = createContext({})

export function FavoriteProvider({ children }) {
  const [isLoadingFavs, setIsLoadingFavs] = useState(false)
  const [favorites, setFavorites] = useState([])

  function addToFavorites(product) {
    const updatedFavorites = [...favorites, product]
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
    productsId?.length && fetchFavorites(productsId)
  }, [])

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
