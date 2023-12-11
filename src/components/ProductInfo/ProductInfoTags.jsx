import { useNavigate } from 'react-router-dom'

import { useProductInfoContext } from './ProductInfoContext'

import * as S from './styles'

export function ProductInfoTags() {
  const { product } = useProductInfoContext()
  const navigate = useNavigate()

  return (
    <S.Tags>
      {product.ingredients.map(tag => (
        <li key={tag}>
          <button onClick={() => navigate(`/produtos?pesquisa=${tag}`)}>
            {tag}
          </button>
        </li>
      ))}
    </S.Tags>
  )
}
