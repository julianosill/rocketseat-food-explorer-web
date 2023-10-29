import styled from 'styled-components'
import { BREAKPOINTS } from '../../styles/breakpoints'

export const Container = styled.main`
  width: 100%;
  max-width: ${BREAKPOINTS.XL};
  margin: 0 auto;
  padding: 12.5rem 12.3rem 2.8rem;

  @media (max-width: ${BREAKPOINTS.MD}) {
    padding: 12.5rem 2.8rem 2.8rem;
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
    padding: 15rem 2.8rem 2.8rem;
  }
`
