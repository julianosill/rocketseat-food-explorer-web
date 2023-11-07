import PropTypes from 'prop-types'

import { createContext } from 'react'

export const AuthContext = createContext({})

export function AuthProvider({ children }) {
  const isAdmin = false

  const cart = 3

  return (
    <AuthContext.Provider value={{ isAdmin, cart }}>
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
