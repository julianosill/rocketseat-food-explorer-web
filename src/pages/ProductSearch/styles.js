import styled from 'styled-components'
import { FONT_STYLES } from '../../styles/fontStyles'
import { BREAKPOINTS } from '../../styles/breakpoints'

export const LoadingContainer = styled.div`
  width: 100%;
  padding: 4.8rem 0;

  display: flex;
  align-items: center;
`

export const Header = styled.header`
  margin: 2.4rem 0 3.2rem;
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

export const EmptyContainer = styled.div`
  width: 100%;
  padding: 4.8rem 0;

  display: flex;
  justify-content: center;
  align-items: center;
`
