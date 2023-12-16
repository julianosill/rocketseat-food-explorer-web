import { BackButton } from '../../components/BackButton'
import { PageTitle } from '../../components/PageTitle'
import { FormProduct } from '../../components/FormProduct'
import * as S from './styles'

export function ProductNew() {
  return (
    <S.Container>
      <BackButton size="sm" />
      <S.Header>
        <PageTitle>Adicionar produto</PageTitle>
      </S.Header>
      <FormProduct />
    </S.Container>
  )
}
