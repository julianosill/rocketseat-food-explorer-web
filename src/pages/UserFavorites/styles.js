import styled from 'styled-components'
import { FONT_STYLES } from '../../styles/fontStyles'
import { BREAKPOINTS } from '../../styles/breakpoints'

export const Header = styled.header`
  margin: 1.3rem 0 3.2rem;

  @media (min-width: ${BREAKPOINTS.MIN_SM}) and (max-width: ${BREAKPOINTS.MD}) {
    margin: 6.5rem 0 3.2rem;
  }
`

export const Empty = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  > svg {
    color: ${({ theme }) => theme.COLORS.CAKE_100};
    font-size: 5.6rem;
  }
`

export const EmptyMessage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  h2 {
    ${FONT_STYLES.robotoBigRegular}
    line-height: 1.25;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  p {
    ${FONT_STYLES.robotoSmallRegular}
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  a {
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.CAKE_200};

    &:hover {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      border-color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }
`

export const List = styled.ul`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4.8rem;

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

export const Item = styled.li`
  padding: 1.6rem 0;

  display: flex;
  align-items: center;
  gap: 1.3rem;

  img {
    width: 7.2rem;
  }
`

export const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  button {
    ${FONT_STYLES.robotoSmallestRegular}
    margin-top: 0.4rem;
    color: ${({ theme }) => theme.COLORS.TOMATO_400};
  }
`

export const ItemName = styled.h3`
  ${FONT_STYLES.poppins200Medium}
  line-height: 1.25;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
`
