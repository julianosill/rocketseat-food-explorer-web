import { Route, Routes, Navigate } from 'react-router-dom'

import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/registrar" element={<SignUp />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
