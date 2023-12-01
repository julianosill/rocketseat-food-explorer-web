import styled from 'styled-components'
import { FONT_STYLES } from '../../styles/fontStyles'
import { BREAKPOINTS } from '../../styles/breakpoints'

export const Container = styled.div`
  padding: 1.3rem 0;
  display: flex;
  gap: 7.5rem;
`

export const Header = styled.header`
  margin-bottom: 3.2rem;
`

export const Order = styled.section`
  flex: 1;
`

export const Empty = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  > svg {
    color: ${({ theme }) => theme.COLORS.CAKE_100};
    font-size: 8rem;
  }
`

export const EmptyMessage = styled.div`
  ${FONT_STYLES.robotoBigRegular}

  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  display: flex;
  flex-direction: column;
  gap: 0.8rem;

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
  display: flex;
  flex-direction: column;
`

export const Item = styled.li`
  padding: 1.6rem 0;

  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  display: flex;
  align-items: center;
  gap: 1.3rem;

  > img {
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
  display: flex;

  span {
    padding: 0 0.8rem 0 0.4rem;
  }
`

export const ItemPrice = styled.div`
  ${FONT_STYLES.robotoSmallestRegular}
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
`

export const ItemPriceDivider = styled.span`
  padding: 0 0.8rem;
`

export const Coupon = styled.div`
  padding: 3.2rem 0;
`

export const OrderPrice = styled.div`
  ${FONT_STYLES.poppins200Medium}

  padding: 1.6rem 0;

  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`

export const Subtotal = styled.div`
  color: ${({ theme }) => theme.COLORS.LIGHT_500};
`

export const Discount = styled.div`
  ${FONT_STYLES.robotoSmallRegular}
  margin-bottom: 1.6rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_600};
`

export const Payment = styled.section`
  width: 53rem;

  @media (max-width: ${BREAKPOINTS.SM}) {
    width: 100%;
    display: none;
  }
`
