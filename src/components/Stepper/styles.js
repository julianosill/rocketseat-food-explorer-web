import styled from 'styled-components'
import { FONT_STYLES } from '../../styles/fontStyles'
import { BREAKPOINTS } from '../../styles/breakpoints'

export const Container = styled.div`
  ${FONT_STYLES.robotoBigBold}
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  display: flex;
  align-items: center;
  gap: 1.4rem;

  > button {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    &:hover {
      filter: brightness(0.85);
    }

    &:disabled {
      opacity: 0.25;
    }

    svg {
      font-size: 2.4rem;
    }
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
    font-size: 2.2rem;
    > button {
      svg {
        font-size: 2.6rem;
      }
    }
  }
`
