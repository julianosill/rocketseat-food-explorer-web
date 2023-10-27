import styled from 'styled-components'
import { fontStyles } from '../../styles/global'
import { BREAKPOINTS } from '../../styles/breakpoints'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${BREAKPOINTS.SM}) {
    align-items: start;
  }
`

export const Main = styled.main`
  width: 100%;
  max-width: ${BREAKPOINTS.XL};
  padding: 5rem 12.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5rem;

  @media (max-width: ${BREAKPOINTS.MD}) {
    max-width: 58rem;
    padding: 5rem;
    flex-direction: column;
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
    align-items: start;
    padding: 15rem 5rem 5rem;
  }
`

export const Logo = styled.div`
  flex: 1;

  > img {
    width: 100%;
    max-width: 32rem;

    @media (max-width: ${BREAKPOINTS.MD}) {
      max-width: 28rem;
    }
  }
`

export const Card = styled.div`
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
    background: none;
    padding: 0;
  }
`

export const Title = styled.h1`
  ${fontStyles.poppins400Medium}
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

  > button {
    border-radius: 0.5rem;
  }
`

export const Input = styled.div`
  > label {
    display: block;
    margin-bottom: 0.8rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  > input {
    @media (min-width: ${BREAKPOINTS.MIN_SM}) {
      background: none;
      border-color: ${({ theme }) => theme.COLORS.LIGHT_100};
      border-radius: 0.5rem;
      border-style: solid;
      border-width: 1px;
    }
  }
`
