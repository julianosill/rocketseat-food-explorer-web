import { Route, Routes, Navigate } from 'react-router-dom'

import { PageWrapper } from '../components/PageWrapper'
import { Home } from '../pages/Home'
import { ProductDetails } from '../pages/ProductDetails'
import { ProductSearch } from '../pages/ProductSearch'
import { Favorites } from '../pages/Favorites'
import { Order } from '../pages/Order'
import { OrderHistory } from '../pages/OrderHistory'

export function CustomerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PageWrapper page={Home} />} />
      <Route
        path="/produto/:id"
        element={<PageWrapper page={ProductDetails} />}
      />
      <Route path="/produtos" element={<PageWrapper page={ProductSearch} />} />

      <Route path="/favoritos" element={<PageWrapper page={Favorites} />} />

      <Route path="/pedidos" element={<PageWrapper page={OrderHistory} />} />
      <Route path="/meupedido" element={<PageWrapper page={Order} />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
