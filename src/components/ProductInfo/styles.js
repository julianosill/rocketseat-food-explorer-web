import styled from 'styled-components'
import { FONT_STYLES } from '../../styles/fontStyles'
import { BREAKPOINTS } from '../../styles/breakpoints'

export const Container = styled.div`
  padding-top: 4.2rem;

  display: flex;
  align-items: center;
  gap: 4.8rem;

  > img {
    border-radius: 100%;
    width: 100%;
    max-width: 40rem;
    height: auto;
  }

  @media (max-width: ${BREAKPOINTS.MD}) {
    gap: 2.8rem;

    > img {
      max-width: 30rem;
    }
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
    padding-top: 1.6rem;
    text-align: center;
    flex-direction: column;
  }
`

export const Details = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  > h1 {
    ${FONT_STYLES.poppins500Medium}
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  > p {
    ${FONT_STYLES.poppins300Regular}
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  @media (max-width: ${BREAKPOINTS.MD}) {
    > h1 {
      font-size: 2.8rem;
    }
    > p {
      font-size: 1.6rem;
    }
  }
`

export const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;

  button {
    ${FONT_STYLES.poppins100Medium}
    padding: 0.4rem 0.8rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_1000};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    border-radius: 0.5rem;

    &:hover {
      filter: brightness(0.85);
    }
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
    justify-content: center;
    gap: 2.4rem;
  }
`

export const Actions = styled.section`
  margin-top: 2.4rem;

  display: flex;
  align-items: center;
  gap: 3.3rem;

  > button {
    svg {
      display: none;
    }
  }

  @media (max-width: ${BREAKPOINTS.MD}) {
    gap: 1.6rem;

    > button {
      width: 100%;

      svg {
        display: block;
        font-size: 2.2rem;
      }
    }
  }

  @media (max-width: ${BREAKPOINTS.XS}) {
    flex-direction: column;
  }
`
