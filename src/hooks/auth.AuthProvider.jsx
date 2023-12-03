import PropTypes from 'prop-types'

import { createContext, useEffect, useState } from 'react'

import { api } from '../services/api'

export const AuthContext = createContext({})

export function AuthProvider({ children }) {
  const [loadingAuth, setLoadingAuth] = useState(false)
  const [inputError, setInputError] = useState(null)
  const [formError, setFormError] = useState(null)

  const [userData, setUserData] = useState(null)
  const [isAdmin, setIsAdmin] = useState(false)

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
      const response = await api.post('/sessions', { email, password })
      const { user, token } = response.data

      setUserData(user)
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      localStorage.setItem('@foodexplorer:user', JSON.stringify(user))
      localStorage.setItem('@foodexplorer:token', token)
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
    localStorage.removeItem('@foodexplorer:token')
    setUserData(null)
  }

  useEffect(() => {
    const user = localStorage.getItem('@foodexplorer:user')
    const token = localStorage.getItem('@foodexplorer:token')
    if (user && token) {
      setUserData(JSON.parse(user))
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
    }
  }, [])

  useEffect(() => {
    userData?.role === 'admin' ? setIsAdmin(true) : setIsAdmin(false)
  }, [userData])

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
