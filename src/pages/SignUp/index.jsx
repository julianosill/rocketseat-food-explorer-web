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
  const [formError, setFormError] = useState(null)

  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  async function handleSubmit(e) {
    e.preventDefault()

    setLoadingAuth(true)
    setFormError(null)

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
        console.error(error)
        setFormError(error)
        error.email && emailRef.current.focus()
        error.password && passwordRef.current.focus()
      })
      .finally(() => setLoadingAuth(false))
  }

  return (
    <Container>
      <S.Main>
        <Link to="/">
          <Logo auth />
        </Link>

        <FormCard.Root>
          <FormCard.Title text="Crie sua conta" />
          <FormCard.Form>
            <FormCard.Item error={formError?.name}>
              <Input
                ref={nameRef}
                id="name"
                type="text"
                label="Seu nome"
                placeholder="Exemplo: Maria da Silva"
                error={formError?.name}
              />
            </FormCard.Item>
            <FormCard.Item error={formError?.email}>
              <Input
                ref={emailRef}
                id="email"
                type="email"
                label="Email"
                placeholder="Exemplo: exemplo@exemplo.com.br"
                error={formError?.email}
              />
            </FormCard.Item>
            <FormCard.Item error={formError?.password}>
              <Input
                ref={passwordRef}
                id="password"
                type="password"
                label="Senha"
                placeholder="No mínimo 6 caracteres"
                error={formError?.password}
              />
            </FormCard.Item>
            <Button
              type="submit"
              icon={loadingAuth ? AiOutlineLoading3Quarters : null}
              text={loadingAuth ? 'Registrando...' : 'Criar conta'}
              disabled={loadingAuth}
              loading={loadingAuth}
              onClick={handleSubmit}
            />
          </FormCard.Form>
          {formError?.apiError && <FormCard.Error text={formError.apiError} />}
          <ButtonText text="Já tenho uma conta" onClick={() => navigate('/')} />
        </FormCard.Root>
      </S.Main>
    </Container>
  )
}
