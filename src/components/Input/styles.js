import styled from 'styled-components'
import { FONT_STYLES } from '../../styles/fontStyles'

export const Container = styled.div`
  position: relative;
  width: 100%;
`

export const Icon = styled.label`
  position: absolute;

  height: 100%;
  padding: 0 1.4rem;
  font-size: 2.4rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  cursor: pointer;

  display: flex;
  align-items: center;
`

export const Input = styled.input`
  ${FONT_STYLES.robotoSmallRegular}

  width: 100%;
  height: fit-content;
  padding: ${({ $hasIcon }) =>
    $hasIcon ? '1.2rem 1.4rem 1.2rem 4.8rem' : '1.2rem 1.4rem'};
  line-height: 1.5;

  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  background-color: ${({ theme }) => theme.COLORS.DARK_800};
  border: none;
  border-radius: 0.8rem;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }

  &:focus {
    border-color: ${({ theme }) => theme.COLORS.CAKE_200};
    outline-color: ${({ theme }) => theme.COLORS.CAKE_200};
    outline-width: 1px;
    outline-style: solid;
  }
`
