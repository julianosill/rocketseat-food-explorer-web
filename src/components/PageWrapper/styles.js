import styled from 'styled-components'
import { BREAKPOINTS } from '../../styles/breakpoints'

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  height: 100svh;

  display: flex;
  flex-direction: column;
`

export const Content = styled.div`
  flex: 1;
  width: 100%;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  gap: 3.4rem;

  @media (max-width: ${BREAKPOINTS.SM}) {
    gap: 5.6rem;
  }
`

export const Main = styled.main`
  width: 100%;
  flex: 1;
`
