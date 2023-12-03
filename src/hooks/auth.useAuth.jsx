import { useContext } from 'react'

import { AuthContext } from './auth.AuthProvider'

export function useAuth() {
  const context = useContext(AuthContext)
  return context
}
