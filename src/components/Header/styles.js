import styled from 'styled-components'
import { fontStyles } from '../../styles/global'
import { BREAKPOINTS } from '../../styles/breakpoints'

export const Header = styled.header`
  position: fixed;
  z-index: 99;

  width: 100%;
  padding: 2.4rem 0;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  @media (max-width: ${BREAKPOINTS.SM}) {
    padding: 5.6rem 0 2.4rem;
  }

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 3.2rem;

    @media (max-width: ${BREAKPOINTS.MD}) {
      gap: 1.6rem;
    }
  }
`

export const MenuButton = styled.button`
  display: none;
  border-radius: 0.5rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-size: 2.4rem;

  @media (max-width: ${BREAKPOINTS.SM}) {
    display: flex;
  }
`

export const Logo = styled.img`
  width: 100%;
  max-width: 18rem;
`

export const Search = styled.div`
  position: relative;
  flex: 1;

  > input {
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    border: none;
    border-radius: 0.5rem;

    padding: 0 1.4rem 0 5rem;
    width: 100%;
    height: 4.8rem;
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
    display: none;
  }
`

export const Label = styled.label`
  height: 100%;
  padding: 1.4rem;

  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;

  > svg {
    font-size: 2.4rem;
  }
`

export const Order = styled.button`
  position: relative;
  min-width: 21.5rem;
  height: 4.8rem;
  padding: 0 3.2rem;

  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  gap: 0.8rem;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.TOMATO_200};
  }

  > svg {
    font-size: 2.5rem;
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
    min-width: fit-content;
    height: fit-content;
    padding: 0;
    background: none;

    &:hover {
      background: none;
    }

    > svg {
      font-size: 3.2rem;
    }

    > span {
      display: none;
    }
  }
`

export const Badge = styled.div`
  ${fontStyles.poppins100Medium}
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;

  width: 2rem;
  height: 2rem;
  border-radius: 50%;

  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: ${BREAKPOINTS.MIN_SM}) {
    display: none;
  }
`

export const Logout = styled.button`
  background: none;
  border: none;
  border-radius: 0.5rem;

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
