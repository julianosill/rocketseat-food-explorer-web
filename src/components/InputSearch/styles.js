import styled from 'styled-components'
import { FONT_STYLES } from '../../styles/fontStyles'

export const Form = styled.form`
  position: relative;
  width: 100%;

  display: flex;
  align-items: center;
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
  padding: 1.2rem 4.8rem;
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

export const Button = styled.button`
  position: absolute;
  right: 0.8rem;

  font-size: 2.8rem;
  padding: 0.2rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  border-radius: 0.4rem;

  display: flex;

  transition: all 0.2s ease;

  &:hover {
    padding: 0.2rem 0.6rem;
    background-color: ${({ theme }) => theme.COLORS.TOMATO_200};
  }
`
