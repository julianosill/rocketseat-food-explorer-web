import styled from 'styled-components'
import { BREAKPOINTS } from '../../styles/breakpoints'

export const LoadingContainer = styled.div`
  padding: 4.8rem 0;

  display: flex;
  align-items: center;
`

export const Container = styled.div`
  height: 100%;
  padding-top: 2.4rem;

  @media (max-width: ${BREAKPOINTS.SM}) {
    padding: 3.6rem 2.8rem 0;
  }
`

export const EmptyContainer = styled.div`
  padding: 4.8rem 0;

  display: flex;
  justify-content: center;
  align-items: center;
`
