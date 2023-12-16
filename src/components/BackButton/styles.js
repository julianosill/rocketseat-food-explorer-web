import styled from 'styled-components'
import { FONT_STYLES } from '../../styles/fontStyles'
import { BREAKPOINTS } from '../../styles/breakpoints'

export const Button = styled.button`
  ${FONT_STYLES.poppins300Bold}

  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  display: flex;
  align-items: center;

  > svg {
    font-size: 3.2rem;
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
    ${FONT_STYLES.poppins300Medium}

    font-size: ${({ size }) => (size === 'sm' ? '1.6rem' : null)};

    > svg {
      font-size: ${({ size }) => (size === 'sm' ? '2.2rem' : null)};
    }
  }
`
