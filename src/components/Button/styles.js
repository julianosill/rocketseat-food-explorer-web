import styled from 'styled-components'
import { fontStyles } from '../../styles/global'

export const Container = styled.button`
  ${fontStyles.poppins100Medium}
  padding: 2.4rem;

  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  border: none;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  width: ${props => props.$width};
  height: 4.8rem;

  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.TOMATO_200};
  }

  &:focus {
    outline-color: ${({ theme }) => theme.COLORS.CAKE_200};
    outline-width: 1px;
    outline-style: solid;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
  }

  &:disabled:hover {
    background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
    cursor: default;
    outline: none;
  }
`
