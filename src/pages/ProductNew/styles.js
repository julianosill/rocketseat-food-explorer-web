import styled from 'styled-components'
import { BREAKPOINTS } from '../../styles/breakpoints'

export const Header = styled.header`
  margin: 4rem 0 3.2rem;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  @media (max-width: ${BREAKPOINTS.SM}) {
    margin: 1rem 0 3.2rem;
  }
`
