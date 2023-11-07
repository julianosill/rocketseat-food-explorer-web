import styled from 'styled-components'
import { BREAKPOINTS } from '../../styles/breakpoints'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  min-height: 100svh;

  display: flex;
  flex-direction: column;

  > main {
    flex: 1;
  }
`

export const Main = styled.main`
  width: 100%;
  padding: 12.5rem 0 4.8rem;

  @media (max-width: ${BREAKPOINTS.MD}) {
    padding: 12.5rem 0 4.8rem;
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
    padding: 13rem 0 4.8rem;
  }
`
