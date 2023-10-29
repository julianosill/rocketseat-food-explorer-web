import logo from '../../assets/logo.svg'

import { Container } from '../Container'
import * as S from './styles'

export function Footer() {
  return (
    <S.Footer>
      <Container>
        <S.Logo src={logo} alt="Food Explorer" />
        <S.Copyright>© 2023 - Todos os direitos reservados</S.Copyright>
      </Container>
    </S.Footer>
  )
}
