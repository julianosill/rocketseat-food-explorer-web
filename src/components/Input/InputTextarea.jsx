import PropTypes from 'prop-types'
import React from 'react'

import * as S from './styles'

function ForwardRef({ children, error, ...props }, forwardedRef) {
  return (
    <>
      <S.Content $error={error}>
        <textarea ref={forwardedRef} {...props} />
        {children}
      </S.Content>
      {error && <S.Error>{error}</S.Error>}
    </>
  )
}

export const InputTextarea = React.forwardRef(ForwardRef)

ForwardRef.propTypes = {
  children: PropTypes.node,
  error: PropTypes.string,
  id: PropTypes.string,
}
