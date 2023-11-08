import styled from 'styled-components'
import { FONT_STYLES } from '../../styles/fontStyles'
import { BREAKPOINTS } from '../../styles/breakpoints'

export const Container = styled.h2`
  ${FONT_STYLES.poppins400Medium}
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  @media (max-width: ${BREAKPOINTS.XS}) {
    font-size: 2.4rem;
  }
`
