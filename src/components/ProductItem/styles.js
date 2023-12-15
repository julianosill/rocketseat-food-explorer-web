import styled from 'styled-components'
import { FONT_STYLES } from '../../styles/fontStyles'
import { BREAKPOINTS } from '../../styles/breakpoints'

export const Container = styled.li`
  display: flex;
  align-items: center;
  gap: 1.3rem;

  img {
    width: 7.2rem;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`

export const Title = styled.h3`
  ${FONT_STYLES.poppins200Medium}
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  display: flex;

  span {
    padding: 0 0.8rem 0 0.4rem;
  }

  @media (max-width: ${BREAKPOINTS.XS}) {
    margin-bottom: 0.4rem;
    line-height: 1.25;
  }
`

export const Price = styled.div`
  ${FONT_STYLES.robotoSmallestRegular}
  color: ${({ theme }) => theme.COLORS.LIGHT_400};

  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: ${BREAKPOINTS.XS}) {
    flex-direction: column;
    align-items: start;
    gap: 0;
  }
`

export const Divider = styled.span`
  width: 1px;
  height: 1.2rem;
  background-color: ${({ theme }) => theme.COLORS.LIGHT_700};

  @media (max-width: ${BREAKPOINTS.XS}) {
    display: none;
  }
`

export const Button = styled.button`
  ${FONT_STYLES.robotoSmallestRegular}
  margin-top: 0.4rem;
  color: ${({ theme }) => theme.COLORS.TOMATO_400};
`
