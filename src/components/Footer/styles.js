import styled from 'styled-components'
import { FONT_STYLES } from '../../styles/fontStyles'
import { BREAKPOINTS } from '../../styles/breakpoints'

export const Footer = styled.footer`
  width: 100%;
  padding: 2.4rem 0;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 3.2rem;
  }

  @media (max-width: ${BREAKPOINTS.MD}) {
    > div {
      gap: 1.6rem;
    }
  }
`

export const Brand = styled.div`
  width: 100%;
  max-width: 18rem;
  display: flex;
  align-items: center;

  @media (max-width: ${BREAKPOINTS.SM}) {
    width: 12rem;
  }
`

export const Copyright = styled.div`
  ${FONT_STYLES.robotoSmallerRegular}
  color: ${({ theme }) => theme.COLORS.LIGHT_200};

  @media (max-width: ${BREAKPOINTS.SM}) {
    font-size: 1.2rem;
  }
`
