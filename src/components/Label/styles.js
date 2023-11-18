import styled from 'styled-components'
import { FONT_STYLES } from '../../styles/fontStyles'

export const Container = styled.label`
  ${FONT_STYLES.robotoSmallRegular}
  display: block;
  width: 100%;
  margin-bottom: 1.6rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  cursor: pointer;
`
