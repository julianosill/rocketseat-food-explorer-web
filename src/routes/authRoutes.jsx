import { Route, Routes, Navigate } from 'react-router-dom'

import { useAuth } from '../hooks/auth.useAuth'

import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'

export function AuthRoutes() {
  const { userData } = useAuth()
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/registrar" element={<SignUp />} />

      {!userData && <Route path="*" element={<Navigate to="/" />} />}
    </Routes>
  )
}
