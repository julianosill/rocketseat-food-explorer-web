import { BrowserRouter } from 'react-router-dom'

import { useAuth } from '../hooks/auth.useAuth'
import { USER_ROLE } from '../utils/roles'

import { AuthRoutes } from './authRoutes'
import { AdminRoutes } from './adminRoutes'
import { CustomerRoutes } from './customerRoutes'

export function Routes() {
  const { user } = useAuth()

  function AccessRoutes() {
    if (user) {
      switch (user.role) {
        case USER_ROLE.ADMIN:
          return <AdminRoutes />
        case USER_ROLE.CUSTOMER:
          return <CustomerRoutes />
        default:
          return <CustomerRoutes />
      }
    }
    return <AuthRoutes />
  }

  return (
    <BrowserRouter>
      <AccessRoutes />
    </BrowserRouter>
  )
}
