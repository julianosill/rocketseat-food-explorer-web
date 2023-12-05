import PropTypes from 'prop-types'

import { createContext, useEffect, useState } from 'react'

import { api } from '../services/api'
import { handleFailedMessage } from '../utils/handlers'

export const AuthContext = createContext({})

export function AuthProvider({ children }) {
  const [userData, setUserData] = useState(null)
  const isAdmin = userData?.role === 'admin'

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
      console.error(error)
      const apiError = handleFailedMessage('auth', error.response.data.message)
      throw { apiError }
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
      setUserData(user)
      localStorage.setItem('@foodexplorer:user', JSON.stringify(user))
    } catch (error) {
      console.error(error)
      const apiError = handleFailedMessage('auth', error.response.data.message)
      throw { apiError }
    }
  }

  function signOut() {
    setUserData(null)
    localStorage.removeItem('@foodexplorer:user')
  }

  useEffect(() => {
    const userStorage = localStorage.getItem('@foodexplorer:user')

    async function validateUser() {
      const response = await api
        .get('users/validate', { withCredentials: true })
        .catch(error => error.response?.status === 401 && signOut())

      const { user } = response.data

      setUserData(user)
      localStorage.setItem('@foodexplorer:user', JSON.stringify(user))
    }

    userStorage && validateUser()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        userData,
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
