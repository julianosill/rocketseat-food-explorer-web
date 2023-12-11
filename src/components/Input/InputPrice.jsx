import PropTypes from 'prop-types'
import React from 'react'
import MaskedInput from 'react-text-mask'
import { createNumberMask } from 'text-mask-addons'

import * as S from './styles'

function ForwardRef({ children, error, ...props }, forwardedRef) {
  const maskOptions = {
    prefix: 'R$ ',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: '.',
    allowDecimal: true,
    decimalSymbol: ',',
    decimalLimit: 2,
    integerLimit: 7,
    allowNegative: false,
    allowLeadingZeroes: false,
  }

  const currencyMask = createNumberMask(maskOptions)

  return (
    <>
      <S.Content $error={error}>
        <MaskedInput
          ref={forwardedRef}
          type="text"
          mask={currencyMask}
          inputMode="numeric"
          {...props}
        />
        {children}
      </S.Content>
      {error && <S.Error>{error}</S.Error>}
    </>
  )
}

export const InputPrice = React.forwardRef(ForwardRef)

ForwardRef.propTypes = {
  children: PropTypes.node,
  error: PropTypes.string,
  id: PropTypes.string,
}
