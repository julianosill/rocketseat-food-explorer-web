import { Route, Routes, Navigate } from 'react-router-dom'

import { PageWrapper } from '../components/PageWrapper'

import { Products } from '../pages/Products'
import { ProductDetails } from '../pages/ProductDetails'
import { ProductsSearch } from '../pages/ProductsSearch'
import { ProductNew } from '../pages/ProductNew'
import { ProductUpdate } from '../pages/ProductUpdate'

export function AdminRoutes() {
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
        path="/admin/adicionar"
        element={<PageWrapper page={<ProductNew />} />}
      />
      <Route
        path="/admin/produto/:id"
        element={<PageWrapper page={<ProductUpdate />} />}
      />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
