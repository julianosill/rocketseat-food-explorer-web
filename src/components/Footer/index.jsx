import { Container } from '../Container'
import { Logo } from '../Logo'
import * as S from './styles'

export function Footer() {
  return (
    <S.Footer>
      <Container>
        <S.Brand>
          <Logo footer />
        </S.Brand>
        <S.Copyright>© 2023 - Todos os direitos reservados</S.Copyright>
      </Container>
    </S.Footer>
  )
}
