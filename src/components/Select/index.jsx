import PropTypes from 'prop-types'

import { FiChevronDown } from 'react-icons/fi'

import { Label } from '../Label'
import * as S from './styles'

export function Select({ label, options, ...props }) {
  return (
    <>
      <Label htmlFor={props.id}>{label}</Label>
      <S.Container>
        <S.Select {...props}>
          <option value="">Selecione a categoria</option>
          {options.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </S.Select>
        <FiChevronDown />
      </S.Container>
    </>
  )
}

Select.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  options: PropTypes.array.isRequired,
}
