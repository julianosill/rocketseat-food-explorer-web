import styled from 'styled-components'
import { fontStyles } from '../../styles/global'

export const Container = styled.button`
  ${fontStyles.poppins100Medium}
  padding: 1.2rem 2.4rem;

  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  border: none;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  gap: 0.8rem;

  width: ${props => props.$width};

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.TOMATO_200};
  }

  &:disabled,
  &:disabled:hover {
    background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
  }
`
