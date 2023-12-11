import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

import { useAuth } from '../../hooks/auth.useAuth'

import { Container } from '../../components/Container'
import { Logo } from '../../components/Logo'
import { FormCard } from '../../components/FormCard'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import * as S from './styles'

export function SignIn() {
  const { signIn } = useAuth()
  const navigate = useNavigate()

  const [loadingAuth, setLoadingAuth] = useState(false)
  const [error, setError] = useState(null)

  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  async function handleSubmit(e) {
    e.preventDefault()

    setLoadingAuth(true)
    setError(null)

    await signIn({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    })
      .catch(error => {
        console.error(error)
        setError(error)
        error.email && emailRef.current.focus()
        error.password && passwordRef.current.focus()
      })
      .finally(() => setLoadingAuth(false))
  }

  return (
    <Container>
      <S.Main>
        <Logo place="auth-page" />

        <FormCard.Root>
          <FormCard.Title text="Faça login" />
          <FormCard.Form onSubmit={handleSubmit}>
            <Input.Root>
              <Input.Label text="Email" htmlFor="email" />
              <Input.Content
                ref={emailRef}
                variant="outline"
                id="email"
                type="email"
                placeholder="Exemplo: exemplo@exemplo.com.br"
                error={error?.email}
              />
            </Input.Root>

            <Input.Root>
              <Input.Label text="Senha" htmlFor="password" />
              <Input.Content
                ref={passwordRef}
                variant="outline"
                id="password"
                type="password"
                placeholder="No mínimo 6 caracteres"
                error={error?.password}
              />
            </Input.Root>
            <Button
              type="submit"
              icon={loadingAuth ? AiOutlineLoading3Quarters : null}
              text={loadingAuth ? 'Autenticando...' : 'Entrar'}
              disabled={loadingAuth}
              loading={loadingAuth}
            />
          </FormCard.Form>
          {error?.apiError && <FormCard.Error text={error.apiError} />}
          <ButtonText
            text="Criar uma conta"
            onClick={() => navigate('/registrar')}
          />
        </FormCard.Root>
      </S.Main>
    </Container>
  )
}
