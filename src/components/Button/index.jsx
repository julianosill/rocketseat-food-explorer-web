import PropTypes from 'prop-types'

import * as S from './styles'

export function Button({
  icon: Icon,
  text,
  variant,
  loading,
  children,
  ...props
}) {
  return (
    <S.Container $variant={variant} $loading={loading} {...props}>
      {Icon && <Icon />}
      {text}
      {children}
    </S.Container>
  )
}

Button.propTypes = {
  icon: PropTypes.func,
  text: PropTypes.string,
  variant: PropTypes.oneOf(['secondary']),
  loading: PropTypes.bool,
  children: PropTypes.node,
}
