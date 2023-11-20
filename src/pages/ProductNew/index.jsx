import { useNavigate } from 'react-router-dom'

import { HiOutlineChevronLeft } from 'react-icons/hi'

import { PageTitle } from '../../components/PageTitle'
import { FormProduct } from '../../components/FormProduct'
import * as S from './styles'

export function ProductNew() {
  const navigate = useNavigate()

  return (
    <>
      <S.BackButton onClick={() => navigate(-1)}>
        <HiOutlineChevronLeft /> voltar
      </S.BackButton>
      <S.Header>
        <PageTitle text="Adicionar produto" />
      </S.Header>
      <FormProduct />
    </>
  )
}
