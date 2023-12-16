import styled from 'styled-components'
import { FONT_STYLES } from '../../styles/fontStyles'
import { BREAKPOINTS } from '../../styles/breakpoints'

export const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
`

export const Container = styled.div`
  display: flex;
  gap: 7.5rem;

  @media (max-width: ${BREAKPOINTS.SM}) {
    flex-direction: column;
  }
`

export const Header = styled.header`
  margin: 3.4rem 0 3.2rem;

  @media (max-width: ${BREAKPOINTS.SM}) {
    margin: 5.6rem 0 2.8rem;
  }
`

export const Order = styled.section`
  flex: 1;

  @media (max-width: ${BREAKPOINTS.SM}) {
    width: 100%;
  }
`

export const OrderContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`

export const OrderList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`

export const Coupon = styled.div`
  width: 100%;
  max-width: 36rem;
`

export const OrderPrice = styled.div`
  ${FONT_STYLES.poppins200Medium}

  display: flex;
  flex-direction: column;
  gap: 0.8rem;
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
  }
`
