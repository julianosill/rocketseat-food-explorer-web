import styled from 'styled-components'
import { FONT_STYLES } from '../../../styles/fontStyles'

export const Container = styled.div`
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.DARK_800};
  border-radius: 0.8rem;

  > label {
    ${FONT_STYLES.poppins100Medium}

    padding: ${({ $image }) => ($image ? '0.8rem 3.2rem' : '1.2rem 3.2rem')};

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    cursor: pointer;

    display: flex;
    align-items: center;
    gap: 0.8rem;

    > img {
      height: 3.2rem;
    }

    > svg {
      font-size: 2.4rem;
    }
  }

  > input {
    position: absolute;
    opacity: 0;
  }
`
