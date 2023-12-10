import styled from 'styled-components'
import { FONT_STYLES } from '../../styles/fontStyles'
import { BREAKPOINTS } from '../../styles/breakpoints'

export const Container = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  gap: ${({ $place }) => {
    if ($place === 'auth-page') return '2rem'
    return '1rem'
  }};

  svg {
    width: auto;
    height: ${({ $place }) => {
      if ($place === 'auth-page') return '4.7rem'
      return '3rem'
    }};

    color: ${({ theme, $place }) => {
      if ($place === 'footer') return theme.COLORS.LIGHT_700
      return theme.COLORS.CAKE_100
    }};
  }

  div {
    ${({ $place }) => {
      if ($place === 'auth-page') return FONT_STYLES.robotoGiantBold
      return FONT_STYLES.robotoBiggerBold
    }};

    color: ${({ theme, $place }) => {
      if ($place === 'footer') return theme.COLORS.LIGHT_700
      return theme.COLORS.LIGHT_100
    }};
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
    gap: ${({ $place }) => {
      if ($place === 'auth-page') return '1.2rem'
      if ($place === 'header') return '0.8rem'
      return '0.6rem'
    }};

    svg {
      height: ${({ $place }) => {
        if ($place === 'auth-page') return '4.3rem'
        if ($place === 'header') return '2.4rem'
        return '1.8rem'
      }};
    }

    div {
      font-size: ${({ $place }) => {
        if ($place === 'auth-page') return '3.7rem'
        if ($place === 'header') return '2.1rem'
        return '1.5rem'
      }};
    }
  }

  @media (max-width: ${BREAKPOINTS.XS}) {
    svg {
      height: ${({ $place }) => $place === 'auth-page' && '3rem'};
    }
    div {
      font-size: ${({ $place }) => $place === 'auth-page' && '2.8rem'};
    }
  }
`

export const Admin = styled.span`
  ${FONT_STYLES.robotoSmallestRegular}

  position: absolute;
  right: 0;
  bottom: -1.3rem;

  color: ${({ theme }) => theme.COLORS.CAKE_200};

  @media (min-width: ${BREAKPOINTS.MIN_XS}) and (max-width: ${BREAKPOINTS.SM}) {
    position: relative;
    bottom: -0.1rem;
  }

  @media (max-width: ${BREAKPOINTS.XS}) {
    bottom: -1.4rem;
    font-size: 1.1rem;
  }
`
