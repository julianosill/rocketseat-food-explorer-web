import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'
import { AuthProvider } from './hooks/auth.AuthProvider'
import { CartProvider } from './hooks/cart.CartProvider'
import { FavoriteProvider } from './hooks/favorite.favoriteProvider'
import { Routes } from './routes'

import theme from './styles/theme'
import GlobalStyles from './styles/global'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <CartProvider>
          <FavoriteProvider>
            <Routes />
          </FavoriteProvider>
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
)
