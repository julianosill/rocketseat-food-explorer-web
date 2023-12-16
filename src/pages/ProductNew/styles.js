import styled from 'styled-components'
import { BREAKPOINTS } from '../../styles/breakpoints'

export const Container = styled.div`
  height: 100%;
  padding-top: 4rem;

  @media (max-width: ${BREAKPOINTS.SM}) {
    padding-top: 1rem;
  }
`

export const Header = styled.header`
  margin: 2.4rem 0 3.2rem;
`
