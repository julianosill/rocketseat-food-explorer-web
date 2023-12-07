import styled from 'styled-components'
import { BREAKPOINTS } from '../../styles/breakpoints'

export const Main = styled.main`
  width: 100%;
  max-width: ${BREAKPOINTS.XL};
  min-height: 100svh;
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5rem;

  @media (max-width: ${BREAKPOINTS.MD}) {
    max-width: 58rem;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
    padding: 15rem 0;
    justify-content: start;
    align-items: start;

    input {
      background-color: ${({ theme }) => theme.COLORS.DARK_900};
      border-color: transparent;
    }
  }
`
