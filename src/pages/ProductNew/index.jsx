import { BackButton } from '../../components/BackButton'
import { PageTitle } from '../../components/PageTitle'
import { FormProduct } from '../../components/FormProduct'
import * as S from './styles'

export function ProductNew() {
  return (
    <>
      <S.Header>
        <BackButton size="sm" />
        <PageTitle>Adicionar produto</PageTitle>
      </S.Header>
      <FormProduct />
    </>
  )
}
