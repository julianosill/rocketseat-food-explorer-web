import PropTypes from 'prop-types'
import React from 'react'

import * as S from './styles'

function ForwardRef(
  { children, variant, icon: Icon, error, ...props },
  forwardedRef
) {
  return (
    <>
      <S.Content $icon={Icon} $variant={variant} $error={error}>
        {Icon && (
          <S.Icon htmlFor={props.id}>
            <Icon />
          </S.Icon>
        )}
        <input ref={forwardedRef} {...props} />
        {children}
      </S.Content>
      {error && <S.Error>{error}</S.Error>}
    </>
  )
}

export const InputContent = React.forwardRef(ForwardRef)

ForwardRef.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['outline']),
  icon: PropTypes.func,
  error: PropTypes.string,
  id: PropTypes.string,
}
