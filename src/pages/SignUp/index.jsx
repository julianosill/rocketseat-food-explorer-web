import { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

import { useAuth } from '../../hooks/auth.useAuth'

import { Container } from '../../components/Container'
import { Logo } from '../../components/Logo'
import { FormCard } from '../../components/FormCard'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import * as S from './styles'

export function SignUp() {
  const { signUp, signIn } = useAuth()
  const navigate = useNavigate()

  const [loadingAuth, setLoadingAuth] = useState(false)
  const [error, setError] = useState(null)

  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  async function handleSubmit(e) {
    e.preventDefault()

    setLoadingAuth(true)
    setError(null)

    await signUp({
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    })
      .then(() => {
        toast.success(
          `Usuário "${nameRef.current.value}" cadastrado com sucesso.`
        )
        signIn({
          email: emailRef.current.value,
          password: passwordRef.current.value,
        })
      })
      .catch(error => {
        setError(error)
        error.email && emailRef.current.focus()
        error.password && passwordRef.current.focus()
      })
      .finally(() => setLoadingAuth(false))
  }

  return (
    <Container>
      <S.Main>
        <Link to="/">
          <Logo place="auth-page" />
        </Link>

        <FormCard.Root>
          <FormCard.Title text="Crie sua conta" />
          <FormCard.Form onSubmit={handleSubmit}>
            <Input.Root>
              <Input.Label text="Seu nome" htmlFor="name" />
              <Input.Content
                ref={nameRef}
                id="name"
                type="text"
                placeholder="Exemplo: Maria da Silva"
                error={error?.name}
              />
            </Input.Root>
            <Input.Root>
              <Input.Label text="Email" htmlFor="email" />
              <Input.Content
                ref={emailRef}
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
                id="password"
                type="password"
                placeholder="No mínimo 6 caracteres"
                error={error?.password}
              />
            </Input.Root>
            <Button
              type="submit"
              icon={loadingAuth ? AiOutlineLoading3Quarters : null}
              text={loadingAuth ? 'Registrando...' : 'Criar conta'}
              disabled={loadingAuth}
              loading={loadingAuth}
            />
          </FormCard.Form>
          {error?.apiError && <FormCard.Error text={error.apiError} />}
          <ButtonText text="Já tenho uma conta" onClick={() => navigate('/')} />
        </FormCard.Root>
      </S.Main>
    </Container>
  )
}
