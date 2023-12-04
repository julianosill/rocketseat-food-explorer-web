import { Route, Routes, Navigate } from 'react-router-dom'

import { PageWrapper } from '../components/PageWrapper'

import { Products } from '../pages/Products'
import { ProductDetails } from '../pages/ProductDetails'
import { ProductsSearch } from '../pages/ProductsSearch'

import { UserFavorites } from '../pages/UserFavorites'
import { UserOrder } from '../pages/UserOrder'

export function CustomerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PageWrapper page={<Products />} />} />
      <Route
        path="/produto/:id"
        element={<PageWrapper page={<ProductDetails />} />}
      />
      <Route
        path="/produtos"
        element={<PageWrapper page={<ProductsSearch />} />}
      />

      <Route
        path="/favoritos"
        element={<PageWrapper page={<UserFavorites />} />}
      />
      <Route path="/meupedido" element={<PageWrapper page={<UserOrder />} />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
