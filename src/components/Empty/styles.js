import styled from 'styled-components'
import { FONT_STYLES } from '../../styles/fontStyles'
import { BREAKPOINTS } from '../../styles/breakpoints'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: ${BREAKPOINTS.XS}) {
    flex-direction: column;
    align-items: start;
  }
`

export const Icon = styled.div`
  svg {
    color: ${({ theme }) => theme.COLORS.CAKE_100};
    font-size: 5.6rem;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`

export const Title = styled.h2`
  ${FONT_STYLES.robotoBigRegular}
  line-height: 1.25;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
`

export const Message = styled.p`
  ${FONT_STYLES.robotoSmallRegular}
  color: ${({ theme }) => theme.COLORS.LIGHT_400};

  a {
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.CAKE_200};

    &:hover {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      border-color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }
`
