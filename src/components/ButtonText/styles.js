import styled from 'styled-components'
import { fontStyles } from '../../styles/global'

export const Container = styled.button`
  ${fontStyles.poppins100Medium}

  background: none;
  border: none;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  &:hover {
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
    filter: brightness(0.85);
  }
`
