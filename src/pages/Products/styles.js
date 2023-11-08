import styled from 'styled-components'
import { FONT_STYLES } from '../../styles/fontStyles'
import { BREAKPOINTS } from '../../styles/breakpoints'

export const Header = styled.header`
  position: relative;

  width: 100%;
  height: 26rem;
  margin: 13rem 0 6.2rem;

  background-image: ${({ theme }) => theme.GRADIENTS.G200};
  border-radius: 0.8rem;

  display: flex;
  align-items: center;
  justify-content: end;

  @media (max-width: ${BREAKPOINTS.LG}) {
    height: 22rem;
    margin: 8rem 0 6.2rem;
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
    height: 12rem;
    margin: 3rem 0 6.2rem;
  }

  @media (max-width: ${BREAKPOINTS.XS}) {
    height: auto;
    margin: 2rem 0 6.2rem;
    padding: 2rem 0;
  }
`

export const HeaderImage = styled.div`
  position: absolute;
  top: -13rem;
  left: -3.2rem;

  width: 50%;
  height: calc(100% + 13rem);

  overflow: hidden;
  opacity: 0.8;

  transition: all 0.4s ease;

  > img {
    width: 100%;
  }

  @media (min-width: ${BREAKPOINTS.MIN_LG}) {
    ${Header}:hover & {
      top: -15rem;
      height: calc(100% + 15rem);
      opacity: 1;
    }
  }

  @media (max-width: ${BREAKPOINTS.LG}) {
    top: -8rem;
    left: -2rem;
    width: 45%;
    height: calc(100% + 8rem);
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
    top: -3rem;
    width: 40%;
    height: calc(100% + 3rem);
  }

  @media (max-width: ${BREAKPOINTS.XS}) {
    top: -2rem;
    width: 45%;
    height: calc(100% + 2rem);
  }
`

export const HeaderText = styled.div`
  width: 50%;
  padding-right: 10rem;

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
    padding-right: 4rem;

    > h1 {
      font-size: 3rem;
    }
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
    width: 60%;
    padding-right: 2rem;

    > h1 {
      margin-bottom: 0.4rem;
      font-size: 1.8rem;
      font-weight: 600;
    }

    > p {
      ${FONT_STYLES.poppins300Regular}
      font-size: 1.2rem;
    }
  }
`

export const Category = styled.section`
  margin-top: 4.8rem;

  > h2 {
    margin-bottom: 2.3rem;
  }
`
