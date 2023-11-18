import PropTypes from 'prop-types'

import { Label } from '../Label'
import * as S from './styles'

export function Textarea({ label, ...props }) {
  if (!label) {
    return <S.Textarea {...props} />
  }

  return (
    <S.Container>
      <Label htmlFor={props.id}>{label}</Label>
      <S.Textarea {...props} />
    </S.Container>
  )
}

Textarea.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
}
