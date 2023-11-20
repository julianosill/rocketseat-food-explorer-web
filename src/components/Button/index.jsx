import PropTypes from 'prop-types'

import * as S from './styles'

export function Button({
  icon: Icon,
  text,
  variant,
  loading,
  children,
  ...rest
}) {
  return (
    <S.Container $variant={variant} $loading={loading} {...rest}>
      {Icon && <Icon />}
      {text}
      {children && children}
    </S.Container>
  )
}

Button.propTypes = {
  icon: PropTypes.func,
  text: PropTypes.string,
  variant: PropTypes.string,
  loading: PropTypes.bool,
  children: PropTypes.node,
}
