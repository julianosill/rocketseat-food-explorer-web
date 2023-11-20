import styled from 'styled-components'
import { FONT_STYLES } from '../../styles/fontStyles'
import { BREAKPOINTS } from '../../styles/breakpoints'

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
    font-size: 1.6rem;

    > svg {
      font-size: 2.2rem;
    }
  }
`

export const Header = styled.header`
  margin: 2.4rem 0 3.2rem;
`
