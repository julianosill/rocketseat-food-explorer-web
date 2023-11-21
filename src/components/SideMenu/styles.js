import styled from 'styled-components'
import { FONT_STYLES } from '../../styles/fontStyles'

export const Wrapper = styled.aside`
  position: fixed;
  z-index: 999;

  top: 0;
  left: 0;
  opacity: 0.5;
  transform: translateX(-100%);

  width: 100%;
  min-height: 100vh;
  min-height: 100svh;

  background-color: ${({ theme }) => theme.COLORS.DARK_400};

  transition: all 0.2s ease;

  &[data-menu-is-open='true'] {
    opacity: 1;
    transform: translateX(0);
  }
`

export const Header = styled.header`
  padding: 5.6rem 0 2.4rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
`

export const CloseMenu = styled.button`
  ${FONT_STYLES.robotoBigRegular}

  height: 3.2rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  display: flex;
  align-items: center;
  gap: 1.6rem;

  > svg {
    font-size: 2rem;
  }
`

export const Search = styled.div`
  margin: 3.6rem 0;

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
  }
`
