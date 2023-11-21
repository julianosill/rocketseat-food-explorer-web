import styled from 'styled-components'
import { FONT_STYLES } from '../../styles/fontStyles'
import { BREAKPOINTS } from '../../styles/breakpoints'

export const Header = styled.header`
  position: fixed;
  z-index: 99;

  width: 100%;
  padding: 2.4rem 0;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 3.2rem;
  }

  @media (min-width: ${BREAKPOINTS.MIN_SM}) and (max-width: ${BREAKPOINTS.MD}) {
    > div {
      flex-wrap: wrap;
      gap: 1.6rem;
    }
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
    padding: 5.6rem 0 2.4rem;
  }
`

export const MenuButton = styled.button`
  display: none;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-size: 2.4rem;

  @media (max-width: ${BREAKPOINTS.SM}) {
    display: flex;
  }
`

export const Brand = styled.div`
  display: flex;
  align-items: center;

  @media (min-width: ${BREAKPOINTS.MIN_SM}) and (max-width: ${BREAKPOINTS.MD}) {
    flex: 1;
  }
`

export const Search = styled.div`
  flex: 1;

  input {
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
  }

  @media (min-width: ${BREAKPOINTS.MIN_SM}) and (max-width: ${BREAKPOINTS.MD}) {
    flex: auto;
    order: 1;
    width: 100%;
  }
`

export const TextButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 3.2rem;

  button {
    ${FONT_STYLES.robotoSmallRegular}
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    &:hover {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }

  @media (min-width: ${BREAKPOINTS.MIN_MD}) and (max-width: ${BREAKPOINTS.XL}) {
    &[data-hide='true'] {
      display: none;
    }
  }

  @media (max-width: ${BREAKPOINTS.MD}) {
    gap: 1.6rem;
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
    display: none;
  }
`

export const Order = styled.div`
  position: relative;

  button {
    padding: 1.2rem 3.2rem;

    svg {
      font-size: 3.2rem;
    }
  }

  @media (max-width: ${BREAKPOINTS.MD}) {
    button {
      padding: 0.8rem 2.4rem;

      svg {
        font-size: 2.8rem;
      }
    }
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
    button {
      padding: 0;
      background: none;

      &:hover {
        background: none;
      }

      svg {
        font-size: 3.2rem;
      }
    }
  }
`

export const Badge = styled.div`
  ${FONT_STYLES.poppins100Medium}

  position: absolute;
  top: -0.5rem;
  right: -0.5rem;

  width: 2rem;
  height: 2rem;
  border-radius: 50%;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};

  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: ${BREAKPOINTS.MIN_SM}) {
    display: none;
  }
`

export const Logout = styled.button`
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  > svg {
    font-size: 2.5rem;
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
    display: none;
  }
`
