import styled from 'styled-components'
import { fontStyles } from '../../styles/global'

export const Container = styled.div`
  ${fontStyles.robotoBigBold}
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  display: flex;
  align-items: center;
  gap: 1.4rem;

  > button {
    background: none;
    border: none;
    border-radius: 0.5rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    &:hover {
      filter: brightness(0.85);
    }

    svg {
      font-size: 2.4rem;
    }
  }
`
