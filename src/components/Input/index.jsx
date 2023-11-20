import PropTypes from 'prop-types'

import { Label } from '../Label'
import * as S from './styles'

export function Input({ label, icon: Icon, ...props }) {
  return (
    <>
      {label && <Label htmlFor={props.id}>{label}</Label>}
      <S.Container>
        {Icon && (
          <S.Icon htmlFor={props.id}>
            <Icon />
          </S.Icon>
        )}
        <S.Input $hasIcon={Icon} {...props} />
      </S.Container>
    </>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.func,
  id: PropTypes.string,
}
