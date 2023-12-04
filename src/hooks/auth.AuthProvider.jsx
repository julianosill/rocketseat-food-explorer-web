import PropTypes from 'prop-types'

import { createContext, useEffect, useState } from 'react'

import { api } from '../services/api'

export const AuthContext = createContext({})

export function AuthProvider({ children }) {
  const [loadingAuth, setLoadingAuth] = useState(false)
  const [inputError, setInputError] = useState(null)
  const [formError, setFormError] = useState(null)

  const [userData, setUserData] = useState(null)
  const isAdmin = userData?.role === 'admin'

  async function signIn({ email, password }) {
    setFormError(null)
    setInputError(null)

    if (!email) {
      return setInputError({ email: 'Insira seu e-mail.' })
    }

    if (password.length < 6) {
      return setInputError({ password: 'Senha informada é muito curta.' })
    }

    try {
      setLoadingAuth(true)
      const response = await api.post(
        '/sessions',
        { email, password },
        { withCredentials: true }
      )

      const user = response.data
      setUserData(user)
      localStorage.setItem('@foodexplorer:user', JSON.stringify(user))
    } catch (error) {
      console.log(error)

      const loginFailedMessage = error.response.data.message
      setFormError(
        loginFailedMessage
          ? loginFailedMessage
          : 'Algo deu errado. Por favor, entre em contato nossa equipe de suporte.'
      )
    } finally {
      setLoadingAuth(false)
    }
  }

  function signOut() {
    localStorage.removeItem('@foodexplorer:user')
    setUserData(null)
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
        signIn,
        signOut,
        loadingAuth,
        inputError,
        formError,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
