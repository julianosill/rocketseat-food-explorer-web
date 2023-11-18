import styled from 'styled-components'
import { FONT_STYLES } from '../../styles/fontStyles'

export const Container = styled.div`
  position: relative;
  width: 100%;

  label {
    ${FONT_STYLES.poppins100Medium}

    padding: ${({ $image }) => ($image ? '0.8rem 3.2rem' : '1.2rem 3.2rem')};

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    border-radius: 0.8rem;

    display: flex;
    align-items: center;
    gap: 0.8rem;

    &.has-focus {
      border-color: ${({ theme }) => theme.COLORS.CAKE_200};
      outline-color: ${({ theme }) => theme.COLORS.CAKE_200};
      outline-width: 1px;
      outline-style: solid;
    }

    > img {
      height: 3.2rem;
    }

    > svg {
      font-size: 2.4rem;
    }
  }

  input {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    opacity: 0;

    cursor: pointer;
  }
`
