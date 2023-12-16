import PropTypes from 'prop-types'
import { createContext, useEffect, useState } from 'react'

import { api } from '../services/api'
import { handleApiError } from '../utils/handlers'

export const AuthContext = createContext({})

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const isAdmin = user?.role === 'admin'

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  const isValidEmail = email => emailRegex.test(email)

  async function signUp({ name, email, password }) {
    if (!name) {
      throw { name: 'Insira seu nome' }
    }

    if (!email) {
      throw { email: 'Insira seu e-mail' }
    }

    if (!isValidEmail(email)) {
      throw { email: 'Insira um e-mail válido' }
    }

    if (password.length < 6) {
      throw { password: 'A senha deve ter 6 ou mais caracteres' }
    }

    try {
      await api.post('/users', { name, email, password })
    } catch (error) {
      handleApiError('auth', error)
    }
  }

  async function signIn({ email, password }) {
    if (!email) {
      throw { email: 'Insira seu e-mail' }
    }

    if (!isValidEmail(email)) {
      throw { email: 'Insira um e-mail válido' }
    }

    if (password.length < 6) {
      throw { password: 'Senha informada é muito curta' }
    }

    try {
      const response = await api.post(
        '/sessions',
        { email, password },
        { withCredentials: true }
      )
      const { user } = response.data
      setUser(user)
      localStorage.setItem('@foodexplorer:user', JSON.stringify(user))
    } catch (error) {
      handleApiError('auth', error)
    }
  }

  function signOut() {
    setUser(null)
    localStorage.removeItem('@foodexplorer:user')
  }

  useEffect(() => {
    const userStorage = localStorage.getItem('@foodexplorer:user')

    async function validateUser() {
      const response = await api
        .get('users/validate', { withCredentials: true })
        .catch(error => {
          console.error(error)
          signOut()
        })

      const { user } = response.data

      setUser(user)
      localStorage.setItem('@foodexplorer:user', JSON.stringify(user))
    }

    userStorage && validateUser()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        isAdmin,
        signUp,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
