import styled from 'styled-components'
import { BREAKPOINTS } from '../../styles/breakpoints'

export const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  min-height: 100svh;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5rem;

  input {
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
  }

  @media (max-width: ${BREAKPOINTS.MD}) {
    max-width: 58rem;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
    padding: 16rem 0 5.6rem;
    justify-content: start;
    align-items: start;
  }
`
