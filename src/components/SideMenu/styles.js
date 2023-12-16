import styled from 'styled-components'
import { FONT_STYLES } from '../../styles/fontStyles'
import { BREAKPOINTS } from '../../styles/breakpoints'

export const Wrapper = styled.aside`
  position: absolute;
  z-index: 999;
  top: 0;
  left: 0;
  opacity: 0.5;
  transform: translateX(-100%);

  width: 100%;
  min-height: 100vh;
  min-height: 100svh;

  background-color: ${({ theme }) => theme.COLORS.DARK_400};

  display: flex;
  flex-direction: column;

  transition: all 0.2s ease;

  @media (max-width: ${BREAKPOINTS.SM}) {
    &[data-menu-is-open='true'] {
      opacity: 1;
      transform: translateX(0);
    }
  }
`

export const Header = styled.header`
  padding: 5.6rem 0 2.4rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
`

export const CloseMenu = styled.button`
  ${FONT_STYLES.robotoBigRegular}

  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  display: flex;
  align-items: center;
  gap: 1.6rem;

  > svg {
    font-size: 2rem;
  }
`

export const Content = styled.div`
  flex: 1;
  padding: 3.6rem 0;

  > div {
    display: flex;
    flex-direction: column;
    gap: 3.6rem;
  }

  input {
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
  }
`

export const Menu = styled.div`
  display: flex;
  flex-direction: column;

  button {
    ${FONT_STYLES.poppins300Light}
    width: 100%;
    padding: 1rem;
    text-align: left;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};

    opacity: 0.5;
    transform: translateX(-20%);
    transition-duration: 0.4s;
    transition-property: all;
    transition-timing-function: ease;

    &:nth-child(2) {
      transition-duration: 0.6s;
    }

    &:nth-child(3) {
      transition-duration: 0.8s;
    }

    [data-menu-is-open='true'] & {
      opacity: 1;
      transform: translateX(0);
    }
  }
`
