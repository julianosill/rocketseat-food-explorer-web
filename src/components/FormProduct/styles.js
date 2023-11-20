import styled from 'styled-components'
import { FONT_STYLES } from '../../styles/fontStyles'
import { BREAKPOINTS } from '../../styles/breakpoints'

export const Container = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`

export const FlexRow = styled.div`
  position: relative;
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  gap: 3.2rem;

  @media (max-width: ${BREAKPOINTS.SM}) {
    flex-direction: column;
  }
`

export const UploadImage = styled.div`
  position: relative;

  @media (max-width: ${BREAKPOINTS.MD}) {
    width: 100%;
  }
`

export const Name = styled.div`
  position: relative;
  flex: 1;
`

export const Categories = styled.div`
  position: relative;
  width: 36rem;

  @media (max-width: ${BREAKPOINTS.SM}) {
    width: 100%;
  }
`

export const Ingredients = styled.div`
  position: relative;
  flex: 1;

  > label {
    cursor: auto;
  }
`

export const Price = styled.div`
  position: relative;
  width: 25rem;

  @media (max-width: ${BREAKPOINTS.SM}) {
    width: 100%;
  }
`

export const Actions = styled.div`
  display: flex;
  justify-content: end;
  gap: 3.2rem;

  @media (max-width: ${BREAKPOINTS.SM}) {
    flex-direction: column;
  }
`

export const Error = styled.div`
  ${FONT_STYLES.robotoSmallerRegular}

  position: absolute;
  bottom: -2.5rem;

  color: ${({ theme }) => theme.COLORS.TOMATO_400};
`
