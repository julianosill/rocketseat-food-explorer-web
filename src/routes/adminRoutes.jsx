import { Route, Routes, Navigate } from 'react-router-dom'

import { PageWrapper } from '../components/PageWrapper'
import { Home } from '../pages/Home'
import { ProductDetails } from '../pages/ProductDetails'
import { ProductSearch } from '../pages/ProductSearch'
import { ProductNew } from '../pages/ProductNew'
import { ProductUpdate } from '../pages/ProductUpdate'
import { Favorites } from '../pages/Favorites'
import { OrderHistory } from '../pages/OrderHistory'

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PageWrapper page={Home} />} />
      <Route
        path="/produto/:id"
        element={<PageWrapper page={ProductDetails} />}
      />
      <Route path="/produtos" element={<PageWrapper page={ProductSearch} />} />

      <Route path="/favoritos" element={<PageWrapper page={Favorites} />} />

      <Route
        path="/admin/adicionar"
        element={<PageWrapper page={ProductNew} />}
      />
      <Route
        path="/admin/produto/:id"
        element={<PageWrapper page={ProductUpdate} />}
      />

      <Route path="/pedidos" element={<PageWrapper page={OrderHistory} />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
