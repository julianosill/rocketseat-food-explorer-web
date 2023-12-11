import styled from 'styled-components'
import { FONT_STYLES } from '../../styles/fontStyles'
import { BREAKPOINTS } from '../../styles/breakpoints'

export const Container = styled.div`
  width: 100%;
  max-width: 48rem;
  padding: 6.4rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  border-radius: 1.6rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;

  @media (max-width: ${BREAKPOINTS.SM}) {
    max-width: 100%;
    padding: 0;
    background: none;
  }
`

export const Title = styled.h2`
  ${FONT_STYLES.poppins400Medium}

  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  @media (max-width: ${BREAKPOINTS.SM}) {
    display: none;
  }
`

export const Form = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`

export const Error = styled.div`
  ${FONT_STYLES.robotoSmallerRegular}

  width: 100%;
  padding: 0.8rem;
  text-align: center;

  color: ${({ theme }) => theme.COLORS.TOMATO_400};

  border-color: ${({ theme }) => theme.COLORS.TOMATO_400};
  border-style: solid;
  border-width: 1px;
  border-radius: 0.8rem;
`
