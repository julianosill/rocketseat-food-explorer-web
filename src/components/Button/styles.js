import styled from 'styled-components'
import { FONT_STYLES } from '../../styles/fontStyles'
import { ANIMATE } from '../../styles/animations'

export const Container = styled.button`
  ${FONT_STYLES.poppins100Medium}
  padding: 1.2rem 2.4rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background-color: ${({ theme, $variant }) => {
    if ($variant === 'secondary') return theme.COLORS.DARK_800
    return theme.COLORS.TOMATO_100
  }};
  border: none;
  border-radius: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme, $variant }) => {
      if ($variant === 'secondary') return theme.COLORS.DARK_1000
      return theme.COLORS.TOMATO_200
    }};
  }

  &:disabled,
  &:disabled:hover {
    background-color: ${({ theme, $variant }) => {
      if ($variant === 'secondary') return theme.COLORS.DARK_800
      return theme.COLORS.TOMATO_400
    }};
  }

  > svg {
    ${({ $loading }) => ($loading ? `${ANIMATE.spin}` : null)}
    font-size: 2rem;
  }
`
