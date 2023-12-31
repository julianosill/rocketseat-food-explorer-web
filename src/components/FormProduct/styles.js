import styled from 'styled-components'
import { FONT_STYLES } from '../../styles/fontStyles'
import { BREAKPOINTS } from '../../styles/breakpoints'

export const Container = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  [data-form='image'] {
    width: auto;
  }

  [data-form='name'],
  [data-form='ingredients'] {
    flex: 1;
  }

  [data-form='category'] {
    width: 36rem;
  }

  [data-form='price'] {
    width: 25rem;
  }

  @media (max-width: ${BREAKPOINTS.SM}) {
    [data-form='image'],
    [data-form='name'],
    [data-form='category'],
    [data-form='ingredients'],
    [data-form='price'] {
      width: 100%;
    }
  }
`

export const FormRow = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  gap: 3.2rem;

  @media (max-width: ${BREAKPOINTS.SM}) {
    flex-direction: column;
  }
`

export const Actions = styled.div`
  display: flex;
  justify-content: end;
  gap: 3.2rem;

  @media (max-width: ${BREAKPOINTS.SM}) {
    button {
      width: 100%;
      padding: 1.2rem;
    }
  }

  @media (max-width: ${BREAKPOINTS.XS}) {
    flex-direction: column;
  }
`

export const Error = styled.div`
  ${FONT_STYLES.robotoSmallerRegular}

  width: 100%;
  padding: 0.8rem;
  text-align: center;

  color: ${({ theme }) => theme.COLORS.TOMATO_400};

  border-color: ${({ theme }) => theme.COLORS.TOMATO_400};
  border-style: solid;
  border-width: 1px;
  border-radius: 0.8rem;
`
