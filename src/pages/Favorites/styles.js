import styled from 'styled-components'
import { BREAKPOINTS } from '../../styles/breakpoints'

export const LoadingContainer = styled.div`
  padding: 4.8rem 0;

  display: flex;
  align-items: center;
`

export const Header = styled.header`
  margin: 3.4rem 0 3.2rem;

  @media (max-width: ${BREAKPOINTS.SM}) {
    margin: 5.6rem 0 2.8rem;
  }
`

export const List = styled.ul`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4.8rem;

  > li {
    padding: 1.6rem 0;
  }

  @media (max-width: ${BREAKPOINTS.LG}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${BREAKPOINTS.MD}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.4rem;
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
    grid-template-columns: repeat(1, 1fr);
    gap: 0;
  }
`
