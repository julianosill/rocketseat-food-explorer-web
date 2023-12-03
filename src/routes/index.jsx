import { BrowserRouter } from 'react-router-dom'

import { useAuth } from '../hooks/auth.useAuth'

import { AuthRoutes } from './authRoutes'
import { AppRoutes } from './appRoutes'

export function Routes() {
  const { userData } = useAuth()

  return (
    <BrowserRouter>{userData ? <AppRoutes /> : <AuthRoutes />}</BrowserRouter>
  )
}
