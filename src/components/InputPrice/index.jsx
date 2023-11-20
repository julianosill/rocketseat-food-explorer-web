import PropTypes from 'prop-types'
import MaskedInput from 'react-text-mask'
import { createNumberMask } from 'text-mask-addons'

import { Label } from '../Label'
import * as S from './styles'

export function InputPrice({ label, ...props }) {
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

  if (!label) {
    return (
      <MaskedInput
        type="text"
        mask={currencyMask}
        inputMode="numeric"
        {...props}
      />
    )
  }

  return (
    <S.Container>
      <Label htmlFor={props.id}>{label}</Label>
      <MaskedInput
        type="text"
        mask={currencyMask}
        inputMode="numeric"
        {...props}
      />
    </S.Container>
  )
}

InputPrice.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
}
