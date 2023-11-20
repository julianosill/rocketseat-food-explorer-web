import PropTypes from 'prop-types'

import { Label } from '../Label'
import * as S from './styles'

export function Input({ label, labelSrOnly, icon: Icon, ...props }) {
  return (
    <>
      {labelSrOnly && (
        <label htmlFor={props.id} className="sr-only">
          {labelSrOnly}
        </label>
      )}
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
  labelSrOnly: PropTypes.string,
  icon: PropTypes.func,
  id: PropTypes.string,
}
