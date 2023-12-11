import PropTypes from 'prop-types'
import React from 'react'

import { FiChevronDown } from 'react-icons/fi'

import * as S from './styles'

function ForwardRef(
  { children, status, statusIcon, size, error, ...props },
  forwardedRef
) {
  return (
    <>
      <S.Content $statusIcon={statusIcon} $size={size} $error={error}>
        {statusIcon && <S.StatusIcon htmlFor={props.id} $status={status} />}
        <select ref={forwardedRef} {...props}>
          {children}
        </select>
        <S.SelectArrow $variant={size}>
          <FiChevronDown />
        </S.SelectArrow>
      </S.Content>
      {error && <S.Error>{error}</S.Error>}
    </>
  )
}

export const InputSelect = React.forwardRef(ForwardRef)

ForwardRef.propTypes = {
  children: PropTypes.node.isRequired,
  status: PropTypes.string,
  statusIcon: PropTypes.bool,
  size: PropTypes.oneOf(['small']),
  error: PropTypes.string,
  id: PropTypes.string,
}
