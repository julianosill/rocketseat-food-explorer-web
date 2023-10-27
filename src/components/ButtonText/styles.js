import styled from 'styled-components'
import { fontStyles } from '../../styles/global'

export const Container = styled.button`
  ${fontStyles.poppins100Medium}

  background: none;
  border: none;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  text-align: center;

  transition: filter 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
    filter: brightness(0.85);
  }

  &:focus {
    border-radius: 0.5rem;
    padding: 0 0.5rem;
    outline-color: ${({ theme }) => theme.COLORS.CAKE_200};
    outline-width: 1px;
    outline-style: solid;
  }
`
