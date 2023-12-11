import PropTypes from 'prop-types'

import * as S from './styles'

export function FormForm({ children, ...props }) {
  return <S.Form {...props}>{children}</S.Form>
}

FormForm.propTypes = {
  children: PropTypes.node.isRequired,
}
