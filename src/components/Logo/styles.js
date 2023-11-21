import styled from 'styled-components'
import { FONT_STYLES } from '../../styles/fontStyles'
import { BREAKPOINTS } from '../../styles/breakpoints'

export const Container = styled.div`
  position: relative;

  color: ${({ theme, $footer }) =>
    $footer ? theme.COLORS.LIGHT_700 : theme.COLORS.CAKE_100};

  display: flex;
  align-items: center;
  gap: 1rem;

  svg {
    width: 2.6rem;
    height: auto;
  }

  div {
    ${FONT_STYLES.robotoBiggerBold}

    color: ${({ theme, $footer }) =>
      $footer ? theme.COLORS.LIGHT_700 : theme.COLORS.LIGHT_100};
  }

  span {
    ${FONT_STYLES.robotoSmallestRegular}

    position: absolute;
    right: 0;
    bottom: -1.2rem;

    color: ${({ theme }) => theme.COLORS.CAKE_200};
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
    gap: ${({ $header }) => ($header ? '0.8rem' : '0.6rem')};

    svg {
      width: ${({ $header }) => ($header ? '2.4rem' : '1.8rem')};
    }

    div {
      font-size: ${({ $header }) => ($header ? '2.1rem' : '1.5rem')};
    }
  }

  @media (min-width: ${BREAKPOINTS.MIN_XS}) and (max-width: ${BREAKPOINTS.SM}) {
    span {
      position: ${({ $header }) => ($header ? 'relative' : null)};
      bottom: ${({ $header }) => ($header ? '-0.1rem' : null)};
    }
  }
`
