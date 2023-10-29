import styled from 'styled-components'
import { BREAKPOINTS } from '../../styles/breakpoints'

export const Container = styled.div`
  width: 100%;
  max-width: ${BREAKPOINTS.XL};
  margin: 0 auto;
  padding: 0 12.3rem;

  @media (max-width: ${BREAKPOINTS.MD}) {
    padding: 0 2.8rem;
  }
`
