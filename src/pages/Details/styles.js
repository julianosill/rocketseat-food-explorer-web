import styled from 'styled-components'
import { FONT_STYLES } from '../../styles/fontStyles'
import { BREAKPOINTS } from '../../styles/breakpoints'

export const Container = styled.div`
  @media (max-width: ${BREAKPOINTS.SM}) {
    padding: 1.5rem 2.8rem 0;
  }
`

export const BackButton = styled.button`
  ${FONT_STYLES.poppins300Bold}

  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  display: flex;
  align-items: center;

  > svg {
    font-size: 3.2rem;
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
    ${FONT_STYLES.poppins300Medium}
  }
`
