import styled from 'styled-components'
import { FONT_STYLES } from '../../../styles/fontStyles'

export const Container = styled.div`
  position: relative;

  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.DARK_800};
  border-radius: 0.8rem;

  display: flex;
  align-items: center;

  > svg {
    position: absolute;
    right: 1.4rem;

    font-size: 2.8rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }
`

export const Select = styled.select`
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  -ms-appearance: none;

  ${FONT_STYLES.robotoSmallRegular}

  width: 100%;
  padding: 1.2rem 1.4rem;
  line-height: 1.5;

  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  background: none;
  border: none;
  border-radius: 0.8rem;

  &:focus {
    border-color: ${({ theme }) => theme.COLORS.CAKE_200};
    outline-color: ${({ theme }) => theme.COLORS.CAKE_200};
    outline-width: 1px;
    outline-style: solid;
  }
`
