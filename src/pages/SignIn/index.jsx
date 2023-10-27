import logo from '../../assets/logo.svg'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import * as S from './styles'

export function SignIn() {
  return (
    <S.Container>
      <S.Main>
        <S.Logo>
          <img src={logo} alt="Food Explorer" />
        </S.Logo>
        <S.Card>
          <S.Title>Faça login</S.Title>
          <S.Form>
            <div>
              <S.Label htmlFor="email">Email</S.Label>
              <Input
                type="email"
                id="email"
                placeholder="Exemplo: exemplo@exemplo.com.br"
              />
            </div>
            <div>
              <S.Label htmlFor="password">Senha</S.Label>
              <Input
                type="password"
                id="password"
                placeholder="No mínimo 6 caracteres"
              />
            </div>
            <Button $width="100%" type="submit">
              Entrar
            </Button>
          </S.Form>
          <ButtonText>Criar uma conta</ButtonText>
        </S.Card>
      </S.Main>
    </S.Container>
  )
}
