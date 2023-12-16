import styled from 'styled-components'
import { FONT_STYLES } from '../../styles/fontStyles'
import { BREAKPOINTS } from '../../styles/breakpoints'

export const Header = styled.header``

export const BackButton = styled.button`
  ${FONT_STYLES.poppins300Bold}

  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  display: flex;
  align-items: center;

  > svg {
    font-size: 3.2rem;
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
    ${FONT_STYLES.poppins300Medium}
  }
`

export const Title = styled.h3`
  ${FONT_STYLES.robotoSmallRegular}

  margin-top: 4.8rem;
  padding-bottom: 1.2rem;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
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
