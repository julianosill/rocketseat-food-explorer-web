import styled from 'styled-components'
import { FONT_STYLES } from '../../styles/fontStyles'
import { BREAKPOINTS } from '../../styles/breakpoints'

export const Header = styled.header`
  position: relative;
  width: 100%;
  margin: 4rem 0 6.2rem;
  padding-top: 12rem;

  @media (max-width: ${BREAKPOINTS.MD}) {
    margin-top: 1.8rem;
    padding-top: 8rem;
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
    padding-top: 2.6rem;
  }

  @media (max-width: ${BREAKPOINTS.XS}) {
    padding-top: 2.4rem;
  }
`

export const HeaderImage = styled.div`
  position: absolute;
  top: 0;
  left: -3.2rem;
  width: 50%;
  height: 100%;

  opacity: 0.7;
  overflow: hidden;
  transition: all 0.4s ease;

  > img {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${BREAKPOINTS.MD}) {
    left: -1.8rem;
    width: 48%;
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
    width: 42%;
  }

  @media (max-width: ${BREAKPOINTS.XS}) {
    width: 45%;
  }
`

export const HeaderContent = styled.div`
  padding: 8.8rem 10rem 9.2rem;

  background-image: ${({ theme }) => theme.GRADIENTS.G200};
  border-radius: 0.8rem;

  display: flex;
  align-items: center;
  justify-content: end;

  @media (max-width: ${BREAKPOINTS.LG}) {
    padding: 8.8rem 8rem 9.2rem;
  }

  @media (max-width: ${BREAKPOINTS.MD}) {
    padding: 5.8rem 4rem 6.2rem;
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
    padding: 3.6rem 1rem 2.2rem;
  }

  @media (max-width: ${BREAKPOINTS.XS}) {
    padding: 2.8rem 1rem 2rem;
  }
`

export const HeaderText = styled.div`
  width: 50%;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  > h1 {
    ${FONT_STYLES.poppins500Medium}
    margin-bottom: 0.8rem;
  }

  > p {
    ${FONT_STYLES.robotoSmallRegular}
  }

  @media (max-width: ${BREAKPOINTS.LG}) {
    width: 55%;
  }

  @media (max-width: ${BREAKPOINTS.MD}) {
    > h1 {
      font-size: 3.2rem;
    }
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
    width: 60%;

    > h1 {
      margin-bottom: 0.4rem;
      font-size: 1.8rem;
      font-weight: 600;
    }

    > p {
      ${FONT_STYLES.poppins50Regular}
    }
  }
`

export const LoadingContainer = styled.div`
  padding: 4.8rem 0;

  display: flex;
  align-items: center;
`

export const Category = styled.section`
  margin-top: 4.8rem;

  > h2 {
    ${FONT_STYLES.poppins400Medium}
    margin-bottom: 2.3rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
    > h2 {
      font-size: 1.8rem;
    }
  }
`

export const EmptyContainer = styled.div`
  padding: 4.8rem 0;

  display: flex;
  justify-content: center;
  align-items: center;
`
