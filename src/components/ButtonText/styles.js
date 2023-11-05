import styled from 'styled-components'
import { FONT_STYLES } from '../../styles/fontStyles'

export const Container = styled.button`
  ${FONT_STYLES.poppins100Medium}
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  &:hover {
    filter: brightness(0.85);
  }
`
